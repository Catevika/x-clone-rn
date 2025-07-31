import {useSSO} from '@clerk/clerk-expo';
import {useState} from 'react';
import {Alert} from 'react-native';

export const useSocialAuth = () => {
	const [isLoading, setIsLoading] = useState(false);
	const {startSSOFlow} = useSSO();

	const handleSocialAuth = async (strategy: 'oauth_google' | 'oauth_apple') => {
		setIsLoading(true);
		try {
			const {createdSessionId, setActive} = await startSSOFlow({
				strategy,
				redirectUrl: 'exp://192.168.1.16:8081',
			});
			if (createdSessionId && setActive) {
				await setActive({session: createdSessionId});
			}
		} catch (error) {
			console.error('Social Auth Error:', error);
			const provider = strategy === 'oauth_google' ? 'Google' : 'Apple';
			Alert.alert(`Failed to authenticate with ${provider}. Please try again.`);
		} finally {
			setIsLoading(false);
		}
	};
	return {isLoading, handleSocialAuth};
};
