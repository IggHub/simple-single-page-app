function setActiveLink(fragmentId){
  var navbarDiv = document.getElementById("navbar");
  var links = navbarDiv.children;
  var i, link, pageName;

  for(i = 0; i < links.length; i++){
    link = links[i];
    pageName = link.getAttribute("href").substr(1);
    if(pageName === fragmentId){
      link.setAttribute("class", "active");
    } else {
      link.removeAttribute("class");
    }
  }
}



function getContent(fragmentId, callback){
  var request = new XMLHttpRequest();

  request.onload = function(){
    callback(request.responseText);
  }

  request.open("GET", fragmentId + ".html");
  request.send(null);
}



function navigate(){
    var contentDiv = document.getElementById("content"); //=> similar to $('#content')
    var fragmentId = location.hash.substr(1);

    getContent(fragmentId, function(content){
        contentDiv.innerHTML = content;
    })

    setActiveLink(fragmentId)
}



if(!location.hash){
  location.hash = "home"
}



navigate();

window.addEventListener('hashchange', function(){
  navigate();
})
//or window.addEventListener('hashchange', navigate); Recall second argument takes A FUNCTION. Callback function
