class Body extends React.Component{
  constructor(){
    super();
    this.state = {
      items: []
    }
  }

  componentDidMount(){
    $.getJSON('/api/v1/items.json', (response) => {this.setState({items: response}) });
  }

  render(){
    return (
      <div>
        <NewItem handleSubmit={this.handleSubmit.bind(this)}/>
        <AllItems items={this.state.items} handleDelete = {this.handleDelete.bind(this)} onUpdate={this.handleUpdate.bind(this)}/>
      </div>
    )
  }

  handleSubmit(item){
    var newState = this.state.items.concat(item);
    this.setState({items:newState});
  }

  handleDelete(id){
    console.log('in handle delete');
    $.ajax({
      url: `/api/v1/items/${id}`,
      type: 'DELETE'
    }).done(() => {
      console.log('successfully removed item');
      this.removeItemClient(id);
      }
    );
  }

  removeItemClient(id) {
    var newItems = this.state.items.filter((item) => {
      return item.id != id;
    });

    this.setState({items: newItems});
  }

  handleUpdate(item) {
    $.ajax({
      url: `/api/v1/items/${item.id}`,
      type: 'PUT',
      data: {item: item}
    }).done(() => {
      console.log("You did it!!");
      this.updateItems(item);
    });
  }

  updateItems(item) {
    var items = this.state.items.filter((i) => { return i.id != item.id });
    items.push(item);
    this.setState({items: items});
  }

}
