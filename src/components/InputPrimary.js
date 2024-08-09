import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'

const InputPrimary = ({text,value,placeholder, onChangeText}) => {
  return (
    <View>
        <Text style={styles.inputsTitle}>{text}</Text>
        <TextInput 
            placeholder={placeholder}
            value={value} 
            onChangeText={onChangeText}
            style={styles.input}
        />
    </View>
  )
}

export default InputPrimary

const styles = StyleSheet.create({
    inputsTitle:{
        margin:10,
        fontSize:18,
        fontWeight:"bold"
      },
      input:{
        backgroundColor:"#D9D9D9",
        padding:10,
        width:"95%",
        marginHorizontal:"2.5%",
        marginVertical:10,
        borderRadius:3
      },
})