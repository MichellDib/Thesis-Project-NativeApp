import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';

const ImageSeachView = ({ results, loading, error }) => {
  
  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error.message}</Text>;
  }

  const start = performance.now();
  const images = results.map((item) => (
    <Image key={item.url} source={{ uri: item.url }} style={{ width: 200, height: 200 }} />
  ));
  const end = performance.now();
  const renderTime = end - start;

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
      <Text>Render time: {renderTime}ms</Text>
        {images}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ImageSeachView;
