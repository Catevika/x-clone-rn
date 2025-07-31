import {useClerk} from '@clerk/clerk-expo';
import {Button, Text, View} from 'react-native';

const HomeScreen = () => {
	const {signOut} = useClerk();
	return (
		<View>
			<Text>Home screen</Text>
			<Button
				onPress={() => signOut()}
				title='Sign Out'
			/>
		</View>
	);
};
export default HomeScreen;
