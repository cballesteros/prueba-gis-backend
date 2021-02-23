# Backend prueba GIS

## Technologies

Make sure you have installed the following technologies:

* NodeJS 12.18.2
* PostgreSQL 12.0

## Database Setup

* Create database
```
CREATE DATABASE gis_db
```
* Create table "VEHICLES"
```
CREATE SEQUENCE public."VEHICLES_id_seq"
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;
```
```
CREATE TABLE public."VEHICLES"
(
    id integer NOT NULL DEFAULT nextval('"VEHICLES_id_seq"'::regclass),
    license character varying(10) NOT NULL,
    owner text NOT NULL,
    brand text NOT NULL,
    latitude text NOT NULL,
    longitude text NOT NULL,
    CONSTRAINT "VEHICLES_pkey" PRIMARY KEY (id)
)
```

## Deploy locally

* Clone the repo and install dependencies
```
$ git clone https://github.com/cballesteros/prueba-gis-backend.git
$ cd prueba-gis-backend
$ npm install
```

* Run server

```
$ set DEBUG=prueba-gis-backend:* & npm start
$
$ prueba-gis-backend:server Listening on port 3000 +0ms
```

* Enable developer mode in services/connection.js

In order to connect the database, please uncomment the section tagged as "DEVELOPER MODE" in services/connection.js file and commnet the section tagged as "PRODUCTION MODE"

## Request examples:

`Host: localhost:3000`

```
GET /vehicles HTTP/1.1
```

```
GET /vehicles?id=1 HTTP/1.1
```

```
GET /vehicles?license=FJM 620 HTTP/1.1
```

```
POST /vehicles HTTP/1.1

{
	"license":"FJM 620",
	"owner":"Cristian Ballesteros",
	"brand":"KIA",
	"latitude":"123",
	"longitude":"456"
}
```

```
PUT /vehicles HTTP/1.1

{
    "id": 1
	"license":"FJM 620",
	"owner":"Cristian Ballesteros",
	"brand":"KIA",
	"latitude":"123",
	"longitude":"456"
}
```

```
DELETE /vehicles?id=1 HTTP/1.1
```