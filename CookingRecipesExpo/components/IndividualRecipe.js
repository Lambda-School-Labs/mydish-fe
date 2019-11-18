import React, {useState, useEffect} from "react";
import {View,Text,ScrollView, Image, TouchableOpacity, Button} from 'react-native';
import axios from 'axios'

// import StockPhoto from '../assets/stock_photo.jpg'
import styles from '../styles/individualRecipeStyles.js'
import saves from '../assets/save_alt.png';
import clearBlackHeart from '../assets/clear-heart-black.png';
import editIcon from '../assets/edit_icon.png';
import clock from '../assets/timer.png';
import logo from '../assets/background.png';
import IndividualRecipeIngredients from './individualRecipeIngredients';
import axiosWithAuth from "../utils/axiosWithAuth";


var Cereal = "https://i.imgur.com/iYFK1mG.png"

const IndividualRecipe = props => {
    const [store, setStored] = useState([])
    const [token, setToken] = useState()

    //console.log("id in individualRecipe.js", props.navigation.getParam('paramsID', 'params not passed'))

    const id =  props.navigation.getParam('paramsID', 'params not passed')
    const status =  props.navigation.getParam('status', 'params not passed')
    // console.log("id in individualRecipe.js", id)

    // const getToken = async () => {  
    //     const token = await AsyncStorage.getItem('userToken');
    //     if (token) {
    //         setToken(token); //the token is used to determine if the <Like> component should be rendered or not
    //     }
      
    //    return token;
    // }
    // const Delete = async () => {
    //     const axiosAuth = await axiosWithAuth();
    //     axiosAuth.delete(`https://recipeshare-development.herokuapp.com/likes/${id}`)
    //     .then(res => console.log("CRAAAZY", res))
    //     .catch(err => console.log(err))
    // }
    
    useEffect(() =>{
        console.log('useEffect navigation props in <IndividualRecipe/>', props.navigation);
        axios
        .get(
          `https://recipeshare-development.herokuapp.com/recipes/${id}`

        )
        .then(res => {
            setStored(res.data);
     })
        .catch(err => console.log(err));

    },[]);

    const [color, setColor] = useState({active: 'Ingredients'})

    const tabsDisplay = (cat) => {
        const newActive= cat
        setColor({active: newActive})
      }

      const capitalize = (string) => {
        const newString = string.replace(/^\w/, c => c.toUpperCase());
        return newString
      }

      const im = ()=>{
        if(store.img==null){
            return(
                <Image source={{uri: Cereal}}
                style={{width: '100%', height: 345}} />
            )
        }else{
            return(
                <Image source={{uri: store.img}}
                style={{width:'100%', height: 345}} />
            )
        }
    }

    // console.log('store in individual recipes',store)
    return (
     <ScrollView>
            {im()}
            { console.log('img inside scrollview',store.img)}
            <Text style={styles.title}>{store.title}</Text>
            <View style={styles.time}>
                <View style={{flexDirection: 'row'}}>
                <Image source={logo} style={{width: 20, height: 20}}/> 
                <Text style={{marginLeft: 5}}>{store.innovator_name}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                    <Image source={clock} style={{width: 20, height: 20}}/> 
                    <Text>{store.minutes} minutes</Text>
                </View>
            </View>
         <Text style={styles.tags}>Tags</Text>
             <View style={{borderBottomWidth: 0.3, borderBottomColor: '#6B6F70',}}>
         <View style={styles.tagBox}>
        {store.categories && store.categories.map( cat => {
            return(
                <View key={cat}>
                    <Text style={styles.individualTags}>{capitalize(cat)}</Text>
                </View>
            )
        })}
        </View>
        </View>
        
        <View style={styles.ingredients}> 
            <TouchableOpacity onPress={() => tabsDisplay('Ingredients')}>
                <View style={color.active.includes('Ingredients') ? styles.titlesViewBorderIng : styles.titlesViewBorderIngOff}>
                    <Text style={color.active.includes('Ingredients') ? styles.titlesColorWhite : styles.titlesColorBlue}>Ingredients</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => tabsDisplay('Instructions')}>
                <View style={color.active.includes('Instructions') ? styles.titlesViewBorderInstOn : styles.titlesViewBorderInst}>
                    <Text style={color.active.includes('Instructions') ? styles.titlesColorWhite : styles.titlesColorBlue}>Instructions</Text>
                </View>
            </TouchableOpacity>
        </View >
        <View style={styles.details}>
      {store.ingredients && store.ingredients.map( ing => { return <IndividualRecipeIngredients ing={ing} key={ing.name}color={color}/>})}
         
         {store.steps && store.steps.map( (step, index) => {
            return(
                <View key={step.ordinal} style={color.active.includes('Ingredients') ? styles.hidden : styles.stepTextView}>
                        {/* .split('.')[0] */}
                    <Text style={styles.stepText}>{step.ordinal}. {step.body}</Text>
                </View>
            )
        })}
        <View style={{paddingRight:'80%'}}>
        <Text style={ color.active.includes('Ingredients') ? styles.hidden : styles.notes}>NOTES</Text>
       </View>
        <Text style={ color.active.includes('Ingredients') ? styles.hidden :styles.stepTextView}>{store.notes}</Text>
        </View>

    </ScrollView>
    );
  };

  export default IndividualRecipe;