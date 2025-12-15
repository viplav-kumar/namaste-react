import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count1: 1,
    };
    console.log(this.props.id + " Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.id + " Child componentDidMount");
  }

  render() {
    console.log(this.props.id + " Child Render");
    const { name, email, mobileNo, address } = this.props;
    const { count, count1 } = this.state;
    return (
      <div className="myCard">
        <h3>My Class Component</h3>
        <p>Name: {name}</p>
        <p>Email Id: {email}</p>
        <p>Mobile No: {mobileNo}</p>
        <p>Address: {address}</p>
        <p>Count: {count}</p>
        <button
          onClick={() =>
            this.setState((prevState) => ({
              count: prevState.count + 1,
            }))
          }
        >
          Increase Count
        </button>
        <p>Count1: {count1}</p>
      </div>
    );
  }
}

export default UserClass;
