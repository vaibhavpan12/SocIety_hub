// components/LoginForm.js
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function LoginForm({ onSwitchToRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      {/* Email Field */}
      <Text style={styles.label}>Email Address</Text>
      <View style={styles.inputRow}>
        <Text style={styles.inputIcon}>🔵</Text>
        <TextInput
          style={styles.input}
          placeholder="rahul@society.com"
          placeholderTextColor="#9CA3AF"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Field */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.inputRow}>
        <Text style={styles.inputIcon}>🔒</Text>
        <TextInput
          style={styles.input}
          placeholder="••••••••"
          placeholderTextColor="#9CA3AF"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity style={styles.forgotWrap}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("HomeScreen")}  activeOpacity={0.85}>
        <Text style={styles.btnText}>Login to Account</Text>
      </TouchableOpacity>

      {/* Switch to Register */}
      <Text style={styles.bottomText}>
        No account?
        <Text style={styles.link} onPress={onSwitchToRegister}>
          Register here
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 10,
  },

  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 6,
    marginTop: 14,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    paddingHorizontal: 14,
    height: 52,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },

  inputIcon: {
    fontSize: 16,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 14,
    color: '#111827',
  },

  forgotWrap: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginBottom: 22,
  },

  forgot: {
    color: '#0D7377',
    fontWeight: '600',
    fontSize: 13,
  },

  button: {
    backgroundColor: '#0D7377',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: '#0D7377',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.35,
    shadowRadius: 10,
    elevation: 6,
  },

  btnText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 0.3,
  },

  bottomText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 13,
    color: '#6B7280',
  },

  link: {
    color: '#0D7377',
    fontWeight: '700',
  },
});