window.onload = function() {

  let widget = document.getElementById('widget');

  const people = [
    {'name': 'Christian', 'email': 'christian@yahoo.com', 'phone': '', 'address': '', 'color': '#00FF2C'},
    {'name': 'Rich', 'email': 'rich@tripod.com', 'phone': '', 'address': '', 'color': '#00FF2C'},
    {'name': 'Scott', 'email': 'scott@mailinator.com', 'phone': '', 'address': '', 'color': '#00FF2C'},
    {'name': 'Danny', 'email': 'danny@hotmail.com', 'phone': '', 'address': '', 'color': '#00FF2C'},
    {'name': 'Taka', 'email': 'taka@myspace.com', 'phone': '', 'address': '', 'color': '#00FF2C'},
    {'name': 'Tim', 'email': 'tim@netscape.com', 'phone': '', 'address': '', 'color': '#00FF2C'},
    {'name': 'Patrick', 'email': 'patrick@live.com', 'phone': '', 'address': '', 'color': '#00FF2C'},
    {'name': 'Jacques', 'email': 'jacques@aol.com', 'phone': '', 'address': '', 'color': '#00FF2C'}
  ];

  function renderPeople() {
    var ul = document.getElementById("peoples");
    people.forEach(person => {
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

      var emailSpan = document.createElement('span');
      emailSpan.classList += 'email';
      var email = document.createTextNode(`${person.email}`);
      emailSpan.appendChild(email);
      newLi.appendChild(emailSpan);

      newLi.id = "li";
      ul.appendChild(newLi);
    });
  }

  renderPeople();
}
