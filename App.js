import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AddTheme from './src/screens/AddTheme'
import AddPerson from './src/screens/AddPerson'
import AddExpense from './src/screens/AddExpense'

const App = () => {

  const [inputTheme, setInputTheme] = useState("")
  const [expense, setExpense] = useState({})
  const [inputNamePerson, setInputNamePerson] = useState("")
  const [theme, setTheme] = useState({})
  const [continueExpense, setContinueExpense] = useState(false) //despues se va

  useEffect(()=>{
    console.log(theme)
  },[theme])

  const handleInputTheme = (t) => {
    setInputTheme(t)
  }

  const handleInputNamePerson = (t) => {
    setInputNamePerson(t)
  }

  const handleExpense = (name,value) => {
    setExpense({...expense,[name]:value})
  }


  const handleAddTheme = () => {
    setTheme({
      name:inputTheme,
      expenses:[],
      persons:[],
      total:0
    })
    setInputTheme("")
  }

  const handleAddExpense = () => {

    setTheme({...theme,expenses:[...theme.expenses,expense]})
    setExpense({})
  }

  const handleAddPerson = () =>{
    setTheme({...theme,persons:[...theme.persons,inputNamePerson]})
    setInputNamePerson("")
  }

  return (
    <>
      {theme.name ?
        continueExpense ?
        <AddExpense
          expense={expense}
          handleExpense={handleExpense}
          handleAddExpense={handleAddExpense}

        />
        :
        <AddPerson
        inputNamePerson={inputNamePerson}
        handleInputNamePerson={handleInputNamePerson}
        handleAddPerson={handleAddPerson}
        setContinueExpense={setContinueExpense}
        
        />
      :
      <AddTheme 
      inputTheme={inputTheme} 
      handleInputTheme={handleInputTheme} 
      handleAddTheme={handleAddTheme}
    />
    }
    </>
  )
}

export default App

const styles = StyleSheet.create({})