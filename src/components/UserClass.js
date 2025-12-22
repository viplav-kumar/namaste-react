import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    // console.log(this.props.id + " Child Constructor");
  }

  componentDidMount() {
    // console.log(this.props.id + " Child componentDidMount");
    // this.myInterval = setInterval(() => {
    //   console.log("Namastey React");
    // }, 1000);
  }

  componentWillUnmount() {
    // console.log("Component Will Unmount");
    // clearInterval(this.myInterval);
  }

  render() {
    // console.log(this.props.id + " Child Render");
    const { id, name, location, avatarURL } = this.props;
    return (
      <div className="myCard">
        <h3>My Class Component</h3>
        <img src={avatarURL}></img>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
}

export default UserClass;
