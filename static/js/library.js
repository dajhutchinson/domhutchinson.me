function library_show_file(file) {
  var parent=document.getElementById("pdf_output");
  var html="<embed src='/static/docs/library/"+file+"' type='application/pdf' width='100%'' height='100%'>";
  parent.innerHTML=html;
}
