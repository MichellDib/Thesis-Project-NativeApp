import React from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";

function TweetView({ loading, error, onSubmit, renderTime, results }) {

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (results !== null) {
    const { continuation_token: token, results: tweetResults } = results;
   
    return (
      <View>
        <Button title="Search" onPress={onSubmit} />
        {tweetResults.map((tweet) => (
          <View key={tweet.tweet_id}>
            <Text>{tweet.text}</Text>
            <Text>{tweet.creation_date}</Text>
            <Text>{tweet.user.name}</Text>
            <Text>{tweet.user.username}</Text>
          </View>
        ))}
      </View>
    );
  }

  return (
    <View>
      <Button title="Search" onPress={onSubmit} />
    </View>
  );
}

export default TweetView;
