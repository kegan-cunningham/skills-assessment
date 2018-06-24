window.onload = function() {
  renderPeople();
}

let widget = document.getElementById('widget');

const people = [
  {'name': 'Christian', 'email': 'christian@yahoo.com', 'phone': '323-555-1234', 'address': '', 'color': '#00FF2C'},
  {'name': 'Rich', 'email': 'rich@tripod.com', 'phone': '323-555-1234', 'address': '', 'color': '#00FF2C'},
  {'name': 'Scott', 'email': 'scott@mailinator.com', 'phone': '323-555-1234', 'address': '', 'color': '#00FF2C'},
  {'name': 'Danny', 'email': 'danny@hotmail.com', 'phone': '323-555-1234', 'address': '', 'color': '#00FF2C'},
  {'name': 'Taka', 'email': 'taka@myspace.com', 'phone': '323-555-1234', 'address': '', 'color': '#00FF2C'},
  {'name': 'Tim', 'email': 'tim@netscape.com', 'phone': '323-555-1234', 'address': '', 'color': '#00FF2C'},
  {'name': 'Patrick', 'email': 'patrick@live.com', 'phone': '323-555-1234', 'address': '', 'color': '#00FF2C'},
  {'name': 'Jacques', 'email': 'jacques@aol.com', 'phone': '323-555-1234', 'address': '', 'color': '#00FF2C'}
];

function renderPeople() {
  var ul = document.getElementById("peoples");
  ul.innerHTML = '';
  var emailOrPhone = document.getElementById("select").selectedIndex;
  people.forEach((person, i) => {
    var newLi = document.createElement("li");

    var leftSideSpan = document.createElement('span');
      var colorSpan = document.createElement('span');
      colorSpan.classList += 'color';
      colorSpan.style.color = `${person.color}`;
      var color = document.createTextNode('\u2022');
      colorSpan.appendChild(color);
      leftSideSpan.appendChild(colorSpan);

      var nameSpan = document.createElement('span');
      nameSpan.classList += 'name';
      var name = document.createTextNode(`${person.name}`);
      nameSpan.appendChild(name);
      leftSideSpan.appendChild(nameSpan);
    leftSideSpan.classList += 'left-side';
    newLi.appendChild(leftSideSpan);

    if(emailOrPhone === 0){
      var emailSpan = document.createElement('span');
      emailSpan.classList += 'email';
      var email = document.createTextNode(`${person.email}`);
      emailSpan.appendChild(email);
      newLi.appendChild(emailSpan);
    } else{
      var phoneSpan = document.createElement('span');
      phoneSpan.classList += 'email';
      var phone = document.createTextNode(`${person.phone}`);
      phoneSpan.appendChild(phone);
      newLi.appendChild(phoneSpan);
    }

    (function(value){
        newLi.addEventListener("click", function() {
           alert(value);
        }, false);})(person);

    newLi.id = "li";
    if(i % 2 !== 0) {
      newLi.classList += "black";
    } else {
      newLi.classList += "gray";
    }
    ul.appendChild(newLi);
  });
}

function handleSelectChange(selected){
  renderPeople();
}
