from flask import Flask, Blueprint, request, Response
from Scheduler import *

volunteer_api = Blueprint('volunteers', __name__)

def get_volunteer_info():
    
    volunteer_hours = {}
    df1 = jsonToPandas("events_api")
    df2 = jsonToPandas("hosts_api")
    dayhash = getDayHash(df1)
    schedule = getSchedule(dayhash, df2)
    # schedule = get_schedule().get_data()
    # print(schedule)

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
    return jsonify(get_volunteer_info())

@volunteer_api.route("/one/<name>", methods = ['GET'])
def show_one_volunteer_info(name):
    # name = request.args
    # print(name)
    volunteer_hours = get_volunteer_info()
    # print("here")
    if name in volunteer_hours:
        return jsonify(volunteer_hours[name])
    return Response({"error": "Volunteer Not Found"}, 404)

    
    

