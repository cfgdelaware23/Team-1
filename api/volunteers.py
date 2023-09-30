from flask import Flask, Blueprint, request
from Scheduler import *

volunteer_api = Blueprint('volunteers', __name__)

@volunteer_api.route("/", methods = ['GET'])
def show_volunteer_info():
    # pd = jsonToPandas("var_name")
    return "GET Volunteers"

@volunteer_api.route("/one", methods = ['GET'])
def show_one_volunteer_info():

    name = request.args.get('name')
    return "GET One Volunteer"

