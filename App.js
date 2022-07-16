import React, {useState} from "react";
import {View, Text, StyleSheet,FlatList, Alert} from 'react-native';
import Header from "./components/Header";
import 'react-native-get-random-values';
import {Webview} from 'react-native-webview';
import ListItem from "./components/ListItem"
import AddItem from "./components/AddItem";
import { uuid } from "uuidv4";

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: "Eggs"},
    {id: 3, text: "Bread"},
    {id: 4, text: "Juice"},
  ]);

  const deleteItem = (id) =>{
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = text => {
    if (!text){
      Alert.alert('Error', 'Please enter in an item', {text: 'Ok'})
    }
    else {
      setItems(prevItems => {
        return [{id: items.id, text}, ...prevItems];
      });
    }
  }

  return (
    <View style = {styles.container}>
      <Header/>
      <AddItem addItem = {addItem}/>
      <FlatList 
        data = {items}
        renderItem = {({item}) => (
        <ListItem item={item} deleteItem = {deleteItem}/>
          )}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60, 
  },
});

export default App;