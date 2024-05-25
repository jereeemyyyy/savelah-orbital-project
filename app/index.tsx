import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen'

export default function App() {

  const stack = createNativeStackNavigator();

  return ( 
      <stack.Navigator initialRouteName='Welcome'>
          <stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
          <stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} /> 
          <stack.Screen name="Signup" options={{headerShown: false}} component={SignUpScreen} />
      </stack.Navigator>
  );
}