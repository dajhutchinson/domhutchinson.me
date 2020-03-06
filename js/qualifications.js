function qual_timeline() {
    document.getElementById("qualification_content").innerHTML='<ul class="horizontal_scroll_list full no-scrollbar"> <li class="horizontal_scroll_item"> <h1>2020</h1> <hr style="margin: 0 5%; border-top-color: lightgray"> <h2>MEng - Year 3</h2> <h2>WIP (82%)</h2> <div class="centre_container"> <ul> <li>Statistics 2 - 91%</li> <li>Machine Learning - 75%</li> <li>Image Processing &amp Computer Vision - 70%</li> </ul> </div> </li> <li class="horizontal_scroll_item"> <h1>2019</h1> <hr style="margin: 0 5%; border-top-color: lightgray"> <h2>MEng - Year 2</h2> <h2>First (73%)</h2> <div class="centre_container"> <ul> <li>Statistics 1 - 83%</li> <li>Combinatorics - 78%</li> <li>Symbols, Patterns &amp Signals - 74%</li> <li>Data Structures &amp Algorithms - 73%</li> <li>Language Engineering - 70%</li> <li>Probability 2 - 70%</li> <li>Multivariable Calculus - 59%</li> </ul> <hr style="margin: 10px 5%; border-top-color: lightgray"> <ul> <li>Gold DofE</li> </ul> </div> </li> <li class="horizontal_scroll_item"> <h1>2018</h1> <hr style="margin: 0 5%; border-top-color: lightgray"> <h2>MEng - Year 1</h2> <h2>First (77%)</h2> <div class="centre_container"> <ul> <li>Algorithms - 91%</li> <li>Functional Programming - 88%</li> <li>Foundations &amp Proof - 84%</li> <li>Analysis 1A - 81%</li> <li>Intro to Group Theory - 77%</li> <li>Imperative Programming - 74%</li> <li>Linear Algebra &amp Geometry - 72%</li> <li>Calculus 1 - 71%</li> <li>OO Programming - 70%</li> <li>Probability 1 - 68%</li> </ul> <hr style="margin: 10px 5%; border-top-color: lightgray"> <ul> <li>CS50 Harvard</li> </ul> </div> </li> <li class="horizontal_scroll_item"> <h1>2017</h1> <hr style="margin: 0 5%; border-top-color: lightgray"> <h2>A-Levels</h2> <h2>3A* 1A</h2> <div class="centre_container"> <ul> <li>Maths. - A*</li> <li>Further Maths. - A*</li> <li>Pre-U Physics - D2 (A*)</li> <li>Computer Science - A</li> </ul> <hr style="margin: 10px 5%; border-top-color: lightgray"> <ul> <li>UKMT Senior - Gold</li> <li>School Computing Prize</li> </ul> </div> </li> <li class="horizontal_scroll_item"> <h1>2016</h1> <hr style="margin: 10px 5%; border-top-color: lightgray"> <div class="centre_container"> <ul> <li>UKMT Senior - Silver</li> <li>Year Computing Prize</li> </ul> </div> </li> <li class="horizontal_scroll_item"> <h1>2015</h1> <hr style="margin: 0 5%; border-top-color: lightgray"> <h2>GCSEs</h2> <h2>6A* 4A</h2> <hr style="margin: 0 5%; border-top-color: lightgray"> <div class="centre_container"> <ul> <li>Maths - A*</li> <li>English - A*</li> <li>Physics - A*</li> <li>Chemistry -A* </li> <li>Biology - A</li> <li>Computing - A*</li> <li>Geography - A*</li> <li>French - A</li> <li>Latin - A</li> <li>RS - A</li> </ul> <hr style="margin: 10px 5%; border-top-color: lightgray"> <ul> <li>Silver DofE</li> <li>School Computing Prize</li> </ul> </div> </li> <li class="horizontal_scroll_item"> <h1>2012</h1> <hr style="margin: 0 5%; border-top-color: lightgray"> <div class="centre_container"> <ul> <li>Major Academic Scholarship (Oundle School)</li> <li>UKMT Junior</li> <li>School Maths, RS &amps; History Prizes</li> </ul> </div> </li> <li class="horizontal_scroll_item"> <h1>Other</h1> <hr style="margin: 0 5%; border-top-color: lightgray"> <div class="centre_container"> <ul> <li>Bronze DofE - 2013</li> <li>Silver DofE - 2015</li> <li>Gold DofE - 2019</li> <li>Major Academic Scholarship - 2012-17</li> <li>Computing Prize - 2012-17</li> </ul> </div> </li> </ul>';
    document.getElementById("qual_overview_btn").style.color="lightgray";
    document.getElementById("qual_timeline_btn").style.color="#122314";
}

function qual_overview() {
    document.getElementById("qualification_content").innerHTML='<ul class="horizontal_ul qual_overview_ul" style="height: 400px"> <li>Maths &amp; Computer Science MEng<br> In Progress <hr style="margin: 0 5%; border-top-color: lightgray"> <ul class="qual_overview_detail_ul"> <li>Year 1 - 77%</li> <li>Year 2 - 73%</li> <li>Year 3 - In Progess</li> <li>Year 4 - TODO</li> </ul> </li> <li>A-Levels<br> 3A* A <hr style="margin: 0 5%; border-top-color: lightgray"> <ul class="qual_overview_detail_ul"> <li>Maths. - A*</li> <li>Further Maths. - A*</li> <li>Pre-U Physics - D2 (A*)</li> <li>Computer Science - A</li> </ul> </li> <li>GCSEs<br> 6A* 4A <hr style="margin: 0 5%; border-top-color: lightgray"> <ul class="qual_overview_detail_ul"> <li>A* - Maths, English, Chemistry, Physics, Geography &amp; Computing</li> <li>A  - Biology, French, RS &amp; Latin</li> </ul> </li> <li>Other<br><br> <hr style="margin: 0 5%; border-top-color: lightgray"> <ul class="qual_overview_detail_ul"> <li>DofE Gold - 2019</li> <li>DofE Silver - 2015</li> <li>DofE Bronze - 2013</li> <li>Major Academic Scholarship (Oundle School) - 2012</li> <li>5x School Computing Prize (2012-2017)</li> <li>UKMT Gold - 1x Senior, 3x Intermediate, 3x Junior</li> </ul> </li> </ul>';
    document.getElementById("qual_overview_btn").style.color="#122314";
    document.getElementById("qual_timeline_btn").style.color="lightgray";
}