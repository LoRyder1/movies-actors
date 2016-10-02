this.Movies = React.createClass({
  getInitialState: function() {
    return {
      movies: this.props.data
    };
  },

  addMovie: function(movie) {
    movies = this.state.movi
  }

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
          </tr>
          </thead>
          <tbody>
          {items.map(function(movie, i) {
            return <Movie movie={movie} key={i} />
          })}
          </tbody>
        </table>
      </div>
      )
  }
})
