import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductCard = ({ image, Title, Price, onPress, Quantity }) => {
  return (
    <View style={styles.Container}>
      <Image source={image} style={styles.Image} />
      <Text style={styles.Title}>{Title}</Text>
      <Text>{Quantity}</Text>
      <View style={{flexDirection:"row",justifyContent:'space-between',alignItems:"center"}}>
     <View>
      <Text style={styles.Price}>₹{Price}</Text>
     </View>
      <TouchableOpacity style={styles.Button} onPress={onPress}>
        <Text style={styles.ButtonText}>ADD</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    width: 150,
    margin:5
  },
  Image: {
    width: '100%',
    height: 150,
  },
  Title: {
    fontSize: 18,
    color:'black'
  },
  Price: {
    fontSize: 16,
    color:'black'
 },
  Button: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderWidth:1,
    borderColor:'#F97316',
  },
  ButtonText: {
    color: '#F97316',
    fontSize: 16,
  },
});

export default ProductCard;
