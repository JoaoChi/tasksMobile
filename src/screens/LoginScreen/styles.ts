import { StyleSheet, useColorScheme } from "react-native";
import { Colors } from "../../../constants/Colors";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors[useColorScheme() ?? 'light'].background,
  },
  textPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 60,
    color: Colors[useColorScheme() ?? 'light'].text,
  },
  textField: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors[useColorScheme() ?? 'light'].border,
    width: '50%',
    height: 40,
    textAlign: 'center',
    color: Colors[useColorScheme() ?? 'light'].text,
  },
  quadrado: {
    width: '50%',
    height: '70%',
    backgroundColor: Colors[useColorScheme() ?? 'light'].card,
    gap: 20,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors[useColorScheme() ?? 'light'].border,
  },
  button: {
    backgroundColor: Colors[useColorScheme() ?? 'light'].tint,
    width: '50%',
    height: 40,
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors[useColorScheme() ?? 'light'].border,
  },
  buttonText: {
    color: Colors[useColorScheme() ?? 'light'].background,
    alignSelf: 'center',
  }
});
