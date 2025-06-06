import React from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ViewStyle,
  ScrollView,
  KeyboardAvoidingViewProps,
} from 'react-native';

interface KeyboardAwareViewProps extends KeyboardAvoidingViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
  scrollEnabled?: boolean;
}

const KeyboardAwareView: React.FC<KeyboardAwareViewProps> = ({
  children,
  style,
  contentContainerStyle,
  scrollEnabled = true,
  ...props
}) => {
  const Container = scrollEnabled ? ScrollView : View;

  return (
    <KeyboardAvoidingView
      style={[styles.container, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      {...props}
    >
      <Container
        style={[styles.content, contentContainerStyle]}
        contentContainerStyle={scrollEnabled ? contentContainerStyle : undefined}
        keyboardShouldPersistTaps="handled"
      >
        {children}
      </Container>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default KeyboardAwareView; 