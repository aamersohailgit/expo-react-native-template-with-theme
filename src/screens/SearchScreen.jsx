import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import searchStyle from './styles/search.style';

const SearchScreen = () => {
    return (
        <SafeAreaView style={searchStyle.SafeArea}>
            <View style={searchStyle.container}>
            <Searchbar
            placeholder="Search"
            onSubmitEditing={()=>console.log('Search softkey pressed!')}
            />
            </View>

        </SafeAreaView>
    );
}



export default SearchScreen;