import React from 'react';

import './styles.css';

function HikerItem({hiker}) {
    return(
        <li className="hiker-item">
          <header>
            <img src={hiker.picture} alt={hiker.name}></img>
            <div className="hiker-info">
              <strong>{hiker.name}</strong>
              <span>{hiker.email}</span>
            </div>
          </header>
          <p>{hiker.phone}</p>
          <a href="">Access hiker's rides</a>
        </li>
    );
}

export default HikerItem;