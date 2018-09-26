import React, { Component } from 'react';
import PropTypes from 'prop-types';

const years = [2014, 2015,2016,2017, 2018]

export class Page extends Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }


  renderYearbutton = year => {
    return (
        <button key={year} className='btn' onClick={this.onBtnClick}>
          {year}
        </button>
      )
  }

  render() {
    const { year, photos, isFetching } = this.props // вытащили isFetching
    return (
       <div className='ib page'>
         <p>
           {years.map(this.renderYearbutton)}
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