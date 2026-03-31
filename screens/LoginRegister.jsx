// screens/LoginRegister.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import HeaderSection from '../components/HeaderSection';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

export default function LoginRegister({ navigation }) {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <HeaderSection
          icon="🏢"
          title="SocietyHub"
          subtitle="Smart Building Society Management"
        />

        {/* Tab Pill — overlaps header bottom */}
        <View style={styles.tabWrap}>
          <View style={styles.tabPill}>
            <TouchableOpacity
              style={[styles.tab, activeTab === 'login' && styles.tabActive]}
              onPress={() => setActiveTab('login')}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabText, activeTab === 'login' && styles.tabTextActive]}>
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.tab, activeTab === 'register' && styles.tabActive]}
              onPress={() => setActiveTab('register')}
              activeOpacity={0.8}
            >
              <Text style={[styles.tabText, activeTab === 'register' && styles.tabTextActive]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Form Content */}
        <View style={styles.formArea}>
          {activeTab === 'login' ? (
            <LoginForm onSwitchToRegister={() => setActiveTab('register')} />
          ) : (
            <RegisterForm />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  tabWrap: {
    alignItems: 'center',
    marginTop: -24,
    zIndex: 10,
  },

  tabPill: {
    flexDirection: 'row',
    backgroundColor: '#E5E7EB',
    borderRadius: 22,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  tab: {
    paddingVertical: 10,
    paddingHorizontal: 36,
    borderRadius: 18,
  },

  tabActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#9CA3AF',
  },

  tabTextActive: {
    color: '#0D7377',
  },

  formArea: {
    flex: 1,
    marginTop: 16,
  },
});