import json
import pandas as pd
from dotenv import dotenv_values
import urllib.request


def jsonToPandas(var_name):

    env_vals = dotenv_values("variables.env")
    file_name = env_vals[var_name]
    with urllib.request.urlopen(file_name) as url:
        raw_data = json.load(url)
    # print(data)
    # print(raw_data)
    return pd.json_normalize(raw_data)
    


# input google sheet scraper

# with open('books.json') as f:
#     data = json.load(f)


# df = pd.json_normalize()

print(jsonToPandas("events_api"))
