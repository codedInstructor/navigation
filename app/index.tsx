import { Link } from "expo-router";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>LOGIN PAGE</Text>

      <TextInput
        placeholder="username"
        style={{ borderWidth: 1, width: "90%" }}
      />

      <TextInput
        placeholder="password"
        style={{ borderWidth: 1, width: "90%" }}
      />

      <Link href="/Register" asChild>
        <Text style={{ color: "blue", fontWeight: "bold", fontSize: 20 }}>
          GO TO REGISTER
        </Text>
      </Link>

      <Link href="/account/MyAddress" asChild>
        <TouchableOpacity>
          <Text>GO TO MY ADDRESSES</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}
