import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, spacing } from '@theme';

interface TabBarProps {
  state: {
    index: number;
    routes: Array<{
      key: string;
      name: string;
    }>;
  };
  navigation: {
    navigate: (name: string) => void;
  };
  style?: ViewStyle;
}

const TabBar: React.FC<TabBarProps> = ({ state, navigation, style }) => {
  const getIconName = (routeName: string) => {
    switch (routeName) {
      case 'Discovery':
        return 'explore';
      case 'Messages':
        return 'chat';
      case 'Challenges':
        return 'emoji-events';
      case 'Profile':
        return 'person';
      default:
        return 'home';
    }
  };

  return (
    <View style={[styles.container, style]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const iconName = getIconName(route.name);

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tab}
            activeOpacity={0.7}
          >
            <Icon
              name={iconName}
              size={24}
              color={isFocused ? colors.primary : colors.textSecondary}
            />
            {isFocused && <View style={styles.indicator} />}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    paddingBottom: spacing.sm,
    paddingTop: spacing.xs,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.xs,
  },
  indicator: {
    position: 'absolute',
    bottom: 0,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.primary,
  },
});

export default TabBar; 