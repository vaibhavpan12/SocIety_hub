// components/HeaderSection.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HeaderSection({ icon = '🏢', title = 'SocietyHub', subtitle = 'Smart Building Society Management' }) {
  return (
    <View style={styles.header}>
      {/* Decorative background circles */}
      <View style={styles.circle1} />
      <View style={styles.circle2} />

      <View style={styles.iconWrapper}>
        <Text style={styles.iconText}>{icon}</Text>
      </View>

      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#0D7377',
    paddingTop: 50,
    paddingBottom: 55,
    alignItems: 'center',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    overflow: 'hidden',
    position: 'relative',
  },

  // Subtle decorative blobs
  circle1: {
    position: 'absolute',
    width: 180,
    height: 180,
    borderRadius: 90,
    backgroundColor: 'rgba(255,255,255,0.06)',
    top: -40,
    left: -40,
  },
  circle2: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.06)',
    bottom: 10,
    right: -20,
  },

  iconWrapper: {
    width: 72,
    height: 72,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  iconText: {
    fontSize: 36,
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },

  subtitle: {
    fontSize: 13,
    color: '#A7F3D0',
    marginTop: 5,
    letterSpacing: 0.2,
  },
});