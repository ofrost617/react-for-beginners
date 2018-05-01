import React from 'react';
// imported from helper functions to generate funny default name for a store. For specific functionality that is not tied to one aprticlar component,
// it can be added to the helpers
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  // we could sue the contrcutior of a component
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  // Another way is to do that in line 24- onSubmit
  goToStore(event) {
    event.preventDefault()
    // prevents the page from refreshing
    console.log("You changed the URL");
    // first grab the text from the box
    console.log(this.storeInput.value)
    // transition the URL from / to /store.:storeId
  }
// render methods are bound to the component but other methods aren't eg the one above. This mand we cna use this within render 
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter a Store</h2>
        {/* We use defaultValuse rather than value because the value attribute is tied to state. we use {} so that we can write JS inside */}
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storeInput = input}}/>
        <button type="submit">Visit Store --></button>
        {/* we'll hook this up to functionality later */}
      </form>
    )
  }
}

export default StorePicker;