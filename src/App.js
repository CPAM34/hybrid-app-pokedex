import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import pokemon from './pokemonStore';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Switch>
            <Route exact path="/" render={props => <Home {...props} />} />
            <Route path="/pokemon" render={props => <Pokemon {...props} />} />
          </Switch>
        </Router>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    padding: 50
  }
});

export default App;