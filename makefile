create_mysql:
	docker run --name node_mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=mypassword -v ${PWD}/../dbdata:/var/lib/mysql -d mysql:8

remove_mysql:
	docker rm -f node_mysql

