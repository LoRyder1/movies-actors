this.MovieForm = React.createClass({
  getInitialState: function() {
    return { title: '', text: ''};
  },

  valid: function() {
    returh this.state.title && this.state.text
  },

  handleChange: function(e) {
    var change = {};
    var targetName = e.target.name;
    change[targetName] = e.target.value;
    this.setState(change);
  },

  handleSubmit: function(e) {
    var request = $.ajax({
      method: 'POST',
      url: "/movies",
      dataType: 'JSON',
      data: {movie: this.state}
    });
    
    // An arrow function expression lexically binds the "this" value. Arrow fxns are anonymous
    request.done( (data) => {
      this.props.handleNewMovie(data);
      this.setState(this.getInitialState());
    });

  },

  render: function() {
    var curState = this.state;
    return (
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='Title' name='title' value={curState.title} onChange={this.handleChange} />
        </div>
        <div className='form-group'>
          <input type='text' className='form-control' placeholder='text' name='text' value={curState.text} onChange={this.handleChange} />
        </div>
        <button type='submit' className='btn btn-primary'>Add Movie</button>
      </form>
      )
  }
})
