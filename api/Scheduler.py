import json
import pandas as pd
from dotenv import dotenv_values
import urllib.request
from flask import Flask, Blueprint
import numpy as np

schedule_api = Blueprint('schedule', __name__)

@schedule_api.route("/", methods = ['GET'])
def get_schedule():
    return "GET Schedule"

def jsonToPandas(var_name):

    env_vals = dotenv_values("variables.env")
    file_name = env_vals[var_name]
    with urllib.request.urlopen(file_name) as url:
        raw_data = json.load(url)
    return pd.json_normalize(raw_data["data"])
    
def getDayHash(df):

    output = {"Monday":{} , "Tuesday":{}, "Wednesday":{}, 
              "Thursday":{}, "Friday":{}, "Saturday":{},
              "Sunday":{}
             }
    for i, row in df.iterrows():
        if i == 0:
            continue
        event = (row["event_name"], row["time"], row["host_name"])
        output[row["day"]][event] = []

    return output


def getSchedule(dayHash, availDf):

    enum = {"9am": 0, "10am": 1, "11am": 2, "12pm": 3, "1pm": 4,"2pm": 5,
            "3pm": 6, "4pm": 7, "5pm": 8,"6pm": 9, "7pm": 10, "8pm": 11,
            "9pm": 12, "10pm": 13,  "11pm": 14, "12pm": 15}

    for i, row in availDf.iterrows():
        if i == 0:
            continue

        for day in dayHash:
            val = row[day]
            if val == "None":
                continue
            temp = val.split("-")
            lower = temp[0]
            upper = temp[-1]

            for event in dayHash[day]:
                new_temp = event[1].split("-")
                bound = new_temp[0]
                if row["name"]!= event[-1] and (lower<=bound and bound<=upper):
                    dayHash[day][event].append(row["name"])

    for day in dayHash:

        for event in dayHash[day]:

            dayHash[day][event] = np.random.choice(dayHash[day][event])


    return dayHash




    





    
df1 = jsonToPandas("events_api")
df2 = jsonToPandas("hosts_api")
dayhash = getDayHash(df1)
print(getSchedule(dayhash,df2))
# print(dayhash)
# print(df["event_name"])
# for ind in df.index:
#     print(df['event_name'][ind])
