# Using this REST Countries API, create the functionality which will write 10 random countries to your database.
# These are the attributes which you should populate your tables with: name, capital, flag, subregion, population.

import psycopg2
import requests
import os
from dotenv import load_dotenv
import random

load_dotenv()

DB_HOST = os.getenv("DB_HOST")
DB_NAME = os.getenv("DB_NAME")
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_PORT = os.getenv("DB_PORT")

connection = psycopg2.connect(
    database=DB_NAME, user=DB_USER, password=DB_PASSWORD, host=DB_HOST, port=DB_PORT
)

cursor = connection.cursor()

try:
    response = requests.get("https://restcountries.com/v3.1/all")
    response.raise_for_status()
    data = response.json()

    random_countries = random.sample(data, 10)

    for country in random_countries:
        name = country["name"]["common"]
        capital = country.get("capital", [None])[0]
        flag = country["flags"]["png"]
        subregion = country.get("subregion", None)
        population = country["population"]

        query = """
        INSERT INTO countries (name, capital, flag, subregion, population)
        VALUES (%s, %s, %s, %s, %s)
        """
        cursor.execute(query, (name, capital, flag, subregion, population))

    connection.commit()
    print("10 random countries have been added to the database!")

except requests.exceptions.RequestException as e:
    print(f"API error: {e}")
except psycopg2.DatabaseError as e:
    print(f"Database error: {e}")
    connection.rollback()
finally:
    cursor.close()
    connection.close()
