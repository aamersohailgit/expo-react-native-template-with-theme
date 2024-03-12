import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Button, Title, Paragraph } from 'react-native-paper';

const ProductCardView = ({ product }) => {
 return (
    <Card style={styles.container}>
      <Card.Content>
        <Title>{product.title}</Title>
        <Paragraph>{product.description}</Paragraph>
      </Card.Content>
      <Card.Cover source={{ uri: product.image }} />
      <Card.Actions>
        <Button onPress={() => console.log('Add to favorites')}>Add to Favorites</Button>
      </Card.Actions>
    </Card>
 );
};

const styles = StyleSheet.create({
 container: {
    margin: 10,
    alignContent: 'center',
 },
});

export default ProductCardView;
