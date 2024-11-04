import { Button, StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        ImageBackground:'https://t3.ftcdn.net/jpg/05/00/85/04/360_F_500850425_KGzvN3zMn2Uif4Xa1eQDbV3bqgTNzA4H.jpg' ,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 20
    },
    Button: {
        backgroundColor: '#3498db',
        padding: 25,
        borderRadius: 5,
    },
    ButtonText: {
        color: '#000000',
        fontSize: 16,
    },
});

export default HomeStyles