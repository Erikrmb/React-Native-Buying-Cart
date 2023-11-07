import { Dimensions, View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import top from '.../../../assets/topo.png'
import StyledText from '../../../components/Text'

const width = Dimensions.get('screen').width

export default function Top({ title }) {
  return (
  <>
    <Image source={top} style={styles.top} />
    <StyledText style={styles.title} >{ title }</StyledText>
  </>
  )
}

const styles = StyleSheet.create({
  top: {
    width: "100%",
    height: 578 / 768 * width,
  },
  title: {
    width: "100%",
    position: "absolute",
    textAlign: "center",
    fontSize: 16,
    lineHeight: 26,
    color: "white",
    fontWeight: "bold",
    padding: 16
  },
})