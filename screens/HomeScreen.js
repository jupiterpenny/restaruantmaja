import React from 'react';

import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
    Button
} from 'react-native';
import { WebBrowser } from 'expo';



import { MonoText } from '../components/StyledText';



import LinksScreen from "./LinksScreen";




var pic = require('../logo.png');

var rand = Math.floor((Math.random() * 10));
var foodTypes = ['greek+restaurant', 'japanese+restaurant', 'turkish+restaurant', 'carribean+restaurant', 'buffet', 'chicken', 'italian+restaurant', 'cajun+restaurant',
    'cafe', 'soup', 'donuts', 'hotdogs', 'ham', 'french+restaurant'];
var url1 = 'https://www.google.com/maps/search/google+maps+';
var k = url1 + foodTypes[rand];

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };







  render() {
      const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
              <Image source={pic} style={{width: 300, height: 300}}/>
          </View>


          <View style={styles.helpContainer}>
            <Button style={styles.helpLinkText}
                title="What am I in the mood for?"

                onPress={() => navigate('Links', {
                    screen: LinksScreen,
                })}
            />
          </View>


          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleLearnMorePress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Popular near me</Text>
            </TouchableOpacity>
          </View>


          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Surprise Me!</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>


      </View>
    );
  }


  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://www.google.com/search?ei=kar8WdKSDYjSmwHT072QBA&q=popular+restaurants+near+me&oq=popular+restaurants');
  };


  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
     k
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141414',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
      borderWidth: 2,
      borderRadius: 10,
    borderColor: 'white',
      margin: 10,
      padding: 10
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
      fontSize: 20,
      alignSelf: 'stretch',
      textAlign: 'center',
      color: 'white'
  },
});
