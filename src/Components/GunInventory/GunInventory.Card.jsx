import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class GunCard extends React.Component {
  render() {
    const { gun } = this.props;
    return(
      <Card style={{ width: '15%', display: 'inline-block' }}>
        <CardHeader
          title={gun.model}
          subtitle={gun.brand}
        />
        <CardMedia style={{ borderStyle: 'solid', borderColor: 'green' }}>
          <img src={gun.picture} alt={gun.model} style={{ borderStyle: 'solid' }} />
        </CardMedia>
        <CardTitle title="Information" />
        <CardText>
          Calibers:
          <ul>
            {gun.calibers.map(caliber => <li key={caliber}>{caliber}</li>)}
          </ul>
        </CardText>
        <CardActions>
          <FlatButton label="View log" />
          <FlatButton label="Add to log" />
          <FlatButton label="View maintenance" />
          <FlatButton label="Add maintenance" />
        </CardActions>
      </Card>
    );
  }
}
