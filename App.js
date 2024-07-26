import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [inputTheme,setInputTheme] = useState("")
  const [inputNameExpense,setInputNameExpense] = useState("")
  const [inputValueExpense,setInputValueExpense] = useState("")
  const [inputNameBuyer,setInputNameBuyer] = useState("")
  const [inputNamePerson,setInputNamePerson] = useState("")
  const [theme,setTheme] = useState({})

  useEffect(()=>{
    console.log(theme)
  },[theme])


  const handleAddTheme = () => {
    setTheme({
      name:inputTheme,
      expense:[],
      persons:[],
      total:0
    })
    setInputTheme("")
  }

  const handleAddExpense = () => {

    const expense = {
      name:inputNameExpense,
      value:inputValueExpense,
      buyer:inputNameBuyer
    }

    setTheme({...theme,expense:[...theme.expense,expense]})
    setInputNameExpense("")
    setInputValueExpense("")
    setInputNameBuyer("")
  }

  const handleAddPerson = () =>{
    setTheme({...theme,persons:[...theme.persons,inputNamePerson]})
    setInputNamePerson("")
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputsContainer}>
        <Text style={styles.inputsTitle}>Tema de la Compra</Text>
        <TextInput 
          placeholder='Ingrese tema' 
          value={inputTheme} 
          onChangeText={setInputTheme}
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={handleAddTheme}>
          <Text style={styles.textButton} >Agregar Tema</Text>
        </Pressable>
      </View>
      <View style={styles.inputsContainer}>
        <Text style={styles.inputsTitle}>Agregar Persona</Text>
        <TextInput 
          placeholder='Ingrese nombre de una persona' 
          value={inputNamePerson} 
          onChangeText={setInputNamePerson}
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={handleAddPerson}>
          <Text style={styles.textButton} >Agregar Persona</Text>
        </Pressable>
      </View>
      <View style={styles.inputsContainer}>
        <Text style={styles.inputsTitle}>Agregar Gastos</Text>
        <TextInput 
          placeholder='Ingrese nombre del gasto' 
          value={inputNameExpense} 
          onChangeText={setInputNameExpense}
          style={styles.input}
        />
           <TextInput 
          placeholder='Ingrese valor del gasto ' 
          value={inputValueExpense} 
          onChangeText={setInputValueExpense}
          style={styles.input}
        />
           <TextInput 
          placeholder='Ingrese nombre de la persona que realizo el pago' 
          value={inputNameBuyer} 
          onChangeText={setInputNameBuyer}
          style={styles.input}
        />
        <Pressable style={styles.button} onPress={handleAddExpense}>
          <Text style={styles.textButton} >Agregar Tema</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    paddingTop:30,
    flex:1,
    backgroundColor:"red"
  },
  inputsContainer:{},
  inputsTitle:{
    color:"white",
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
  button:{
    width:"95%",
    marginHorizontal:"2.5%",
    marginVertical:10,
    backgroundColor:"#88147C",
    padding:10,
    justifyContent:"center",
    alignItems:"center"
  },
  textButton:{
    color:"white"
  }
})