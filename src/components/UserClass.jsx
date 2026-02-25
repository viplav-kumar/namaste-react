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
      <div className="h-75 border-[1] border-solid border-[#000000] p-2.5">
        <h3>My Class Component</h3>
        <img className="h-25 rounded" src={avatarURL}></img>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Location: {location}</p>
      </div>
    );
  }
}

export default UserClass;
