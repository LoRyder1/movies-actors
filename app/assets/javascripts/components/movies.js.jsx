this.Movies = React.createClass({
  getInitialState: function() {
    return {
      movies: this.props.data
    };
  },

  getDefaultProps: function() {
    return { movies: [] };
  },

  addMovie: function(movie) {
    movies = this.state.movies.slice();
    movies.push(movie);
    this.setState({movies: movies});
  },



  render: function() {
    var items = this.state.movies;

    return (
      <div className='movies'>
        <h2 className='name'>Movies</h2>
        <div className='row'></div>
        <MovieForm handleNewMovie={this.addMovie} />
        <hr></hr>
        <table className='table table-bordered'>
          <thead>
          <tr>
            <th>Title</th>
            <th>Text</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {items.map(function(movie, i) {
            return <Movie movie={movie} key={i} handleDeleteMovie={this.deleteMovie}/>
          })}
          </tbody>
        </table>
      </div>
      )
  }
})

