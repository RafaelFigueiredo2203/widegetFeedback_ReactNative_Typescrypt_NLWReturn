import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { View } from 'react-native';
import {theme}  from './src/theme';
import AppLoading from 'expo-app-loading';
import { useFonts,Inter_500Medium, Inter_400Regular } from '@expo-google-fonts/inter';

import  Widget   from './src/components/Widget';
import React from 'react';


export default function App() {

  const [fontsLoaded] =  useFonts({
      Inter_400Regular,
      Inter_500Medium
  });

  if(!fontsLoaded){
    return  <AppLoading/>;
    
  }

  return (
    <View style={{
       flex: 1 ,
      backgroundColor: theme.colors.background,
    } }>
    


    <StatusBar
      style="light"
      backgroundColor="transparent"
      translucent
    />
        <Widget/>
    </View>
  );
}



