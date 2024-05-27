import {  View, Image, SafeAreaView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LoginCard from "./components/LoginCard";
import BackButton from "../../components/BackButton";


export default function LoginScreen() {

    const navigation = useNavigation();
    
    return (
        <View className="flex-1 bg-gray-800">
            <SafeAreaView className="flex" >
                <BackButton/>
                <View className="flex-row justify-center align-items-center pl-7 pt-14 pb-14">
                    <Image source={require('../../assets/images/logo.png')} 
                           style={{width: 340, height: 80}}/>
                </View>     
            </SafeAreaView>
            <LoginCard/>
        </View>
       
    );
}