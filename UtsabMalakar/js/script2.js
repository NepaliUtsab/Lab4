
var entries = ["John","William","Jack"];
function addName(event){
	
	if (event.key === 'Enter') {
		entries.push(getName());
		loadTable();
	}
}

function removeRow(id){
	if (entries.length > 0) {
		entries.splice(id,1);
		loadTable();
	}
}

function getName(){
	let name = document.getElementById("first-name").value;
	document.getElementById("first-name").value = "";
	return name;
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