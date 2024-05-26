import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function RegistrationCard() {
    return(
        <View className="flex-1 bg-white px-8 pt-8"
                style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
            <View className="form space-y-2">
                <Text className="text-gray-700 ml-4">Full Name</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    value="Alexander"
                    placeholder="Enter Name"
                />
                <Text className="text-gray-700 ml-4">Email Address</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    value="Alexander@gmail.com"
                    placeholder="Enter Email"
                />
                <Text className="text-gray-700 ml-4">Password</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5"
                    secureTextEntry={true}
                    value="test12356"
                    placeholder="Enter Password"
                />
                <Text className="text-gray-700 ml-4">Repeat Password</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5"
                    secureTextEntry={true}
                    value="test12356"
                    placeholder="Enter Password"
                />
                <TouchableOpacity className="py-3 bg-indigo-500 rounded-xl">
                    <Text className="font-xl font-bold text-center text-white">Sign Up</Text>
                </TouchableOpacity>                    
            </View>
        </View>
    );
}