import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard, ImageBackground, Modal} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';
import ReviewForm from './reviewForm';

export default function Homepage({ navigation }) {
    const [modalOpen, setModalOpen] = useState(false);
    const [review, setReview]  = useState([
        { title: 'Mexican Burrito', rating: 5, body: 'lorem ipsum', recipe: 'lorem ipsum', key: '1' },
        { title: 'Gyros', rating: 4, body: 'lorem ipsum', recipe: 'lorem ipsum', key: '2' },
        { title: 'Lasagna', rating: 3, body: 'lorem ipsum', recipe: 'lorem ipsum', key: '3' },
    ]);

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReview((currentReviews) => {
          return [review, ...currentReviews]
        });
        setModalOpen(false);
    }

    return(
        <ImageBackground style={globalStyles.container} source={require('../assets/placeholder.jpg')}>
           <Modal visible={modalOpen} animationType='slide'>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.modalContent}>
                <MaterialIcons 
                    name='close'
                    size={24}
                    style={{...styles.modalToggle, ...styles.modalClose }}
                    onPress={() => setModalOpen(false)}
            />
                <ReviewForm addReview={addReview}/>
                </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList 
                data={review}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => 
                    navigation.navigate('ReviewRecipe', item)}>
                        <Card>
                            <Text style={globalStyles.titleText}>{item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    modalContent: {
        flex: 1,
        backgroundColor: 'white'
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: 'gray',
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    }
})

