import psycopg2
from dotenv import load_dotenv
import os


class MenuItem:
    dotenv_path = os.path.join(os.path.dirname(__file__), ".env")
    load_dotenv(dotenv_path)
    DB_HOST = os.getenv("DB_HOST")
    DB_NAME = os.getenv("DB_NAME")
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    DB_PORT = os.getenv("DB_PORT")

    def __init__(self, name, price=0):
        self.name = name
        self.price = price

    def save(self):
        connection = psycopg2.connect(
            dbname=self.DB_NAME,
            user=self.DB_USER,
            password=self.DB_PASSWORD,
            host=self.DB_HOST,
            port=self.DB_PORT,
        )
        cursor = connection.cursor()
        query = """INSERT INTO menu_items (item_name, item_price) VALUES (%s, %s)"""
        cursor.execute(query, (self.name, self.price))
        connection.commit()
        cursor.close()
        connection.close()

    def delete(self):
        connection = psycopg2.connect(
            dbname=self.DB_NAME,
            user=self.DB_USER,
            password=self.DB_PASSWORD,
            host=self.DB_HOST,
            port=self.DB_PORT,
        )
        cursor = connection.cursor()
        query = """DELETE FROM menu_items WHERE item_name = %s"""
        cursor.execute(query, (self.name,))
        connection.commit()
        cursor.close()
        connection.close()

    def update(self, new_name, new_price=None):
        connection = psycopg2.connect(
            dbname=self.DB_NAME,
            user=self.DB_USER,
            password=self.DB_PASSWORD,
            host=self.DB_HOST,
            port=self.DB_PORT,
        )
        cursor = connection.cursor()
        query = """UPDATE menu_items SET item_name = %s, item_price = %s WHERE item_name = %s"""
        cursor.execute(
            query, (new_name, new_price if new_price else self.price, self.name)
        )
        connection.commit()
        cursor.close()
        connection.close()
