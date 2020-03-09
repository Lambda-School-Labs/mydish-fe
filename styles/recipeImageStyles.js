import { StyleSheet } from "react-native";
import theme from "../styles/theme.style";

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        height: 300,
        backgroundColor: "whitesmoke",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        height: "100%",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    newImage: {
        width: 32,
        height: 32,
        marginRight: 16,
        marginBottom: 4,
        backgroundColor: theme.NAV_BAR_BACKGROUND_COLOR,
        padding: 5,
        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: 22,
        height: 18,
    },
    uploadModal: {
        height: 200,
        position: "relative",
        top: -100,
        marginLeft: 40,
        marginRight: 40,
        backgroundColor: theme.NAV_BAR_BACKGROUND_COLOR,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "90%",
    },
    iconLarge: {
        height: 60,
        width: 60,
    },
    iconLargeCamera: {
        height: 57,
        width: 66,
    },
});

module.exports = styles;
