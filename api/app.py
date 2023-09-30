from flask import Flask
from flask import render_template
from Scheduler import schedule_api
from volunteers import volunteer_api
from events import events_api

app = Flask(__name__)

app.register_blueprint(schedule_api, url_prefix='/schedule')
app.register_blueprint(volunteer_api, url_prefix='/volunteer')
app.register_blueprint(events_api, url_prefix='/events')

@app.route("/")
def hello_world():
    # return "<p>Hello, World!</p>"
    return render_template("home.html")

if __name__ == "__main__":
  app.run()