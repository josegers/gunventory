import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';

export default class MaterialTest extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Paper>
          This should be text on my paper
        </Paper>
        <RaisedButton label="MyFirstButton" />
      </React.Fragment>
    );
  }
}