import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#a771ffff'
  },
  textPrincipal: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 60
  },
  textField: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000',
    width: '50%',
    height: 40,
    textAlign: 'center'
  },
  quadrado: {
    width: '50%',
    height: '70%',
    backgroundColor: 'rgba(189, 182, 238, 0.5)',
    gap: 20,
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(67, 67, 67, 0.5)'
  },
  button: {
    backgroundColor: 'rgba(31, 5, 178, 0.5)',
    width: '50%',
    height: 40,
    justifyContent: 'center',
    borderRadius: 8
  },
  buttonText: {
    color: '#FFFF',
    alignSelf: 'center'
  }
})