import { StyleSheet, Text, View,TextInput} from 'react-native'
import ButtonPrimary from '../components/ButtonPrimary'
import InputPrimary from '../components/InputPrimary'

const AddTheme = ({inputTheme,handleInputTheme, handleAddTheme }) => {

  return (
    <View style={styles.container}>
        <View style={styles.inputsContainer}>
             <InputPrimary 
                text="Agregar un tema"
                value={inputTheme} 
                placeholder="Ingrese un tema" 
                onChangeText={handleInputTheme}
             />   
            <ButtonPrimary text="Agregar tema" onPress={handleAddTheme}/>
        </View>
    </View>
  )
}

export default AddTheme

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