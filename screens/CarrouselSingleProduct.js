import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
 
import { SliderBox } from "react-native-image-slider-box";
 
export default class App extends Component {
  constructor(props) {
    super(props);
    
    
  }
 
  render() {
    
    return (
      <View style={styles.container}>
        <SliderBox
          
          images={this.props.imagenes}
          sliderBoxHeight={450}
          
        />
        
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  
});