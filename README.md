<h1 align="center">Welcome to the Node.js Chall.</h1>

> Basic Login API + Movies / Shows endpoints!

## Install

```sh
npm install
```

## Usage

```sh
You have to set up your own .env with these variables:
MONGODB=you_have_to_set_this
SECRETORKEY=you_have_to_set_this
MYHOST=localhost

then your can use:

npm start
```
## Endpoints
```
The endpoints to solve the minimum required of the challange are:
/api/user/signup ---> Use an OBJ like this one:
{
	"firstName":"myFirstName",
	"lastName":"mySecondName",
	"password":"myPassword",
	"eMail":"mytestmail@gmail.com"
}
This will grant you 2 tokens, one access and one refresh.
/api/user/signin ---> Use an OBJ like this one:
{
  "eMail":"mytestmail@gmail.com"
	"password":"myPassword",
}
/api/user/refreshtoken  ---> Send Authorization Bearer refreshToken in headers , if all is good will receive new credentials.
/api/movies/ ---> To sort by duration and filter the movies that are higher in duration than 110 you can send this on body for example:
{
	"filterBy":{
		"duration":{"$gte":110}
	}
}
/api/directors ---> To add a new director you can send atleast firstName and lastName like this
{
	"firstName":"Sylvester",
	"lastName":"Stallone"
}

```
## Technologies

```sh
Node.JS
MongoDB / Mongoose /Express
JWT
```
## Author

👤 **Federico Budtke**

* Github: [@WernerBudtke](https://github.com/WernerBudtke)
* LinkedIn: [@https://www.linkedin.com/in/fwbudtke/](https://www.linkedin.com/in/fwbudtke/)
