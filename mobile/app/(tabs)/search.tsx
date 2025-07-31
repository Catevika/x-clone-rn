import {Feather} from '@expo/vector-icons';
import {
	ScrollView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SearchScreen = () => {
	const TRENDING_TOPICS = [
		{topic: '#ReactNative', tweets: '125K'},
		{topic: '#Typescript', tweets: '89K'},
		{topic: '#WebDevelopment', tweets: '234K'},
		{topic: '#AI', tweets: '567K'},
		{topic: '#TechNews', tweets: '98K'},
	];

	return (
		<SafeAreaView className='flex-1 bg-white'>
			<View className='px-4 py-3 border-b border-gray-100'>
				<View className='flex-row items-center bg-gray-100 rounded-full px-4 py-3'>
					<Feather
						name='search'
						size={20}
						color='#657786'
					/>
					<TextInput
						placeholder='Search Twitter'
						className='flex-1 ml-3 text-base'
						placeholderTextColor='#657786'
					/>
				</View>
			</View>

			<ScrollView
				className='flex-1'
				/* showsVerticalScrollIndicator={false} */
			>
				<View className='p-4'>
					<Text className='text-xl font-bold text-gray-900 mb-4'>
						Trending for You
					</Text>
					{TRENDING_TOPICS.map((topic, index) => (
						<TouchableOpacity
							key={index}
							className='py-3 border-b border-gray-100'>
							<Text className='text-gray-500 text-sm'>
								Trending in Technology
							</Text>
							<Text className='font-bold text-gray-900 text-lg'>
								{topic.topic}
							</Text>
							<Text className='text-gray-500 text-sm'>{topic.tweets}</Text>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SearchScreen;
