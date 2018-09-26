import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Page extends Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }
  render() {
    const { year, photos, isFetching } = this.props // вытащили isFetching
    return (
       <div className='ib page'>
         <p>
           <button className='btn' onClick={this.onBtnClick}>
           2018
           </button>{' '}
           <button className='btn' onClick={this.onBtnClick}>
           2017
           </button>{' '}
           <button className='btn' onClick={this.onBtnClick}>
           2016
           </button>{' '}
           <button className='btn' onClick={this.onBtnClick}>
           2015
           </button>{' '}
           <button className='btn' onClick={this.onBtnClick}>
           2014
           </button>
         </p>
         <h3>{year} год</h3>
         {/* добавили отрисовку по условию */}
         {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
       </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired, // добавили новое свойство в propTypes
  isFetching: PropTypes.bool.isRequired // добавили новое свойство - isFetching, причем в propTypes нет boolean, есть bool
}