import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  SafeAreaView,
  FlatList,
  ScrollView,
  Button,
} from 'react-native';

const PEOPLE_DATA = [
  { id: '1', name: 'John Doe', image: 'https://i.guim.co.uk/img/static/sys-images/Admin/BkFill/Default_image_group/2011/5/4/1304535406756/Alastair-Cook-007.jpg?width=620&dpr=2&s=none&crop=none' },
  { id: '2', name: 'Jane Smith', image: 'https://picsum.photos/id/101/100/100' },
  { id: '3', name: 'Bob Johnson', image: 'https://picsum.photos/id/102/100/100' },
  { id: '4', name: 'Alice Williams', image: 'https://picsum.photos/id/103/100/100' },
  { id: '5', name: 'Charlie Brown', image: 'https://picsum.photos/id/104/100/100' },
];

const POSTS_DATA = [
  { id: '1', name: 'John Doe', postText: 'Hello, this is my first post!', image: 'https://picsum.photos/id/200/400/300' },
  { id: '2', name: 'Jane Smith', postText: 'Having a great day at the beach!', image: 'https://picsum.photos/id/201/400/300' },
  { id: '3', name: 'Bob Johnson', postText: 'Just finished a workout!', image: 'https://picsum.photos/id/202/400/300' },
];

// PersonCard Component for the horizontal FlatList
const PersonCard = ({ item }) => {
  console.log('item data:', item);
  return (
    <View style={styles.personCard}>
      <Image source={{ uri: item.image }} style={styles.personImage} />
      <Text style={styles.personName}>{item.name}</Text>
    </View>
  );
};

// PostCard Component for the vertical FlatList
const PostCard = ({ item }) => {
  return (
    <View style={styles.postCard}>
      <Text style={styles.postName}>{item.name}</Text>
      <Text style={styles.postText}>{item.postText}</Text>
      <Image source={{ uri: item.image }} style={styles.postImage} />
    </View>
  );
};

// Horizontal FlatList Component
const PeopleList = ({ data }) => {
  return (
    <View>
    <FlatList
      data={data}
      renderItem={({ item }) => <PersonCard item={item} />} //extract data from Person card
      keyExtractor={(item) => item.id} 
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.horizontalList}
    />
    </View>
  );
};

// Vertical FlatList Component
const PostList = ({ data }) => {
  return (
    <View>
    <FlatList
      data={data}
      renderItem={({ item }) => <PostCard item={item} />} //extract data from PostCard
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.verticalList}
      scrollEnabled={false}
    />
    </View>
  );
};

const App = () => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
      
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={styles.header}>Facebook Clone</Text>

      {/* Horizontal People List */}
     <ScrollView>
      <PeopleList data={PEOPLE_DATA} />
      </ScrollView>
      <Button title='Grid View'/>
      {/* Main Vertical Scrollable Content (Posts) */}
      <ScrollView contentContainerStyle={styles.verticalList}>
     
        <PostList data={POSTS_DATA} />
       
        
      </ScrollView>
      
    </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    padding: 15,
    textAlign: 'center',
  },
  horizontalList: {
    paddingVertical: 10,
    paddingLeft: 15,
  },
  personCard: {
    marginRight: 15, // Increased margin for spacing between cards
    backgroundColor: '#fff', // Clean white background
    borderRadius: 12, // Smoother, more modern rounded corners
    width: 170, // Slightly wider to accommodate text comfortably
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12, // More space around content
    paddingHorizontal: 10,
    shadowColor: '#000', // Subtle shadow color for a sleek effect
    shadowOffset: { width: 0, height: 4 }, // Slightly deeper shadow offset
    shadowOpacity: 0.15, // Softer shadow effect
    shadowRadius: 10, // A more subtle and spread-out shadow
    elevation: 8, // Slightly increased elevation for a more prominent effect
    transform: [{ translateY: -2 }], // Adds a slight lift for a more professional look
  },
  
  personImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  personName: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  verticalList: {
    padding: 8,
  },
  postCard: {
    backgroundColor: '#fff', // Clean white background
    marginBottom: 20, // Space between cards for better separation
    borderRadius: 12, // Slightly more rounded corners for modern feel
    padding: 20, // Increased padding for more space around the content
    shadowColor: '#000', // Subtle, sleek shadow color
    shadowOffset: { width: 0, height: 6 }, // Slightly deeper shadow for a floating effect
    shadowOpacity: 0.15, // Softer shadow effect for a polished look
    shadowRadius: 12, // Increased spread for smoother shadow
    elevation: 14, // Increased elevation for more noticeable depth
    transform: [{ translateY: -2 }], // Slight lift for modern look
    borderWidth: 5, // Optional: subtle border for definition
    borderColor: '#f1f1f1', // Soft light border color for a clean edge
  },
  
  postName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  postText: {
    fontSize: 14,
    color: '#666',
    marginVertical: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default App;
