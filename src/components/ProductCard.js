import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ToastAndroid } from 'react-native';

const ProductCard = ({ image, title, price, onPress, Quantity ,Discountprice}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text>{Quantity}</Text>
      <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center"}}>
     <View>
      <Text style={styles.price}>₹{price}</Text>
      <Text style={styles.Disprice}>₹{Discountprice}</Text>
      <View style={styles.cutLine} />
     </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>ADD</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    margin:5
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 18,
    color:'black'
  },
  price: {
    fontSize: 16,
    color:'black'
 },
 Disprice:{
  fontSize: 16,
 },
 cutLine: {
  position: 'absolute',
  top: '75%',
  left: 0,
  right: 0,
  height: 1,
  backgroundColor: '#6d6c6c',
  zIndex: 1, 
},
  button: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth:1,
    borderColor:'#F97316',
  },
  buttonText: {
    color: '#F97316',
    fontSize: 16,
  },
});

export default ProductCard;
// Example to use 
//  <ProductCard
// image=
// {{
//   uri: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/app/assets/products/sliding_images/jpeg/7a97253f-581e-4c0a-b48e-37e7a7066300.jpg?ts=1708589141',
// }}
// title="Product Title" price="XX" Quantity='1Kg' Discountprice='100' 
// />