const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Splashscreen from "./screens/Splashscreen";
import Home from "./screens/Home";
import CardBoard1 from "./screens/CardBoard1";
import CreateAnAccount from "./screens/CreateAnAccount";
import Detailtransaksi from "./screens/Detailtransaksi";
import SuccessfulPayment from "./screens/SuccessfulPayment";
import Checkoutscreen from "./screens/Checkoutscreen";
import Checkoutloading from "./screens/Checkoutloading";
import Detailhotel from "./screens/Detailhotel";
import Detailkamar from "./screens/Detailkamar";
import Homescreen from "./screens/Homescreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);
  const [fontsLoaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto.ttf"),
    Inter: require("./assets/fonts/Inter.ttf"),
    "DM Sans": require("./assets/fonts/DM_Sans.ttf"),
    Poppins: require("./assets/fonts/Poppins.ttf"),
    Montserrat: require("./assets/fonts/Montserrat.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Splashscreen"
              component={Splashscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CardBoard1"
              component={CardBoard1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreateAnAccount"
              component={CreateAnAccount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detailtransaksi"
              component={Detailtransaksi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SuccessfulPayment"
              component={SuccessfulPayment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkoutscreen"
              component={Checkoutscreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Checkoutloading"
              component={Checkoutloading}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detailhotel"
              component={Detailhotel}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detailkamar"
              component={Detailkamar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Homescreen"
              component={Homescreen}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
