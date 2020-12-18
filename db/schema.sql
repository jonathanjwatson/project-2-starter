DROP DATABASE IF EXISTS rentalhost_db;
CREATE DATABASE rentalhost_db;
                  
-- CREATE TABLE RENTER(                         
--   id INTEGER(11) AUTO_INCREMENT NOT NULL,       
--   firstName   VARCHAR(100),                    
--   lastName    VARCHAR(100),                    
--   email       VARCHAR(100),                    
--   phoneNum    VARCHAR(100),                    
--   numGuests   VARCHAR(100),                    
--   locationId  VARCHAR(100),                    
--   bookingId   VARCHAR(100),                    
--   reasib      VARCHAR(100),                    
--   startDd     INTEGER,                         
--   timeReserve VARCHAR(100), 
--   PRIMARY KEY (id)
-- );

RENTER                                          HOST                             BOOKING ( join table )
------                                          ----                             ----------------------
firstName            STRING                     firstName  STRING                 bookingId STRING
lastName             STRING                     lastName   STRING                 renterEmail  STRING
email                STRING                     email      STRING                 hostEmail    STRING
phoneNum             STRING                     phoneNum   STRING                 title     STRING  
numGuest             STRING                     propertyTypeId STRING 
propertyTypeId       STRING                     bookingId  STRING 
bookingID            STRING                     
reason               STRING                     title      STRING 
                     STRING                           
timeBlock          STRING
dayName              STRING
 
 
                                               CREATE TABLE HOST(
  CREATE TABLE RENTER(                         id INTEGER(11) AUTO_INCREMENT NOT NULL,                 CREATE TABLE BOOKING( 
  id INTEGER(11) AUTO_INCREMENT NOT NULL       firstName  VARCHAR(100),                                 id INTEGER(11) AUTO_INCREMENT NOT NULL,
  firstName   VARCHAR(100),                    lastName   VARCHAR(100),                                 renterEmail VARCHAR(100),
  lastName    VARCHAR(100),                    email      VARCHAR(100);                                 hostEmail   VARCHAR(100),
  email       VARCHAR(100),                    phoneNum   VARCHAR(100),                                 title    VARCHAR(100), 
  phoneNum    VARCHAR(100),                    propertyTypeId VARCHAR(100),                                 PRIMARY KEY (id)
  numGuest   VARCHAR(100),                    bookingId  VARCHAR(100),                                 ); 
  propertyTypeId  VARCHAR(100),                    
  bookingId   VARCHAR(100),                    title      VARCHAR(100),
  reason      VARCHAR(100),                    PRIMARY KEY (id) 
  dayName     VARCHAR(100),                         );
  timeBlock VARCHAR(100), 
  PRIMARY KEY (id)
);
