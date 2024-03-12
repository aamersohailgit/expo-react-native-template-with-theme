import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './welcome.style';
import { COLORS, SIZES } from '../../../constants';
import { Searchbar, FAB } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


const Welcome = () => {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.welcomeText(COLORS.black, SIZES.xSmall)}>Find The Most</Text>
                <Text style={styles.welcomeText(COLORS.primary, 0)}>Comfortable Cloths</Text>
            </View>
        </View>
    );
};

export default Welcome;