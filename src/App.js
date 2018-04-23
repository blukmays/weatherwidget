// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//   getWeather = () => {
//       fetch('http://api.openweathermap.org/data/2.5/forecast?zip=84109&APPID=a90a1769668d41f38e80d8ee118e7760')
//           .then(function(response) {
//               return response.json();
//           })
//           .then(function(myJson) {
//               console.log(myJson);
//           });
//   }
//
//   render() {
//     return (
//       <div className="App">
//
//
//   </div>
//
//
//
//     );
//   }
// }
//
// export default App;

import React from 'react';
import ZipCode from './components/ZipCode';
import Forecast from './components/Forecast';
import Detail from './components/Detail';
import {BrowserRouter, Route} from 'react-router-dom';
import axios from 'axios'


class App extends React.Component {
    render () {
        return(dispatch) => (
            axios.get("http://localhost:5000/v1/weather/current")
            <BrowserRouter>
                <div className='container'>

                            </div>
                        )
                    }}

                    <Route exact path='/' render={function (props) {
                        return (
                            <div className='home-container' style={{backgroundImage: "url('app/images/pattern.svg')"}}>
                                <h1 className='header'>Enter a City and State</h1>
                                <ZipCode
                                    direction='column'
                                    onSubmitZipcode={function (city) {
                                        props.history.push({
                                            pathname: '/forecast',
                                            search: '?city=' + city
                                        })
                                    }}
                                    zipcode={123} />
                            </div>
                        )
                    }} />






                </div>
            </BrowserRouter>
        )
    }
}

export default App;
