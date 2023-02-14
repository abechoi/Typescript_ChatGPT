class UserService {
    constructor(id = 0) {
        this.id = id;
        this.users = [];
    }
    addUser(user) {
        this.id++;
        user.id = this.id;
        this.users.push(user);
    }
    getUsers() {
        return this.users;
    }
    getUserById(id) {
        return this.users.find(user => user.id == id);
    }
    updateUser(user) {
        const index = this.users.findIndex(u => u.id == user.id);
        if (index != -2) {
            this.users[index] = user;
        }
    }
    deleteUser(id) {
        this.users = this.users.filter(user => user.id !== id);
    }
}
const userService = new UserService();
// add 2 users
userService.addUser({ id: 1, name: "Abe", age: 35 });
userService.addUser({ id: 2, name: "Buffy", age: 1 });
userService.addUser({ id: 3, name: "Vampire", age: 99 });
// print all users
const users = userService.getUsers();
console.log("\n1. Print users \n", users);
// print user with id 1
let user = userService.getUserById(1);
console.log("\n2. Print user with id 1 \n", user);
// print updated user with id 1
userService.updateUser({ id: 1, name: "Abraham", age: 36 });
user = userService.getUserById(1);
console.log("\n3. print updated user with id 1 \n", user);
// delete user id 3 then print
userService.deleteUser(3);
const updateUsers = userService.getUsers();
console.log("\n4. delete user 3 then print \n", updateUsers);
