import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import './App.css';

import ColorsList from './ColorsList';
import ImageMain from './ImageMain';
import ImageSelection from './ImageSelection';
import ColorPicker from './ColorPicker';
import ColorInfo from './ColorInfo';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="header">
          <h2 >Choose a picture and analyze</h2>
        </div>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={3}>
              <ImageSelection />
            </Grid.Column>
            <Grid.Column width={13}>
              <ImageMain />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={16}>
              <ColorsList />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid celled>
          <Grid.Row>
            <Grid.Column width={5}>
              <ColorInfo />
            </Grid.Column>
            <Grid.Column
              width={11}
              className="color-picker-grid"
            >
              <ColorPicker />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </div>
    );
  }
}

export default App;