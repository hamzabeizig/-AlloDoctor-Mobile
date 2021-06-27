/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Drawer from './src/components/PagesHome/Drawer';
import RdvFormulaire from './src/components/PagesHome/RdvFormulaire';
import ProfilPraticien from './src/components/PagesHome/ProfilPraticien';
import ContenuScreenMesDocteurs from './src/components/PagesHome/ContenuScreenMesDocteurs';
import Parametres from './src/components/PagesHome/Parametres';

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Drawer/>

        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9EDAE4',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  Tabbar: {
    justifyContent: 'flex-end',
  },
});
