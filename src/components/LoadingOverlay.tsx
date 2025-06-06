import React from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet,
  Modal,
  Text,
  ViewStyle,
} from 'react-native';
import { colors, typography, spacing } from '@theme';

interface LoadingOverlayProps {
  visible: boolean;
  message?: string;
  style?: ViewStyle;
}

const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  visible,
  message,
  style,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={[styles.container, style]}>
        <View style={styles.content}>
          <ActivityIndicator size="large" color={colors.primary} />
          {message && <Text style={styles.message}>{message}</Text>}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: spacing.lg,
    alignItems: 'center',
    minWidth: 120,
  },
  message: {
    ...typography.body,
    color: colors.text,
    marginTop: spacing.md,
    textAlign: 'center',
  },
});

export default LoadingOverlay; 