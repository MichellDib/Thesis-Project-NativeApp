
import React, { Component } from 'react';
import { View, Image, StyleSheet, FlatList, Text, ScrollView } from 'react-native';
import { fetchImageSearch } from '../api';

class ImageSearchPresenter extends Component {
    state = {
        query: 'dog',
        numImages: 10,
        results: [],
        loading: false,
        error: null,
        renderTime: null
    };

    componentDidMount() {
        this.handleSubmit();
    }

    handleInputChange = (value) => {
        this.setState({ query: value });
    };

    handleNumImagesChange = (value) => {
        this.setState({ numImages: value });
    };

    handleSubmit = async () => {
        const { query, numImages } = this.state;
        this.setState({ loading: true });

        //const start = Date.now();
        try {
            const results = await fetchImageSearch(query, 10);
            console.log("results: " + results);
            //const end = Date.now();
            //const renderTime = end - start;

            //const multiplier = 200;
            //const multipliedResults = results.concat(...Array.from({ length: multiplier - 1 }, () => results));
            //this.setState({ results: multipliedResults, loading: false, error: null, renderTime});
            this.setState({ results, loading: false, error: null });

        } catch (error) {
            console.error(error);
            this.setState({ error, loading: false });
        }
    }





    render() {
        const { results, loading, error } = this.state;
        
        if (loading) {
          return <Text>Loading...</Text>;
        }
        
        if (error) {
          return <Text>{error.message}</Text>;
        }
        
        const images = results.map((item) => (
          <Image key={item.url} source={{ uri: item.url }} style={{ width: 200, height: 200 }} />
        ));
        
        return (
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
              <Text>Hello</Text>
              {images}
            </View>
          </ScrollView>
        );
      }
}

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
  

export default ImageSearchPresenter;