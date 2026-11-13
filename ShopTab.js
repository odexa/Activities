import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AppContext } from './AppContext';

const ITEMS = ['Mouse', 'Keyboard', 'Headphones'];

export default function ShopTab() {
  const { cart, isSaving, addToCart } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={[styles.status, isSaving && styles.saving]}>
        {isSaving ? 'Saving...' : `Items in cart: ${cart.length}`}
      </Text>

      {ITEMS.map((item) => (
        <TouchableOpacity
          key={item}
          style={[styles.button, isSaving && styles.disabled]}
          onPress={() => addToCart(item)}
          disabled={isSaving}
        >
          <Text style={styles.buttonText}>Add {item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#F5F9FF' },
  status: { fontSize: 18, marginBottom: 20, color: '#333333' },
  saving: { color: '#1E88E5', fontWeight: 'bold' },
  button: {
    backgroundColor: '#1E88E5',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  disabled: { opacity: 0.5 },
  buttonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});