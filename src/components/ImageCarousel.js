import { View, Text, Image, ScrollView ,StyleSheet} from "react-native";
import imageCarouselData from "../assets/imageCarousel";
import React from "react";

export default function ImageCarousel() {
  return (
    <View style={styles.CarouselItem}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {imageCarouselData.map((imageCarousel) => {
        return (
          <View key={imageCarousel.id} >
            <Image
              source={{ uri: imageCarousel.image }}
              alt={imageCarousel.title}
              style={styles.img}
            />
          </View>
        );
      })}
    </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  CarouselItem: {
      flex: 1,
  },
  img: {
      width: 340,
      margin:10,
      height: 200,
      borderRadius:10
  }
})