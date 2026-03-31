// components/HomeHeader.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header({ name }) {
  // 👇 Dynamic Greeting Logic
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning 🌤️";
    if (hour < 18) return "Good Afternoon ☀️";
    return "Good Evening 🌙";
  };

  // 👇 Initials (RS)
  const getInitials = (name) => {
    if (!name) return "";
    const words = name.split(" ");
    return words.map((w) => w[0]).join("").toUpperCase();
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>{getGreeting()}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>

      <View style={styles.avatar}>
        <Text style={styles.avatarText}>{getInitials(name)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: "#fff",
    paddingTop:60
  },

  greeting: {
    color: "#9CA3AF",
    fontSize: 14,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#111827",
  },

  avatar: {
    backgroundColor: "#0F766E",
    width: 45,
    height: 45,
    borderRadius: 22,
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#fff",
    fontWeight: "bold",
  },
});