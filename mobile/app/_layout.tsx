import '@/global.css';
import {ClerkProvider, useAuth} from '@clerk/clerk-expo';
import {tokenCache} from '@clerk/clerk-expo/token-cache';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import {ActivityIndicator} from 'react-native';

function RootStack() {
	const {isSignedIn, isLoaded} = useAuth();

	if (!isLoaded)
		return (
			<ActivityIndicator
				size='small'
				color='#4285F4'
			/>
		);

	return (
		<>
			<StatusBar style='auto' />
			<Stack screenOptions={{headerShown: false}}>
				<Stack.Screen name={isSignedIn ? '(tabs)' : '(auth)'} />
			</Stack>
		</>
	);
}

export default function RootLayout() {
	return (
		<ClerkProvider tokenCache={tokenCache}>
			<StatusBar style='auto' />
			<RootStack />
		</ClerkProvider>
	);
}
