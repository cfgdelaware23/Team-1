import json
import pandas as pd
from dotenv import dotenv_values
import urllib.request
from flask import Flask, Blueprint

schedule_api = Blueprint('schedule', __name__)

@schedule_api.route("/", methods = ['GET'])
def get_schedule():
    return "GET Schedule"

def jsonToPandas(var_name):

    env_vals = dotenv_values("variables.env")
    file_name = env_vals[var_name]
    with urllib.request.urlopen(file_name) as url:
        raw_data = json.load(url)
    return pd.json_normalize(raw_data)
    
