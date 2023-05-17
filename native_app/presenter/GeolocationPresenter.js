import React from 'react';
import { View, Text, Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

class GeolocationPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { latitude: null, longitude: null, time: null };
  }

  componentDidMount() {
    const startTime = performance.now();
    
    Geolocation.getCurrentPosition(
      (position) => {
        const endTime = performance.now();
        time = endTime - startTime;
        this.setState({ time });
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
        <Text>{this.state.time}</Text>
        <Text>Latitude: {this.state.latitude}</Text>
        <Text>Longitude: {this.state.longitude}</Text>
        <Button title="Get Location" onPress={this.componentDidMount.bind(this)} />
      </View>
    );
  }
}

export default GeolocationPresenter;