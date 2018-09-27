import React, { Component } from 'react';
import PropTypes from 'prop-types';

const years = [2014, 2015,2016,2017, 2018]

export class Page extends Component {
  onBtnClick = e => {
    const year = +e.currentTarget.innerText
    this.props.getPhotos(year)
  }

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

  renderYearbutton = year => {
    return (
        <button key={year} className='btn' onClick={this.onBtnClick}>
          {year}
        </button>
      )
  }

  render() {
    const { year, photos} = this.props
    return (
       <div className='ib page'>
         <p>
           {years.map(this.renderYearbutton)}
         </p>
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