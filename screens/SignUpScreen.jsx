import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SignUpScreen() {

    const navigation = useNavigation();
    
    return (
        <View>
            <Text>Welcome to the Signup Screen!</Text>
        </View>
    );
}