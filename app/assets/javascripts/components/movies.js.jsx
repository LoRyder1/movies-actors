this.Movies = React.createClass({
  getInitialState: function() {
    return {
      garages: this.props.data
    };
  },

  render: function() {
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
          </head>
          <tbody>
          </tbody>
        </table>
      </div>
      )
  }
})
