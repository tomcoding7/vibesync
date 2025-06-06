import React from 'react';
import {
  View,
  StyleSheet,
  ViewStyle,
  Platform,
  StatusBar,
} from 'react-native';
import { colors } from '@theme';

interface SafeAreaViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  backgroundColor?: string;
  statusBarStyle?: 'light-content' | 'dark-content';
}

const SafeAreaView: React.FC<SafeAreaViewProps> = ({
  children,
  style,
  backgroundColor = colors.background,
  statusBarStyle = 'dark-content',
}) => {
  return (
    <View style={[styles.container, { backgroundColor }, style]}>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={backgroundColor}
        translucent
      />
      <View style={[styles.content, { backgroundColor }]}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  content: {
    flex: 1,
  },
});

export default SafeAreaView; 