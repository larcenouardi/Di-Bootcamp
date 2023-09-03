import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function WeatherFavorites(props) {
    const handleItemClick = (name) => {
        // Handle item click logic, e.g., navigate to details page
    };

    return (
        <div className='main'>
            <h1>Favorites Weather</h1>
            <div className='display favory'>
                {props.favorites.map((city) => (
                    <div className='cards' key={city.name} onClick={() => handleItemClick(city.name)}>
                        <p>City: <span className='day'>{city.name}</span></p>
                        <p>Temperature: <span className='min'>{city.temp} ℃</span></p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        favorites: state.favorites,
    };
};

export default connect(mapStateToProps)(WeatherFavorites);
