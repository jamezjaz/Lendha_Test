import React, { PureComponent } from 'react';

class Request extends PureComponent {
  constructor() {
    super();
    this.state = {
      items: [],
      isLoaded: false,
    };
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          items: data
        });
      });
  }

  render() {
    const { items } = this.state;
    console.log(items);
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    } else {
      return(
        <div>
          {items.map(item => (
            <li key={item.id}>
              <p>{item.title}</p>
              <p>{item.body}</p>
              <img src={item.image} alt={item.name} />
            </li>
            ))}
        </div>
      );
    }
  }
};

export default Request;