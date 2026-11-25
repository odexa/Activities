
import React, { useState, useEffect, useRef } from 'react';

import {
  View, Text, TextInput, TouchableOpacity, FlatList,
  ActivityIndicator, Alert, Keyboard, Platform,
} from 'react-native';

import NoteItem from './NoteItem';
import styles from './styles';

import {
  getNotes,
  saveNotes,
} from './StorageService';

export default function App() {

  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [editingId, setEditingId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [storageStatus, setStorageStatus] = useState('Loading...');

  // Keep the latest list available to asynchronous operations.
  const notesRef = useRef([]);
  const saveQueue = useRef(Promise.resolve());

  // Update React state and persist the same snapshot.
  const updateNotes = (updater) => {
    const updatedNotes = updater(notesRef.current);

    notesRef.current = updatedNotes;
    setNotes(updatedNotes);

    // Serialize writes so older saves cannot finish after newer saves.
    saveQueue.current = saveQueue.current
      .catch(() => {})
      .then(async () => {
        const success = await saveNotes(updatedNotes);

        if (success) {
          setStorageStatus('All changes saved locally');
        } else {
          setStorageStatus('Save failed. Please try again.');
        }
      });
  };

  // READ: Load notes when app opens.
  useEffect(() => {
    const loadData = async () => {
      try {
        const savedNotes = await getNotes();

        notesRef.current = savedNotes;
        setNotes(savedNotes);
        setStorageStatus('All changes saved locally');
      } catch (error) {
        console.error('Loading error:', error);
        setStorageStatus('Unable to load notes');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // CREATE / UPDATE
  const handleSave = () => {
    if (!title.trim()) {
      Alert.alert('Required', 'Please enter a note title.');
      return;
    }

    if (editingId !== null) {

      // UPDATE existing note.
      updateNotes((previousNotes) =>
        previousNotes.map((note) =>
          note.id === editingId
            ? {
                ...note,
                title: title.trim(),
                description: description.trim(),
                updatedAt: new Date().toISOString(),
              }
            : note
        )
      );

    } else {

      // CREATE new note.
      const newNote = {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        title: title.trim(),
        description: description.trim(),
        completed: false,
        createdAt: new Date().toISOString(),
        updatedAt: null,
      };

      updateNotes((previousNotes) => [
        newNote,
        ...previousNotes,
      ]);
    }

    resetForm();
    Keyboard.dismiss();
  };

  // Reset input fields.
  const resetForm = () => {
    setTitle('');
    setDescription('');
    setEditingId(null);
  };

  // EDIT
  const handleEdit = (item) => {
    setTitle(item.title);
    setDescription(item.description || '');
    setEditingId(item.id);
  };

  // TOGGLE COMPLETION
  const handleToggle = (id) => {
    updateNotes((previousNotes) =>
      previousNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              completed: !note.completed,
              updatedAt: new Date().toISOString(),
            }
          : note
      )
    );
  };

  // DELETE
  const handleDelete = (id) => {
  const deleteNote = () => {
    updateNotes(prev => prev.filter(note => note.id !== id));

    if (editingId === id) {
      resetForm();
    }
  };

  // Web confirmation
  if (Platform.OS === 'web') {
    const confirmed = globalThis.confirm(
      'Are you sure you want to delete this note?'
    );

    if (confirmed) {
      deleteNote();
    }

    return;
  }

  // Android confirmation
  Alert.alert(
    'Delete Note',
    'Are you sure you want to delete this note?',
    [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Delete',
        style: 'destructive',
        onPress: deleteNote,
      },
    ]
  );
};
  // LOADING SCREEN
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2563EB" />
        <Text style={{ marginTop: 12 }}>
          Loading your saved notes...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.heading}>
          My Notes
        </Text>

        <Text style={styles.subtitle}>
          Organize your thoughts and daily tasks.
        </Text>
      </View>

      {/* INPUT FORM */}
      <TextInput
        style={styles.input}
        placeholder="Enter note title..."
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, { height: 75 }]}
        placeholder="Enter description (optional)..."
        value={description}
        onChangeText={setDescription}
        multiline
      />

      {/* ADD / UPDATE BUTTON */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>
          {editingId !== null ? 'Update Note' : '+ Add Note'}
        </Text>
      </TouchableOpacity>

      {editingId !== null && (
        <TouchableOpacity onPress={resetForm}>
          <Text style={{
            color: '#6B7280',
            textAlign: 'center',
            marginBottom: 15,
          }}>
            Cancel Editing
          </Text>
        </TouchableOpacity>
      )}

      {/* NOTES LIST */}
      <Text style={styles.sectionTitle}>
        My Tasks ({notes.length})
      </Text>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <NoteItem
            item={item}
            onToggle={handleToggle}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={{ fontSize: 35 }}>📝</Text>

            <Text style={styles.emptyText}>
              No notes yet. Add your first note!
            </Text>
          </View>
        }
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      />

      {/* STORAGE STATUS */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          💾 {storageStatus}
        </Text>
      </View>

    </View>
  );
}
