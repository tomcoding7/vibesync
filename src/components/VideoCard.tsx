import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, typography, borderRadius, spacing } from '@theme';
import { Video } from '@types';

interface VideoCardProps {
  video: Video;
  onPress?: () => void;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
  style?: ViewStyle;
}

const VideoCard: React.FC<VideoCardProps> = ({
  video,
  onPress,
  onLike,
  onComment,
  onShare,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Image
        source={{ uri: video.url }}
        style={styles.thumbnail}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <View style={styles.userInfo}>
          <Image
            source={{ uri: video.user.photos[0] }}
            style={styles.avatar}
          />
          <Text style={styles.username}>{video.user.name}</Text>
        </View>
        <Text style={styles.description} numberOfLines={2}>
          {video.description}
        </Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onLike}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Icon name="favorite" size={24} color="#fff" />
            <Text style={styles.actionText}>{video.likes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onComment}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Icon name="chat-bubble" size={24} color="#fff" />
            <Text style={styles.actionText}>{video.comments}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={onShare}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Icon name="share" size={24} color="#fff" />
            <Text style={styles.actionText}>{video.shares}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    borderRadius: borderRadius.medium,
    overflow: 'hidden',
    backgroundColor: colors.background,
  },
  thumbnail: {
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: spacing.md,
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: spacing.sm,
  },
  username: {
    ...typography.body,
    color: '#fff',
    fontWeight: 'bold',
  },
  description: {
    ...typography.body,
    color: '#fff',
    marginTop: spacing.sm,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacing.md,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionText: {
    ...typography.caption,
    color: '#fff',
    marginTop: spacing.xs,
  },
});

export default VideoCard; 