import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { COLORS, SIZES } from "../../constants";

const Carousel = () => {
    const images = ["https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree"]

    return (
        <View style={styles.container}>
            <SliderBox
                images={images}
                dotColor={COLORS.primary}
                inactiveDotColor={COLORS.secondary}
                ImageComponentStyle={{ borderRadius: 15, width: "95%", marginTop: 5 }}
                autoplay
                circleLoop
            />
        </View>
    );
};

export default Carousel;

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        paddingTop: SIZES.xSmall,
        paddingBottom: SIZES.medium,
    },
});