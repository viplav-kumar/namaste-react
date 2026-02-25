import { Component } from "react";
import UserContext from "../utils/contexts/UserContext";
import UserClass from "./UserClass";

class UserContainerClass extends Component {
  constructor(props) {
    super(props);
    // console.log("Parent Constructor");
    this.state = {
      userInfo: {
        avatar_url: process.env.PROFILE_ICON,
        id: "default",
        name: "default",
        location: "default",
      },
    };
  }

  async componentDidMount() {
    // console.log("Parent componentDidMount");
    const response = await fetch("https://api.github.com/users/viplav-kumar");
    const data = await response.json();
    // console.log(data);
    this.setState({
      userInfo: data,
    });
  }

  render() {
    // console.log("Parent Render");
    const { id, name, location, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div>
        <h2>User Data</h2>
        <div>
          <span>Logged-In User: </span>
          <UserContext.Consumer>
            {({ loggedInUser }) => <span>{loggedInUser}</span>}
          </UserContext.Consumer>
        </div>
        <UserClass
          id={id}
          name={name}
          location={location}
          avatarURL={avatar_url}
        />
      </div>
    );
  }
}

export default UserContainerClass;
