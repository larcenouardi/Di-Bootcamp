

const updateCityName = (data) => {
    console.log('weatherSuccess action', data);
    return {
        type: 'UPDATE_CITY_NAME',
        payload: data,
    };
}

const updateTemperature = (data) => {
    console.log('weatherSuccess action', data);
    return {
        type: 'UPDATE_TEMPERATURE',
        payload: data,
    };
}

const nextFiveDays = (data) => {
    console.log('weatherSuccess action', data);
    return {
        type: 'NEXT_FIVE_DAYS',
        payload: data,
    };
}

const weatherFailed = (data) => {
    return {
        type: 'FORECAST_WEATHER_FAILED',
        payload: data,
    };
}

const addToFavorites = (data) => {
    return {
        type: 'IS_ADDED',
        payload: data,
    };
}

export {
    updateCityName,
    updateTemperature,
    nextFiveDays,
    weatherFailed,
    addToFavorites,
};
