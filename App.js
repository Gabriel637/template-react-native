import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Header from './src/components/Header';
import Home from './src/pages/Home';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <Header />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} options={{title: ''}} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
