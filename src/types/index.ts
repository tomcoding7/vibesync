// Navigation Types
export type RootStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  Main: undefined;
};

export type MainTabParamList = {
  Discovery: undefined;
  Messages: undefined;
  Challenges: undefined;
  Profile: undefined;
};

// User Types
export interface User {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  photos: string[];
  interests: string[];
  stats: {
    matches: number;
    likes: number;
    views: number;
  };
}

// Challenge Types
export interface Challenge {
  id: string;
  title: string;
  description: string;
  reward: string;
  progress: number;
  completed: boolean;
}

// Message Types
export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
}

// Video Types
export interface Video {
  id: string;
  userId: string;
  url: string;
  description: string;
  likes: number;
  comments: number;
  shares: number;
  user: User;
}

// Theme Types
export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    textSecondary: string;
    border: string;
  };
  spacing: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  typography: {
    h1: {
      fontSize: number;
      fontWeight: string;
    };
    h2: {
      fontSize: number;
      fontWeight: string;
    };
    body: {
      fontSize: number;
      fontWeight: string;
    };
    caption: {
      fontSize: number;
      fontWeight: string;
    };
  };
} 