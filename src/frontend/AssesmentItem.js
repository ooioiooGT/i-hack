import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';

const AssesmentItem = ({ item }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { width }]}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title:{
    fontWeight:'800',
    fontSize: 28,
    marginBottom:10,
    color: '#493d8a',
    justifyContent: 'center',
    alignContent: 'center',

  },
  description:{
    justifyContent: 'center',
    alignContent:'center',
    fontSize: 20,
  }

});

export default AssesmentItem;
