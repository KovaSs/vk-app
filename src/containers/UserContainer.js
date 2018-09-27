import React, { Component } from 'react';
import { connect } from 'react-redux';
import { User } from '../components/User';
import { heandleLogin } from '../actions/UserActions';

class UserContainer extends Component {
  render() {
    const { user, heandleLogin } = this.props
    return (
      <User 
        name={user.name}
        isFetching={user.isFetching}
        error={user.error}
        heandleLogin={heandleLogin}
      />
    )
  }
}

const mapStateToProps = store => {
  return {
    user: store.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    heandleLogin: () => dispatch(heandleLogin())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(UserContainer)