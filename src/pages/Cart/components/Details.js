import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import StyledText from '../../../components/Text'

export default function Details({ name, farmLogo, farmName, description, price, button }) {
  return (
    <>
      <StyledText style={styles.name} >{ name }</StyledText>
      <View style={styles.farmContainer}>
        <Image source={farmLogo} style={styles.farmImage}/>
        <StyledText style={styles.farmName}>{ farmName }</StyledText>
      </View>
      <StyledText style={styles.description}>
        { description }
      </StyledText>
      <StyledText style={styles.price}>{ price }</StyledText>

      <TouchableOpacity style={styles.button}>
        <StyledText style={styles.buttonText}>{ button }</StyledText>
      </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    cart:{
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    name: {
      color: "#464646",
      fontSize: 26,
      lineHeight: 42,
      fontWeight: "bold"
    },
    farmName: {
      fontSize: 16,
      lineHeight: 26,
      marginLeft: 12,
    },
    farmContainer: {
      flexDirection: "row",
      paddingVertical: 12,
    },
    farmImage: {
      width: 32,
      height: 32,
    },  
    description:{
      color: "#A3A3A3",
      fontSize: 16,
      lineHeight: 26,
    },
    price: {
      color: "#2A9F85",
      fontWeight: "bold",
      fontSize: 26,
      lineHeight: 42,
      marginTop: 8,
    },
    button: {
      marginTop: 16,
      backgroundColor: "#2A9F85",
      paddingVertical: 16,
      borderRadius: 6,
    },
    buttonText: {
      textAlign: "center",
      color: "#FFFFFF",
      fontSize: 16,
      lineHeight: 26,
      fontWeight: "bold",
    },
  })