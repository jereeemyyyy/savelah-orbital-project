import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home/HomeScreen';
import WelcomeScreen from './screens/startpage/WelcomeScreen';
import LoginScreen from './screens/startpage/LoginScreen';
import SignUpScreen from './screens/startpage/SignUpScreen'

export default function App() {

  const stack = createNativeStackNavigator();

  return ( 
      <stack.Navigator initialRouteName='Welcome'>
          <stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
          <stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} /> 
          <stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
      </stack.Navigator>
  );
}