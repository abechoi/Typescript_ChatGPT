interface User {
    name: string;
    age: number;
}

class UserService {
    users: User[] = [];

    addUser(user: User) {
        this.users.push(user);
    }

    getUsers(): User[] {
        return this.users;
    }
}

const userService = new UserService();

userService.addUser({name: "Abe", age: 35});
userService.addUser({name: "Buffy", age: 1});

const users = userService.getUsers();

console.log(users);