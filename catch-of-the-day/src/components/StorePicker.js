import React from 'react';
// imported from helper functions to generate funny default name for a store. For specific functionality that is not tied to one aprticlar component,
// it can be added to the helpers
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  render() {
    return (
      <form className="store-selector">
        <h2>Please Enter a Store</h2>
        {/* We use defaultValuse rather than value because the value attribute is tied to state. we use {} so that we can write JS inside */}
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()}/>
        <button type="submit">Visit Store --></button>
        {/* we'll hook this up to functionality later */}
      </form>
    )
  }
}

export default StorePicker;