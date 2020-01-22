
function loadFooter() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       let json = JSON.parse(this.responseText);
       json.map(list => { 
           const parentId = Object.keys(list)[0];
           const parent = document.getElementById(parentId);
           list[parentId].map(el => {
                const li = document.createElement("li");
                li.appendChild(document.createTextNode(el));
                parent.appendChild(li)
           })
       });
      }
    };
    xhttp.open("GET", "http://interview.plaid.com/data/footer.json", true);
    xhttp.send();
  }
