# Schema Information

## users

| column name  | data type | details |
| ------------- | ------------- | ------------- |
| id  | integer  |  not null, primary key |
| username  | string  | not null, indexed, unique |
| email  | string  | not null, indexed, unique |
| f_name  | string  | not null, indexed |
| l_name  | string  | not null, indexed |
| password_digest  | string  | not null |
| session_token  | string  | not null, indexed, unique |
| image_url  | string  |  |
| created_at  | timestamp  | not null |
| updated_at  | timestamp  | not null |


## routes

| column name  | data type | details |
| ------------- | ------------- | ------------- |
| id  | integer  |  not null, primary key |
| creator_id  | integer  |  not null, foreign key |
| title  | string  |  not null |
| description | text  |  not null |
| path | line_string (PostGIS) |  not null, geometric |
| distance | float  |  not null |
| elevation_gain | float  |  not null |
| created_at  | timestamp  | not null |
| updated_at  | timestamp  | not null |


## runs

| column name  | data type | details |
| ------------- | ------------- | ------------- |
| id  | integer  |  not null, primary key |
| runner_id  | integer  |  not null, foreign key |
| route_id  | integer  |  not null, foreign key |
| date  | date  |  not null |
| start_time  | time  |  not null |
| end_time  | time  |  not null |
| description | text  |  not null |
| created_at  | timestamp  | not null |
| updated_at  | timestamp  | not null |


## friend_requests

| column name  | data type | details |
| ------------- | ------------- | ------------- |
| id  | integer  |  not null, primary key |
| requestor_id  | integer  |  not null, foreign key, indexed with requestee_id |
| requestee_id  | integer  |  not null, foreign key, indexed with requestor_id |
| created_at  | timestamp  | not null |
| updated_at  | timestamp  | not null |


## friendships

| column name  | data type | details |
| ------------- | ------------- | ------------- |
| id  | integer  |  not null, primary key |
| user_id  | integer  |  not null, foreign key, indexed with friend_id |
| friend_id  | integer  |  not null, foreign key, indexed with user_id |
| created_at  | timestamp  | not null |
| updated_at  | timestamp  | not null |


## comments

| column name  | data type | details |
| ------------- | ------------- | ------------- |
| id  | integer  |  not null, primary key |
| author_id  | integer  |  not null, foreign key |
| commentable_id | integer  |  not null, foreign key, indexed with commentable_type |
| commentable_type | string  |  not null, indexed with commentable_id |
| body | text  |  not null |
| created_at  | timestamp  | not null |
| updated_at  | timestamp  | not null |


## goals

| column name  | data type | details |
| ------------- | ------------- | ------------- |
| id  | integer  |  not null, primary key |
| author_id  | integer  |  not null, foreign key |
| type  | enum  |  not null |
| target  | integer  |  not null |
| start_date  | date  |  not null |
| end_date  | date  |  not null |
