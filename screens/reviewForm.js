import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from '../shared/button';

const reviewSchema = yup.object({
  title: yup.string().required().min(4),
  recipe: yup.string().required().min(8),
  body: yup.string().required().min(8),
  rating: yup.string().required()
          .test('is-num-1-5', 'Rating must be a number 1-5', 
          (val) => {
          return parseInt(val) < 6 && parseInt(val) > 0;
          })
})

export default function ReviewForm({ addReview }) {

  return (
    
    <View style={globalStyles.containerForm}>
      <Formik
        initialValues={{ title: '', recipe: '', body: '', rating: '' }}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          actions.resetForm(); 
          addReview(values);
        }}
      >
        {props => (
          <View >
            <TextInput
              style={globalStyles.input}
              placeholder='Recipe title..'
              onChangeText={props.handleChange('title')}
              value={props.values.title}
              onBlur={props.handleBlur('title')}
            />
            <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={100}
              placeholder='Recipe (ingredients and procedure)..'
              onChangeText={props.handleChange('recipe')}
              value={props.values.recipe}
              onBlur={props.handleBlur('recipe')}
            />
            <Text style={globalStyles.errorText}>{props.touched.recipe && props.errors.recipe}</Text>

            <TextInput
              style={globalStyles.input}
              multiline minHeight={100}
              placeholder='Review recipe...'
              onChangeText={props.handleChange('body')}
              value={props.values.body}
              onBlur={props.handleBlur('body')}
            />
            <Text style={globalStyles.errorText}>{props.touched.body && props.errors.body}</Text>

            <TextInput 
              style={globalStyles.input}
              placeholder='Your rating (1 - 5)..'
              onChangeText={props.handleChange('rating')}
              value={props.values.rating}
              keyboardType='numeric'
              onBlur={props.handleBlur('rating')}
            />
            <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
            
            <FlatButton text='submit' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
    
  );
}