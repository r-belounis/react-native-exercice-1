import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class Webview extends Component {
  render() {
    return <WebView source={{ uri: 'https://www.konexio.eu/' }} />;
  }
}

export default Webview;