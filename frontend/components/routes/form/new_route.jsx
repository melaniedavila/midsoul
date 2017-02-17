import React from 'react';

// const createMapCenteredOnUserLocation = function () {
//   let center;
//   const zoom = 9;

  // if (GBrowserIsCompatible())
  // {
    // const map = new google.maps.Map2(document.getElementById("map"));
  //
  //   if (google.loader.ClientLocation){
  //       center = new google.maps.LatLng(
  //       google.loader.ClientLocation.latitude,
  //       google.loader.ClientLocation.longitude
  //     );
  //   }
  // }
//   const map = new google.maps.Map2(document.getElementById("map"));
//
//
//   map.setCenter({lat: 37.773972, lng: -122.431297}, zoom);
// }
// let _mapOptions = {
//   center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
//   zoom: 13
// };


// const _defaultMapOptions = {
//   center: {lat: 40.7128, lng: 74.0059 },
//   zoom: 10
// }
//
// const _customMapOptions = function (pos) {
//   return ({
//     center: { lat: pos.coords.latitude, lng: pos.coords.longitude },
//     zoom: 10
//   });
// }


let _mapOptions = {
  center: {lat: 37.773972, lng: -122.431297}, // San Francisco coords
  zoom: 13
};

export default class NewRoute extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {  title: '',
                    description: '',
                    path: '' };
  }

  componentDidMount() {
    this.props.clearErrors();
    const map = this.refs.map;
    this.map = new google.maps.Map(map, _mapOptions);
    debugger
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.route);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }


  errors() {
    if (this.props.errors.length > 0) {
      return (
        this.props.errors.map(error, idx => {
          return (<li className="error" key={idx}>{error}</li>);
        })
      );
    }
  }

  render() {
    debugger
    return <div className="map" ref="map">Map</div>;
  }
}

// return (<div ref={ map => this.mapNode = map }></div>);
