function about() {
    document.getElementById("body").innerHTML='<div class="page_row"> <h1>Dom Hutchinson</h1> <div class="row" style="height:90%;"> <div class="col-sm-6" style="height:100%;background-color: white"></div> <div class="col-sm-1"></div> <div class="col-sm-4 about_pic" style="height:100%"></div> </div> </div> <div class="page_row"> <div class="row" style="height:100%;"> <div class="col-sm-4" style="height:100%;background-color: lightblue"></div> <div class="col-sm-4" style="height:100%;background-color: lightcyan"></div> <div class="col-sm-4" style="height:100%;background-color: lightgray"></div> </div> </div>';
}

function qualifications() {
    document.getElementById("body").innerHTML='<!-- QUALIFCATION--> <p class="centred_page_heading">Qualifications</p> <div id="qualification_view_options"> <a class="centred_page_subheading" id="qual_overview_btn" onclick="qual_overview()" style="color:#122314;">Overview</a> <a class="centred_page_subheading" id="qual_timeline_btn" onclick="qual_timeline()">Timeline</a> </div> <div id="qualification_content"> <!--OVERVIEW VIEW--> <ul class="horizontal_ul qual_overview_ul" style="height: 400px"> <li>Maths &amp; Computer Science MEng<br> In Progress <hr style="margin: 0 5%; border-top-color: lightgray"> <ul class="qual_overview_detail_ul"> <li>Year 1 - 77%</li> <li>Year 2 - 73%</li> <li>Year 3 - In Progess</li> <li>Year 4 - TODO</li> </ul> </li> <li>A-Levels<br> 3A* A <hr style="margin: 0 5%; border-top-color: lightgray"> <ul class="qual_overview_detail_ul"> <li>Maths. - A*</li> <li>Further Maths. - A*</li> <li>Pre-U Physics - D2 (A*)</li> <li>Computer Science - A</li> </ul> </li> <li>GCSEs<br> 6A* 4A <hr style="margin: 0 5%; border-top-color: lightgray"> <ul class="qual_overview_detail_ul"> <li>A* - Maths, English, Chemistry, Physics, Geography &amp; Computing</li> <li>A  - Biology, French, RS &amp; Latin</li> </ul> </li> <li>Other<br><br> <hr style="margin: 0 5%; border-top-color: lightgray"> <ul class="qual_overview_detail_ul"> <li>DofE Gold - 2019</li> <li>DofE Silver - 2015</li> <li>DofE Bronze - 2013</li> <li>Major Academic Scholarship (Oundle School) - 2012</li> <li>5x School Computing Prize (2012-2017)</li> <li>UKMT Gold - 1x Senior, 3x Intermediate, 3x Junior</li> </ul> </li> </ul>';
}

function experience() {
    document.getElementById("body").innerHTML="<h1>EXPERIENCE</h1>";
}

function projects() {
    document.getElementById("body").innerHTML="<h1>PROJECTS</h1>";
}

function cover() {
    document.getElementById("body").innerHTML='<div class="cover_image"> <div style="padding-top: 40vh;"> <h1 class="cover_title">DOM HUTCHINSON</h1> </div> </div>';
}
