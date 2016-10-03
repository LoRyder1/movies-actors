this.Movie = React.createClass({
  getInitialState: function() {
    return { edit: false }
  },

  handleDelete: function(e) {
    var request = $.ajax({
      method: 'DELETE',
      url: "/movies/" + this.props.movie.id,
      dataType: 'JSON'
    });

    request.done( () => {
      this.props.handleDeleteMovie(this.props.movie)
    })
  },

  movieRow: function() {
    var propMovie = this.props.movie;
    return (
      <tr>
        <td>
          <a href={"movies/" + propMovie.id + propMovie.title}>{propMovie.title}</a>
        </td>
        <td>{propMovie.text}</td>
        <td>
          <a className="btn btn-danger" onClick={this.handleDelete}>Delete</a>
        </td>
      </tr>
    )
  },

  render: function() {
    return this.movieRow();
  }
})