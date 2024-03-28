import {StyleSheet, Dimensions} from 'react-native';
export const styles = StyleSheet.create({
  imageBackground: {
    backgroundColor: '#FFF7ED',
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  gradient: {
    width: '100%',
    height: '100%',
    paddingVertical: 40,
  },
});
