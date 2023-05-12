import sqlite3
from sqlite3 import Error
from constants import TABLE_NAME
from bitcoin_timestamp import BitcoinTimestamp
from custom_util import create_database

DATABASE_NAME = 'BitcoinDB-demo.db'
TABLE_NAME = 'Bitcoin'

# We are creating a DatabaseConnection class here
class DatabaseConnection:

    def __init__(self):
        """
        class constructor: generates a database connection object
        """
        self.__db = create_database()

    def insert_timestamp(self, bitcoin: BitcoinTimestamp):
        """
        inserts a bitcoin timestamp into the database

        :param bitcoin_timestamp:
            the bitcoin timestamp
        :type bitcoin_timestamp:
            BitcoinTimestamp
        :return:
            boolean indicating if the operation was successful or not
        :rtype:
            bool
        """
        try:
            # get cursor
            cursor = self.__db.cursor()
        except Error as e:
            print(e)
            return False

        try:
            # TODO (5.3.2)  
            # insert sql query
            sql = f"INSERT INTO {TABLE_NAME} (timestamp, price) VALUES (?, ?)"
            VALUES = (bitcoin.timestamp, bitcoin.price)

            # execute sql query
            cursor.execute(sql, VALUES)

            # commit to db
            self.__db.commit()

            # close
            cursor.close()
            return True
        
        except Exception as e:
            print(e)
            return False
      
    def get_all_timestampes(self):
        """
        gets all bitcoin timestamps in the database

        :return:
            a list of bitcoin timestamps
        :rtype:
            list[BitcoinTimestamp]
        """
        try:
            output = []
            # db = sqlite3.connect(DATABASE_NAME) 

            # TODO (5.3.1)
            # get cursor
            cursor = self.__db.cursor()
            
            # get sql query
            sql =  "SELECT * FROM '{}';".format(TABLE_NAME)
            # this returns an array of tuples. Each tuple will be a single row from the table

            # execute sql query
            cursor.execute(sql)

            # fetch all results obtained
            results = cursor.fetchall()

            for i in results:
                newDBO = BitcoinTimestamp(i[0], i[1])
                print(newDBO)
                output.append(newDBO)

            # close
            cursor.close()

            return output
        except Error as e:
            print(e)
            return []