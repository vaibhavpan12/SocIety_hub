// screens/RoleSelection.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import HeaderSection from '../components/HeaderSection';

const ROLES = [
  {
    key: 'resident',
    label: 'Resident',
    desc: 'View & pay bills',
    icon: '🏡',
  },
  {
    key: 'secretary',
    label: 'Secretary',
    desc: 'Manage society',
    icon: '🗂️',
  },
];

export default function RoleSelection({ navigation }) {
  const [selected, setSelected] = useState('resident');

  // Dummy society data — replace with real data from API/navigation params
  const society = {
    name: 'Green Valley Heights',
    location: 'Pune, Maharashtra',
    flat: 'Flat B-204',
    code: 'GVH-2024',
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <HeaderSection
        icon="👤"
        title="Who are you?"
        subtitle="Select your role to continue"
      />

      <View style={styles.body}>
        {/* Role Cards */}
        <View style={styles.rolesRow}>
          {ROLES.map(role => (
            <TouchableOpacity
              key={role.key}
              style={[
                styles.roleCard,
                selected === role.key && styles.roleCardActive,
              ]}
              onPress={() => setSelected(role.key)}
              activeOpacity={0.8}
            >
              <Text style={styles.roleIcon}>{role.icon}</Text>
              <Text
                style={[
                  styles.roleLabel,
                  selected === role.key && styles.roleLabelActive,
                ]}
              >
                {role.label}
              </Text>
              <Text style={styles.roleDesc}>{role.desc}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Society Info Card */}
        <View style={styles.societyCard}>
          <Text style={styles.societyTag}>SOCIETY</Text>
          <Text style={styles.societyName}>{society.name}</Text>
          <View style={styles.societyLocation}>
            <Text style={styles.pinIcon}>📍</Text>
            <Text style={styles.societyLocationText}>{society.location}</Text>
          </View>
        </View>

        {/* Flat Info Row */}
        <View style={styles.flatRow}>
          <Text style={styles.flatIcon}>🏠</Text>
          <Text style={styles.flatText}>{society.flat}</Text>
        </View>

        {/* Continue Button */}
        <TouchableOpacity style={styles.button} activeOpacity={0.85}>
          <Text style={styles.btnText}>
            Continue as {selected === 'resident' ? 'Resident' : 'Secretary'}
          </Text>
        </TouchableOpacity>

        {/* Society Code */}
        <Text style={styles.codeText}>
          Society Code:{' '}
          <Text style={styles.codeValue}>{society.code}</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },

  body: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 28,
  },

  /* Role Cards */
  rolesRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },

  roleCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },

  roleCardActive: {
    borderColor: '#0D7377',
    backgroundColor: '#F0FDFC',
  },

  roleIcon: {
    fontSize: 30,
    marginBottom: 8,
  },

  roleLabel: {
    fontSize: 15,
    fontWeight: '700',
    color: '#6B7280',
    marginBottom: 4,
  },

  roleLabelActive: {
    color: '#0D7377',
  },

  roleDesc: {
    fontSize: 12,
    color: '#9CA3AF',
  },

  /* Society Info */
  societyCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 18,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },

  societyTag: {
    fontSize: 10,
    fontWeight: '700',
    color: '#9CA3AF',
    letterSpacing: 1.2,
    marginBottom: 4,
  },

  societyName: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 6,
  },

  societyLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },

  pinIcon: {
    fontSize: 13,
  },

  societyLocationText: {
    fontSize: 13,
    color: '#6B7280',
  },

  /* Flat Row */
  flatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderWidth: 1.5,
    borderColor: '#E5E7EB',
    marginBottom: 24,
    gap: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
  },

  flatIcon: {
    fontSize: 20,
  },

  flatText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#374151',
  },

  /* Button */
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

  codeText: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 13,
    color: '#9CA3AF',
  },

  codeValue: {
    color: '#0D7377',
    fontWeight: '700',
  },
});