
var entries = new Array();
function addName(event){
	
	if (event.key === 'Enter') {
		entries.push(getName());
		storeToLocalStorage();
	}
}

function removeRow(id){
	if (entries.length > 0) {
		entries.splice(id,1);
		storeToLocalStorage();
	}
}

function getName(){
	let name = document.getElementById("first-name").value;
	document.getElementById("first-name").value = "";
	return name;
}

function initializeTableFromStorage(){
	if (localStorage.getItem("name-list") !== null) {
		var retrievedData = localStorage.getItem("name-list");
		entries = JSON.parse(retrievedData);
		loadTable();
	}else{
		entries = ["Jack", "William", "John"];
		storeToLocalStorage();
	}
}

function storeToLocalStorage(){
	localStorage.setItem("name-list", JSON.stringify(entries));
	initializeTableFromStorage();
}

function loadTable(){
	var tableBody = "";
	for(var i=0; i<entries.length; i++){
		let code = `
			<tr id="${i}">
				<td onClick=removeRow(${i})>❌</td>
				<td>${entries[i]}</td>
			</tr>`;
		tableBody += code;
	}
	document.getElementById("table-body").innerHTML = tableBody;
}