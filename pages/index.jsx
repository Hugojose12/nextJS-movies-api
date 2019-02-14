import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import Base from '../layouts/base';
import Link from 'next/link';
import Router from 'next/router'
import Movie from '../component/movie';
import FormMovies from '../component/FormMovies';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class OmdbMovies extends React.Component {
	static async getInitialProps({ query }) {
		/* const page = query.page ? Number(query.page) : 1; */
		const responde = await axios.get(`http://www.omdbapi.com/?apikey=c9d02680&s=fast&page=1`);
		const movies = responde.data.Search;
		
		return { movies }
	}

	constructor (props) {
		super(props)
		this.state = {
			movies: props.movies, 
			search: "fast",
			page: 1,
		}

		this.handleAddMovies = this.handleAddMovies.bind(this);	
		this.handleToggleClick = this.handleToggleClick.bind(this);
	}

	async handleToggleClick(e) {
		if (e.target.name == "next") {
			const page = this.state.page + 1
			const responde = await axios.get(`http://www.omdbapi.com/?apikey=c9d02680&s=${this.state.search}&page=${page}`);
			const movies = responde.data.Search;
			
			this.setState({
				movies: movies,
				page: this.state.page + 1
			});
		} else {
			const page = this.state.page - 1
			const responde = await axios.get(`http://www.omdbapi.com/?apikey=c9d02680&s=${this.state.search}&page=${page}`);
			const movies = responde.data.Search;
			this.setState({
				movies: movies,
				page: this.state.page - 1
			});
		}
	}

	renderPagination() {
		const previous_state = this.state.page > 1 ?
			<button type="button" className="btn btn-secondary btn-sm mr-1" name="previous" onClick={this.handleToggleClick}>Previous</button> : null;

		return (
			<nav aria-label="Page navigation example">
				<ul className="pagination mt-4">
					{ previous_state }
					<button type="button" className="btn btn-primary btn-sm" name="next" onClick={this.handleToggleClick}>Next</button>
				</ul>
		
				<style>{`
					.pagination {
						justify-content: center;
					}
				`}</style>
			</nav>
		)
	}

	handleAddMovies(movies, search) {
		this.setState({
			movies: movies,
			page: 1,
			search: search,
		});
	/* 	Router.push(`/`) */
	}

	render() {
		return (
			<Base>
				<Head>
					<title>App Movie</title>
				</Head>
				
				<FormMovies onAddMovies={this.handleAddMovies}/>
				{ this.renderPagination() }
				<div className="movies">

					{this.state.movies ? (
						this.state.movies.map(movie => <Movie key={movie.imdbID} {...movie} />)
					) : (
						<h2>Not Found Movie></h2>
					)}
					
					<style>{`
						.movies {
							display: flex;
							flex-wrap: wrap;
							justify-content: center;
						}
					`}</style>
				</div>
				<div>
				
				</div>
			</Base>
		)
	}
}
