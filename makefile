include .env

create_mysql:
	docker run --name node_mysql -p ${MYSQL_PORT}:3306 -e MYSQL_ROOT_PASSWORD=mypassword -v ${PWD}/../dbdata:/var/lib/mysql -d mysql:8

remove_mysql:
	docker rm -f node_mysql

fsc:
	pm2 restart index.js


