import React, { useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const App = () => {
  const[show,setShow]=useState(false)
  return (
    <View style={styles.container}>
    {
      show?
      <View style={styles.modal}>
        <View style={styles.body}>
          <Text>Some Text</Text>
          <Button title="Close" onPress={()=>{setShow(false)}} />
        </View>
      </View>
      :null
    }
      <Button title="Open Dialog" onPress={()=>setShow(true)}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor:'green'
  },
  modal: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent:'center',
    alignItems:'center'
  },
  body: {
    // Add any styling for the body here
    backgroundColor:'yellow',
    height:300,
    width:300,
    padding:20,
    borderRadius:10,
  },
});

export default App;