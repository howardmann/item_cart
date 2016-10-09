class Item extends React.Component{
  constructor(){
    super();
    this.state = {
      editable: false
    }
  }

  render(){
    var name = this.state.editable ? <input type='text' ref='name' defaultValue={this.props.item.name}/> : <h3>{this.props.item.name}</h3>;

    var description = this.state.editable ? <input type='text' ref='description' defaultValue={this.props.item.description}/> : <p>{this.props.item.description}</p>;

    return (
      <div>
        {name}
        {description}
        <button onClick={this.props.handleDelete}>Delete</button>
        <button onClick={this.handleEdit.bind(this)}>{this.state.editable ? 'Submit' : 'Edit'}</button>
      </div>
    )
  }

  handleEdit(){
    console.log("Edit button clicled");
    if(this.state.editable) {
      var name = this.refs.name.value;
      var id = this.props.item.id;
      var description = this.refs.description.value;
      var item = {id: id, name: name, description: description};
      this.props.handleUpdate(item);
    }
    this.setState({editable: !this.state.editable})
  }

}
