ListJob = React.createClass({
  render(){
    return(
      <li><a href={"/jobs/"+this.props.job._id}>{this.props.job.name} - Sijainti: {this.props.job.location}</a></li>
    );
  }
});