//Nguyễn Ngô Thế Cường :21521905
import React, { useState } from 'react';
import { View, Text, FlatList, SectionList, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { fruits_vegetables, workouts } from './src/data';

const App = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = item => {
    if (selectedItems.includes(item)) {
      const filteredItems = selectedItems.filter(selected => selected !== item);
      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const renderWorkoutItem = ({ item }) => (
    <View style={styles.button2}>
      <Text>{item.type}</Text>
      <TouchableOpacity onPress={() => handleSelect(item.type)}>
        <Text style={styles.button}>{selectedItems.includes(item.type) ? 'DESELECT' : 'SELECT'}</Text>
      </TouchableOpacity>
    </View>
  );

  const renderFruitVegetableItem = ({ item }) => (
    <View style={styles.section}>
      <View style={styles.container2}>
        <Image source={{ uri: item.url }} style={styles.image} />
      </View>
      <View style={styles.button3}>
        <Text>{item}</Text>
        <TouchableOpacity onPress={() => handleSelect(item)}>
          <Text style={styles.button}>{selectedItems.includes(item) ? 'DESELECT' : 'SELECT'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
//Nguyễn Ngô Thế Cường :21521905
  return (
    <View style={styles.container}>
      <View style={styles.FlatList}>
        <Text style={styles.Tittle2}>FlatList-Workouts</Text>
        <View style={styles.FlatList}>
          <ImageBackground style={styles.backgroundImage} source={require('./assets/workouts.png')}>
            <FlatList
              data={workouts}
              renderItem={renderWorkoutItem}
              keyExtractor={item => item.id}
            />
          </ImageBackground>

        </View>
      </View>
      <View style={styles.fruits_vegetables}>
        <Text style={styles.Tittle2}>Fruits and Vegetables</Text>
        <ImageBackground style={styles.backgroundImage} source={require('./assets/Fruits.png')}>
          <SectionList
            sections={fruits_vegetables}
            renderItem={({ item }) => renderFruitVegetableItem({ item })}
            renderSectionHeader={({ section  }) => (
              <View style={styles.container2}>
                <Text style={styles.title}>{section.title}</Text>
                <Image style={styles.image} source={{ uri: section.url }} />
              </View>

            )}
            keyExtractor={(item, index) => item + index}
          />
        </ImageBackground>
      </View>
      <View style={styles.selectedItems}>
        <Text style={styles.selected_exercises}>SELECTED EXERCISES:</Text>
        <Text>{selectedItems.join(', ')}</Text>
      </View>
    </View>

  );
};
//Nguyễn Ngô Thế Cường :21521905
const styles = StyleSheet.create({

  container2: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
    color: 'white',
    backgroundColor: '#00BFFF',
    padding: 8,

    borderRadius: 5,
  },
  section: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white'

  },
  //Nguyễn Ngô Thế Cường :21521905
  image: {
    width: 30,
    height: 30,
    marginLeft: 150,
    marginBottom: 20,
  },
  selectedItems: {
    marginTop: 20,
  },
  FlatList: {
    flex: 1,
    flexDirection: 'column',
  },
  fruits_vegetables: {
    flex: 1,
    flexDirection: 'column',
  },
  selected_exercises: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'red',
    marginBottom: 10,
    marginTop: 30,
  },
  Tittle2: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'blue',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200,
  },
  //Nguyễn Ngô Thế Cường :21521905
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  button2: {
    color: 'white',
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
    marginLeft: 5,
    marginRight: 5,
  },
  button3: {
    color: 'white',
    backgroundColor: 'white',
    padding: 4,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 6,
    marginLeft: 5,
    marginRight: 5,
    marginTop:-64,
  },
  sectionHeader: {
    fontSize: 18,
    backgroundColor: '#f9c2ff',
    padding: 10,
  },
});
export default App;
