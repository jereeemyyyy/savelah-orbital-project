import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, View } from "react-native";

export default function BackButton() {

    const navigation = useNavigation();

    return (
        <View className="flex-row justify-start">
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="bg-indigo-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            >
                <ArrowLeftIcon size="20" color="white"/>
            </TouchableOpacity>
        </View>
    );
}