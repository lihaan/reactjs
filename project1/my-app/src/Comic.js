import React from 'react';

class Comic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          img: '',
        };
    }
    render() {
        const { error, isLoaded} = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div>
                <img src={this.state.img} />
                <p>Loading from proxy CORS server</p>
            </div>
          );
        }
    }
    
    componentDidMount() {
        fetch("https://cors-anywhere.herokuapp.com/http://xkcd.com/info.0.json")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                img: result.img
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }
    


}

export default Comic;

//TODO: Make loading spinner