import React, { Component} from 'react';
import Header from './presentational/header'
import CardDetails from './presentational/cardDetails'
import LocationBadge from './presentational/locationBadge';
import axios from 'axios'
import CardList from './presentational/cardList'

class App extends Component {
     

            render() {
              console.log('store', this.props.store)
              return(
                <div>
                    <Header />
                    <CardList />
                </div>
              );
            }

}

export default App;