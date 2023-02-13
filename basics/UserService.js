var UserService = /** @class */ (function () {
    function UserService() {
        this.users = [];
    }
    UserService.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserService.prototype.getUsers = function () {
        return this.users;
    };
    return UserService;
}());
var userService = new UserService();
userService.addUser({ name: "Abe", age: 35 });
userService.addUser({ name: "Buffy", age: 1 });
var users = userService.getUsers();
console.log(users);
