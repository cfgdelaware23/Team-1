import json
import pandas as pd
from dotenv import dotenv_values
import urllib.request


def jsonToPandas(var_name):

    env_vals = dotenv_values("variables.env")
    file_name = env_vals[var_name]
    with urllib.request.urlopen(file_name) as url:
        raw_data = json.load(url)
    # print(raw_data)
    return pd.json_normalize(raw_data["data"])
    
def getDayHash(df):
    output = {"Monday":{} , "Tuesday":{}, "Wednesday":{}, 
              "Thursday":{}, "Friday":{}, "Saturday":{},
              "Sunday":{}
             }
    for i, row in df.iterrows():
        if i == 0:
            continue
        event = (row["event_name"], row["time"])
        output[row["day"]][event] = []

    return output


def getSchedule(dayHash, availDf):
    pass

    
df = jsonToPandas("events_api")
print(getDayHash(df))
# print(df["event_name"])
# for ind in df.index:
#     print(df['event_name'][ind])
