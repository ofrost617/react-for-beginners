import React from 'react';

class Header extends React.Component{
  render() {
    console.log(this)
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
        {/* 'this' refers to the actual component, in this case Header, props is an object that we can call .tagline on */}
      </header>
    )
  }
}

export default Header; 