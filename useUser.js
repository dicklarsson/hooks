import React from "react";
const users = [
  {
    userName: "bob",
    displayName: "Bob",
    email: "bob@email.com",
  },
  {
    userName: "alice",
    displayName: "Alice",
    email: "alice@email.com",
  },
];

export function useUser(userName) {
  const [currentUser, setCurrentUser] = React.useState(null);

  //When userName prop changes, run this
  React.useEffect(() => {
    let user = users.find((user) => user.userName === userName);

    //ERROR user not found
    if (!user) {
      user = {
        error: "User " + userName + " not found",
        description: "User with user name " + userName + "does not exist",
      };
    }

    setCurrentUser(user);
  }, [userName]);

  return currentUser;
}
