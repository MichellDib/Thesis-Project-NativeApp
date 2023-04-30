import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, Image, StyleSheet } from 'react-native';


const ImageSearchView = ({
  query,
  numImages,
  results,
  loading,
  error,
  onInputChange,
  onNumImagesChange,
  onSubmit,
  renderTime
}) => {
  const [renderStartTime, setRenderStartTime] = useState(null);

  useEffect(() => {
    if (results.length) {
      setRenderStartTime(performance.now());
    } else {
      setRenderStartTime(null);
    }
  }, [results]);

  return (
    <View style={styles.container}>
      {renderStartTime && (
        <Text style={styles.renderTime}>
          Time to render images: {Math.round((performance.now() - renderStartTime) * 100) / 100} ms
        </Text>
      )}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          value={query}
          onChangeText={onInputChange}
          placeholder="Enter search query"
        />
        <TextInput
          style={styles.textInput}
          value={numImages.toString()}
          onChangeText={onNumImagesChange}
          placeholder="Enter number of images"
          keyboardType="numeric"
        />
        <Button title="Search Images" onPress={onSubmit} disabled={loading} />
      </View>
      {loading && <Text style={styles.loading}>Loading...</Text>}
      {error && <Text style={styles.error}>Error: {error}</Text>}
      <FlatList
        data={results}
        keyExtractor={(item) => item.url}
        renderItem={({ item }) => (
          <View style={styles.resultContainer}>
            <Image source={{ uri: item.url }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 10,
  },
  loading: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  resultContainer: {
    marginBottom: 20,
  },
  image: {
    height: 200,
    resizeMode: 'cover',
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  renderTime: {
    marginBottom: 10,
  }
});

export default ImageSearchView;
