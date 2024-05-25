 import { Text, View } from 'react-native';
 import { useNavigation } from '@react-navigation/native';

 export default function HomeScreen() {

    const navigation = useNavigation();
    
        return (
            <View>
                <Text>Welcome to the Home Screen!</Text>
            </View>
        );
    }