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

  movieForm: function() {
    var propMovie = this.props.movie;

    return (
      <tr>
        <td>
          <input className="form-control" type="text" defaultValue={propMovie.title} ref="title" />
        </td>
        <td>
          <input className="form-control" type="text" defaultValue={propMovie.text} ref="text" />
        </td>
        <td>
          <a className="btn btn default" onClick={this.handleEdit}>Update</a>
          <a className="btn btn-danger" onClick={this.handleToggle}>Cancle</a>
        </td>
      </tr>
    )
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
          <a className="btn btn-default" onClick={this.handleToggle}>Edit</a>
          <a className="btn btn-danger" onClick={this.handleDelete}>Delete</a>
        </td>
      </tr>
    )
  },

  render: function() {
    if (this.state.edit) {
      return this.movieForm();
    } else {
      return this.movieRow();
    }
  }
})
