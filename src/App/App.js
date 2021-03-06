import React, { PureComponent, Fragment } from 'react';
import Map from '../Map/Map';
import UI from '../UI/UI';
import stileIds from '../styles';
import { randomGen } from '../utils';
import places from '../places.json';
import config from '../config.json';

const countPlaces = places.features.length - 1;
const countStyles = stileIds.length - 1;

let styleNumber = randomGen(countStyles);
const place = places.features[randomGen(countPlaces)];
const { coordinates } = place.geometry;
const { zoom } = place.properties;

const previewStyle = localStorage.getItem('previewStyle');

if (previewStyle === styleNumber) {
  styleNumber = stileIds[randomGen(countStyles)].id;
}
const style = stileIds[styleNumber];

localStorage.setItem('previewStyle', styleNumber);

class App extends PureComponent {
  state = {
    coordinates,
    zoom,
    placeName: place.properties.place_name
  };

  changeCoordinates = (coordinates, zoom) => {
    fetch(`${config.geocoding}/${coordinates[0]},${coordinates[1]}.json?types=place&language=en&access_token=${config.accessToken}`)
      .then(response => response.json())
      .then(resp => {
        if (resp.features.length) {
          const placeName = resp.features[0].place_name;
          this.setState({ placeName, coordinates, zoom });
        } else {
          this.setState({ coordinates, zoom });
        }
      });
  };

  render() {
    const { placeName, coordinates, zoom } = this.state;
    return (
      <Fragment>
        <Map
          coordinates={coordinates}
          styleId={style.id}
          zoom={zoom}
          changeCoordinates={this.changeCoordinates}
        />
        <UI placeName={placeName} style={style} />
      </Fragment>
    );
  }
}

export default App;
