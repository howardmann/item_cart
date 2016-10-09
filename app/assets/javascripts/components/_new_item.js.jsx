class NewItem extends React.Component {
  render(){
    return (
      <div>
        <input ref='name' placeholder='Enter the name of the item'/>
        <input ref='description' placeholder='Enter a description'/>
        <button onClick = {this.handleClick.bind(this)}>Submit</button>

      </div>
    )
  }

  handleClick(){
    var name = this.refs.name.value;
    var description = this.refs.description.value;
    $.ajax({
      url: '/api/v1/items',
      type: 'POST',
      data: {
        item: {name: name, description: description}
      }
    }).done((item) => {
      this.props.handleSubmit(item);
      }
    );
  }

}
