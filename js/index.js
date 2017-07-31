document.getElementById('loaded').innerHTML =
  (new Date()).toLocaleTimeString();
  
document.getElementById('btn-get-data').addEventListener('click', getData);

function getData() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            document.getElementById('gender').innerHTML = data.gender;
            document.getElementById('name').innerHTML = data.name;
            document.getElementById('address').innerHTML = data.address;
            document.getElementById('salary').innerHTML = data.salary;
        }
    }
    xhr.open('get', 'data.json', 'true');
    xhr.send();
}