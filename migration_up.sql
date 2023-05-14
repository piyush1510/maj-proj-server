create table if not exists products(
    product_id int NOT NULL AUTO_INCREMENT
    product_name  varchar(100)
    packaged_date date default(CURRENT_DATE)
    device_mac_id varchar(150)
    primary key product_id
);

create table if not exists quality(
    product_id int,
    temperature int,
    humidity int,
    gas int,
    taken_at date default(CURRENT_DATE),
    primary key (product_id,taken_at)
);

create table if not exists quantity(
    product_id int,
    product_stop varchar(50),
    weight_stop int,
    taken_at date default(CURRENT_DATE),
    primary key (product_id, taken_at)
);

create table if not exists users(
    user_id int NOT NULL AUTO_INCREMENT
    user_name varchar(100),
    designation varchar(100)
);


