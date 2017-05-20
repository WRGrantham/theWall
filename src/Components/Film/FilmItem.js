import React, { Component } from 'react';

class FilmItem extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.movieInfo.title}</h3>
                <h5>{this.props.movieInfo.opening_crawl}</h5>
            </div>
        );
    }
}
export default FilmItem;