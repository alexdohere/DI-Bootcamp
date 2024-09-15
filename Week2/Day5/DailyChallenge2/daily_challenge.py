# Instructions :
# Using the requests and time modules, create a function which returns the amount of
# time it takes a webpage to load (how long it takes for a complete response to a request).
#
# Test your code with multiple sites such as google, ynet, imdb, etc.

import requests
import time


def page_load_time(url):
    start_time = time.time()
    requests.get(url)
    end_time = time.time()

    return end_time - start_time


urls = ["https://www.google.com", "https://www.ynet.co.il", "https://www.imdb.com"]
for url in urls:
    load_time = page_load_time(url)
    print(f"Time to load {url}: {load_time:.4f} seconds")
