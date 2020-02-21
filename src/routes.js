import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./pages/Login";
import Main from "./pages/Main";
import Profile from "./pages/Profile";

const Routes = createAppContainer(
  createStackNavigator(
    {
      Login: {
        screen: Login,
        navigationOptions: {
          title: "Login"
        }
      },
      Main: {
        screen: Main,
        navigationOptions: {
          title: "LibreTutor",
          headerLeft: () => null
        }
      },
      Profile: {
        screen: Profile,
        navigationOptions: {
          title: "Chat Profile"
        }
      }
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#FFF",
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: "#7D40E7"
        }
      }
    }
  )
);

export default Routes;
