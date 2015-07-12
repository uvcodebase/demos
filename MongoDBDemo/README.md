Excellent Short Introduction to MongoBD [The Little MongoDB Book](openmymind.net/mongodb.pdf)

Excellent Document for different DataBase Structures [Data Model Design for MongoDB](http://docs.mongodb.org/master/MongoDB-data-models-guide.pdf)

For checking if JSON is parsable: http://jsonlint.com/

Gotchas:
 * When creating a meteor DB inside a client folder, it won't work and give you a strange error
   * Need to create DB inside a server folder 
   * Creating DB on client and server does different things
   * Need to create DB on BOTH!

Options for finding MongoDB entries [finding](http://docs.meteor.com/#/full/find). Also see pg. 13 (chapter 3) of [The Little MongoDB Book](openmymind.net/mongodb.pdf)