import React, { Component } from 'react';
import ImageSearchView from '../view/ImageSearchView';
import { fetchImageSearch, fetchTweets2 } from '../api';

class ImageSearchPresenter extends Component {
  state = {
    query: 'dog',
    numImages: 50,
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

    try {
      let results = await fetchImageSearch(query, 50);
      //const multiplier = 200;
      //const multipliedResults = results.concat(...Array.from({ length: multiplier - 1 }, () => results));
      //results = multipliedResults;
      this.setState({ results, loading: false, error: null });
    } catch (error) {
      console.error(error);
      this.setState({ error, loading: false });
    }
  };

  render() {
    const { results, loading, error } = this.state;

    return (
      <ImageSearchView results={results} loading={loading} error={error} />
    );
  }
}

export default ImageSearchPresenter;
