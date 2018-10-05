import React from 'react';
// import * as safari from '../../hello360/hello360/static_assets/'
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-360';

export default class hello360 extends React.Component {
  render() {
    const resizeMode = 'stretch';
    return (
      <View style={{ display : 'flex'}} >
      <View style={{display: 'flex', flexDirection: 'row'}}>
      <View
         style={styles.greetingBox}>
          <Image style={{flex: 1,
          resizeMode, margin: 0
          }} source={require('../hello360/static_assets/142543630.jpg')}></Image>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup12</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Image style={{flex: 1,
          resizeMode, margin: 0
          }} source={require('../hello360/static_assets/142543630.jpg')}></Image>
        </View>
        <View style ={styles.greetingBox}>
        <Text>yo wassup11</Text>
        </View>
        <View
         style={styles.greetingBox}>
         <Image style={{flex: 1,
          resizeMode, margin: 0
          }} source={require('../hello360/static_assets/142543630.jpg')}></Image>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup10</Text>
        </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
      <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 4
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup9</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 5
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup8</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 6
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup7</Text>
        </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
      <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 7
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup6</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 8
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup5</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 9
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup4</Text>
        </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
      <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 10
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup3</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 11
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup2</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 12
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup1</Text>
        </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
      <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 13
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup129</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 15
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup128</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 16
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup127</Text>
        </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
      <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 17
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup126</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 18
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup125</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 19
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup124</Text>
        </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'row'}}>
      <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 17
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup126</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 18
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup125</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 19
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup124</Text>
        </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
      <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 17
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup126</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 18
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup125</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 19
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup124</Text>
        </View>
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
      <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 17
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup126</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 18
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup125</Text>
        </View>
        <View
         style={styles.greetingBox}>
          <Text style={styles.greeting}>
            Welcome to React 360 19
          </Text>
        </View>
        <View style ={styles.greetingBox}><Text>yo wassup124</Text>
        </View>
        </View>
        </View> 
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 100,
    height: 33,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  greetingBox: {
    padding: 0,
    width: 250,
    height: 150,
    margin: 5,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  greeting: {
   
  },
});

AppRegistry.registerComponent('hello360', () => hello360);
