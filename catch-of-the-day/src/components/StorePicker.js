import React from 'react';

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name"/>
        <button type="submit">Visit Store --></button>
        {/* we'll hook this up to functionality later */}
      </form>
    )
  }
}

export default StorePicker;