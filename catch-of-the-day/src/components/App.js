import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';

class App extends React.Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          {/* We then create a Header component and add it in- this is different from a header hmtl tag */}
          <Header />
        </div>
        <Order/>
        <Inventory/>
      </div>
    )
  }
}

export default App;