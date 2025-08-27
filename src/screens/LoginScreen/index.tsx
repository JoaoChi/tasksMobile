import { Text, TextInput, View } from "react-native";
import { s } from "./styles";
import { useRouter } from "expo-router";

export const LoginScreen: React.FC = () => {

  const router = useRouter()

  const handleLogin = () => {
    router.replace('/(tabs)')
  }

  return (
    <View style={s.container}>
      <View>
        <Text style={s.textPrincipal}>
        Login
      </Text>
      <TextInput style={s.textField}>
        <Text>E-mail</Text>
      </TextInput>
      <TextInput style={s.textField}>
        <Text>Senha</Text>
      </TextInput>
      </View>
      
    </View>
  )
}