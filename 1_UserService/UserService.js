var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class UserService {
    constructor() {
        this.users = [];
        this.id = 0;
    }
    addUser(user) {
        try {
            if (!user.name || !user.age) {
                throw new Error("ERROR: addUser failed - name and age is required!");
            }
            this.id++;
            this.users.push(Object.assign({ id: this.id }, user));
        }
        catch (error) {
            console.error(error.message);
        }
    }
    getUsers() {
        return this.users;
    }
    getUserById(id) {
        try {
            const user = this.users.find(user => user.id === id);
            if (!user) {
                throw new Error(`ERROR: getUserById failed - id ${id} not found!`);
            }
            return user;
        }
        catch (error) {
            console.error(error.message);
            return undefined;
        }
    }
    updateUser(user) {
        try {
            if (!user.id || !user.name || !user.age) {
                throw new Error(`ERROR: updateUser failed - id name and age is required!`);
            }
            const index = this.users.findIndex(u => u.id === user.id);
            if (index === -1) {
                throw new Error(`ERROR: updateUser failed - id ${user.id} not found!`);
            }
            this.users[index] = user;
        }
        catch (error) {
            console.error(error.message);
        }
    }
    deleteUser(id) {
        try {
            const user = this.getUserById(id);
            if (!user) {
                throw new Error(`ERROR: deleteUser failed - id ${id} not found!`);
            }
            this.users = this.users.filter(user => user.id !== id);
        }
        catch (error) {
        }
    }
}
const userService = new UserService();
(() => __awaiter(this, void 0, void 0, function* () {
    // add 3 users
    userService.addUser({ name: "Abe", age: 35 });
    userService.addUser({ name: "Buffy", age: 1 });
    userService.addUser({ name: "Vampire", age: 99 });
    // 1. print all users
    const users = userService.getUsers();
    console.log("\n1. Print users \n", users);
    // 2. print user with id 1
    const user = yield userService.getUserById(1);
    console.log("\n2. Print user with id 1 \n", user);
    // 3. print updated user with id 1
    userService.updateUser({ id: 1, name: "Abraham", age: 36 });
    const updatedUser = yield userService.getUserById(1);
    console.log("\n3. print updated user with id 1 \n", updatedUser);
    // 4. delete user id 3 then print
    userService.deleteUser(3);
    const updatedUsers = userService.getUsers();
    console.log("\n4. delete user 3 then print \n", updatedUsers);
}))();
