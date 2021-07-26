import React, { Component } from 'react';
import mapboxgl from '!mapbox-gl';
import Loading from '../Loading/Loading';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hyaXN3YWRlMTEyMzU4IiwiYSI6ImNrcDdxbHE4aTAyY3kybnBuNzc3YmhzcHQifQ.WJkQp4FG6ppdVVjiDIe-vg'
export default class CurrencyMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lng: -70.9,
            lat: 42.35,
            zoom: 2,
        };
        this.mapContainer = React.createRef();
    }

    componentDidMount(){
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/light-v10',
            center: [lng, lat],
            zoom: zoom
        }); 
    }
    render() {
        return (
            <div>
                <h1>MAP PAGE!</h1>
                <div ref={this.mapContainer} className="map-container" />
            </div>
        )
    }
}








