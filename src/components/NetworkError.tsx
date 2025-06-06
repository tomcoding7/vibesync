import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, typography, spacing } from '@theme';

interface NetworkErrorProps {
  onRetry: () => void;
  message?: string;
  style?: ViewStyle;
}

const NetworkError: React.FC<NetworkErrorProps> = ({
  onRetry,
  message = 'Unable to connect to the server. Please check your internet connection and try again.',
  style,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Icon name="wifi-off" size={48} color={colors.error} />
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity
        style={styles.retryButton}
        onPress={onRetry}
        activeOpacity={0.7}
      >
        <Icon name="refresh" size={20} color="#fff" style={styles.retryIcon} />
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  message: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.md,
    marginBottom: spacing.lg,
  },
  retryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: 8,
  },
  retryIcon: {
    marginRight: spacing.xs,
  },
  retryText: {
    ...typography.button,
    color: '#fff',
  },
});

export default NetworkError; 