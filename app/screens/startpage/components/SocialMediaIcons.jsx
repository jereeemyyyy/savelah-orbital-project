import { Image, TouchableOpacity, View } from 'react-native';

export default function SocialMediaIcons() {
    return (
        <View className="flex-row justify-center space-x-12">
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../../../assets/images/google.png')}
                    className="w-10 h-10"/>
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../../../assets/images/apple.png')}
                    className="w-10 h-10"/>
            </TouchableOpacity>
            <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
                <Image source={require('../../../assets/images/facebook.png')}
                    className="w-10 h-10"/>
            </TouchableOpacity>
        </View>
    );
}