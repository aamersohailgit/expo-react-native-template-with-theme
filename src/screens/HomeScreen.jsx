import React from 'react';
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import { Welcome } from '../components';
import homeStyles from './styles/home.style';

const HomeScreen = () => {
    return (
        <SafeAreaView style={homeStyles.SafeArea}>
            <View style={homeStyles.appBarWrapper}>
                <View style={homeStyles.appBar}>
                    <Ionicons name="location-outline" size={24} color="black" />
                    <Text style={homeStyles.location}>Mumbai</Text>
                    <View style={{alignItems:"flex-end"}}>
                        <View style={homeStyles.cartCount}>
                            <Text style={homeStyles.cartNumber}>3</Text>
                        </View>
                        <TouchableOpacity>
                            <Fontisto name="shopping-bag" size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Welcome />
        </SafeAreaView>
    );
}

export default HomeScreen;
