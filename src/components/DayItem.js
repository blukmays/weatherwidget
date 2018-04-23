import React from 'react';
import utils from '../utils/helpers';
const getDate = utils.getDate;

function DayItem (props) {
    const date = getDate(props.day.dt);
    const icon = props.day.weather[0].icon;
    return (
        <div onClick={props.onClick} className='dayContainer'>
            <img className='weather' src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' />
            <h2 className='subheader'>{date}</h2>
        </div>
    )
}

export default DayItem;