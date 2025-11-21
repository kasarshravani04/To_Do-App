class User {
  constructor(username, password, name) {
    this.username = username;
    this.password = password;
    this.name = name;
    this.todoList = [];
  }
}

export default User;