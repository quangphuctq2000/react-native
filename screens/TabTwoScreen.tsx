import { StyleSheet } from "react-native";
import { View, Button } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";
import * as FirebaseCore from "expo-firebase-core";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: FirebaseCore.DEFAULT_APP_OPTIONS?.apiKey,
  authDomain: "project-9f526.firebaseapp.com",
  databaseURL: FirebaseCore.DEFAULT_APP_OPTIONS?.databaseURL,
  projectId: FirebaseCore.DEFAULT_APP_OPTIONS?.projectId,
  storageBucket: FirebaseCore.DEFAULT_APP_OPTIONS?.storageBucket,
  appId: FirebaseCore.DEFAULT_APP_OPTIONS?.appId,
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
createUserWithEmailAndPassword(auth, "phusqwerdnq@ttlab.com", "Phucnq@ttlab22")
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log(user);
  })
  .catch((error) => {
    console.log(error);

    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

export default function TabTwoScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(FirebaseCore.DEFAULT_APP_NAME);
  console.log(FirebaseCore.DEFAULT_APP_OPTIONS);

  return (
    <View>
      <TextInput value={email} onChangeText={setEmail} />
      <TextInput value={password} onChangeText={setPassword} />
      <Button onPress={async () => {}} title="login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
