import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import MainHeading from './MainHeading';
import JSPic from '../Assets/Images/JS.png';
import AIPic from '../Assets/Images/AI.png';

const ActionCard = () => {
  const handlePress = (websiteLink: string) => {
    Linking.openURL(websiteLink);
  };
  return (
    <View>
      <MainHeading text={'Blog Card'} />
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeading}>What's new in Js ?</Text>
        </View>
        <View style={styles.cardBody}>
          <Image source={JSPic} style={styles.cardImage} />
          <Text style={styles.descText}>
            Js is now even more fun for delveloper....
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.cardLink}>
            <TouchableOpacity
              onPress={() =>
                handlePress('https://en.wikipedia.org/wiki/JavaScript')
              }
            >
              <Text style={styles.cardLinkStyle}>READ MORE..</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeading}>What is the future of AI?</Text>
        </View>
        <View style={styles.cardBody}>
          <Image source={AIPic} style={styles.cardImage} />
          <Text style={styles.descText}>
            AI is making Progress in unimaginable ways....
          </Text>
        </View>
        <View style={styles.cardFooter}>
          <View style={styles.cardLink}>
            <TouchableOpacity
              onPress={() =>
                handlePress(
                  'https://www.brookings.edu/articles/how-artificial-intelligence-is-transforming-the-world/',
                )
              }
            >
              <Text style={styles.cardLinkStyle}>READ MORE..</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'silver',
    borderRadius: 6,
    borderWidth: 3,
    borderColor: 'aqua',
    margin: 20,
    padding: 10,
  },
  cardHeader: {
    backgroundColor: 'gold',
    padding: 4,
    borderRadius: 6,
    borderWidth: 2,
    borderColor: 'aqua',
  },
  cardHeading: {
    color: 'white',
    fontSize: 24,
    fontWeight: 700,
  },
  cardBody: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    height: 200,
    width: 200,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: 'green',
    margin: 3,
  },
  descText: {
    color: 'blue',
    fontSize: 14,
    fontWeight: 300,
    textAlign: 'center',
  },
  cardFooter: {},
  cardLink: {},
  cardLinkStyle: {
    color: 'green',
    fontWeight: 600,
    fontSize: 20,
  },
});

export default ActionCard;
