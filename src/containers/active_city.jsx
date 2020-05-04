import React from "react";
import { connect } from "react-redux";


const ActiveCity = (props) => {
  const style = {
    width: '100%'
  };
  let city = null;
  if (props.activeCity) {
    city = props.activeCity;
  }
  return (
    <div className="active-city">
      <h3>{city.name || 'Choose a city'}</h3>
      <p>{city.address}</p>
      <img style={style} onContextMenu="return false;" src={`https://kitt.lewagon.com/placeholder/cities/${city.slug}`} alt="" />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}

export default connect(mapStateToProps)(ActiveCity);
