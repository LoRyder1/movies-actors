this.Movie = React.createClass({
  getInitialState: function() {
    return { edit: false }
  },

  handleToggle: function(e) {
    this.setState({edit: !this.state.edit });
  },

  handleDelete: function(e) {
    var request = $.ajax({
      method: 'DELETE',
      url: "/movies/" + this.props.movie.id,
      dataType: 'JSON'
    });

    request.done( () => {
      this.props.handleDeleteMovie(this.props.movie)
    });
  },

  handleEdit: function(e) {
    var data = {
      title: ReactDOM.findDOMNode(this.refs.title).value,
      text: ReactDOM.findDOMNode(this.refs.text).value
    }

    var request = $.ajax({
      method: "PUT",
      url: "/movies/" + this.props.movie.id,
      dataType: "JSON",
      data: { movie: data }
    });

    request.done( (data) => {
      this.setState({ edit:false });
      this.props.handleEditMovie(this.props.movie, data);
    });
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