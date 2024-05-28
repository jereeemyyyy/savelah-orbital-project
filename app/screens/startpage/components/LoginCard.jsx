import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import SocialMediaIcons from './SocialMediaIcons';
import { useNavigation } from "@react-navigation/native";
import { useState } from 'react';
import { supabase } from '../../../../lib/supabase';

export default function LoginCard() {
    
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) { 
            Alert.alert(error.message);
        }
        Alert.alert("User signed in successfully");
        setLoading(false);

        // If login is successful, navigate to the Home Screen
        navigation.navigate('NavigationBar');
    }
    
    return (
        <View className="flex-1 bg-white px-8 pt-8"
                style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
            <View className="form space-y-2">
                <Text className="text-gray-700 ml-4">Email Address</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter Email"
                />
                <Text className="text-gray-700 ml-4">Password</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter Password"
                />
                <TouchableOpacity className="flex items-end mb-5">
                    <Text className="text-gray-700">Forget Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    className="py-3 bg-indigo-500 rounded-xl"
                    onPress={signInWithEmail}
                    disabled={loading}
                >
                    <Text className="font-xl font-bold text-center text-white">
                        {loading ? 'Logining' : 'Login'}
                    </Text>
                </TouchableOpacity>
                <Text className="text-xl text-gray-700 font-bold text-center py-5">
                    Or
                </Text>
                <SocialMediaIcons/>
                <View className="flex-row justify-center space-x-1 p-6">
                    <Text className="text-gray-500 font-semibold">Dont have an account?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("SignUp")}>
                        <Text className="text-semibold text-indigo-600">Sign up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}