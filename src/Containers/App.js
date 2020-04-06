import React from 'react';
import CardList from '../Components/CardList';
import { shops } from '../shops';
import SearchBox from '../Components/SearchBox';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            shops: shops,
            searchfield: ''
        }
    }

    onSearch = (event) => {
        this.setState({ searchfield: event.target.value })

    }

    render() {
        const filteredShops = this.state.shops.filter(shop => {
            return shop.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f-subheadline lh-title'> Coffee Me Up </h1>
                <SearchBox searchChange={this.onSearch} />
                <ErrorBoundry>
                    <CardList shops={filteredShops} />
                </ErrorBoundry>

            </div>
        );
    }
}

export default App;