import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import Constants from "expo-constants";
import { FontAwesome5 } from "@expo/vector-icons";

const { width: WIDTH } = Dimensions.get("window");

export default class Login extends Component {
  state = {
    email: "",
    password: "",
    showPassword: false
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Text>Login as a pupil:</Text>
        </View>
        <View style={styles.inputView}>
          <FontAwesome5
            name={"user-alt"}
            size={13}
            color={"#000"}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Your Email"
            placeholderTextColor="#5A5A5A"
            onChangeText={email => this.setState({ email })}
            style={[styles.input, { flex: 1 }]}
            value={this.state.email}
            keyboardType={"email-address"}
            autoCapitalize="none"
            underlineColorAndroid="transparent"
          />
        </View>
        <View style={styles.inputView}>
          <FontAwesome5
            name={"lock"}
            size={14}
            color={"#000"}
            style={styles.inputIcon}
          />
          <TextInput
            placeholder="Your Password"
            placeholderTextColor="#5A5A5A"
            onChangeText={password => this.setState({ password })}
            style={[styles.input, { marginRight: 0 }]}
            secureTextEntry={!this.state.showPassword}
            value={this.state.password}
            underlineColorAndroid="transparent"
          />
          <TouchableOpacity
            onPress={() =>
              this.setState(prevState => {
                return { showPassword: !prevState.showPassword };
              })
            }
          >
            {this.state.showPassword ? (
              <FontAwesome5
                name={"eye"}
                size={14}
                color={"#000"}
                style={[styles.inputIcon, { marginLeft: 0 }]}
              />
            ) : (
              <FontAwesome5
                name={"eye-slash"}
                size={14}
                color={"#000"}
                style={[styles.inputIcon, { marginLeft: 0 }]}
              />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Main")}
        >
          <Text style={{ color: "#000" }}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#F2F2F2",
    padding: 10
  },
  input: {
    width: WIDTH - 120,
    marginBottom: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: "#DEDEDE",
    color: "#000",
    height: 40
  },
  inputIcon: {
    backgroundColor: "#DEDEDE",
    marginBottom: 10,
    marginLeft: 12,
    paddingTop: 12,
    paddingLeft: 12,
    paddingRight: 12,
    height: 40
  },
  inputView: {
    flexDirection: "row"
  },
  button: {
    alignItems: "center",
    backgroundColor: "#C9C6C6",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  logo: {
    width: 250,
    height: 250
  },
  logoView: {
    alignItems: "center"
  }
});
