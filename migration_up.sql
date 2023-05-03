create table if not exists products(
    product_id int
    product_hash_id varchar(100)
    product_name  varchar(100)
    packaged_date Date
    primary key product_id
);

create table if not exists quality(
    product_id int,
    temperature int,
    humidity int,
    gas int,
    taken_at Date,
    primary key (product_id,taken_at)
);

create table if not exists quantity(
    product_id int,
    product_stop varchar(50),
    weight_stop int,
    taken_at Date,
    primary key (product_id, taken_at)
);



