import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

export default class App extends React.Component {
  state = {
    coin_result: "head",
  };

  flipACoin() {
    const random = Math.floor(Math.random() * 2) + 1;
    console.log(random);

    if (random == 1) {
      //head

      this.setState({
        coin_result: "head",
      });
    } else {
      //tail

      this.setState({
        coin_result: "tail",
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.coin_result == "head" ? (
          <Image
            source={require("./assets/1_grivna_gerb.jpg")}
            style={{
              width: 150,
              height: 150,
            }}
          />
        ) : (
          <Image
            source={require("./assets/1_grivna_number.jpg")}
            style={{
              width: 150,
              height: 150,
            }}
          />
        )}

        <TouchableOpacity
          onPress={() => {
            this.flipACoin();
          }}
          style={styles.button}
        >
          <Text>Flip A Coin</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4fe8f0",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f1c40f",
    padding: 20,
    margin: 10,
    borderRadius: 4,
  },
});
