DROP DATABASE IF EXISTS test_db;
CREATE DATABASE test_db;

RENTER                                          HOST                             BOOKING ( join table )
------                                          ----                             ----------------------
firstName            STRING                     firstName  STRING                 bookingId STRING
lastName             STRING                     lastName   STRING                 renterId  STRING
email                STRING                     email      STRING                 hostId    STRING
phoneNum             STRING                     phoneNum   STRING                 title     STRING  
numGuest             STRING                     locationId STRING 
locationid           STRING                     bookingId  STRING 
bookingID            STRING                     hostId     STRING
reason               STRING                     title      STRING 
startDD              STRING                     type       STRING
timeReserve          STRING
startDd              INTEGER
 
 
                                               CREATE TABLE HOST(
  CREATE TABLE RENTER(                         id INTEGER(11) AUTO_INCREMENT NOT NULL,                 CREATE TABLE BOOKING( 
  id INTEGER(11) AUTO_INCREMENT NOT NULL       firstName  VARCHAR(100),                                 id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName   VARCHAR(100),                    lastName   VARCHAR(100),                                 renterID VARCHAR(100),
  lastName    VARCHAR(100),                    email      VARCHAR(100);                                 hostId   VARCHAR(100),
  email       VARCHAR(100),                    phoneNum   VARCHAR(100),                                 title    VARCHAR(100), 
  phoneNum    VARCHAR(100),                    locationId VARCHAR(100),                                 PRIMARY KEY (id_
  numGuests   VARCHAR(100),                    bookingId  VARCHAR(100),                                 ); 
  locationId  VARCHAR(100),                    hostId     VARCHAR(100),
  bookingId   VARCHAR(100),                    title      VARCHAR(100),
  reasib      VARCHAR(100),                    PRIMARY KEY (id) 
  startDd     INTEGER,                         );
  timeReserve VARCHAR(100), 
  PRIMARY KEY (id)
);