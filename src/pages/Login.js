import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';
import Constants from 'expo-constants';
import { FontAwesome5 } from '@expo/vector-icons';

import Logo from '../assets/libretutors.png';

const IconComponent = FontAwesome5;

const { width: WIDTH } = Dimensions.get('window');

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
    offset: new Animated.ValueXY({
      x: 0,
      y: 95,
    }),
    opacity: new Animated.Value(0),
  };

  componentDidMount() {
    Animated.parallel([
      Animated.spring(this.state.offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 20,
      }),
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 200,
      }),
    ]).start();
  }

  dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.dismissKeyboard}>
        <View style={styles.container}>
          <KeyboardAvoidingView style={styles.avoidingKeyboard} behavior="position" enabled>
            <View style={styles.logoView}>
              <Image style={styles.logo} source={Logo} />
            </View>
            <Animated.View
              style={{
                opacity: this.state.opacity,
                transform: [
                  {
                    translateY: this.state.offset.y,
                  },
                ],
              }}
            >
              <View style={styles.inputView}>
                <IconComponent
                  name="user-alt"
                  size={13}
                  color="#000"
                  style={styles.inputIcon}
                />
                <TextInput
                  placeholder="Your Email"
                  placeholderTextColor="#5A5A5A"
                  onChangeText={(email) => this.setState({ email })}
                  style={[styles.input, { flex: 1 }]}
                  value={this.state.email}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  underlineColorAndroid="transparent"
                />
              </View>
              <View style={styles.inputView}>
                <IconComponent
                  name="lock"
                  size={14}
                  color="#000"
                  style={styles.inputIcon}
                />
                <TextInput
                  placeholder="Your Password"
                  placeholderTextColor="#5A5A5A"
                  onChangeText={(password) => this.setState({ password })}
                  style={[styles.input, { marginRight: 0 }]}
                  secureTextEntry={!this.state.showPassword}
                  value={this.state.password}
                  underlineColorAndroid="transparent"
                />
                <TouchableWithoutFeedback
                  onPress={() => this.setState((prevState) => ({ showPassword: !prevState.showPassword }))}
                >
                  {this.state.showPassword ? (
                    <IconComponent
                      name="eye"
                      size={14}
                      color="#000"
                      style={[styles.inputIcon, { marginLeft: 0, paddingRight: 14 }]}
                    />
                  ) : (
                    <IconComponent
                      name="eye-slash"
                      size={14}
                      color="#000"
                      style={[styles.inputIcon, { marginLeft: 0 }]}
                    />
                  )}
                </TouchableWithoutFeedback>
              </View>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Main')}
              >
                <Text style={{ color: 'white' }}>Sign In</Text>
              </TouchableOpacity>
            </Animated.View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#87A999',
    padding: 10,
  },
  avoidingKeyboard: {
    paddingBottom: 15,
  },
  input: {
    width: WIDTH - 120,
    marginBottom: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: '#ABCBC0',
    color: '#000',
    height: 40,
  },
  inputIcon: {
    backgroundColor: '#ABCBC0',
    marginBottom: 10,
    marginLeft: 12,
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    height: 40,
  },
  inputView: {
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#FF922B',
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 12,
    marginRight: 12,
  },
  logo: {
    width: 250,
    height: 250,
  },
  logoView: {
    alignItems: 'center',
  },
});
