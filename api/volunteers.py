from flask import Flask, Blueprint, request, Response
from Scheduler import *

volunteer_api = Blueprint('volunteers', __name__)

def get_volunteer_info():
    
    volunteer_hours = {}
    schedule = get_schedule()
    for day in schedule:
        for event in schedule[day]:
            host = event[2]

            if host not in volunteer_hours:
                volunteer_hours[host] = 0
            volunteer_hours[host] += 1
            
            partner = schedule[day][event]
            if partner not in volunteer_hours:
                volunteer_hours[partner] = 0

            volunteer_hours[partner]+=1
            
    return volunteer_hours
                
                
                
@volunteer_api.route("/", methods = ['GET'])
def show_volunteer_info():
    return Response(get_volunteer_info(), status=200)

@volunteer_api.route("/one/<name>", methods = ['GET'])
def show_one_volunteer_info(name):
    name = request.args.get('name')
    volunteer_hours = get_volunteer_info()
    if name in volunteer_hours:
        return Response(volunteer_hours[name], status=200)
    return Response({"error": "Volunteer Not Found"}, 404)
    
    

