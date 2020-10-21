import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../containers/Home";
import Detail from "../containers/Detail";

const Stack = createStackNavigator();

const headerConfig = {
  headerStyle: {
    backgroundColor: "#3A99D8",
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontWeight: "bold",
  },
  headerBackTitleVisible: false,
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerConfig}>
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{
            title: "Warpin Pokedex",
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{ title: "Pokemon Detail" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
