class User {
  fullname: string;
  constructor(firstname: string, lastname: string) {
    this.fullname = firstname + ' ' + lastname;
  }
  hello(): string {
    return 'Olá, ' + this.fullname;
  }
}

var user = new User('Mary', 'Jane');
alert(document.body.innerHTML = user.hello());
