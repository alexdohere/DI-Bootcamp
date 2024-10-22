import psycopg2
from dotenv import load_dotenv
import os


class MenuManager:
    dotenv_path = os.path.join(os.path.dirname(__file__), ".env")
    load_dotenv(dotenv_path)
    DB_HOST = os.getenv("DB_HOST")
    DB_NAME = os.getenv("DB_NAME")
    DB_USER = os.getenv("DB_USER")
    DB_PASSWORD = os.getenv("DB_PASSWORD")
    DB_PORT = os.getenv("DB_PORT")

    @staticmethod
    def get_by_name(name):
        connection = psycopg2.connect(
            dbname=MenuManager.DB_NAME,
            user=MenuManager.DB_USER,
            password=MenuManager.DB_PASSWORD,
            host=MenuManager.DB_HOST,
            port=MenuManager.DB_PORT,
        )
        cursor = connection.cursor()
        query = """SELECT * FROM menu_items WHERE item_name = %s"""
        cursor.execute(query, (name,))
        result = cursor.fetchone()
        cursor.close()
        connection.close()
        return result

    @staticmethod
    def all_items():
        connection = psycopg2.connect(
            dbname=MenuManager.DB_NAME,
            user=MenuManager.DB_USER,
            password=MenuManager.DB_PASSWORD,
            host=MenuManager.DB_HOST,
            port=MenuManager.DB_PORT,
        )
        cursor = connection.cursor()
        query = """SELECT * FROM menu_items"""
        cursor.execute(query)
        results = cursor.fetchall()
        cursor.close()
        connection.close()
        return results
