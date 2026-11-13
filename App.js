import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// ==========================================
// 1. HARDCODED MOCK DATA
// ==========================================
const RECIPES_DATA = [
  {
    id: '1',
    name: 'Chicken Adobo',
    category: 'Filipino',
    prepTime: '45 mins',
    servings: 4,
    description: 'A savory Filipino classic dish braised in soy sauce, vinegar, garlic, and black pepper.',
    ingredients: [
      '1 kg Chicken thighs',
      '1/2 cup Soy sauce',
      '1/2 cup Vinegar',
      '5 cloves Garlic, crushed',
      '2 Bay leaves',
      '1 tsp Whole black peppercorns',
    ],
  },
  {
    id: '2',
    name: 'Garlic Butter Shrimp',
    category: 'Seafood',
    prepTime: '20 mins',
    servings: 2,
    description: 'Quick and rich shrimp sautéed in minced garlic, melted butter, and fresh lemon juice.',
    ingredients: [
      '500g Large shrimp, peeled',
      '1/2 cup Unsalted butter',
      '1 head Garlic, minced',
      '1 tbsp Lemon juice',
      'Fresh parsley, chopped',
    ],
  },
  {
    id: '3',
    name: 'Spaghetti Carbonara',
    category: 'Italian',
    prepTime: '25 mins',
    servings: 3,
    description: 'Authentic Roman pasta prepared with crispy pancetta, fresh egg yolks, Pecorino Romano, and black pepper.',
    ingredients: [
      '350g Spaghetti',
      '150g Pancetta or Guanciale',
      '3 Large egg yolks',
      '1 cup Pecorino Romano cheese',
      'Freshly ground black pepper',
    ],
  },
];

// ==========================================
// 2. SCREEN 1: HOME SCREEN
// ==========================================
function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.centerContent}>
        <Text style={styles.homeEmoji}>🍳</Text>
        <Text style={styles.homeTitle}>Recipe Book</Text>
        <Text style={styles.homeSubtitle}>
          Discover delicious home-cooked meals and step-by-step guides.
        </Text>

        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => navigation.navigate('RecipeList')}
        >
          <Text style={styles.primaryButtonText}>View All Recipes →</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

// ==========================================
// 3. SCREEN 2: RECIPE CATALOG / LIST SCREEN
// ==========================================
function RecipeListScreen({ navigation }) {
  const renderRecipeCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() =>
        // Passing data object to Detail Screen via route.params
        navigation.navigate('RecipeDetail', { recipe: item })
      }
    >
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.badge}>{item.category}</Text>
      </View>

      <Text style={styles.cardDescription} numberOfLines={2}>
        {item.description}
      </Text>

      <View style={styles.cardFooter}>
        <Text style={styles.cardMeta}>⏱️ {item.prepTime}</Text>
        <Text style={styles.cardMeta}>🍽️ {item.servings} Servings</Text>
        <Text style={styles.viewLink}>View Details →</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.sectionTitle}>Recipe Collection</Text>
        <Text style={styles.sectionSubtitle}>Tap any recipe to view full ingredients</Text>
      </View>

      <FlatList
        data={RECIPES_DATA}
        keyExtractor={(item) => item.id}
        renderItem={renderRecipeCard}
        contentContainerStyle={styles.listPadding}
      />
    </SafeAreaView>
  );
}

// ==========================================
// 4. SCREEN 3: ITEM DETAILS SCREEN
// ==========================================
function RecipeDetailScreen({ route, navigation }) {
  // Receiving the recipe parameters passed from RecipeListScreen
  const { recipe } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.detailPadding}>
        <Text style={styles.detailTitle}>{recipe.name}</Text>
        
        <View style={styles.metaRow}>
          <Text style={styles.badge}>{recipe.category}</Text>
          <Text style={styles.detailMetaText}>⏱️ {recipe.prepTime}</Text>
          <Text style={styles.detailMetaText}>🍽️ {recipe.servings} Servings</Text>
        </View>

        <Text style={styles.sectionHeader}>Description</Text>
        <Text style={styles.detailDescription}>{recipe.description}</Text>

        <Text style={styles.sectionHeader}>Ingredients</Text>
        <View style={styles.ingredientsBox}>
          {recipe.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredientItem}>
              •  {ingredient}
            </Text>
          ))}
        </View>

        {/* Custom Go Back Button demonstrating navigation.goBack() */}
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backButtonText}>← Go Back to Collection</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

// ==========================================
// 5. STACK NAVIGATOR CONFIGURATION
// ==========================================
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: '#E85D04',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="RecipeList"
          component={RecipeListScreen}
          options={{ title: 'Recipes' }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={({ route }) => ({
            title: route.params?.recipe?.name || 'Recipe Details',
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ==========================================
// 6. STYLES
// ==========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  homeEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  homeTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 8,
  },
  homeSubtitle: {
    fontSize: 16,
    color: '#6C757D',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
  },
  primaryButton: {
    backgroundColor: '#E85D04',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    elevation: 2,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212529',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6C757D',
    marginTop: 2,
  },
  listPadding: {
    padding: 16,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    flex: 1,
  },
  badge: {
    backgroundColor: '#FFE8D6',
    color: '#E85D04',
    fontSize: 12,
    fontWeight: '600',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    overflow: 'hidden',
  },
  cardDescription: {
    fontSize: 14,
    color: '#495057',
    marginBottom: 12,
    lineHeight: 18,
  },
  cardFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardMeta: {
    fontSize: 13,
    color: '#6C757D',
  },
  viewLink: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#E85D04',
  },
  detailPadding: {
    padding: 20,
  },
  detailTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 10,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 12,
  },
  detailMetaText: {
    fontSize: 14,
    color: '#6C757D',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
    marginTop: 10,
    marginBottom: 8,
  },
  detailDescription: {
    fontSize: 15,
    color: '#495057',
    lineHeight: 22,
    marginBottom: 16,
  },
  ingredientsBox: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E9ECEF',
    marginBottom: 24,
  },
  ingredientItem: {
    fontSize: 15,
    color: '#212529',
    marginBottom: 8,
  },
  backButton: {
    backgroundColor: '#6C757D',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});