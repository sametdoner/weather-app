import React from 'react';

export default function Navbar(props) {
  return(
    <div className="row">
      <div className="col-sm-6">
        <div className="title">Weather App</div>
        <div className="col-sm-6">
          <form action="" className="region" onSubmit={ (e) => props.changeLocation(e)}>
            <input type="text" className="regionInput" placeholder="Location" onChange={ (p) => { props.changeRegion(p.target.value)} }/>
          </form>
        </div>
      </div>
    </div>
  )
}