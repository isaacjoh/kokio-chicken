import React, { Component } from "react";
import ReactDOMServer from "react-dom/server";
import _ from "lodash";
import Location from "../Location/location";
import "./locations.scss";
import { LOCATIONS_PAGE } from "../../content";

const google = window.google;

let map, infoWindow;

const cerritos = {
  name: "cerritos",
  city: "Cerritos",
  orderOnlineLink: "https://www.kokiochickencerritos.com",
  address1: "13337 Artesia Blvd",
  address2: "Cerritos, CA 90703",
  phoneNumber: "562-802-0200",
  phoneNumberDisplay: "(562) 802-0200",
  hours1: "Mon-Thurs: 11AM to 12AM",
  hours2: "Fri-Sat: 11AM to 1:30AM",
  hours3: "Sun: 11AM to 12AM",
  lat: 33.87445,
  lng: -118.047599,
  mapUrl:
    "https://www.google.com/maps?saddr=My+Location&daddr=13337+Artesia+Boulevard,+Cerritos,+CA",
};
const losangeles = {
  name: "losangeles",
  city: "Los Angeles",
  address1: "3977 W. 6th Street",
  address2: "Los Angeles, CA 90020",
  phoneNumber: "213-674-7333",
  phoneNumberDisplay: "(213) 674-7333",
  hours1: "Mon-Thurs: 11AM to 11PM",
  hours2: "Fri-Sat: 11AM to 12AM",
  hours3: "Sun: 12PM to 10PM",
  description: "Coming Soon!",
  lat: 34.064234,
  lng: -118.310101,
  mapUrl:
    "https://www.google.com/maps?saddr=My+Location&daddr=3977+W+6th+St,+Los+Angeles,+CA+90020",
};
const downtownla = {
  name: "downtownla",
  city: "Downtown LA",
  address1: "517 E. Olympic Blvd",
  address2: "Los Angeles, CA 90015",
  phoneNumber: "213-623-8866",
  phoneNumberDisplay: "(213) 623-8866",
  hours1: "Mon-Sun: 11AM to 6PM",
  lat: 34.037305,
  lng: -118.252422,
  mapUrl:
    "https://www.google.com/maps?saddr=My+Location&daddr=517+E+Olympic+Blvd,+Los+Angeles,+CA+90015",
};
const diamondbar = {
  name: "diamondbar",
  city: "Diamond Bar",
  orderOnlineLink: "https://www.diamondbarkokiochicken.com",
  address1: "2841 S. Diamond Bar Blvd",
  address2: "Diamond Bar, CA 91765",
  phoneNumber: "909-869-5582",
  phoneNumberDisplay: "(909) 869-5582",
  hours1: "Mon-Tues: 11:30AM to 10:30PM",
  hours2: "Wed-Sat: 11:30AM to 11:30PM",
  hours3: "Sun: 11:30AM to 10:30PM",
  lat: 33.97448,
  lng: -117.837958,
  mapUrl:
    "https://www.google.com/maps?saddr=My+Location&daddr=2841+S+Diamond+Bar+Blvd,+Diamond+Bar,+CA+91765",
};
const hawthorne = {
  name: "hawthorne",
  city: "Hawthorne",
  address1: "3800 W. El Segundo Blvd",
  address2: "Hawthorne, CA 90250",
  hours1: "Pending",
  lat: 33.916099,
  lng: -118.33999,
  mapUrl:
    "https://www.google.com/maps?saddr=My+Location&daddr=3800+W+El+Segundo+Blvd,+Hawthorne,+CA+90250",
};
const lubbock = {
  name: "lubbock",
  city: "Lubbock",
  address1: "3211-A 50th St",
  address2: "Lubbock, TX 79413",
  phoneNumber: "806-317-1127",
  phoneNumberDisplay: "(806) 317-1127",
  hours1: "Mon-Sat: 10:30AM to 8:30PM",
  hours3: "Sun: Closed",
  lat: 33.54843767159634,
  lng: -101.88462681664733,
  mapUrl:
    "https://www.google.com/maps?saddr=My+Location&daddr=3211+W+El+50th+St,+Lubbock,+TX+79413",
};
const katy = {
  name: "katy",
  city: "Katy",
  orderOnlineLink: "https://www.clover.com/online-ordering/kokio-chicken-katy",
  address1: "9006 S. Fry Rd",
  address2: "Katy, TX 77494",
  phoneNumber: "281-396-4121",
  phoneNumberDisplay: "(281) 396-4121",
  hours1: "Mon-Thurs: 11AM to 9PM",
  hours2: "Fri-Sat: 11AM to 10PM",
  hours3: "Sun: 11AM to 9PM",
  lat: 29.71268661483032,
  lng: -95.80616733452591,
  mapUrl:
    "https://www.google.com/maps?saddr=My+Location&daddr=9006+S+Fry+Rd,+Katy,+TX+77494",
};
const kirkland = {
  name: "kirkland",
  city: "Kirkland",
  address1: "147 Park Ln",
  address2: "Kirkland, WA 98033",
  phoneNumber: "425-822-8049",
  phoneNumberDisplay: "(425) 822-8049",
  hours1: "Mon-Thurs: 11AM to 2:45PM, 4PM to 10PM",
  hours2: "Fri-Sun: 11AM to 10PM",
  lat: 47.67621547208762,
  lng: -122.20504781487946,
  mapUrl:
    "https://www.google.com/maps?saddr=My+Location&daddr=147+Park+Ln,+Kirkland,+WA+98033",
};

const locations = [
  downtownla,
  cerritos,
  losangeles,
  diamondbar,
  hawthorne,
  lubbock,
  katy,
  kirkland,
];

const infowindows = [];

const centerOfMap = {
  lat: 33.922678,
  lng: -118.152926,
};

const computeDistance = (from, to) => {
  return (
    google.maps.geometry.spherical.computeDistanceBetween(from, to) *
    0.000621371
  );
};

const setNewLocation = (newLat, newLng) => {
  map.setCenter({
    lat: newLat,
    lng: newLng,
  });
};

const handleLocationError = (browserHasGeolocation, infoWindow, pos) => {
  console.log("does not support geolocation");
};

const getBrowserWidth = () => {
  return Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  );
};

class Locations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locationsSorted: [],
    };
  }

  componentDidMount = () => {
    this.initMap();
  };

  initMap = () => {
    const browserWidth = getBrowserWidth();
    const zoom = browserWidth <= 600 ? 9 : 10;

    map = new google.maps.Map(document.getElementById("map"), {
      zoom: zoom,
      center: centerOfMap,
      mapTypeControl: false,
    });

    let marker; // eslint-disable-line
    const foodIconUrl =
      "http://maps.google.com/mapfiles/ms/micons/orange-dot.png";

    locations.forEach((location) => {
      const locationMarker = new google.maps.Marker({
        position: location,
        map: map,
        icon: foodIconUrl,
      });

      locationMarker.addListener("click", function () {
        map.setCenter(location);
        infowindows.forEach((infowindow) => {
          infowindow.close();
        });
        const infoWindowPopup = (
          <div className="infowindow-popup">
            <p>{location.city}</p>
          </div>
        );

        const htmlString = ReactDOMServer.renderToStaticMarkup(infoWindowPopup);
        const locationInfowindow = new google.maps.InfoWindow({
          content: htmlString,
        });
        locationInfowindow.open(map, locationMarker);
        infowindows.push(locationInfowindow);
      });
    });

    if (navigator.geolocation) {
      let context = this;
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          marker = new google.maps.Marker({ position: pos, map: map });
          const currentLocation = new google.maps.LatLng(pos.lat, pos.lng);
          const locationsSorted = [];

          for (let i = 0; i < locations.length; i++) {
            const targetDestination = new google.maps.LatLng(
              locations[i].lat,
              locations[i].lng
            );
            const computedDistance = computeDistance(
              currentLocation,
              targetDestination
            );

            context.setState({
              [locations[i].name]:
                computedDistance < 75
                  ? `${computedDistance.toFixed(2)} mi`
                  : undefined,
            });
            locationsSorted.push({
              ..._.find(locations, { name: locations[i].name }),
              distance: computedDistance,
            });
          }

          context.setState({
            locationsSorted,
          });
        },
        function () {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      let context = this;
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
      for (let i = 0; i < locations.length; i++) {
        context.setState({
          [locations[i].name]: undefined,
          locationsSorted: [],
        });
      }
    }
  };

  render() {
    let renderedLocations;
    if (this.state.locationsSorted.length) {
      renderedLocations = _.sortBy(this.state.locationsSorted, ["distance"]);
    } else {
      renderedLocations = locations;
    }

    return (
      <div className="box full-page locations-page-outer">
        <div className="box full-page-layout locations-page">
          <h1>{LOCATIONS_PAGE.title}</h1>
          <div className="map-locations">
            <div id="map"></div>
            <div className="locations">
              {renderedLocations.map((location) => (
                <Location
                  key={location.name}
                  onClick={() => setNewLocation(location.lat, location.lng)}
                  city={location.city}
                  distance={this.state[location.name]}
                  address1={location.address1}
                  address2={location.address2}
                  phoneNumber={location.phoneNumber}
                  phoneNumberDisplay={location.phoneNumberDisplay}
                  orderOnlineLink={location.orderOnlineLink}
                  description={location.description}
                  hours1={location.hours1}
                  hours2={location.hours2}
                  hours3={location.hours3}
                  hours4={location.hours4}
                  mapUrl={location.mapUrl}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Locations;
