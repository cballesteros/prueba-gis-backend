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