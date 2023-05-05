import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const TextSearchView = ({
    searchTerm,
    text,
    result,
    loading,
    onSearchTermChange,
    onTextChange,
    onSearch,
    onError,
    filterTime
}) => {

    return (
        <View>
            <TextInput
                
                value={searchTerm}
                onChangeText={onSearchTermChange}
            />
            <TextInput
                value={text}
                //onChangeText={onTextChange}
            />
            <Button
                title="Search"
                onPress={onSearch}
            />
            {loading ? (
                <Text>Loading...</Text>
            ) : (
                <View>
                    {result !== null ? (
                        <View>
                            <Text>Result: {result}</Text>
                            <Text>Filter time: {filterTime}ms</Text>
                        </View>
                    ) : null}
                </View>
            )}
        </View>
    );
};

export default TextSearchView;