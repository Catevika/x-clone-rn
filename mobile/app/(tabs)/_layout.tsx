import {useAuth} from '@clerk/clerk-expo';
import {Feather} from '@expo/vector-icons';
import {Redirect, Tabs} from 'expo-router';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const TabsLayout = () => {
	const insets = useSafeAreaInsets();

	const {isSignedIn} = useAuth();

	if (!isSignedIn) {
		return <Redirect href='/(auth)' />;
	}

	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: '#1DA1F2',
				tabBarInactiveTintColor: '#657786',
				tabBarStyle: {
					backgroundColor: '#FFFF',
					borderTopWidth: 1,
					borderTopColor: '#E1E8ED',
					height: 50 + insets.bottom, // Adjust height for safe area
					paddingTop: 8,
				},
				tabBarShowLabel: false,
			}}>
			<Tabs.Screen
				name='index'
				options={{
					tabBarIcon: ({color, size}) => (
						<Feather
							name='home'
							size={size}
							color={color}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name='search'
				options={{
					tabBarIcon: ({color, size}) => (
						<Feather
							name='search'
							size={size}
							color={color}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name='notifications'
				options={{
					tabBarIcon: ({color, size}) => (
						<Feather
							name='bell'
							size={size}
							color={color}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name='messages'
				options={{
					tabBarIcon: ({color, size}) => (
						<Feather
							name='mail'
							size={size}
							color={color}
						/>
					),
					headerShown: false,
				}}
			/>
			<Tabs.Screen
				name='profile'
				options={{
					tabBarIcon: ({color, size}) => (
						<Feather
							name='user'
							size={size}
							color={color}
						/>
					),
					headerShown: false,
				}}
			/>
		</Tabs>
	);
};

export default TabsLayout;
