var entry=["Rohit", "Aziz", "Sai", "Aosaf"];
function onEnterPressed(event){
    
    if(event.key !== "Enter"){
        
        return;
    }

    
    addEntry();
}

var id=0;

function addEntry() {
    entry.push(getName());
    refreshTable();
}

function removeEntry(id) {
    entry.splice(id,1);
    refreshTable();
}

function getName() {
    return document.getElementById("name").value;
}

function setName(name) {
    return document.getElementById("name").value=name;
}

function refreshTable(){
    var code = "";
    for(var i=0; i<entry.length; i++)
    {
        var snippet = `
        <tr id="${id}">
            <td onClick="removeEntry(${id})"}>❌</td>
            <td>${entry[i]}</td>
        </tr>
        `
        code += snippet;
    }
     document.getElementById("tbody").innerHTML = code;
}