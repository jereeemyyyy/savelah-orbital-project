import { Text, View, SafeAreaView } from "react-native";
import BackButton from "../../components/BackButton";
import RegistrationCard from "./components/RegistrationCard";


export default function SignUpScreen() { 
    
    return (
        <View className="flex-1 bg-gray-800">
            <SafeAreaView className="flex" >
                <View className="flex-row justify-start">
                    <BackButton/>
                </View>
                <View className="flex-row  pl-7 pt-12">
                    <Text className="text-white font-bold text-5xl text-left">Registration</Text>   
                </View>     
                <View className="flex-row  pl-7 pb-10">
                    <Text className="text-gray-400 font-bold text-sm text-left">
                        Create an account to continue
                    </Text>   
                </View> 
            </SafeAreaView>
            <RegistrationCard/> 
        </View>
       
    );
}