import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import MainHeading from './MainHeading';

const ElevatedCards = () => {
  return (
    <View>
      <MainHeading text={'Elevated Cards'} />
      <View style={styles.container}>
        <ScrollView horizontal>
          <View style={[styles.card, styles.elevatedCard, styles.cardOne]}>
            <Text>Scroll</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard, styles.cardTwo]}>
            <Text>left</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard, styles.cardThree]}>
            <Text>to</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard, styles.cardFour]}>
            <Text>view</Text>
          </View>
          <View style={[styles.card, styles.elevatedCard, styles.cardFive]}>
            <Text>more...</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  card: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    borderRadius: 4,
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
  cardFive: {
    backgroundColor: 'orange',
  },
  elevatedCard: {
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowColor: 'black',
  },
});

export default ElevatedCards;
