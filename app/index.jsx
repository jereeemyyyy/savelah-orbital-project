import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './screens/startpage/WelcomeScreen';
import LoginScreen from './screens/startpage/LoginScreen';
import SignUpScreen from './screens/startpage/SignUpScreen'
import NavigationBar from './components/NavigationBar';

export default function App() {

  const stack = createNativeStackNavigator();

  return ( 
      <stack.Navigator initialRouteName='Welcome'>
          <stack.Screen name="NavigationBar" options={{headerShown: false}} component={NavigationBar} />
          <stack.Screen name="Welcome" options={{headerShown: false}} component={WelcomeScreen} />
          <stack.Screen name="Login" options={{headerShown: false}} component={LoginScreen} /> 
          <stack.Screen name="SignUp" options={{headerShown: false}} component={SignUpScreen} />
      </stack.Navigator>
  );
}