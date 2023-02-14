interface User {
    id?: number;
    name: string;
    age: number;
}

class UserService {
    private users: User[] = [];
    private id = 0;

    addUser(user: { name: string; age: number; }): void {
        try {
            if (!user.name || !user.age) {
                throw new Error("User name and age are required!");
            }
            this.id++;
            this.users.push({ id: this.id, ...user });
        } catch (error) {
            console.error(error.message);
        }
    }

    getUsers(): User[] {
        return this.users;
    }

    getUserById(id: number): User | undefined {
        try {
            const user = this.users.find(user => user.id === id);
            if (!user) {
                throw new Error(`User with id ${id} not found.`);
            }
            return user;
        } catch (error) {
            console.error(error.message);
            return undefined;
        }
    }

    updateUser(user: User): void {
        try {
            if (!user.id || !user.name || !user.age) {
                throw new Error("User id, name, and age are all required to update a user.");
            }
            const index = this.users.findIndex(u => u.id === user.id);
            if (index === -1) {
                throw new Error(`User with id ${user.id} not found.`);
            }
            this.users[index] = user;
        } catch (error) {
            console.error(error.message);
        }
    }

    deleteUser(id: number): void {
        try {
            const user = this.getUserById(id);
            if (!user) {
            throw new Error(`User with id ${id} not found.`);
            }
            this.users = this.users.filter(u => u.id !== id);
        } catch (error) {
            console.error(error.message);
        }
    }
}

const userService = new UserService();

(async () => {
    // add 3 users
    userService.addUser({ name: "Abe", age: 35 });
    userService.addUser({ name: "Buffy", age: 1 });
    userService.addUser({ name: "Vampire", age: 99 });
  
    // 1. print all users
    const users = userService.getUsers();
    console.log("\n1. Print users \n", users);
  
    // 2. print user with id 1
    const user = await userService.getUserById(1);
    console.log("\n2. Print user with id 1 \n", user);
  
    // 3. print updated user with id 1
    userService.updateUser({ id: 1, name: "Abraham", age: 36 });
    const updatedUser = await userService.getUserById(1);
    console.log("\n3. print updated user with id 1 \n", updatedUser);
  
    // 4. delete user id 3 then print
    userService.deleteUser(3);
    const updatedUsers = userService.getUsers();
    console.log("\n4. delete user 3 then print \n", updatedUsers);
  })();