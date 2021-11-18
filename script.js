var loadFile = function (event) {
   var element1 = document.getElementById('display_image');
   var element2 = document.getElementById('determinare_rasa');
   if (element1 == null && element2 == null) {
      var tag = document.createElement("img");
      tag.id = 'display_image';
      var element = document.getElementById("base");
      element.appendChild(tag);
      var tag2 = document.createElement("button");
      tag2.id = 'determinare_rasa';
      tag2.type = "button";
      tag2.className = "btn btn-secondary btn-lg btn-block";
      var text = document.createTextNode("Determinare rasă");
      tag2.appendChild(text);
      element.appendChild(tag2);
   }
   var image = document.getElementById('display_image');
   image.src = URL.createObjectURL(event.target.files[0]);
   console.log(image.getAttribute("src"));
};