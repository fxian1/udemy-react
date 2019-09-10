import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 
                    'Client-ID 9e1d82e50d8f4c6ad0cd64ded7416d0c1e6e7ec3f4f8648abe9ef3b2b6212aed' 
            }
        });
    }

    render() {
        return (
            <div className= "ui container" style={{marginTop: "10px"}}>
                    <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
    
}

export default App;