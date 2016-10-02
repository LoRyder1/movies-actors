this.Movie = React.createClass({
  movieRow: function() {
    var propMovie = this.props.movie;
    return (
      <tr>
        <td>
          <a href={"movies/" + propMovie.id + propMovie.title}>{propMovie.title}</a>
        </td>
        <td>{propMovie.text}</td>
      </tr>
    )
  },

  render: function() {
    return this.movieRow();
  }
})