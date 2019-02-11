import React, { Component } from 'react';
import Link from 'next/link';

class Movie extends Component {
	render (){
		return (
			<div className="movie">
        <div className="poster"></div>
        <div className="title">{this.props.Title}</div>

        <style jsx>{`
          .movie {
            height: 350px;
            width: 280px;
            display: flex;
            flex-direction: column;
            margin: 10px;
          }

          .title {
            text-align: center;
            width: 100%;
            opacity: 0.9;
            background: black;
            color: white;
            font-size: 16px;
          }
        
          .poster {
            flex: 1;
            background-image: url(${this.props.Poster});
            background-size: cover;
            background-color: black;
          }
        `}</style>
      </div>
		)
	}
}

export default Movie;