
function introducere() {
	var textulmeu = document.getElementById("textul").value

	if (textulmeu.trim().length >= 3) {
		document.getElementById("predict-box2").style.display = "block";
		
	}
	else {
		document.getElementById("predict-box2").style.display = "none";
		document.getElementById("predict-box").style.display = "none";
		document.getElementById("predict-box3").style.display = "none";
		document.getElementById("predict-box4").style.display = "none";
	}




}

// const range = document.getElementById("range");
// const output = document.getElementById("output")
// const value = range.defaultValue
// output.innerHTML = value
// const left_value = 1.49*value + 130
// output.style.left = left_value + 'px';
// console.out(range)



// const splitMultiple = (str, ...separator) => {
// 	const res = [];
// 	let start = 0;
// 	for (let i = 0; i < str.length; i++) {
// 		if (!separator.includes(str[i])) {
// 			continue;
// 		};
// 		res.push(str.substring(start, i));
// 		start = i + 1;
// 	};
// 	return res;
// };
// console.log(splitMultiple('fsadfsad.sagasgasd! fdgdyd?dhdf', '.', '?', '!'))



// if (document.getElementById("textul").value==" "){
// 	console.log(" Valoare nula")
// }

// var myText = document.getElementById("myText");
// var s = myText.value;
// console.log(s)


// var loadFile = function (event) {

// 	document.getElementById("predict-box").style.display = "none";
// 	document.getElementById("predict-box2").style.display = "none";

// 	var element1 = document.getElementById('display_image');
// 	if (element1 == null) {
// 		var tag = document.createElement("img");
// 		tag.id = 'display_image';
// 		tag.style = "width:100%;  padding: 1%";
// 		var element = document.getElementById("base");
// 		element.appendChild(tag);
// 		element.insertBefore(tag, element.children[3]);

// 	}
// 	document.getElementById("predict-box2").style.display = "block";

// 	var image = document.getElementById('display_image');
// 	image.src = URL.createObjectURL(event.target.files[0]);
// };

// var model1;

async function predict() {
	// 	document.getElementById("predict-box3").style.display = "block";
	// 	model1 = await tf.loadGraphModel('https://npsimid.github.io/assets/model_json/model.json');
	// 	var image = document.getElementById("display_image");
	// 	let tensorImg = tf.browser.fromPixels(image).resizeBilinear([224, 224]).div(tf.scalar(255)).toFloat().expandDims();
	// 	predictions = await model1.predict(tensorImg).data();
	// 	var results = Array.from(predictions)
	// 		.map(function (p, i) {
	// 			return {
	// 				probability: p,
	// 				className: CLASSES[i]
	// 			};
	// 		}).sort(function (a, b) {
	// 			return b.probability - a.probability;
	// 		}).slice(0, 5);
	// 	document.getElementById("predict-box3").style.display = "none";
	// 	document.getElementById("predict-box").style.display = "block";
	// 	document.getElementById("prediction").innerHTML = "<b>Rasa prezisă:</b><h3>" + results[0].className.replace("_", " ").toUpperCase() + "</h3>";

	// 	var ul = document.getElementById("predict-list");
	// 	ul.innerHTML = "";
	// 	results.forEach(function (p) {
	// 		var value_prob = p.probability * 100;
	// 		var name_class = p.className.replace("_", " ").toUpperCase();
	// 		var li = document.createElement("LI");
	// 		li.innerHTML = name_class + ", probabilitate: " + value_prob.toFixed(2) + '%';
	// 		ul.appendChild(li);
	// 	});


	document.getElementById("predict-box").style.display = "block";
	document.getElementById("predict-box4").style.display = "block";
	//   document.getElementById("predict-box3").style.display = "block";


	const range = document.getElementById("range");
	const output = document.getElementById("output")
	const range_width = range.clientWidth;
	const value = range.defaultValue;
	output.innerHTML = value;
	const left_value = range_width * value / 200 + range_width / 2 + 5;
	// const left_value = 2.9 * value + 295;
	output.style.left = left_value + 'px';

	var very_angry = document.getElementById("very_angry")
	var angry = document.getElementById("angry")
	var neutral = document.getElementById("neutral")
	var happy = document.getElementById("happy")
	var very_happy = document.getElementById("very_happy")

	if (value < -60) {
		very_angry.style = "width:100%; opacity: 1"
	}
	else if (value < -20) {
		angry.style = "width:100%; opacity: 1"
	}
	else if (value < 20) {
		neutral.style = "width:100%; opacity: 1"
	}
	else if (value < 60) {
		happy.style = "width:100%; opacity: 1"
	}
	else {
		very_happy.style = "width:100%; opacity: 1"
	}


	var textulmeu = document.getElementById("textul").value
	var lista_propoz = textulmeu.split(/[.,!,?]/);
	const index = lista_propoz.indexOf('');
	if (index > -1) {
		lista_propoz.splice(index, 1);
	}
	console.log(lista_propoz);
}