import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

function Header() {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/logo.png')} />
        <Text style={styles.text}>DS Delivery</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DA5C5C',
    height: 90,
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        fontFamily: 'OpenSans_700Bold',
        lineHeight: 25,
        letterSpacing: -0.24, 
        color: '#FFFFFF',
        marginLeft: 15
    }
});

export default Header;