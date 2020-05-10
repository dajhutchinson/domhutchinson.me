# flask run
# shift + reload = reload and refresh cache

from flask import Flask, render_template, send_file, redirect

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('cover.html', title='Home')

@app.route('/CV')
def cv():
    return send_file("static/docs/CVTechnical.pdf", attachment_filename="DomHutchinsonCV.pdf")

@app.route('/student')
def student():
    return render_template('details/student.html', title="MEng Maths & Computer Science", image_path="img/clifton_suspension_brige.jpg")

@app.route('/intern')
def intern():
    return render_template('details/experience.html', title="Intern", image_path="img/barclays.jpg")

@app.route('/qualifications')
def qual():
    return render_template('details/qualifications.html', title="Qualifications", image_path="img/clifton_suspension_brige.jpg")

@app.route('/projects')
def projects():
    return render_template('details/projects.html', title="Projects", image_path="img/me_sunglasses.jpg")

@app.route('/projects/BSc')
def projects_bsc():
    return send_file("static/docs/library/BScThesis.pdf", attachment_filename="DomHutchinsonBScThesis.pdf")

@app.route('/derby2019')
def derby2019():
    return send_file("static/img/derby_infographic.png", attachment_filename="DomHutchinsonDerbyInfographic.png")

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

@app.route('/experience')
def experience():
    return render_template('details/experience.html', title="Experience", image_path="img/barclays.jpg")

@app.route('/motivation')
def motivation():
    return "TODO"

@app.route('/library')
def library():
    return render_template('library.html')
