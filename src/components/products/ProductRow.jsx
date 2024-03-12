import React from 'react';
import { View, FlatList, StyleSheet, Dimensions } from 'react-native';
import { Card, Title } from 'react-native-paper';
import ProductCardView from './ProductCardView';

const ProductRow = () => {
    const products = [
        {
            id: 1,
            title: "Product 1",
            description: "This is product 1 description.",
            image: "https://source.unsplash.com/1024x768/?muslimgirl",
        },
        {
            id: 2,
            title: "Product 2",
            description: "This is product 2 description.",
            image: "https://source.unsplash.com/1024x768/?Islamic-girl",
        },
        {
            id: 3,
            title: "Product 3",
            description: "This is product 3 description.",
            image: "https://source.unsplash.com/1024x768/?headscarf",
        }
    ];

    const renderProduct = ({ item }) => (
        <ProductCardView product={item} />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={renderProduct}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                key={2}
            />
        </View>
    );
};

export default ProductRow;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 12,
    },
    card: {
        flex: 1,
        margin: 10,
        width: Dimensions.get('window').width / 2 - 20,
    },
});