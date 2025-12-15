import { Component } from "react";
import UserClass from "./UserClass";

class UserContainerClass extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h2>User Data</h2>
        <UserClass
          id="1"
          name="Viplav"
          email="thakurviplav88@gmail.com"
          mobileNo="8750238949"
          address="Pune, Hinjewadi"
        />
        <UserClass
          id="2"
          name="Vicky"
          email="viplavthakur6297@gmail.com"
          mobileNo="8968345048"
          address="Noida, Uttar Pradesh"
        />
      </div>
    );
  }
}

export default UserContainerClass;
