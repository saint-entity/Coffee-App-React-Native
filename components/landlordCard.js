import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import { themeColors } from '../theme'
import PocketBase from 'pocketbase'
import { useNavigation } from '@react-navigation/native'
import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon } from 'react-native-heroicons/outline';
import * as Font from 'expo-font'
import Loading from './Loading'
const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';



export default function LandLordCard() {
  const navigation = useNavigation();
  const [isInitialized, setIsInitialized] = useState(false);
  const [renewalData,setRenewalData] = useState()
  const [fontsLoaded,setFontsLoaded] = useState(false)
  
  function truncateDate(dateString) {
    return dateString.slice(0, 10); 
  }

  async function loadFonts() {
    await Font.loadAsync({
      'Gotham': require('../assets/fonts/iCielGothamBold')
    });
    setFontsLoaded(true)
  }


  async function fetchData() {
    const pb = new PocketBase('https://c37c-81-156-108-4.ngrok-free.app');
    try {
      const result = await pb.collection('landlord').getFullList({
        sort: 'Renewal_Date',
    });;
      
      setRenewalData(result);
      setIsInitialized(true)
      return result
    } catch (error) {
      console.log(error);
    }
  }

  if (!isInitialized) {
    fetchData()
    loadFonts()
  }
  
  
  
  if (!isInitialized || !fontsLoaded) {
    return (
      
      <View style={{
        borderRadius: 40, 
        backgroundColor: themeColors.bgDark, 
        height: ios? height*0.1525 : height*0.35, 
        width: width*0.45,
        
      }}>
        <Loading/>
      </View>
    );
  }

  return (
    <View
    style={{
        borderRadius: 40, 
        backgroundColor: themeColors.bgDark, 
        height: ios? height*0.1525 : height*0.35, 
        width: width*0.45,
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
      }}
      >
        <Text
        style={{
            fontFamily: 'Gotham',
            color: 'white',
            padding:10,
            margin:5 
          }}>DUE LANDLORD CERTIFICATES</Text>
        {renewalData.map(item => (
        <View key={item.id}>
          <Text
          style={{
            borderRadius: 40, 
            backgroundColor: themeColors.bgLight,
            color: 'white',
            padding:10,
            margin:5 
          }}>{item.Name} {truncateDate(item.Renewal_Date)}</Text> 
        </View>
      ))}
    </View>
  )
}