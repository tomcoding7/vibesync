import React, { useRef, useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '@theme';

interface VideoPlayerProps {
  source: { uri: string };
  style?: any;
  resizeMode?: 'cover' | 'contain' | 'stretch';
  repeat?: boolean;
  paused?: boolean;
  onLoad?: () => void;
  onError?: (error: any) => void;
  onEnd?: () => void;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  source,
  style,
  resizeMode = 'cover',
  repeat = false,
  paused = false,
  onLoad,
  onError,
  onEnd,
}) => {
  const videoRef = useRef<Video>(null);
  const [loading, setLoading] = useState(true);
  const [isPlaying, setIsPlaying] = useState(!paused);

  const handleLoad = () => {
    setLoading(false);
    onLoad?.();
  };

  const handleError = (error: any) => {
    setLoading(false);
    onError?.(error);
  };

  const handleEnd = () => {
    if (!repeat) {
      setIsPlaying(false);
    }
    onEnd?.();
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <View style={[styles.container, style]}>
      <Video
        ref={videoRef}
        source={source}
        style={styles.video}
        resizeMode={resizeMode}
        repeat={repeat}
        paused={!isPlaying}
        onLoad={handleLoad}
        onError={handleError}
        onEnd={handleEnd}
      />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      )}
      <TouchableOpacity
        style={styles.playButton}
        onPress={togglePlayPause}
        activeOpacity={0.8}
      >
        <Icon
          name={isPlaying ? 'pause' : 'play-arrow'}
          size={40}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SCREEN_WIDTH,
    height: SCREEN_WIDTH * 1.5,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  playButton: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
});

export default VideoPlayer; 