class AllItems extends React.Component {
  render(){
    var items = this.props.items.map((item) => {
      return (
        <div key = {item.id}>
          <Item item={item}
                handleDelete = {this.handleDelete.bind(this, item.id)}
                handleUpdate = {this.onUpdate.bind(this)}/>
        </div>
      )
    });

    return (
      <div>
        {items}
      </div>
    )
  };

  handleDelete(id){
    console.log(id);
    this.props.handleDelete(id);
  }

  onUpdate(item){
    this.props.onUpdate(item);
  }


}
