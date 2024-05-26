import { Text, TouchableOpacity, View, Image, SafeAreaView, TextInput } from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";


export default function LoginScreen() {

    const navigation = useNavigation();
    
    return (
        <View className="flex-1 bg-gray-800">
            <SafeAreaView className="flex" >
                <View className="flex-row justify-start">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="bg-indigo-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
                    >
                        <ArrowLeftIcon size="20" color="white"/>
                    </TouchableOpacity>
                </View>
                <View className="flex-row justify-center align-items-center pl-7 pt-14 pb-14">
                    <Image source={require('../../assets/images/logo.png')} 
                           style={{width: 300, height: 80}}/>
                </View>     
            </SafeAreaView>
            <View className="flex-1 bg-white px-8 pt-8"
                    style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
                <View className="form space-y-2">
                    <Text className="text-gray-700 ml-4">Email Address</Text>
                    <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                        value="Alexander@gmail.com"
                        placeholder="Enter Email"
                    />
                    <Text className="text-gray-700 ml-4">Password</Text>
                    <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                        secureTextEntry={true}
                        value="test12356"
                        placeholder="Enter Password"
                    />
                    <TouchableOpacity className="flex items-end mb-5">
                        <Text className="text-gray-700">Forget Password?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="py-3 bg-indigo-500 rounded-xl">
                        <Text className="font-xl font-bold text-center text-white">Login</Text>
                    </TouchableOpacity>
                    <Text className="text-xl text-gray-700 font-bold text-center py-5">
                        Or
                    </Text>
                    <View className="flex-row justify-center space-x-12">
                        <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                            <Image source={require('../../assets/images/google.png')}
                                className="w-10 h-10"/>
                        </TouchableOpacity>
                        <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                            <Image source={require('../../assets/images/apple.png')}
                                className="w-10 h-10"/>
                        </TouchableOpacity>
                        <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                            <Image source={require('../../assets/images/facebook.png')}
                                className="w-10 h-10"/>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-row justify-center space-x-1 p-6">
                        <Text className="text-gray-500 font-semibold">Dont have an account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("SignUp")}>
                            <Text className="text-semibold text-indigo-600">Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
       
    );
}