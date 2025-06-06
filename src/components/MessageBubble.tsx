import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, typography, borderRadius, spacing } from '@theme';

interface MessageBubbleProps {
  message: string;
  timestamp: string;
  isOwn: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  timeStyle?: TextStyle;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({
  message,
  timestamp,
  isOwn,
  style,
  textStyle,
  timeStyle,
}) => {
  return (
    <View
      style={[
        styles.container,
        isOwn ? styles.ownContainer : styles.otherContainer,
        style,
      ]}
    >
      <View
        style={[
          styles.bubble,
          isOwn ? styles.ownBubble : styles.otherBubble,
        ]}
      >
        <Text
          style={[
            styles.message,
            isOwn ? styles.ownMessage : styles.otherMessage,
            textStyle,
          ]}
        >
          {message}
        </Text>
      </View>
      <Text
        style={[
          styles.timestamp,
          isOwn ? styles.ownTimestamp : styles.otherTimestamp,
          timeStyle,
        ]}
      >
        {timestamp}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing.xs,
    maxWidth: '80%',
  },
  ownContainer: {
    alignSelf: 'flex-end',
  },
  otherContainer: {
    alignSelf: 'flex-start',
  },
  bubble: {
    padding: spacing.sm,
    borderRadius: borderRadius.medium,
  },
  ownBubble: {
    backgroundColor: colors.primary,
    borderBottomRightRadius: borderRadius.xs,
  },
  otherBubble: {
    backgroundColor: colors.border,
    borderBottomLeftRadius: borderRadius.xs,
  },
  message: {
    ...typography.body,
    color: colors.text,
  },
  ownMessage: {
    color: '#fff',
  },
  otherMessage: {
    color: colors.text,
  },
  timestamp: {
    ...typography.caption,
    color: colors.textSecondary,
    marginTop: spacing.xs,
    fontSize: 10,
  },
  ownTimestamp: {
    textAlign: 'right',
  },
  otherTimestamp: {
    textAlign: 'left',
  },
});

export default MessageBubble; 