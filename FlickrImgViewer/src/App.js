import React, { Component } from "react";
import "./App.scss";

export default class App extends Component {
  state = {
    items: [],
    isLoading: true,
    error: ""
  };

  componentDidMount() {
    this.loadImages();
  }

  // Load data from Flicker API
  loadImages = () => {

    fetch('https://www.flickr.com/services/feeds/photos_public.gne?format=json')
      .then(response => response.json())
      .then(data => {
        // Set data in json response to state
        this.setState({
          items: data.jsonFlickrFeed.items,
          isLoading: false,
        });
        console.log(this.state.items)
      })
      // Handle errors
      .catch(error => {
        console.error(error)

        this.setState({
          error: error
        })
      });
  };

  render() {
    return (
      <main className="main-container">
        <img src="https://live.staticflickr.com/65535/50135302258_8d83329d97_m.jpg">
        <small>loandt1</small>
        <h1>Hello World</h1>
      </main>
    );
  }
}