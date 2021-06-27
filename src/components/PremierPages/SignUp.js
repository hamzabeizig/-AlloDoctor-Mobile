import React from 'react';
import {
  View,

  StyleSheet,
  ImageBackground,
  Dimensions, Text, TouchableOpacity, TextInput,Picker,Alert
} from 'react-native';

import Usernomprenom from '../icons/Usernomprenom';
import Password from '../icons/password';
import Phone from '../icons/phone';
export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sexe:'Homme',
      email:this.props.navigation.getParam('email'),
      password:'',
      nom:'',
      prenom:'',
      tel:'',
      confirmer:'',

    };
  }
 naviger=  (title,message,buttons,title1, message1, buttons1)=>{
     this.state.nom==='' || this.state.prenom==='' || this.state.tel==='' ||this.state.password==='' ?
        Alert.alert(title1, message1, buttons1)

    : this.state.confirmer===this.state.password ?
    this.props.navigation.navigate("Inscription2", {
    email:this.state.email,
    sexe:this.state.sexe,
    password:this.state.password,
    nom:this.state.nom,
    prenom:this.state.prenom,
    tel:this.state.tel
  })
    :

  Alert.alert(title, message, buttons);




};
  render() {
    const title = 'mot de passe';
    const message = 'svp verifier votre mot de passe !! ';
    const buttons = [
      { text: 'Cancel', type: 'cancel' },
    ];
    const title1 = 'inscription a échoué ';
    const message1 = 'svp verifier votre coordonnee !! ';
    const buttons1 = [
      { text: 'Cancel', type: 'cancel' },
    ];
    return (
        <View style={styles.container}>
          <ImageBackground
              source={require('../../assets/images/newback2.png')}
              style={styles.image}>
            <ImageBackground
                source={require('../../assets/images/Logo1.png')}
                resizeMode="contain"
                style={styles.imagelogo}
            />

            <View style={styles.input}>
              <View style={styles.container2}>
                <Usernomprenom style={styles.iconStyle} />
                <TextInput
                    placeholder={'Nom'}
                    style={styles.inputStyle}
                    value={this.state.nom}
                    onChangeText={text => this.setState({ nom:text })}
                />
              </View>
            </View>

            <View style={styles.input}>
              <View style={styles.container2}>
                  <Usernomprenom style={styles.iconStyle} />
                <TextInput
                    placeholder={'Prenom'}
                    style={styles.inputStyle}
                    value={this.state.prenom}
                    onChangeText={text => this.setState({ prenom:text })}
                />
              </View>
            </View>

            <View style={styles.input}>
              <View style={styles.container2}>
                <Phone style={styles.iconStyle} />
                <TextInput
                    placeholder={'Tel'}
                    style={styles.inputStyle}
                    value={this.state.tel}
                    onChangeText={text => this.setState({ tel:text })}
                />
              </View>
            </View>

            <View style={styles.input}>
              <View style={styles.container2}>
                <Password style={styles.iconStyle} />
                <TextInput
                    secureTextEntry placeholder={'Mot de passe'}
                    style={styles.inputStyle}
                    value={this.state.password}
                    onChangeText={text => this.setState({ password:text })}
                />
              </View>
            </View>

            <View style={styles.input}>
              <View style={styles.container2}>
                <Password style={styles.iconStyle} />
                <TextInput
                    secureTextEntry placeholder={'Confirmer mot de passe'}
                    style={styles.inputStyle}
                    onChangeText={text => this.setState({ confirmer:text })}

                />
              </View>
            </View>

            <View style={stylespiker.container}>
              <Text style={stylespiker.MyText}>Sexe : </Text>
              <Picker
                  selectedValue={this.state.sexe}
                  style={{ height: 50, width: 150} }
                  onValueChange={(itemValue, itemIndex) => this.setState({sexe:itemValue})}
              >
                <Picker.Item label="Homme" value="Homme" />
                <Picker.Item label="Femme" value="Femme" />
              </Picker>
            </View>

            <TouchableOpacity style={styles.ButtonContainer}
                              onPress={() => this.naviger(title,message,buttons,title1,message1,buttons1)}
            >
              <Text style={styles.caption}>Suivant</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
    );
  }
}
const screenWidth = Math.round(Dimensions.get('window').width);
const screenheight = Math.round(Dimensions.get('window').height);
const styles = StyleSheet.create({
  input: {
    width: screenWidth,
    height: screenheight / 18,
    margin: screenheight / 60,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 10,
    fontWeight: '500',
  },
  container2: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  ButtonContainer: {

    height: screenheight / 15,
    width: screenWidth / 2,
    resizeMode: 'contain',
    marginTop: screenheight / 10,
    marginBottom: screenheight / 15,
    backgroundColor: '#9EDAE4',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    alignSelf: 'center',
  },
  imagelogo: {
    resizeMode: 'contain',
    width: screenWidth,
    height: screenWidth / 3,
  },
  image: {
    resizeMode: 'cover',
    width: screenWidth,
    height: screenheight,
    flex: 1,
    alignSelf: 'center',
  },
  mypicker: {
    marginTop: screenheight / 4,
    marginBottom: screenheight / 4,
    width: screenWidth,
    height: screenheight / 15,
  },
  caption: {
    color: "#111",
    fontSize:18,
    fontWeight:'bold',

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
});
const stylespiker = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center"
  },
  MyText :{
    alignItems: "center"
  },
});
