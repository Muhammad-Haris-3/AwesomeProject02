import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import MainHeading from './MainHeading';
import KabaPicture from '../Assets/Images/caption.jpg';
import MasjidENabvi from "../Assets/Images/Masjid_Nabawi_The_Prophet's_Mosque,_Madina.jpg";

const FancyCard = () => {
  return (
    <View>
      <MainHeading text={'Famous Places'} />
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={KabaPicture} style={styles.image} />
          <Text style={styles.country}>Saudi Arabia</Text>
          <Text style={styles.city}>Makkah</Text>
          <Text style={styles.description}>
            Allah's House Where People came from all over the world to remember
            Allah.
          </Text>
          <Text style={styles.distance}>12 minutes away</Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.card}>
          <Image source={MasjidENabvi} style={styles.image} />
          <Text style={styles.country}>Saudi Arabia</Text>
          <Text style={styles.city}>Madinah</Text>
          <Text style={styles.description}>
            Masjid an-Nabawi, in Madinah, Saudi Arabia, is Islam’s second
            holiest mosque and the burial place of Prophet Muhammad ﷺ.
          </Text>
          <Text style={styles.distance}>15 minutes away</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
  card: {
    height: 350,
    width: 250,
    borderColor: 'aqua',
    borderWidth: 3,
    backgroundColor: 'silver',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    marginTop: 15,
    marginBottom: 15,
    height: 180,
    width: 180,
    borderRadius: 4,
    padding: 3,
  },
  country: {
    fontSize: 24,
    fontWeight: 700,
    textAlign: 'center',
    color: 'aqua',
  },
  city: {
    fontSize: 18,
    fontWeight: 700,
    textAlign: 'center',
    color: 'indigo',
  },
  description: {
    fontSize: 13,
    fontWeight: 700,
    textAlign: 'center',
    color: 'green',
    paddingHorizontal: 2,
  },
  distance: {
    fontSize: 10,
    fontWeight: 700,
    textAlign: 'center',
    color: 'grey',
  },
});

export default FancyCard;
