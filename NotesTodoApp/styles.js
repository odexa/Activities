
import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 0,
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'web' ? 35 : 55,
    width: '100%',
    maxWidth: 700,
    alignSelf: 'center',
  },

  header: {
    marginBottom: 25,
  },

  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },

  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 5,
  },

  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 14,
    fontSize: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    color: '#111827',
  },

  addButton: {
    backgroundColor: '#2563EB',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 25,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#111827',
    marginBottom: 15,
  },

  emptyContainer: {
    alignItems: 'center',
    marginTop: 60,
  },

  emptyText: {
    color: '#9CA3AF',
    fontSize: 15,
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },

  footer: {
    marginTop: 15,
    alignItems: 'center',
    paddingBottom: 20,
  },

  footerText: {
    color: '#9CA3AF',
    fontSize: 12,
  },
});
