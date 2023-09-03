import React, { useState } from 'react';
import { connect } from 'react-redux';
import { weatherForecastThunk, addToFavorites } from '../actions/weatherActions';
import { Link } from 'react-router-dom';

function WeatherForm(props) {
    const [cityName, setCityName] = useState('');

    const handleInputChange = (e) => {
        setCityName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (cityName.trim() !== '') {
            props.weatherForecast(cityName);
        }
    };

    const handleAddToFavorites = () => {
        const { cityName, temperature } = props;
        if (cityName && temperature) {
            props.addToFavorites({ name: cityName, temp: temperature });
        }
    };

    return (
        <div className='body'>
            <h1>Welcome to Herolo Weather</h1>
            <br /><br />
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='search'
                    placeholder='Enter a city name'
                    value={cityName}
                    onChange={handleInputChange}
                />
                <button type='submit'>Search</button>
            </form>
            {props.cityName && (
                <div className='display'>
                    <div className='header'>
                        {/* Header information */}
                    </div>
                    <h1>Scattered Clouds</h1>
                    {/* Next days weather cards */}
                    <br />
                    <div className='right'>
                        <button onClick={handleAddToFavorites}>Add to Favorites</button>
                    </div>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        cityName: state.cityName,
        temperature: state.temperature,
        nextFiveDays: state.nextFiveDays,
        favorites: state.favorites,
        error: state.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        weatherForecast: (value) => {
            dispatch(weatherForecastThunk(value));
        },
        addToFavorites: (value) => {
            dispatch(addToFavorites(value));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherForm);
