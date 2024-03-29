import { View, Image, ScrollView ,StyleSheet} from "react-native";
import ImageCarouselData from "../assets/ImageCarousel";
import React from "react";

export default function ImageCarousel() {
  return (
    <View style={styles.CarouselItem}>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {ImageCarouselData.map((ImageCarousel) => {
        return (
          <View key={ImageCarousel.id} >
            <Image
              source={{ uri: ImageCarousel.image }}
              alt={ImageCarousel.title}
              style={styles.Img}
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
  Img: {
      width: 340,
      margin:10,
      height: 200,
      borderRadius:10
  }
})