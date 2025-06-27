import React from 'react';
import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import HarisPic from '../Assets/Images/Haris.jpg';
import AhtashamPic from '../Assets/Images/Ahtasham.jpg';
import FaizanPic from '../Assets/Images/Faizan.jpg';
import MainHeading from './MainHeading';
const ContactList = () => {
  const openProfile = (profileLink: string) => {
    Linking.openURL(profileLink);
  };
  const contacts = [
    {
      id: 1,
      name: 'Haris',
      status: 'App developer',
      image: HarisPic,
      profileLink: 'https://www.instagram.com/muhammad_haris_khokhar',
    },
    {
      id: 2,
      name: 'Ahtasham',
      status: 'BSCS',
      image: AhtashamPic,
      profileLink: 'https://www.instagram.com/malik_ahtasham_03',
    },
    {
      id: 3,
      name: 'Faizan',
      status: 'AI and Tech',
      image: FaizanPic,
      profileLink: 'https://www.instagram.com/kakayrao',
    },
  ];
  return (
    <View>
      <MainHeading text={'Contacts'} />
      <View style={styles.container}>
        {contacts.map(({ id, name, status, image, profileLink }) => (
          <View style={styles.contactContainer}>
            <View style={[styles.imgContainer, styles.subContainer]} key={id}>
              <Image source={image} style={styles.image} />
              <View style={styles.textContainer}>
                <TouchableOpacity onPress={() => openProfile(profileLink)}>
                  <Text style={[styles.text, styles.boldText]}> {name}</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{status}</Text>
              </View>
            </View>
          </View>
        ))}
      </View>
      <MainHeading text={'The End'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignContent: 'center',
  },
  imgContainer: {
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'aqua',
    margin: 6,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 10,
    fontWeight: 500,
    color: 'white',
    padding: 2,
  },
  boldText: {
    fontSize: 14,
    fontWeight: 700,
  },
  contactContainer: {
    backgroundColor: 'black',
    borderRadius: 12,
    margin: 5,
    padding: 2,
  },
  subContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default ContactList;
