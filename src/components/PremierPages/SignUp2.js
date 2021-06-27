import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  Dimensions,
  ScrollView, TouchableOpacity, Alert,
} from 'react-native';
import Cin from '../icons/cin';
import Vile from '../icons/vile';
import Adress from  '../icons/adress';
import AsyncStorage from '@react-native-community/async-storage';
const screenWidth = Math.round(Dimensions.get('window').width);
const screenheight = Math.round(Dimensions.get('window').height);
import {Avatar} from 'react-native-elements';
import ImagePicker from 'react-native-image-picker';
import photo from '../../assets/images/hamza.jpg';
import avatarpic from '../../assets/images/avatarpic.png' ;
export default class SignUp2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adresse:null,
      cin:null,
      ville:null,
      pickedImage:avatarpic,
      pickedImage2:this.props.navigation.getParam('photo'),
      name:this.props.navigation.getParam('name'),
    };
  }
  pickImageHandler = () => {
    ImagePicker.showImagePicker(
        {title: 'Choisir votre image', maxWidth: 800, maxHeight: 600},
        res => {
          if (res.didCancel) {
            console.log('fermé');
          } else if (res.error) {
            console.log('probleme', res.error);
          } else {
            this.setState({
              pickedImage: {uri: res.uri},
            });
          }
        },
    );
  };


  render(){
    const title = 'inscription a échoué';
    const message = 'email existe deja  !!  ';
    const buttons = [
      { text: 'Cancel', type: 'cancel' },
    ];
    return (
        <View style={styles.container}>
          <ImageBackground
              source={require('../../assets/images/newback2.png')}
              style={styles.image}>
            <ScrollView>
              <ImageBackground
                  source={require('../../assets/images/Logo1.png')}
                  resizeMode="contain"
                  style={styles.imagelogo}
              />

              <Text style={styles.MyText}> (Facultatif) </Text>
              <Avatar

                  rounded
                  size="xlarge"
                  source={this.state.pickedImage2 ?
                      {uri:this.state.pickedImage2}
                      :this.state.pickedImage
                  }
                  onEditPress={ this.pickImageHandler}
                  showEditButton
                  containerStyle={{marginTop: screenheight/20,flex: 1,justifyContent:'center',alignSelf:'center'}}
                  overlayContainerStyle={{backgroundColor: 'transparent'}}
              />

              <View style={styles.input}>
                <View style={styles.container2}>
                  <Vile style={styles.iconStyle} />
                  <TextInput
                      placeholder={'Ville'}
                      style={styles.inputStyle}
                      value={this.state.ville}
                      onChangeText={text => this.setState({ ville:text })}
                  />
                </View>
              </View>

              <View style={styles.input}>
                <View style={styles.container2}>
                  <Adress style={styles.iconStyle} />
                  <TextInput placeholder={'Adresse'}
                             style={styles.inputStyle}
                             value={this.state.adresse}
                             onChangeText={text => this.setState({ adresse:text })}
                  />
                </View>
              </View>

              <View style={styles.input}>
                <View style={styles.container2}>
                  <Cin style={styles.iconStyle} />
                  <TextInput
                      placeholder={'Cin'}
                      style={styles.inputStyle}
                      value={this.state.cin}
                      onChangeText={text => this.setState({ cin:text })}
                  />
                </View>
              </View>

              <TouchableOpacity style={styles.InscriButtonContainer} onPress={() =>this.sendCred(title,message,buttons) }>
                <Text style={styles.caption}>S'inscrire</Text>
              </TouchableOpacity>

            </ScrollView>
          </ImageBackground>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: screenWidth / 2,
    height: screenheight / 20,
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  InscriButtonContainer: {
    width: screenWidth / 2,
    height: screenheight / 15,
    backgroundColor: '#9EDAE4',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    alignSelf: 'center',
    marginTop: screenheight / 8,
    marginBottom: screenheight / 15,
  },
  MyText: {
    alignSelf: 'center',
  },
  imagelogo: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: 0,
    marginBottom: 20,
    resizeMode: 'contain',
    width: screenWidth,
    height: screenheight / 5,
  },
  image: {
    resizeMode: 'cover',
    width: screenWidth,
    height: screenheight,
    margin: 0,
    flex: 1,
    alignSelf: 'center',
  },
  container2: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStyle: {
    height: 20,
    width: 40,

  },
  inputStyle: {
    width: screenWidth - 100,
    height: 40,
    color: '#000',
    alignSelf: 'stretch',
    marginLeft: 1,
    marginRight: 20,
    paddingTop: 0,
    paddingRight: 5,
    paddingBottom: 8,
    borderColor: 'rgb(17,17,17)',
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: 'roboto-regular',
    lineHeight: 16,
  },
  caption: {
    color: '#111',
    fontSize: 18,
    fontWeight: 'bold',
  }});
