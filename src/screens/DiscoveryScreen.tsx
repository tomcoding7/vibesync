import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Animated,
} from 'react-native';
import Video from 'react-native-video';

const { width, height } = Dimensions.get('window');

// Mock data for development
const mockVideos = [
  {
    id: '1',
    url: 'https://example.com/video1.mp4',
    user: {
      id: '1',
      name: 'Sarah',
      age: 28,
      location: 'New York',
    },
    description: 'Love hiking and photography! 📸',
  },
  {
    id: '2',
    url: 'https://example.com/video2.mp4',
    user: {
      id: '2',
      name: 'Mike',
      age: 31,
      location: 'Los Angeles',
    },
    description: 'Coffee enthusiast ☕️',
  },
  // Add more mock videos as needed
];

const DiscoveryScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderVideo = ({ item, index }: { item: typeof mockVideos[0]; index: number }) => {
    return (
      <View style={styles.videoContainer}>
        <Video
          source={{ uri: item.url }}
          style={styles.video}
          resizeMode="cover"
          repeat
          paused={index !== currentIndex}
        />
        <View style={styles.overlay}>
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{item.user.name}, {item.user.age}</Text>
            <Text style={styles.userLocation}>{item.user.location}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
          <View style={styles.actions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>❤️</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>💬</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionIcon}>📹</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={mockVideos}
        renderItem={renderVideo}
        keyExtractor={(item) => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        snapToInterval={height}
        snapToAlignment="start"
        decelerationRate="fast"
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 50,
        }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  videoContainer: {
    width,
    height,
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'space-between',
    padding: 20,
  },
  userInfo: {
    marginTop: 'auto',
  },
  userName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userLocation: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 10,
  },
  description: {
    color: '#fff',
    fontSize: 16,
  },
  actions: {
    alignItems: 'center',
    marginBottom: 50,
  },
  actionButton: {
    marginVertical: 10,
  },
  actionIcon: {
    fontSize: 40,
  },
});

export default DiscoveryScreen; 