import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
  },
  icons: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1,
  },
  iconConfig: {
    position: "absolute",
    top: 40,
    right: 20,
  },
  textoVazio: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
    textAlign: "center",
  },
  styleInput: {
    height: 45,
    width: "90%",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderColor: "#ccc",
    marginBottom: 10,
  },
  styleButton: {
    backgroundColor: "#FFB347",
    borderRadius: 25,
    height: 45,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  styleTextButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
