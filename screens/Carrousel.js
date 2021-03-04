import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";
 
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        "https://mott.social/wp-content/uploads/2019/04/streetwear.png",
        "https://darbaculture.com/wp-content/uploads/2018/04/moda-skater-1.jpg",
        "https://darbaculture.com/wp-content/uploads/2014/09/Jaiperdumaveste-JPMV-Nabile-Quenum-Sophian-Negadi-KTZ-Kokon-To-Zai-Nike-2013-6.jpg",
        "https://image.freepik.com/foto-gratis/sexy-mujer-joven-ropa-urbana_213512-2115.jpg",
        
      ]
    };
  }
 
  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          autoplay
          circleLoop
          images={this.state.images}
          sliderBoxHeight={300}
          
        />
        
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  
});