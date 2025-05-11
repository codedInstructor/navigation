import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Register = () => {
  return (
    <View
      style={{
        backgroundColor: "blue",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href="/" asChild>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            padding: 5,
          }}
        >
          <Text>GO TO HOME PAGE</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
