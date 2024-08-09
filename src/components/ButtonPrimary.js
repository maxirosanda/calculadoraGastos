import { StyleSheet, Text,Pressable } from 'react-native'

const ButtonPrimary = ({text, onPress}) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>{text}</Text>
    </Pressable>
  )
}

export default ButtonPrimary

const styles = StyleSheet.create({
    button:{
        width:"95%",
        marginHorizontal:"2.5%",
        marginVertical:10,
        backgroundColor:"#88147C",
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:3
      },
      textButton:{
        color:"white"
      }
})