import React from 'react';
import {
  View,
  RefreshControl,
  ScrollView,
  StyleSheet,
  ViewStyle,
  RefreshControlProps,
} from 'react-native';
import { colors } from '@theme';

interface PullToRefreshProps extends Omit<RefreshControlProps, 'colors'> {
  children: React.ReactNode;
  onRefresh: () => void;
  refreshing: boolean;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

const PullToRefresh: React.FC<PullToRefreshProps> = ({
  children,
  onRefresh,
  refreshing,
  style,
  contentContainerStyle,
  ...props
}) => {
  return (
    <ScrollView
      style={[styles.container, style]}
      contentContainerStyle={contentContainerStyle}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={[colors.primary]}
          tintColor={colors.primary}
          {...props}
        />
      }
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default PullToRefresh; 