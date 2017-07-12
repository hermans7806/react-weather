var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric&appid=96f61aafaa21213b38b5fe476b5cc120';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.list.length === 0) {
        throw new Error('City not found');
      } else {
        return res.data.list[0].main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
