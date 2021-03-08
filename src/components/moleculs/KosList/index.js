import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {ICStarActive} from '../../../assets';

const KosList = ({type, image, name, price, location, onPress}) => {
  if (type === 'skeleton') {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <SkeletonPlaceholder marginBottom={20}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={30}>
            <SkeletonPlaceholder.Item
              width={130}
              height={110}
              marginRight={20}
              borderRadius={20}
            />
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                width={179}
                height={25}
                marginBottom={5}
              />
              <SkeletonPlaceholder.Item
                width={110}
                height={22}
                marginBottom={16}
              />
              <SkeletonPlaceholder.Item width={150} height={19} />
            </SkeletonPlaceholder>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder marginBottom={20}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={30}>
            <SkeletonPlaceholder.Item
              width={130}
              height={110}
              marginRight={20}
              borderRadius={20}
            />
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                width={179}
                height={25}
                marginBottom={5}
              />
              <SkeletonPlaceholder.Item
                width={110}
                height={22}
                marginBottom={16}
              />
              <SkeletonPlaceholder.Item width={150} height={19} />
            </SkeletonPlaceholder>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
        <SkeletonPlaceholder marginBottom={20}>
          <SkeletonPlaceholder.Item
            flexDirection="row"
            alignItems="center"
            marginBottom={30}>
            <SkeletonPlaceholder.Item
              width={130}
              height={110}
              marginRight={20}
              borderRadius={20}
            />
            <SkeletonPlaceholder>
              <SkeletonPlaceholder.Item
                width={179}
                height={25}
                marginBottom={5}
              />
              <SkeletonPlaceholder.Item
                width={110}
                height={22}
                marginBottom={16}
              />
              <SkeletonPlaceholder.Item width={150} height={19} />
            </SkeletonPlaceholder>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder>
      </ScrollView>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={styles.imageStyle}>
        <View style={styles.badge}>
          <View style={styles.iconBadge}>
            <ICStarActive />
          </View>
          <Text style={styles.titleBadge}>4/5</Text>
        </View>
      </ImageBackground>
      <View style={styles.titleContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>
          ${price} <Text style={styles.month}>/ Month</Text>{' '}
        </Text>
        <Text style={styles.location}>{location}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default KosList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 130,
    height: 110,
    marginRight: 20,
    backgroundColor: '#FFFFFF',
  },
  imageStyle: {
    borderRadius: 20,
  },
  badge: {
    width: 70,
    height: 30,
    backgroundColor: '#5843BE',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    flexDirection: 'row',
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 20,
  },
  iconBadge: {
    marginBottom: 7,
  },
  titleBadge: {
    fontFamily: 'Poppins-Medium',
    fontSize: 13,
    color: '#FFFFFF',
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#000000',
  },
  price: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#5843BE',
  },
  month: {
    fontFamily: 'Poppins-Light',
    fontSize: 16,
    color: '#7A7E86',
  },
  location: {
    fontFamily: 'Poppins-Light',
    fontSize: 14,
    marginTop: 16,
    color: '#7A7E86',
  },
});
