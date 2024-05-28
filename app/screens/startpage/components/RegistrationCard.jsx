import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';
import { supabase } from '../../../../lib/supabase';
import { useNavigation } from "@react-navigation/native";

export default function RegistrationCard() {

    const navigation = useNavigation();

    const[firstname, setFirstname] = useState('');
    const[lastname, setLastname] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[repeatPassword, setRepeatPassword] = useState('');
    const[loading, setLoading] = useState(false);

    async function signUpWithEmail() {
        setLoading(true);

        // Checks if the password and repeat password are the same
        if (password !== repeatPassword) {
            Alert.alert("Passwords do not match. Try Again");
            setLoading(false);
            setPassword('');
            setRepeatPassword('');
            return;
        }

        // Sign up the user with additional metadata
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: firstname,
                    last_name: lastname
                }
            }
        });

        // If there is an error, display the error message
        if (error) {
            Alert.alert(error.message);
            setLoading(false);
            return;
        }

        Alert.alert("User signed up successfully");
        setLoading(false); 

        // If login is successful, navigate to the Home Screen
        navigation.navigate('NavigationBar');
    }

    return(
        <View className="flex-1 bg-white px-8 pt-8"
                style={{borderTopLeftRadius: 50, borderTopRightRadius: 50}}>
            <View className="form space-y-2">
                <Text className="text-gray-700 ml-4">First Name</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    value={firstname}
                    onChangeText={setFirstname}
                    placeholder="Enter First Name"
                />
                <Text className="text-gray-700 ml-4">Last Name</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    value={lastname}
                    onChangeText={setLastname}
                    placeholder="Enter Last Name"
                />
                <Text className="text-gray-700 ml-4">Email Address</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Enter Email"
                />
                <Text className="text-gray-700 ml-4">Password</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Enter Password"
                />
                <Text className="text-gray-700 ml-4">Repeat Password</Text>
                <TextInput className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-5"
                    secureTextEntry={true}
                    value={repeatPassword}
                    onChangeText={setRepeatPassword} 
                    placeholder="Enter Password Again"
                />
                <TouchableOpacity 
                    className="py-3 bg-indigo-500 rounded-xl"
                    onPress={signUpWithEmail}
                    disabled={loading}
                >
                    <Text className="font-xl font-bold text-center text-white">
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </Text>
                </TouchableOpacity>                    
            </View>
        </View>
    );
}