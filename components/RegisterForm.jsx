// components/RegisterForm.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const FIELDS = [
  { key: 'fullName',     label: 'Full Name',       placeholder: 'Rahul Sharma',      icon: '👤', keyboardType: 'default' },
  { key: 'phone',        label: 'Phone Number',    placeholder: '+91 98765 43210',   icon: '📱', keyboardType: 'phone-pad' },
  { key: 'flat',         label: 'Flat / Unit No.', placeholder: 'B-204',             icon: '🏠', keyboardType: 'default' },
  { key: 'societyCode',  label: 'Society Code',    placeholder: 'GVH-2024',          icon: '🔑', keyboardType: 'default' },
  { key: 'password',     label: 'Password',        placeholder: '••••••••',          icon: '🔒', secure: true },
];

export default function RegisterForm() {
  const [form, setForm] = useState({
    fullName: '', phone: '', flat: '', societyCode: '', password: '',
  });

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }));

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {FIELDS.map(field => (
        <View key={field.key}>
          <Text style={styles.label}>{field.label}</Text>
          <View style={styles.inputRow}>
            <Text style={styles.inputIcon}>{field.icon}</Text>
            <TextInput
              style={styles.input}
              placeholder={field.placeholder}
              placeholderTextColor="#9CA3AF"
              secureTextEntry={!!field.secure}
              keyboardType={field.keyboardType || 'default'}
              autoCapitalize="none"
              value={form[field.key]}
              onChangeText={val => update(field.key, val)}
            />
          </View>
        </View>
      ))}

      <TouchableOpacity style={styles.button} activeOpacity={0.85}>
        <Text style={styles.btnText}>Create Account</Text>
      </TouchableOpacity>

      <View style={styles.bottomSpacer} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },

  container: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 30,
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

  button: {
    backgroundColor: '#0D7377',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 28,
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

  bottomSpacer: { height: 20 },
});