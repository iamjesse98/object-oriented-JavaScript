class User{
	constructor(username, email, password){
		this.username = username
		this.email = email
		this.password = password
	}
}

let Jesse = new User('Jesse', 'jesse@yh.com', 'googleit!')

console.log(Jesse.username)