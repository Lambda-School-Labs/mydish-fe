import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import UserPrepTime from './StyledComponents/UserPrepTime';
import placeholder from '../assets/recipe-image-placeholder.png';
import styles from '../styles/recipe-styles';

function Version(props) {
    const {recipe, recipeList, navigation} = props;

   
    return (
        <View style={{margin: 20, width: 100}}>
            <TouchableOpacity onPress={() => navigation.navigate('IndividualR', {recipeID: recipe.id, recipeList : recipeList})}>
                    <Image source={recipe.img ? {uri : recipe.img} : placeholder} style={{width: 100, height: 100}}/>
                    <Text style={{textAlign: 'center', marginTop: 10}}>{recipe.title}</Text>
            </TouchableOpacity>
           {/* <TouchableOpacity onPress={() => navigation.navigate('IndividualR', {recipeID: recipe.id, recipeList : recipeList})}>
                <Image  source={recipe.img ? {uri : recipe.img} : placeholder} style={{width: 100, height: 100}}/>

                <Text style={styles.text}>{recipe.title}</Text>

                <UserPrepTime>
                    <Text style={styles.username}>{recipe.username || recipe.author}</Text>
                    <Text style={styles.prep}>{recipe.minutes} min.</Text>
                </UserPrepTime>

            </TouchableOpacity> */}
        </View>
    )
} 

export default Version;