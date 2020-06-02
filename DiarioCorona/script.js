/* HOME */

function changeImgChi() {
	document.getElementById("imgChange").src = "IMG/imgNews1.jpg";
}

function changeImgPor() {
	document.getElementById("imgChange").src = "IMG/imgNews2.jpg";
}

function changeImgUsa() {
	document.getElementById("imgChange").src = "IMG/imgNews3.jpg";
}

function changeImgSpa() {
	document.getElementById("imgChange").src = "IMG/imgNews4.jpg";
}

function changeImgIta() {
	document.getElementById("imgChange").src = "IMG/imgNews5.jpg";
}

/*
//Active Nav
var active = 0;
function activeNow(currentClass) {
	var nav = document.getElementById("myNav");
	for (var j = nav.children.length-1; j >= 0 ; j--) {
		var a = nav.children[j];
		if(a.className == "active"){
		  a.classList.remove("active");
		}
	}
	currentClass.classList.add("active");
}
*/


function showNews(){
	var query = document.getElementById("block-search-inside")
	var name = query.querySelector("input").value;

		if(name == "PORTUGAL" || name == "portugal" || name == "Portugal"){
			window.open("portugal.html");
		}else if (name ==  "ESPANHA" || name == "espanha" || name == "spain" || name == "Espanha" || name == "Spain") {
			window.open("espanha.html");
		}else if (name ==  "CHINA" || name == "china" || name == "China") {
			window.open("china.html");
		}else if (name ==  "ITALIA" || name == "italia" || name == "italy" || name == "ITALY" || name == "Italy" || name == "Italia") {
			window.open("italia.html");
		}else if (name ==  "USA" || name == "usa" || name == "Estados Unidos da America" || name == "UNITED STATES OF AMERICA" || name == "Estados Unidos" || name == "estados unidos"
			|| name == "eua" || name == "EUA") {
			window.open("eua.html");
		}else{
			window.alert("Insira o nome de um pais válido!");
		}
}

function getFilter(){
	var storedContent = Object.keys(localStorage);
	if(storedContent.includes("hide")){
		var hidden = localStorage.getItem("hide");
		var isChecked = JSON.parse(hidden);
		if(isChecked){
			document.getElementById("filter").checked = true;
		}else{
			document.getElementById("filter").checked = false;
		}
	}
}

function noDeaths() {

	var deaths = document.getElementById("filter").checked;
	if (deaths) {
		localStorage.setItem("hide", "true");
	}else{
		localStorage.setItem("hide", "false");
	}

}

function isHidden() {
	var hidden = localStorage.getItem("hide");

	if (JSON.parse(hidden)) {
		document.getElementById("ocult").style.display = "none";
		document.getElementById("ocultNumber").style.visibility = "hidden";
	}
	else {
		document.getElementById("ocult").style.display = "block";
		document.getElementById("ocultNumber").style.visibility = "visible";
	}
}


/* SETTINGS */

function getMode() {
	var storedContent = Object.keys(localStorage);

	if (!storedContent.includes("darkmode")) {
		var myJSON = JSON.stringify("false");
		localStorage.setItem("darkmode", myJSON);
	} else {
		loadMode();
	}
}

function loadMode() {
	var x = localStorage.getItem("darkmode");
	var darkmode = JSON.parse(x);

	if (darkmode == "true") {
		darkMode();
		var mode = document.getElementById("settings");
		if (mode != null) {
			var checkbox = mode.querySelector("input[type=checkbox]");
			checkbox.checked = true;
		}
	}
}

function switchMode() {
	var mode = document.getElementById("settings");

	var checkbox = mode.querySelector("input[type=checkbox]");

	if (checkbox.checked) {
		localStorage.setItem("darkmode", JSON.stringify("true"));
		darkMode();
	} else {
		localStorage.setItem("darkmode", JSON.stringify("false"));
		lightMode();
	}
}

function darkMode() {
	var style = document.getElementById("style");

	style.href="styleDarkMode.css";
}

function lightMode() {
	var style = document.getElementById("style");

	style.href="style.css";
}


/* ABOUT-US */

function showPro() {
	document.getElementById("pro").src = "IMG/ProName.jpg";
}

function showSoko() {
	document.getElementById("soko").src = "IMG/SokoName.jpg";
}

function showManso() {
	document.getElementById("manso").src = "IMG/MansoName.jpeg";
}

function getToPro() {
	document.getElementById("pro").src = "IMG/Pro.jpg";
}

function getToSoko() {
	document.getElementById("soko").src = "IMG/Soko.jpg";
}

function getToManso() {
	document.getElementById("manso").src = "IMG/Manso.jpeg";
}



/* FOLLOW COUNTRIES */

function follows(countryName) {
	var list = localStorage.getItem("paises");
	var paises = JSON.parse(list);

	if (paises.includes(countryName)) {
		document.querySelector("#follow i").style.color = "orange";
		document.getElementById("follow").style.display = "none";
		document.getElementById("unfollow").style.display = "initial";
	} else {
		document.querySelector("#follow i").style.color = "white";
		document.getElementById("follow").style.display = "initial";
		document.getElementById("unfollow").style.display = "none";
	}
}

function followCountry(countryName) {

	var list = localStorage.getItem("paises");
	var paises = JSON.parse(list);

	if (!paises.includes(countryName)) {
		paises.push(countryName);
	}

	var myJSON = JSON.stringify(paises);
	localStorage.setItem("paises", myJSON);

	//mudar a cor da estrela e trocar os botoes
	document.querySelector("#follow i").style.color = "orange";
	document.getElementById("follow").style.display = "none";
	document.getElementById("unfollow").style.display = "initial";
}

function unfollowCountry(countryName) {
	//ir buscar a lista de paises com follow
	var list = localStorage.getItem("paises");
	var paises = JSON.parse(list);
	//eliminar o pais correto da lista
	for (i = 0; i < paises.length; i++) {
		if (countryName == paises[i]) {
			var temp = paises[i];
			paises[i] = paises[paises.length-1];
			paises[paises.length-1] = temp;
			paises.pop();
		}
	}
	//dar set da lista nova no localStorage
	var myJSON = JSON.stringify(paises);
	localStorage.setItem("paises", myJSON);
	//mudar a cor da estrela e trocar os botoes
	document.querySelector("#follow i").style.color = "white";
	document.getElementById("follow").style.display = "initial";
	document.getElementById("unfollow").style.display = "none";
}

function createFollowed() {
	var storedContent = Object.keys(localStorage);

	if (!storedContent.includes("paises")) {
		var myJSON = JSON.stringify([]);
		localStorage.setItem("paises", myJSON);
	}
}

function getFollowed() {
	document.getElementById("followed Countries").innerHTML="";
	var list = localStorage.getItem("paises");
	var paises = JSON.parse(list);
	console.log(paises);
	for (i = 0; i < paises.length; i++) {
		addToFollowed(paises[i]);
	}
}

function addToFollowed(countryName) {
	var list = document.getElementById("followed Countries");
	var option = document.createElement("OPTION");
	option.value = countryName;
	var text = document.createTextNode(countryName);

	option.appendChild(text);
	list.appendChild(option);
}

function deleteAll() {
	if(confirm("Tem a certeza?")) {
		localStorage.setItem("paises", JSON.stringify([]));
		getFollowed();
	}
}

function redefinir(){

	if(confirm("Tem a certeza?")){
		localStorage.setItem("paises", JSON.stringify([]));
		getFollowed();

		var mode = document.getElementById("settings");

		var checkbox = mode.querySelector("input[type=checkbox]");
		checkbox.checked = false;
		localStorage.setItem("darkmode", JSON.stringify("false"));
		lightMode();

		//Apagar Notificações
		var list = JSON.parse(localStorage.getItem("notificacoes"));
		while (list.length > 0) {
			list.pop();
		}
		localStorage.setItem("notificacoes", JSON.stringify(list));
		deleteNotificationSettings();

		localStorage.setItem("choosedCountry", "null");
		localStorage.setItem("alarmDate", "null");
	}


}

function followedHome() {
	document.getElementById("list-favourites").innerHTML="";
	var list = localStorage.getItem("paises");
	var paises = JSON.parse(list);

	for (i = 0; i < paises.length; i++) {
		addToFollowedHome(paises[i]);
	}
}

function addToFollowedHome(countryName) {
	var list = document.getElementById("list-favourites");
	var a = document.createElement("a");
	var ref = countryName.toLowerCase() + ".html";
	var text = document.createTextNode(countryName);

	a.href = ref;

	a.appendChild(text);
	list.appendChild(a);
}

function storeNotification() {
	var country = document.getElementById("availableCountries").value;
	var time = document.getElementById("criar-alarme").value;

	if (country == "" || time == "" || country === null || time === null) {
		alert("Introduza data e país válidos.");
	} else {
		var pair = [time, country];
		var list = JSON.parse(localStorage.getItem("notificacoes"));
		list.push(pair);
		localStorage.setItem("notificacoes", JSON.stringify(list));
		alert("Notificação criada na pagina Inicial!");
		loadNotificationSettings();
	}
}

function createNotification() {
	var storedContent = Object.keys(localStorage);

	if (!storedContent.includes("notificacoes")) {
		localStorage.setItem("notificacoes", JSON.stringify([]));

	}
}

function loadNotifications() {
	var list = JSON.parse(localStorage.getItem("notificacoes"));

	for (i = 0; i < list.length; i++) {
		showNotification(i, list[i]);
	}
}

function showNotification(number, pair) {
	var leftBlock = document.getElementById("left-block");
	var inside = document.getElementById("block-search");
	var notesDiv = document.getElementById("notesDiv");

	var div = document.createElement("div");
	div.className = "notification";
	div.id = "not" + number.toString();

	var h5 = document.createElement("h5");

	var not = document.createTextNode("Notificação ");

	var cross = document.createElement("i");
	cross.className = "fas fa-times";
	cross.addEventListener("click", function(){deleteNotification(number)});

	var link = document.createElement("a");
	link.href = pair[1].toLowerCase() + ".html";
	link.id = "note" + number.toString();

	var text = document.createTextNode("Horas: " + pair[0] + " | " + pair[1]);

	h5.appendChild(not);
	h5.appendChild(cross);
	link.appendChild(text);
	div.appendChild(h5);
	div.appendChild(link);
	notesDiv.appendChild(div);
	leftBlock.insertBefore(notesDiv, inside);
}

function deleteNotification(number) {
	var notification = document.getElementById("not" + number.toString());
	var notesDiv = document.getElementById("notesDiv");

	notesDiv.removeChild(notification);

	var storage = JSON.parse(localStorage.getItem("notificacoes"));

	var temp = storage[0];
	storage[0] = storage[number];
	storage[number] = temp;
	storage.shift();

	localStorage.setItem("notificacoes", JSON.stringify(storage));
}

function deleteNotificationSettings() {
	var index = document.getElementById("alarmes-criados").selectedIndex;
	console.log(index);
	var storage = JSON.parse(localStorage.getItem("notificacoes"));

	var temp = storage[0];
	storage[0] = storage[index];
	storage[index] = temp;
	storage.shift();

	localStorage.setItem("notificacoes", JSON.stringify(storage));

	loadNotificationSettings();
}

function loadNotificationSettings() {
	var list = JSON.parse(localStorage.getItem("notificacoes"));
	var select = document.getElementById("alarmes-criados");

	select.innerHTML = "";

	for (i = 0; i < list.length; i++) {
		var pair = list[i];
		var option = document.createElement("option");
		var text = document.createTextNode(pair[0] + " | " + pair[1]);

		option.appendChild(text);
		select.appendChild(option);
	}
}
