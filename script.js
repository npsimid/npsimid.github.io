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

var model1;

async function predict() {
	model1 = await tf.loadLayersModel('https://npsimid.github.io/assets/model_json/model.json');
  // action for the submit button
var image = document.getElementById("display_image")  
var tensorImg =   tf.browser.fromPixels(image).resizeNearestNeighbor([224, 224]).toFloat().expandDims();
  predictions = await model1.predict(tensorImg).data();
var results = Array.from(predictions)
		.map(function (p, i) {
			return {
				probability: p,
				className: CLASSES[i]
			};
		}).sort(function (a, b) {
			return b.probability - a.probability;
		}).slice(0, 5);

	document.getElementById("predict-box").style.display = "block";
	document.getElementById("prediction").innerHTML = "Rasa prezisă: <br><b>" + results[0].className + "</b>";

	var ul = document.getElementById("predict-list");
	ul.innerHTML = "";
	results.forEach(function (p) {
		console.log(p.className + " " + p.probability.toFixed(6));
		var li = document.createElement("LI");
		li.innerHTML = p.className + " " + p.probability.toFixed(6);
		ul.appendChild(li);
	});
}