import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import Base from '../layouts/base';

export default class extends React.Component {
	static async getInitialProps({ query }) {
		const page = query.page ? Number(query.page) : 1;
		const responde = await axios.get(`http://www.omdbapi.com/?apikey=c9d02680&s=batman&page=1`);
		const movies = responde.data.Search;
		

		return { movies, page }
	}

	render() {
		return (
			<Base>
				<Head>
					<title>App Movie</title>
				</Head>
				<div> {this.props.movies.map((movie) => 
					<h3 key={movie.imdbID.toString()}>
						{movie.Title}
					</h3>) 
					} 
				</div>
			</Base>
		)
	}
}
