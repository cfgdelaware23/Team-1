from flask import Flask, Blueprint, request
from Scheduler import *

volunteer_api = Blueprint('volunteers', __name__)

def get_volunteer_info():
    volunteer_hours = []
    schedule = getSchedule()
    for event in schedule:
        event_info = event[0]
        volunteers = event[1]
        
        for v in volunteers:
            volunteer_hours[v[0]] = volunteer_hours.get((v[0], 0) + 1)
    return volunteer_hours

@volunteer_api.route("/", methods = ['GET'])
def show_volunteer_info():
    return Response(get_volunteer_info(), status=200)

@volunteer_api.route("/one/<name>", methods = ['GET'])
def show_one_volunteer_info():
    name = request.args.get('name')
    volunteer_hours = get_volunteer_info()
    if (volunteer_hours.has_key(name)):
        return Response(volunteer_hours[name], status=200)
    return Response({"error": "Volunteer Not Found"}, 404)
    
    

