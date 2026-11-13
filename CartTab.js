import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AppContext } from './AppContext';

export default function CartTab() {
  const { cart, isSaving } = useContext(AppContext);

  return (
    <View style={styles.container}>
      {isSaving && <Text style={styles.saving}>Saving...</Text>}

      {cart.length === 0 ? (
        <Text style={styles.text}>Your cart is empty.</Text>
      ) : (
        cart.map((item, index) => (
          <Text key={index} style={styles.item}>
            • {item}
          </Text>
        ))
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F9FF' },
  saving: { fontSize: 16, color: '#1E88E5', fontWeight: 'bold', marginBottom: 12 },
  text: { fontSize: 16, color: '#333333' },
  item: {
    fontSize: 16,
    color: '#333333',
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
});