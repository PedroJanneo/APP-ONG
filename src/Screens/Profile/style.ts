import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
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
  photoContainer: {
    alignItems: "center",
    marginTop: 100,
    marginBottom: 30,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#E0E0E0",
  },
  photoText: {
    marginTop: 10,
    fontSize: 14,
    color: "#000",
  },
  formContainer: {
    width: "100%",
    gap: 15,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#000",
    borderRadius: 8,
    paddingHorizontal: 15,
    color: "#fff",
    fontSize: 14,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 20,
  },
  deleteButton: {
    backgroundColor: "#000",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  deleteButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
  generateButton: {
    backgroundColor: "#FFB347",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
  },
  generateButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
}); 