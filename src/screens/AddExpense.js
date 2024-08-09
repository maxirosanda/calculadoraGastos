import { StyleSheet, Text, View } from 'react-native'
import ButtonPrimary from '../components/ButtonPrimary'
import InputPrimary from '../components/InputPrimary'

const AddExpense = ({expense,handleExpense,handleAddExpense}) => {

  return (
    <View style={styles.container}>
        <View style={styles.inputsContainer}>
            <Text>Agregar Gastos</Text>
            <InputPrimary 
                text="Nombre del Gasto"
                value={expense.name} 
                onChangeText={(t)=> handleExpense("name",t)}
                placeholder="Ingrese nombre del gasto"
            />
            <InputPrimary 
                text="Valor"
                value={expense.value} 
                onChangeText={(t)=> handleExpense("value",t)} 
                placeholder="Ingrese valor del gasto"
            />
            <InputPrimary 
                text="Quien pago?"
                value={expense.buyer} 
                onChangeText={(t)=>handleExpense("buyer",t)}
                placeholder="Ingrese quien realizo el gasto"
            />
            
            <ButtonPrimary text="Agregar gasto" onPress={handleAddExpense}/>
        </View>
    </View>
  )
}

export default AddExpense

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
        gap:5
    }
})