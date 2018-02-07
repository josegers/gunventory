import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createActionSetDescription } from '../../State/Actions/Test/Test.Actions';

class TestComponent extends React.Component {
  constructor() {
    super();
    this.onDescriptionTextAreaChange = this.onDescriptionTextAreaChange.bind(this);
  }

  onDescriptionTextAreaChange(e) {
    this.props.createActionSetDescription(e.target.value);
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.description}</p>
        <textarea 
          value={this.props.description}
          onChange={this.onDescriptionTextAreaChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.Test.title,
    description: state.Test.description,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    createActionSetDescription,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);
