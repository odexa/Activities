
import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const NoteItem = ({ item, onToggle, onEdit, onDelete }) => {

  return (
    <View style={styles.card}>

      {/* CHECKBOX */}
      <TouchableOpacity
        style={[
          styles.checkbox,
          item.completed && styles.checked,
        ]}
        onPress={() => onToggle(item.id)}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.completed }}
      >
        {item.completed && (
          <Text style={styles.checkmark}>✓</Text>
        )}
      </TouchableOpacity>

      {/* NOTE DETAILS */}
      <View style={styles.content}>

        <Text style={[
          styles.title,
          item.completed && styles.completedText,
        ]}>
          {item.title}
        </Text>

        {!!item.description && (
          <Text style={styles.description}>
            {item.description}
          </Text>
        )}

        <Text style={styles.date}>
          {item.createdAt
            ? new Date(item.createdAt).toLocaleDateString()
            : 'No date'}
        </Text>

      </View>

      {/* ACTIONS */}
      <View style={styles.actions}>

        <TouchableOpacity
          onPress={() => onEdit(item)}
          style={styles.actionButton}
        >
          <Text style={styles.edit}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => onDelete(item.id)}
          style={styles.actionButton}
        >
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#9CA3AF',
    borderRadius: 6,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  checked: {
    backgroundColor: '#2563EB',
    borderColor: '#2563EB',
  },

  checkmark: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  content: {
    flex: 1,
    minWidth: 0,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F2937',
  },

  description: {
    fontSize: 13,
    color: '#6B7280',
    marginTop: 4,
  },

  completedText: {
    textDecorationLine: 'line-through',
    color: '#9CA3AF',
  },

  date: {
    fontSize: 11,
    color: '#9CA3AF',
    marginTop: 6,
  },

  actions: {
    alignItems: 'flex-end',
    marginLeft: 10,
  },

  actionButton: {
    paddingVertical: 5,
  },

  edit: {
    color: '#2563EB',
    fontWeight: '600',
  },

  delete: {
    color: '#EF4444',
    fontWeight: '600',
  },

});

export default NoteItem;
