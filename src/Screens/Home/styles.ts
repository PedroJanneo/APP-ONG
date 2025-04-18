import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 30
    },
    icons: {
    padding: 10,
    margin: 10
    },
    iconConfig: {
        position: 'absolute',
        top: 40,
        right: 20,
    },
    containerVazio: {
        flex: 1,
        borderColor: '#000',
        borderRadius: 10,
    },
    textoVazio: {
        fontSize: 20,
        color: '#000',
        textAlign: 'center',
        marginTop: 20,
    },

})