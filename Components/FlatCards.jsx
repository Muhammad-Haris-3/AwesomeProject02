import React from 'react';
import MainHeading from './MainHeading';
import { StyleSheet, Text, View } from 'react-native';

const FlatCards = () => {
  return (
    <View>
      <MainHeading text={'Flat Cards'} />
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Yellow</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>Blue</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 8,
  },
  card: {
    height: 100,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 5,
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'green',
  },
  cardThree: {
    backgroundColor: 'yellow',
  },
  cardFour: {
    backgroundColor: 'blue',
  },
});

export default FlatCards;
