import React, { Component } from 'react';
import axios from 'axios';

class FormMovie extends Component {
    constructor(props) {
      super(props);
  
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    async handleSubmit(e) {
			e.preventDefault();
			const page = 1;
			const search = e.target[0].value;
			const responde = await axios.get(`http://www.omdbapi.com/?apikey=c9d02680&s=${search}&${page}`);
			const movies = responde.data.Search;
			
      this.props.onAddMovies(movies, search);
    }
  
      render() {
          return (
          	<form onSubmit={this.handleSubmit} className="mt-2">
							<div className="form-inline jc-c ">
								<h2 >Search Movies...</h2>
								<div className="form-group mx-sm-3 mb-2">
									<input className="form-control" name="title" placeholder="Enter Title Movie" onChange={this.handleInput} />
									<button type="submit" className="btn btn-primary ml-3">Submit</button>
								</div>
							</div>

						</form>
          );
      }
  }
  export default FormMovie;

