import React, { Component } from 'react'
import Axios from 'axios'
import FilmItem from "./FilmItem.js"
class Film extends Component {
    constructor(props){
        super(props);
        this.cancelToken = Axios.CancelToken.source();
        this.state = {films: false, message: "A long long time ago..."}
    }
    render() {
        if(this.state.films) {
            var movies = this.state.films.map((movie) => {
                return <FilmItem key={movie.episode_id} movieInfo={movie} />
            })
            return(
                <div>
                    <h1>Films:</h1>
                    {movies}
                </div>
            )
        } else {
            return <h1>{this.state.message}</h1>
        }
    }
    componentDidMount(){
        Axios.get("http://swapi.co/api/films", {
            cancelToken: this.cancelToken.token
        }).then((response) => {
            console.log(response);
            this.setState({
                films: response.data.results,
                message: ""
            })
        }).catch((err) =>{
            if (Axios.isCancel(err)) {
                console.log('SW request cancelled', err.message);
            } else {
                this.setState({
                    message: `Star Wars with ID '${this.props.id}' not found`
                })
            }
        })
    }
    componentWillUnmount(){
        this.cancelToken.cancel("Operation cancelled by the user");
    }
}
export default Film;