import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

// Mock data for development
const mockConversations = [
  {
    id: '1',
    user: {
      id: '1',
      name: 'Sarah',
      avatar: 'https://example.com/avatar1.jpg',
      isOnline: true,
    },
    lastMessage: {
      text: 'Hey, how are you?',
      timestamp: '10:30 AM',
      isRead: true,
    },
  },
  {
    id: '2',
    user: {
      id: '2',
      name: 'Mike',
      avatar: 'https://example.com/avatar2.jpg',
      isOnline: false,
    },
    lastMessage: {
      text: 'Want to grab coffee sometime?',
      timestamp: 'Yesterday',
      isRead: false,
    },
  },
  // Add more mock conversations as needed
];

const MessagesScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const renderConversation = ({ item }: { item: typeof mockConversations[0] }) => {
    return (
      <TouchableOpacity style={styles.conversationItem}>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: item.user.avatar }}
            style={styles.avatar}
          />
          {item.user.isOnline && <View style={styles.onlineIndicator} />}
        </View>
        <View style={styles.conversationInfo}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{item.user.name}</Text>
            <Text style={styles.timestamp}>{item.lastMessage.timestamp}</Text>
          </View>
          <View style={styles.messageContainer}>
            <Text
              style={[
                styles.lastMessage,
                !item.lastMessage.isRead && styles.unreadMessage,
              ]}
              numberOfLines={1}>
              {item.lastMessage.text}
            </Text>
            {!item.lastMessage.isRead && <View style={styles.unreadDot} />}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity>
          <Text style={styles.newMessageButton}>New</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={mockConversations}
        renderItem={renderConversation}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  newMessageButton: {
    color: '#5D3FD3',
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
  conversationItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatarContainer: {
    position: 'relative',
    marginRight: 15,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  onlineIndicator: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#fff',
  },
  conversationInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  messageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastMessage: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  unreadMessage: {
    color: '#333',
    fontWeight: 'bold',
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#5D3FD3',
    marginLeft: 8,
  },
});

export default MessagesScreen; 