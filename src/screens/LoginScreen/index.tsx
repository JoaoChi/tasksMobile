import { Text, View } from "react-native";
import { s } from "./styles";
import { useRouter } from "expo-router";

export const LoginScreen: React.FC = () => {

  const router = useRouter()

  const handleLogin = () => {
    router.replace('/(tabs)')
  }

  return (
    <View style={s.container}>
      <Text>
        Olá
      </Text>
    </View>
  )
}