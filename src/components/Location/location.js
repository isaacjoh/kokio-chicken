import React, { Component } from "react";
import "./location.scss";

class Location extends Component {
  render() {
    const {
      city,
      distance,
      orderOnlineLink,
      address1,
      address2,
      phoneNumber,
      phoneNumberDisplay,
      hours1,
      hours2,
      hours3,
      hours4,
      description,
      mapUrl,
      onClick
    } = this.props

    return (
      <div className="location" onClick={onClick}>
        <h3 className="city">{city}</h3>
        <p className="distance">{distance}</p>
        <p className="address">
          <span>{address1}</span>
          <span>{address2}</span>
        </p>
        {
          phoneNumber && (
            <a href={`tel:+1-${phoneNumber}`}>
              <button className="phone-btn">
                <span className="phone-number">
                  {phoneNumberDisplay}
                </span>
              </button>
            </a>
          )
        }
        <p className="hours">
          <span>{hours1}</span>
          <span>{hours2}</span>
          <span>{hours3}</span>
          <span>{hours4}</span>
        </p>
        {
          description && (
            <p className="description">
              <span>{description}</span>
            </p>
          )
        }
        {
          orderOnlineLink && (
            <button className="order-online-link-btn secondary">
              <a href={orderOnlineLink} target="_blank" rel="noopener noreferrer">
                ORDER ONLINE
              </a>
            </button>
          )
        }
        <a className="map-link" href={mapUrl} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
          <button className="map-btn">
            <span className="map-icon">
              <img src="img/map-icon.png" alt="map" />
            </span>
          </button>
        </a>
      </div>
    )
  }
}

export default Location
