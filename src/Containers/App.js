import React from 'react';
import { connect } from 'react-redux';
import CardList from '../Components/CardList';
import { shops } from '../shops';
import SearchBox from '../Components/SearchBox';
import ErrorBoundry from '../Components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions'

const mapStateToProps = state => {
    return {
        searchField: state.searchField
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (event) => dispatch(setSearchField(event.target.value))

    }

}

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            shops: shops,
        }
    }


    render() {
        const { shops } = this.state;
        const { searchField, onSearch } = this.props;
        const filteredShops = shops.filter(shop => {
            return shop.name.toLowerCase().includes(searchField.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1 className='f-subheadline lh-title'> Coffee Me Up </h1>
                <SearchBox searchChange={onSearch} />
                <ErrorBoundry>
                    <CardList shops={filteredShops} />
                </ErrorBoundry>

            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);