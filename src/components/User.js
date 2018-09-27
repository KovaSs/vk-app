import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class User extends Component {
  renderTemplate = () => {
    const { name, error, isFetching} = this.props

    if(error) {
      return <p> Во время запроса произошла ошибкаб обновите страницу</p>
    }

    if(isFetching){
      return <p> Загрузка...</p>
    }

    if(name) {
      return <p> Привет, {name}!</p>
    } else {
      return (
        <button className='btn' onClick={this.props.heandleLogin}>
          Войти
        </button>
      )
    }
  }
  render() {
    console.log('---','<User/> render')
    return (
       <div className='ib user'>
         {this.renderTemplate()}
       </div>
    );
  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired,
  heandleLogin: PropTypes.func.isRequired
}