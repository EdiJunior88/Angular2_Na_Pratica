var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.fullname = firstname + ' ' + lastname;
    }
    User.prototype.hello = function () {
        return 'Olá, ' + this.fullname;
    };
    return User;
}());
var user = new User('Mary', 'Jane');
alert(document.body.innerHTML = user.hello());
//# sourceMappingURL=user.js.map