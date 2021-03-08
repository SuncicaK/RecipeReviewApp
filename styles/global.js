import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
    },
    titleText: {
        padding: 24,
        fontFamily: 'LobsterBold',
        fontSize: 25,
        color: 'white'
    },
    input: {
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white',
        padding: 10,
        fontSize: 18,
        borderRadius: 6
    },
    containerForm: {
        padding: 6,
    },   
    errorText: {
        color: 'crimson',
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 6,
        textAlign: 'center'
    },
    aboutText: {
        fontFamily: 'LobsterBold',
        color: 'white',
        padding: 20,
        fontSize: 18,
        
    }

});

export const images = {
    ratings: {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}