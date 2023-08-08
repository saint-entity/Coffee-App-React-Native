import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {themeColors} from '../theme';
import { StatusBar } from 'expo-status-bar';
import { categories, coffeeItems } from '../constants';
import Carousel from 'react-native-snap-carousel';
import CoffeeCard from '../components/coffeeCard';
import { BellIcon, MagnifyingGlassIcon,EllipsisHorizontalIcon } from 'react-native-heroicons/outline'
import { MapPinIcon } from 'react-native-heroicons/solid'
import LandLordCard from '../components/landlordCard';
import { AlignJustify } from 'react-native-feather';

const {width, height} = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function TBDScreen() {
  const [activeCategory, setActiveCategory] = useState(1);

  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />


      <SafeAreaView className={ios? '-mb-8': ''}>
        {/* avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center">
        <TouchableOpacity>
          <Image source={require('../assets/images/avatar.png')} 
            className="h-9 w-9 rounded-full" />
        </TouchableOpacity>
          
          <View className="flex-row items-center space-x-2">
          </View>
          <TouchableOpacity>
                <EllipsisHorizontalIcon size="27" color="black" />
          </TouchableOpacity>
          
        </View>
        
          
      </SafeAreaView>

      {/* cards */}
      <View className={`overflow-visible flex justify-center flex-1 ${ios? 'mt-10':''}`}>
        <View style={{
          display:'flex',
          flexDirection:'row',
          justifyContent:'space-around'
        }}>
          
          
        </View>
        
      </View>
      
      
    </View>
  )
}
