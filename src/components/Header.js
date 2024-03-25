import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/images/account_circle.png')}
          style={{marginTop: 5}}
        />
        <Text style={styles.profileName}>Hi, Salman</Text>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 10,
        }}>
        <View style={styles.cartQuantity}>
          <Text>1</Text>
        </View>
        <Image source={require('../assets/images/cart.png')} />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainContainer: {
    // paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 32,
    marginVertical: 2,
  },
  cartQuantity: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: '#FED7AA',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    top: 13,
    left: 8,
  },
  profileName: {
    width: 112,
    height: 24,
    fontFamily: 'Inter-Black',
    fontSize: 20,
    fontWeight: '600',
    color: '#4B5563',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    gap: 5,
  },
});
