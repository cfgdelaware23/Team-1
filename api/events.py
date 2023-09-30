from flask import Flask, Blueprint, request

events_api = Blueprint('events', __name__)

@events_api.route("/", methods = ['POST'])
def create_event():
    return "POST Event"

@events_api.route("/", methods = ['PUT'])
def update_event():
    return "PUT Event"


@events_api.route("/<name>", methods = ['DELETE'])
def delete_event(name):
    return "Del Event By Name"

