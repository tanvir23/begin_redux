import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { CardSection } from './common';
import * as actions from '../actions';
// import { SelectLibrary } from '../actions';

class ListItem extends Component {

  onPress() {
    return this.props.selectLibrary(this.props.library.id);
  }

  renderDescription() {
    const { library, expended } = this.props;

    if (expended) {
      return <Text>{library.description}</Text>;
    }
  }

  render() {
    const { title } = this.props.library;
    return (
      <TouchableWithoutFeedback
        onPress={this.onPress.bind(this)}
      >
        <View>
          <CardSection>
              <Text style={styles.titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ SelectLibrary }, dispatch);
// }

const mapStateToProps = (state, ownProps) => {
  const expended = (state.selectedID === ownProps.library.id);

  return {
    expended
  };
};

export default connect(mapStateToProps, actions)(ListItem);
// export default connect(null, mapDispatchToProps)(ListItem);
