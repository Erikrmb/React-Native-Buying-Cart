import { ScrollView, StyleSheet, View, FlatList } from 'react-native'
import Top from './components/Top'
import Details from './components/Details'
import Item from './components/Item'
import StyledText from '../../components/Text'



export default function Cart({ top, details, items }) {
  return (
    <FlatList
        data={items.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return <>
            <Top {...top} />
            <View style={styles.cart}>
              <Details {...details} />
              <StyledText style={styles.title}>{ items.title }</StyledText>
            </View>
          </>
        }}
      />
    
  )
}

const styles = StyleSheet.create({
  cart:{
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title:{
    color: "#464646",
    fontWeight: "bold",
    marginTop:32,
    marginBottom: 8,
    fontSize: 20, 
    lineHeight: 32,
  },
  
})
