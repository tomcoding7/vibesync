import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  ViewStyle,
  ImageStyle,
  ImageSourcePropType,
} from 'react-native';
import { colors, borderRadius } from '@theme';

interface AvatarProps {
  source: ImageSourcePropType;
  size?: 'small' | 'medium' | 'large';
  style?: ViewStyle;
  imageStyle?: ImageStyle;
  showBorder?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
  source,
  size = 'medium',
  style,
  imageStyle,
  showBorder = false,
}) => {
  const getSize = () => {
    switch (size) {
      case 'small':
        return 32;
      case 'medium':
        return 48;
      case 'large':
        return 64;
      default:
        return 48;
    }
  };

  return (
    <View
      style={[
        styles.container,
        { width: getSize(), height: getSize() },
        showBorder && styles.border,
        style,
      ]}
    >
      <Image
        source={source}
        style={[
          styles.image,
          { width: getSize(), height: getSize() },
          imageStyle,
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius.round,
    overflow: 'hidden',
    backgroundColor: colors.border,
  },
  image: {
    borderRadius: borderRadius.round,
  },
  border: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
});

export default Avatar; 