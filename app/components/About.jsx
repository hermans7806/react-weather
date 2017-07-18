var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application build on React.</p>
      <p>This app created using:</p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - This was the javascript framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Open Weather Map to search for weather data by city name.
        </li>
        <li>
          <a href="http://foundation.zurb.com">Foundation</a> - The easy implemented custom styles.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
