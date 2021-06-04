# flask run
# shift + reload = reload and refresh cache

from flask import Flask, render_template, send_file, redirect
from flask_caching import Cache
import csv

# cache config
config = {
    "DEBUG": True,          # some Flask specific configs
    "CACHE_TYPE": "simple", # Flask-Caching related configs
    "CACHE_DEFAULT_TIMEOUT": 300
}

app = Flask(__name__)
app.config.from_mapping(config)
cache = Cache(app)

@app.route('/')
@app.route('/index')
@cache.cached(timeout=600)
def index():
    return render_template('cover.html', title='Home')

"""
PROJECTS
"""

@app.route('/projects')
@cache.cached(timeout=600)
def projects():
    return render_template('details/projects.html', title="Projects", image_path="img/dom_raff_sun.jpg")

@app.route('/projects/BSc')
def projects_bsc():
    return send_file("static/docs/library/BScThesis.pdf", attachment_filename="DomHutchinsonBScThesis.pdf")

@app.route('/projects/MEng')
def projects_meng():
    return send_file("static/docs/library/MEngThesis.pdf", attachment_filename="DomHutchinsonMEngThesis.pdf")

@app.route('/projects/running/derby2019')
def projects_derby():
    return redirect("/derby2019")

@app.route('/projects/ONS')
def projects_ons():
    return redirect("/projects/ONS/PowerPoint2")

@app.route('/projects/ONS/reference')
def projects_ons_reference():
    return send_file("static/docs/ONSReference.pdf", attachment_filename="DomHutchinsonONSReference.pdf")

@app.route('/projects/ONS/powerPoint')
def projects_ons_powerpoint():
    return send_file("static/docs/ONSPowerPoint.pdf", attachment_filename="DomHutchinsonONSPowerPoint.pdf")

@app.route('/projects/ONS/writeUp')
def projects_ons_writeup():
    return send_file("static/docs/ONSWriteUp.pdf", attachment_filename="DomHutchinsonONSWriteUp.pdf")

"""
PROFESSIONAL
"""

@app.route('/experience')
@cache.cached(timeout=600)
def experience():
    return render_template('details/experience.html', title="Experience", image_path="img/barclays.jpg")

@app.route('/cv')
@app.route('/CV')
def cv():
    return send_file("static/docs/CVTechnical.pdf", attachment_filename="DomHutchinsonCV.pdf")

@app.route('/student')
@cache.cached(timeout=600)
def student():
    return render_template('details/student.html', title="MEng Maths & Computer Science", image_path="img/clifton_suspension_brige.jpg")

@app.route('/intern')
@cache.cached(timeout=600)
def intern():
    return render_template('details/experience.html', title="Intern", image_path="img/barclays.jpg")

@app.route('/qualifications')
@cache.cached(timeout=600)
def qual():
    return render_template('details/qualifications.html', title="Qualifications", image_path="img/clifton_suspension_brige.jpg")

"""
RACE
"""

@app.route('/races/')
@cache.cached(timeout=600)
def races():
    race_details=[{
        "name":"Battlefield Duathlon",
        "sub_title":"10k Run, 38k Bike, 5k Run",
        "date":"14<sup>th</sup> April 2019",
        "bg":"img/medals/battlefield_duathlon.png",
        "time":"02:34:28",
        "strava_id":"2288328896"
    },{
        "name":"Bristol 10k",
        "date":"5<sup>th</sup> May 2019",
        "bg":"img/medals/bris10k.png",
        "time":"44:52",
        "link":"2019/bristol_10k",
        "strava_id":"2343059898"
    },{
        "name":"Derby Half",
        "date":"9<sup>th</sup> June 2019",
        "bg":"img/medals/derbyHM.png",
        "time":"1:43:34",
        "link":"2019/derby_hm",
        "strava_id":"2435553983"
    },{
        "name":"Bristol Half",
        "date":"27<sup>th</sup> September 2019",
        "bg":"img/medals/brisHM.png",
        "time":"1:53:00",
        "link":"2019/bristol_hm",
        "strava_id":"2710224673"
    },{
        "name":"Liverpool Half",
        "date":"15<sup>th</sup> Match 2020",
        "bg":"img/medals/livHM.png",
        "time":"1:35:01",
        "link":"2020/liverpool_hm",
        "strava_id":"3184813448"
    }]
    race_details.reverse()
    return render_template('race_menu.html',race_details=race_details)

@app.route('/races/<int:year>/<string:event>')
def race_review(year,event):
    names={"bristol_10k":"Bristol 10k","battlefield_duathlon":"Battlefield Duathlon","derby_hm":"Derby Half Marathon","bristol_hm":"Bristol Half Marathon","liverpool_hm":"Liverpool Half Marathon"}

    route_svg_file=open("static/img/svg/"+event+"_"+str(year)+"_route.svg")
    route_svg=route_svg_file.read()

    profile_svg_file=open("static/img/svg/"+event+"_"+str(year)+"_profile.svg")
    profile_svg=profile_svg_file.read()

    csv_file=open("static/csv/"+event+"_"+str(year)+".csv")
    csv_reader=csv.reader(csv_file,delimiter=",")
    csv_data={}

    for row in csv_reader:
        if (len(row)>2):
            csv_data[row[0]]=[map_to_best_type(x) for x in row[1:]]
            if isinstance(csv_data[row[0]][-1],str) and ")" in csv_data[row[0]][-1]: # merge data for extra in splits
                csv_data[row[0]][-2]=(map_to_best_type(csv_data[row[0]][-2].strip("()")),map_to_best_type(csv_data[row[0]][-1].rstrip(")")))
                csv_data[row[0]].pop()

        else:
            csv_data[row[0]]=map_to_best_type(row[1])

    print(csv_data)

    split_zones_svg_file=open("static/img/svg/"+event+"_"+str(year)+"_split_zones.svg")
    split_zones_svg=split_zones_svg_file.read()

    hr_zones_svg=None
    if "heart_rate_avg" in csv_data:
        hr_zones_svg_file=open("static/img/svg/"+event+"_"+str(year)+"_hr_zones.svg")
        hr_zones_svg=hr_zones_svg_file.read()

    bests={k:k.rstrip("_best") for k in csv_data if "_best" in k}# dictionary of distances which best splits have been calculated for

    medal_path={"bristol_10k":"img/medals/bris10k.png",
        "derby_hm":"img/medals/derbyHM.png",
        "bristol_hm":"img/medals/brisHM.png",
        "liverpool_hm":"img/medals/livHM.png"}

    strava_ids={"bristol_10k":"2343059898",
        "derby_hm":"2435553983",
        "bristol_hm":"2710224673",
        "liverpool_hm":"3184813448"}

    return render_template('race_review.html',year=year,event=names[event] if event in names else event,route_svg=route_svg,profile_svg=profile_svg,data=csv_data,bests=bests,hr_zones_svg=hr_zones_svg,split_zones_svg=split_zones_svg,bg=medal_path[event],strava_id=strava_ids[event])

@app.route('/derby2019')
def derby2019():
    return send_file("static/img/derby_infographic.png", attachment_filename="DomHutchinsonDerbyInfographic.png")

"""
MISC
"""

@app.route('/motivation')
def motivation():
    return "TODO"

@app.route('/library')
@cache.cached(timeout=600)
def library():
    return render_template('library.html')

def map_to_best_type(val):
    try:
        return int(val)
    except:
        try:
            return float(val)
        except:
            return val
