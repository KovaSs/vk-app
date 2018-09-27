import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Page extends Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }
  // Ф-ция рендеринга фото
  renderTemplate = () => {
    const { photos, isFetching, error } = this.props
    if(error) {
      return <p className='error'> Во время загрузки произошла ошибка</p>
    }
    if(isFetching) {
      return <p> Загрузка...</p>
    } else {
      return (
        photos.map((entry, index) => (
          <div key={entry.id} className='photo'>
            <p>
              <img src={entry.sizes[0].url} alt='' />
            </p>
            <p>{entry.likes.count} ❤</p>
          </div>
        ))
      )
    }
  }
  // Функция рендеринга кнопок
  renderBtn = ()  => {
    const years = [2014, 2015,2016,2017, 2018]
    return years.map((item) => {
      return (
        <button key={item} className='btn' onClick={this.onBtnClick}>
          {item}
        </button>
      )
    })
  }

  render() {
    const { year, photos} = this.props
    return (
       <div className='ib page'>
         <p>{this.renderBtn()}</p>
         <h3>{year} год [{photos.length}]</h3>
          <div className='img-container'>
            {this.renderTemplate()}
          </div> 
       </div>
    )
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  error: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
}