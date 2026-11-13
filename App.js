
import React from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";

const notes = [
  {
    title: "Programming Languages",
    subject: "CS302",
    date: "Today, 10:30 AM",
    description:
      "Syntax, semantics, data types, control flow, and abstractions.",
    color: "#E6F0FF",
  },
  {
    title: "Automata Theory",
    subject: "CS303",
    date: "Yesterday",
    description:
      "Review DFA, NFA, regular expressions, and finite automata.",
    color: "#E9F6FF",
  },
  {
    title: "Software Engineering",
    subject: "CSElec 1",
    date: "Sep 25, 2026",
    description:
      "Software development life cycle, requirements, and system design.",
    color: "#EAF3FF",
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#1769E0"
      />

      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good evening 👋</Text>
          <Text style={styles.headerTitle}>My Study Notes</Text>
          <Text style={styles.subtitle}>
            Keep your learning organized.
          </Text>
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>OL</Text>
        </View>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            placeholder="Search your notes..."
            placeholderTextColor="#8A9AB5"
            style={styles.searchInput}
          />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.seeAll}>See all</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categories}
        >
          <TouchableOpacity
            style={[styles.category, styles.activeCategory]}
          >
            <Text style={styles.categoryEmoji}>📚</Text>
            <Text style={styles.activeCategoryText}>All Notes</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryEmoji}>💻</Text>
            <Text style={styles.categoryText}>Programming</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryEmoji}>🧠</Text>
            <Text style={styles.categoryText}>Theory</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.category}>
            <Text style={styles.categoryEmoji}>📋</Text>
            <Text style={styles.categoryText}>Projects</Text>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Notes</Text>
          <Text style={styles.noteCount}>03 notes</Text>
        </View>

        {notes.map((note, index) => (
          <TouchableOpacity
            key={index}
            style={styles.noteCard}
            activeOpacity={0.8}
          >
            <View style={styles.noteTop}>
              <View
                style={[
                  styles.subjectBadge,
                  { backgroundColor: note.color },
                ]}
              >
                <Text style={styles.subjectText}>
                  {note.subject}
                </Text>
              </View>
              <Text style={styles.more}>•••</Text>
            </View>

            <Text style={styles.noteTitle}>{note.title}</Text>

            <Text style={styles.noteDescription} numberOfLines={2}>
              {note.description}
            </Text>

            <View style={styles.noteBottom}>
              <Text style={styles.date}>◷ {note.date}</Text>
              <Text style={styles.openNote}>Open →</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={styles.progressCard}>
          <View style={styles.progressInfo}>
            <Text style={styles.progressLabel}>
              YOUR STUDY PROGRESS
            </Text>
            <Text style={styles.progressTitle}>
              Keep learning! 🚀
            </Text>
            <Text style={styles.progressDescription}>
              You've reviewed 8 notes this week.
            </Text>
          </View>

          <View style={styles.progressCircle}>
            <Text style={styles.progressNumber}>75%</Text>
          </View>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addIcon}>+</Text>
        <Text style={styles.addText}>New Note</Text>
      </TouchableOpacity>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={styles.navIconActive}>⌂</Text>
          <Text style={styles.navTextActive}>Notes</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>✓</Text>
          <Text style={styles.navText}>Tasks</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>▣</Text>
          <Text style={styles.navText}>Subjects</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>⚙</Text>
          <Text style={styles.navText}>Settings</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F7FC",
  },
  header: {
    backgroundColor: "#1769E0",
    paddingHorizontal: 22,
    paddingTop: 48,
    paddingBottom: 26,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
  },
  greeting: {
    color: "#D9E9FF",
    fontSize: 14,
    marginBottom: 5,
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "800",
  },
  subtitle: {
    color: "#D9E9FF",
    fontSize: 12,
    marginTop: 6,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#1769E0",
    fontSize: 15,
    fontWeight: "800",
  },
  content: {
    padding: 20,
  },
  searchBox: {
    height: 52,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 25,
    elevation: 2,
  },
  searchIcon: {
    fontSize: 25,
    color: "#1769E0",
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#24344D",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 13,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: "#172B4D",
  },
  seeAll: {
    color: "#1769E0",
    fontSize: 13,
    fontWeight: "700",
  },
  noteCount: {
    color: "#8291A8",
    fontSize: 12,
  },
  categories: {
    marginBottom: 25,
  },
  category: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 14,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E2E9F3",
  },
  activeCategory: {
    backgroundColor: "#1769E0",
    borderColor: "#1769E0",
  },
  categoryEmoji: {
    fontSize: 16,
    marginRight: 7,
  },
  categoryText: {
    color: "#53647C",
    fontSize: 12,
    fontWeight: "600",
  },
  activeCategoryText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "700",
  },
  noteCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 17,
    padding: 17,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: "#E7EDF6",
    elevation: 2,
  },
  noteTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subjectBadge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  subjectText: {
    color: "#1769E0",
    fontSize: 11,
    fontWeight: "800",
  },
  more: {
    color: "#8A9AB5",
    fontWeight: "800",
    letterSpacing: 2,
  },
  noteTitle: {
    color: "#172B4D",
    fontSize: 17,
    fontWeight: "800",
    marginTop: 13,
    marginBottom: 7,
  },
  noteDescription: {
    color: "#687991",
    fontSize: 13,
    lineHeight: 20,
  },
  noteBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 16,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: "#EDF1F6",
  },
  date: {
    color: "#8997AB",
    fontSize: 11,
  },
  openNote: {
    color: "#1769E0",
    fontSize: 12,
    fontWeight: "800",
  },
  progressCard: {
    backgroundColor: "#1769E0",
    borderRadius: 18,
    padding: 18,
    marginTop: 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  progressInfo: {
    flex: 1,
    paddingRight: 8,
  },
  progressLabel: {
    color: "#BFD8FF",
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 1,
  },
  progressTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "800",
    marginTop: 5,
  },
  progressDescription: {
    color: "#D9E9FF",
    fontSize: 11,
    marginTop: 5,
  },
  progressCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 5,
    borderColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  progressNumber: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
  addButton: {
    position: "absolute",
    right: 20,
    bottom: 78,
    backgroundColor: "#1769E0",
    borderRadius: 28,
    height: 52,
    paddingHorizontal: 19,
    flexDirection: "row",
    alignItems: "center",
    elevation: 6,
  },
  addIcon: {
    color: "#FFFFFF",
    fontSize: 25,
    marginRight: 7,
    marginTop: -2,
  },
  addText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "800",
  },
  bottomNav: {
    height: 65,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5EAF2",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: 70,
  },
  navIcon: {
    color: "#94A2B7",
    fontSize: 19,
    marginBottom: 3,
  },
  navIconActive: {
    color: "#1769E0",
    fontSize: 20,
    marginBottom: 3,
  },
  navText: {
    color: "#94A2B7",
    fontSize: 10,
  },
  navTextActive: {
    color: "#1769E0",
    fontSize: 10,
    fontWeight: "800",
  },
});