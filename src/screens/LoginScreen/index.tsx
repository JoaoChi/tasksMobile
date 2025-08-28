import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { s } from "./styles";
import { useRouter } from "expo-router";

export const LoginScreen: React.FC = () => {

  const router = useRouter()

  const handleLogin = () => {
    router.replace('/(tabs)')
  }

  return (
    <View style={s.container}>
      <View style={s.quadrado}>
        <Text style={s.textPrincipal}>
        TELINHA DE LOGIN!!!!!!! :O
      </Text>
      <TextInput style={s.textField} placeholder="E-mail"/>
      <TextInput style={s.textField} placeholder="Senha"/>
      <TouchableOpacity style={s.button} onPress={handleLogin}>
      <Text style={s.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}