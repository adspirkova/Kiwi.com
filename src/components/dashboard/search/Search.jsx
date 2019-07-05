import React from 'react'

const Search = () => {

    const destination = [{
        code: 'VLC',
        city: 'Valencia',
    }, 
    {
        code: 'BCN',
        city : 'Barcelona',
    },
    {
        code: 'MAD',
        city : 'Madrid',
    },
    {
        code: 'MIL',
        city : 'Milano',
    }, 
    {
        code: 'AHN',
        city : 'Athens',
    }]

    const departure = [{
        code: 'PRG',
        city: 'Prague',
    }, 
    {
        code: 'BER',
        city : 'Berlin',
    },
    {
        code: 'WAW',
        city : 'Warsaw',
    },
    {
        code: 'PED',
        city : 'Pardubice',
    }]


    return (
        <div className='search-container'>
        <label> From: </label>
        <select name="from" id="">
        {departure.map((departure,index) => {
            return (
                <option key={index} value={departure.code}>{departure.city}</option>
            )
        })}
        </select>
        <label> To: </label>
        <select name="from" id="">
        {destination.map((destination,index) => {
            return (
                <option key={index}  value={destination.code}>{destination.city}</option>
            )
        })}
        </select>
        <button onClick={()=>{props.handleSearchClick()}} >Search</button>
        </div>
    )
}

export default Search