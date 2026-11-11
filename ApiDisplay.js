import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function ApiDisplay() {
  const [movies, setMovies] = useState([]); // State 1: fetched data
  const [loading, setLoading] = useState(true); // State 2: loading flag

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("https://ghibliapi.vercel.app/films");
        const data = await response.json();
        setMovies(data.slice(0, 5)); // show 5 recommended movies
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []); // Empty dependency array: runs once on mount

  if (loading) {
    return (
      <View style={styles.center}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Movie Recommendations</Text>
      {movies.map((movie) => (
        <View key={movie.id} style={styles.card}>
          <Text style={styles.title}>
            {movie.title} ({movie.release_date})
          </Text>
          <Text style={styles.director}>Director: {movie.director}</Text>
          <Text>{movie.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 40,
    backgroundColor: "#f2f2f2",
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  header: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
  card: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: { fontSize: 16, fontWeight: "bold" },
  director: { color: "#666", marginVertical: 4 },
});
