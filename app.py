# flask run
# shift + reload = reload and refresh cache

from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html', title='Home')

@app.route('/student')
def student():
    return render_template('details.html', title="Student", image_path="img/clifton_suspension_brige.jpg")

@app.route('/intern')
def intern():
    return render_template('details.html', title="Intern", image_path="img/barclays.jpg")

@app.route('/qualifications')
def qual():
    return render_template('details.html', title="Qualifications", image_path="img/clifton_suspension_brige.jpg")

@app.route('/projects')
def projects():
    return render_template('details.html', title="Projects", image_path="img/derby_infographic.png")

@app.route('/experience')
def experience():
    return render_template('details.html', title="Experience", image_path="img/barclays.jpg")
