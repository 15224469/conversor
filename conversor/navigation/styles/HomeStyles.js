import { Button, StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20
    },
    Button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 5,
    },
    ButtonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default HomeStyles