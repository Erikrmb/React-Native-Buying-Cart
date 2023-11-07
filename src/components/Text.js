import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function StyledText({ children, style }) {
  let variableStyle = styles.text

  if (style?.fontWeight === "bold"){
    variableStyle = styles.boldText
  }

  return  <Text style={[style, variableStyle]}>{ children }</Text>
}

const styles = StyleSheet.create({
  text:{
      fontFamily: "RegularMontserrat",
      fontWeight: "normal",
  },
  boldText: {
      fontFamily: "BoldMontserrat",
      fontWeight: "normal",
  }
})