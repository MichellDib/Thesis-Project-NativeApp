import React, { Component } from "react";
import TweetView from "../view/TweetView";
import { fetchTweets } from "../api";

class TweetPresenter extends Component {
  state = {
    loading: false,
    error: null,
    renderTime: null,
    results: null,
  };

  handleSubmit = async () => {
    this.setState({ loading: true });
    const fetchStart = performance.now();
    try {
      console.log("FETCHING TWEETS");
      const results = await fetchTweets();
      
      console.log(results);
      const fetchEnd = performance.now();
      const setStateStart = performance.now();
      this.setState({ results, loading: false, error: null }, () => {
        const setStateEnd = performance.now();
        const fetchTime = fetchEnd - fetchStart;
        const setStateTime = setStateEnd - setStateStart;
        let renderTime = setStateEnd - fetchStart;
        console.log("FETCH TIME: " + fetchTime);
        console.log("SET STATE TIME: " + setStateTime);
        console.log("RENDER TIME: " + renderTime);
        renderTime = setStateTime;
        this.setState({ renderTime });
      });
    } catch (error) {
      console.error(error);
      this.setState({ error, loading: false });
    }
  };
  

  render() {
    const { results, loading, error, renderTime } = this.state;
    return (
      <TweetView
        loading={loading}
        error={error}
        onSubmit={this.handleSubmit}
        renderTime={renderTime}
        results={results}
      />
    );
  }
}

export default TweetPresenter;
