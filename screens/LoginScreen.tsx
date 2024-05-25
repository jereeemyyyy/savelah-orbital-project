import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {

    const navigation = useNavigation();
    
    return (
        <View>
            <Text>Welcome to the Login Screen!</Text>
        </View>
    );
}