import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";
 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/r/e/remera_disney_doc_m98561portada.jpg",
        "https://www.47street.com.ar/media/catalog/product/cache/3fb5d7e1907479a32213f0a7d23de7e9/r/e/remera_disney_doc_m98546.jpg",
       
        
      ]
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          
          images={this.state.images}
          sliderBoxHeight={450}
          
        />
        
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  
});