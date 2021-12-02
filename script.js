var loadFile = function (event) {

	document.getElementById("predict-box").style.display = "none";

   var element1 = document.getElementById('display_image');
   if (element1 == null) {
      var tag = document.createElement("img");
      tag.id = 'display_image';
      var element = document.getElementById("base");
      element.appendChild(tag);
      element.insertBefore(tag, element.children[3]);
   }
   document.getElementById("determinare_rasa").removeAttribute("hidden");

   var image = document.getElementById('display_image');
   image.src = URL.createObjectURL(event.target.files[0]);
};

var model1;

async function predict() {
model1 = await tf.loadGraphModel('https://npsimid.github.io/assets/model_json/model.json');
var image = document.getElementById("display_image"); 
let tensorImg =   tf.browser.fromPixels(image).resizeBilinear([224, 224]).div(tf.scalar(255)).toFloat().expandDims();
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
		var value_prob = p.probability*100;
		var name_class = p.className.replace("_", " ").toUpperCase();
		var li = document.createElement("LI");
		li.innerHTML = name_class + ", probabilitate: " + value_prob.toFixed(2)+'%';
		ul.appendChild(li);
	});
}