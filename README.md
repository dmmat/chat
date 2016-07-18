

## Setup

Run `npm install`,`npm i -g bower`,`4`, followed by `bower install` (4, 1, - answers) to grab the dependencies.

`gem install compass`

### mongodb install ubuntu 14.04

`sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10`


add line `sudo echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.0 multiverse" > /etc/apt/sources.list.d/mongodb-org-3.0.list` to 


After adding the repository details, we need to update the packages list.

`sudo apt-get update`

`sudo apt-get install mongodb-org`

`service mongod status`

## Running the app

Run `grunt:serve` to start the app in development mode, or run `grunt server:dist` to run it in production mode.

## License

MIT

### fom me (start mongodb)
sudo mongod

## run unit tests 
grunt test