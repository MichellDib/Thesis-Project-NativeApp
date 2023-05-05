import React from 'react';
import { View } from 'react-native';
import ImageSearchPresenter from './presenter/ImageSearchPresenter';
import TweetPresenter from './presenter/TweetPresenter';
import TextSearchPresenter from './presenter/TextSearchPresenter';
import GeolocationPresenter from './presenter/GeolocationPresenter';
function App() {
  return (
    <View>
      <GeolocationPresenter></GeolocationPresenter>
    </View>
  );
}

export default App;