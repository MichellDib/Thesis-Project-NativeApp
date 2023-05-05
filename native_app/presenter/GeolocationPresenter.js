import React from 'react';
import { View, Text } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

class GeolocationPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, longitude: null };
  }

  componentDidMount() {
    const startTime = performance.now();

    Geolocation.getCurrentPosition(
      (position) => {
        const endTime = performance.now();
        console.log(`Time to get location: ${endTime - startTime} milliseconds`);
        const { latitude, longitude } = position.coords;
        this.setState({ latitude, longitude });
      },
      (error) => console.log(error),
      { timeout: 10000, maximumAge: 1000 }
    );
  }

  render() {
    return (
      <View>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
      </View>
    );
  }
}

export default GeolocationPresenter;
