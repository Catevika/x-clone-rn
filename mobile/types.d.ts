export type TrendingTopic = {
	topic: string;
	tweets: string;
};

export type MessageType = {
	id: number;
	text: string;
	fromUser: boolean; // true if message is from current user, false if from other user
	timestamp: Date;
	time: string;
};

export type ConversationType = {
	id: number;
	user: {
		name: string;
		username: string;
		avatar: string;
		verified: boolean;
	};
	lastMessage: string;
	time: string;
	timestamp: Date;
	messages: MessageType[];
};
