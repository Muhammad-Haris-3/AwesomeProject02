import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MainHeading = ({ text }) => {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 700,
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
  },
});

export default MainHeading;
