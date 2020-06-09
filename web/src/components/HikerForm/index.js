import React, { useState, useEffect } from 'react';

function HikerForm({ onSubmit }) {
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ picture, setPicture ] = useState('');
    const [ latitude, setLatitude ] = useState('');
    const [ longitude, setLongitude ] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
    
            setLatitude(latitude);
            setLongitude(longitude);
          },
          (err) => {
            console.log(err);
          },
          {
            timeout: 30000,
          }
        );
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();

        await onSubmit({
            name,
            email,
            phone,
            picture,
            latitude,
            longitude
        });

        setName('');
        setEmail('');
        setPhone('');
        setPicture('');
    }
    
    return(
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="name">Hiker's Name</label>
            <input
              name="name"
              id="name"
              required
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="email">Hiker's Email</label>
            <input 
              name="email" 
              id="email" 
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="phone">Hiker's Phone</label>
            <input 
              name="phone"
              id="phone"
              required
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="picture">Hiker's Picture</label>
            <input 
              name="picture" 
              id="picture" 
              required
              value={picture}
              onChange={e => setPicture(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
                type="number" 
                name="latitude" 
                id="latitude" 
                required
                value={latitude} 
                onChange={e => setLatitude(e.target.value)}
              />
            </div>
            
            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude} 
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Sign Up</button>
        </form>
    );
}

export default HikerForm;