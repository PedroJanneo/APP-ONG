import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    zIndex: 1,
  },
  mapa: {
    width: "100%",
    height: "100%",
    top: -100,
  },
  inputContainer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 20,
    gap: 10,
  },
  styleInput: {
    height: 45,
    width: "100%",
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderColor: "#ccc",
  },
  buttonMaps: {
    backgroundColor: "#FFB347",
    borderRadius: 25,
    height: 45,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textButton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    position: "absolute",
    bottom: 150,
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    width: "100%",
    textAlign: "center",
  },
});
