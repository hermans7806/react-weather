var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      location: 'Singapore',
      temp: 29
    }
  },
  handleSearch: function (location) {
    this.setState({
      location: location,
      temp: 23
    });
  },

  render: function () {
    var {temp, location} = this.state;
    return (
      <div>
        <h1>Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        <WeatherMessage temp={temp} location={location} />
      </div>
    );
  }
});

module.exports = Weather;

//http://api.openweathermap.org/data/2.5/find?q=Singapore,sg&units=metric&appid=96f61aafaa21213b38b5fe476b5cc120
