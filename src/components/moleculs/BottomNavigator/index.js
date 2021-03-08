import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {
  ICHomeActive,
  ICHome,
  ICMassageActive,
  ICMassage,
  ICFavourite,
  ICFavouriteActive,
  ICCardActive,
  ICCard,
} from '../../../assets';

const Icon = ({label, focus}) => {
  switch (label) {
    case 'Home':
      return focus ? <ICHomeActive /> : <ICHome />;
    case 'Massage':
      return focus ? <ICMassageActive /> : <ICMassage />;
    case 'Card':
      return focus ? <ICCardActive /> : <ICCard />;
    case 'Favourite':
      return focus ? <ICFavouriteActive /> : <ICFavourite />;
    default:
      break;
  }
  return <ICHomeActive />;
};

const ButtomNavigator = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Icon label={label} focus={isFocused} />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default ButtomNavigator;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'transparent',
    paddingHorizontal: 24,
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#F6F7F8',
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 23,
    justifyContent: 'space-between',
    alignItems: 'center',
    bottom: 30,
  },
});
