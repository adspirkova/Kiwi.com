import React from "react";

const destination = [
  {
    code: "VLC",
    city: "Valencia"
  },
  {
    code: "BCN",
    city: "Barcelona"
  },
  {
    code: "MAD",
    city: "Madrid"
  },
  {
    code: "MIL",
    city: "Milano"
  },
  {
    code: "AHN",
    city: "Athens"
  }
];

const departure = [
  {
    code: "PRG",
    city: "Prague"
  },
  {
    code: "BER",
    city: "Berlin"
  },
  {
    code: "WAW",
    city: "Warsaw"
  },
  {
    code: "PED",
    city: "Pardubice"
  }
];

const Search = ({ onSearchChange, updateFlights, checked, onCheckedChange }) => {
  return (
    <div
      className="search-container"
      style={{
        padding: "1rem"
      }}
    >
      <div>
          <label> From: </label>
          <select
            name="from"
            id=""
            style={{
              textalign: "center"
            }}
            onChange={onSearchChange}
          >
            {departure.map((departure, index) => {
              return (
                <option key={index} value={departure.code}>
                  {departure.city}
                </option>
              );
            })}
          </select>
      </div>
      <div>
          <label> To: </label>
          <select name="to" id="" onChange={onSearchChange}>
            {destination.map((destination, index) => {
              return (
                <option key={index} value={destination.code}>
                  {destination.city}
                </option>
              );
            })}
          </select>
      </div>
      <div>
          <label> Direct Flights only</label>
          {console.log(checked)}
          <input name="direct" type="checkbox" onChange={onCheckedChange} checked={checked}/>
      </div>
      <button onClick={updateFlights}>Search</button>
    </div>
  );
};

export default Search;
