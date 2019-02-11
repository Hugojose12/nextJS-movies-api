import React from 'react';
import Head from 'next/head';
import axios from 'axios';
import Base from '../layouts/base';
import Link from 'next/link';
import Movie from '../component/movie';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class extends React.Component {
	static async getInitialProps({ query }) {
		const page = query.page ? Number(query.page) : 1;
		const responde = await axios.get(`http://www.omdbapi.com/?apikey=c9d02680&s=batman&page=${page}`);
		const movies = responde.data.Search;
		

		return { movies, page }
	}

	renderPagination() {
		const previous = this.props.page > 1 ?
			<Link className="page-item" href={`/?page=${this.props.page - 1 }`}><a className="page-link" >Previous</a></Link> : null;

		return (
		<nav aria-label="Page navigation example">
			<ul className="pagination">
				{ previous }	
				<Link className="page-item" href={`/?page=${this.props.page + 1 }`}><a className="page-link">Next</a></Link>
			</ul>

			<style>{`
				.pagination {
					justify-content: center;
				}
			`}</style>
		</nav>
		)
	}

	render() {
		return (
			<Base>
				<Head>
					<title>App Movie</title>
				</Head>
				<div className="movies"> 
					{this.props.movies
					.map(movie => <Movie key={movie.imdbID} {...movie} />)
					}

					<style>{`
						.movies {
							display: flex;
							flex-wrap: wrap;
							justify-content: center;
						}
					`}</style>
				</div>
				<div>
				{ this.renderPagination() }
				</div>
			</Base>
		)
	}
}
