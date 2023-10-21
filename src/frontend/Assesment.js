import React from 'react';
import { View, Text, StyleSheet, FlatList ,Animated} from 'react-native';
import questions from '../backend/questions';
import AssesmentItem from './AssesmentItem';

const Assesment = () => {
  return (
    <View style={styles.container}>
      <FlatList 
      data={questions} 
      renderItem={({item}) => <AssesmentItem item={item} />}
      horizontal
      showsVerticalScrollIndicator
      pagingEnabled
      bounces={false}
      keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', // Change alignContent to alignItems
  },
});

export default Assesment;
