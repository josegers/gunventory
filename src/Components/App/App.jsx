import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import GunInventoryCard from '../GunInventory/GunInventory.Card';

class App extends React.Component {
  render() {
    const { guns } = this.props;
    console.log(guns);

    return (
      <div>
        <h1>GunVentory, demo app</h1>
        {_.map(guns, (gun, id) => (
          <GunInventoryCard
            key={id}
            gun={gun}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    guns: state.GunInventory.guns,
  };
};

export default connect(mapStateToProps)(App);
