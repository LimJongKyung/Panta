import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native";

const App = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hellow Panta world!</Text>
            <Button title="button">Button</Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        color: 'black',
    },
});

export default App;