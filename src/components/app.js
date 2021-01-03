import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
	onSearchSubmit(term) {
		axios
			.get('https://api.unsplash.com/search/photos', {
				params: { query: term },
				headers: {
					Authorization: 'Client-ID UQ_EwqCZkQp43VBg9ZtmV88FvVXUFTgKDuCX2MM3azE',
				},
				// callback that will be invoked when we receive data from unsplash
			})
			.then((response) => {
				console.log(response.data.results);
			});
	}

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
			</div>
		);
	}
}

export default App;
