import { StyleSheet, View } from 'react-native'
import ButtonPrimary from '../components/ButtonPrimary'
import InputPrimary from '../components/InputPrimary'

const AddPerson = ({inputNamePerson,handleInputNamePerson,handleAddPerson,setContinueExpense}) => {

  return (
    <View style={styles.container}>
        <View style={styles.inputsContainer}>
            <InputPrimary
            text="Agregar Pesonas" 
            value={inputNamePerson} 
            onChangeText={handleInputNamePerson} 
            placeholder="Ingrese una persona"
            />
            <ButtonPrimary text="Agregar persona" onPress={handleAddPerson}/>
            <ButtonPrimary text="Continuar" onPress={()=> setContinueExpense(true)}/>
        </View>
    </View>
  )
}

export default AddPerson

const styles = StyleSheet.create({
    container:{
        paddingTop:30,
        flex:1,
        backgroundColor:"red",
        justifyContent:"center"
    },
    inputsContainer:{
        backgroundColor:"white",
        width:"90%",
        marginHorizontal:"5%",
        padding:20,
        borderRadius:3,
        gap:20
    }
})