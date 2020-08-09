import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './src/state/store';
import Navigator from './src/navigation/Navigator';
import Colors from './src/styles/Colors';

export default class App extends React.PureComponent {
  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={configureStore().store}>
        <SafeAreaView style={{flex: 0, backgroundColor: Colors.themeColor}} />
        <StatusBar translucent backgroundColor={Colors.themeColor} />
        <Navigator />
      </Provider>
    );
  }
}
