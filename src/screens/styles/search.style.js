import { StyleSheet, Platform, StatusBar, Dimensions } from "react-native";
import {COLORS, SIZES} from "../../../constants";


const searchStyle = StyleSheet.create({
    SafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        justifyContent: 'flex-end',
        paddingBottom: 15,
    },
    container:{
        marginHorizontal: SIZES.xSmall,
        marginBottom: 60,
    }

});


export default searchStyle;