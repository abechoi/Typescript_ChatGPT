interface User {
    id: number;
    name: string;
    age: number;
}

class UserService {
    private users: User[] = [];
    private id = 0;

    addUser(user: User): void {
        try {

            if(!user.name || !user.age) {
                throw new Error("user name and age is required!");
            }

            this.id++;
            user.id = this.id;
            this.users.push(user);

        }catch(error) {
            console.error(error.message);
        }
    }

    getUsers(): User[] {
        return this.users;
    }

    getUserById(id: number): User | undefined {
        try {

            const user = this.users.find(user => user.id == id);
            console.log("user = ", user);
            if(!user){
                throw new Error(`user id ${id} does not exist!`);
            }
            return user;

        } catch (error) {
            console.error(error.message);
            return undefined;
        }
    }

    updateUser(user: User): void {
        
        try {
            const index = this.users.findIndex(u => u.id == user.id);
            if(index === -1) {
                throw new Error(`user id ${user.id} does not exist!`);
            }
            this.users[index] = user;
            
        } catch (error) {
            console.error(error.message);
        }
    }

    deleteUser(id: number): void {

        try {
            this.users = this.users.filter(user => user.id != id);
            if(this.getUserById(id)) {
                throw new Error(`user ${id} could not be deleted!`);
            }

        } catch (error) {
            console.error(error.message);
        }
    }
}

const userService = new UserService();

// add 3 users
userService.addUser({id: 0, name: "Abe", age: 35});
userService.addUser({id: 0, name: "Buffy", age: 1});
userService.addUser({id: 0, name: "Vampire", age: 99});

// 1. print all users
const users = userService.getUsers();
console.log("\n1. Print users \n", users);

// 2. print user with id 1
const user = userService.getUserById(1);
console.log("\n2. Print user with id 1 \n", user);

// 3. print updated user with id 1
userService.updateUser({id: 0, name: "Abraham", age: 36});
const updatedUser = userService.getUserById(1);
console.log("\n3. print updated user with id 1 \n", user);

// 4. delete user id 3 then print
userService.deleteUser(3);
const updateUsers = userService.getUsers();
console.log("\n4. delete user 3 then print \n", updateUsers);