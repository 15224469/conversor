import HomeScreen from "../screens/HomeScreen";
import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#FFFFFF',
    },
    Button: {
        backgroundColor: '#ffff',
        padding: 10,
        width: '80%',
        borderRadius: 10,
        marginBottom: 10,

    },
    ButtonText: {
        color: '#000000',
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'Garamond'
    },
});

export default HomeStyles;