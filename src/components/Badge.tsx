import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, typography, borderRadius } from '@theme';

interface BadgeProps {
  value?: number | string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  textStyle?: TextStyle;
  maxValue?: number;
}

const Badge: React.FC<BadgeProps> = ({
  value,
  variant = 'primary',
  size = 'medium',
  style,
  textStyle,
  maxValue = 99,
}) => {
  const getBackgroundColor = () => {
    switch (variant) {
      case 'primary':
        return colors.primary;
      case 'secondary':
        return colors.secondary;
      case 'success':
        return '#4CAF50';
      case 'warning':
        return '#FFC107';
      case 'error':
        return '#F44336';
      default:
        return colors.primary;
    }
  };

  const getSize = () => {
    switch (size) {
      case 'small':
        return 16;
      case 'medium':
        return 20;
      case 'large':
        return 24;
      default:
        return 20;
    }
  };

  const getFontSize = () => {
    switch (size) {
      case 'small':
        return 10;
      case 'medium':
        return 12;
      case 'large':
        return 14;
      default:
        return 12;
    }
  };

  const formatValue = () => {
    if (typeof value === 'number' && value > maxValue) {
      return `${maxValue}+`;
    }
    return value;
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: getBackgroundColor(),
          width: getSize(),
          height: getSize(),
          borderRadius: getSize() / 2,
        },
        style,
      ]}
    >
      {value && (
        <Text
          style={[
            styles.text,
            {
              fontSize: getFontSize(),
            },
            textStyle,
          ]}
        >
          {formatValue()}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 16,
    paddingHorizontal: 4,
  },
  text: {
    ...typography.caption,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Badge; 