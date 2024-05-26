import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function BackButton() {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-indigo-500 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
        >
            <ArrowLeftIcon size="20" color="white"/>
        </TouchableOpacity>
    );
}