this.Movies = React.createClass({
  getInitialState: function() {
    return {
      movies: this.props.data
    };
  },

  getDefaultProps: function() {
    return { movies: [] };
  },

  updateMovie: function(movie, data) {
    index = this.state.movies.indexOf(movie);
    movies = React.addons.update(this.state.movies, { $splice: [[index, 1, data]] });
    this.replaceState({ movies: movies });
  },

  addMovie: function(movie) {
    movies = this.state.movies.slice();
    movies.push(movie);
    this.setState({movies: movies});
  },

  deleteMovie: function(movie) {
    index = this.state.movies.indexOf(movie);
    movies = React.addons.update(this.state.movies, { $splice: [[index,1]] });
    this.replaceState({ movies: movies });
  },

  render: function() {
    var el = this;
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
          {items.map(function(movie , i) {
            return <Movie movie={movie} key={i} handleDeleteMovie={el.deleteMovie} handleEditMovie={el.updateMovie} />
          })}
          </tbody>
        </table>
      </div>
      )
  }
})

