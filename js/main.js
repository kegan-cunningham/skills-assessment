window.onload = function() {

  let widget = document.getElementById('widget');

  const people = [
    {'name': 'Christian', 'email': '', 'phone': '', 'address': '', 'color': 'green'},
    {'name': 'Rich', 'email': '', 'phone': '', 'address': '', 'color': 'green'},
    {'name': 'Scott', 'email': '', 'phone': '', 'address': '', 'color': 'green'},
    {'name': 'Danny', 'email': '', 'phone': '', 'address': '', 'color': 'green'},
    {'name': 'Taka', 'email': '', 'phone': '', 'address': '', 'color': 'green'},
    {'name': 'Tim', 'email': '', 'phone': '', 'address': '', 'color': 'green'},
    {'name': 'Patrick', 'email': '', 'phone': '', 'address': '', 'color': 'green'},
    {'name': 'Jacques', 'email': '', 'phone': '', 'address': '', 'color': 'green'}
  ];

  function renderPeople() {
    var ul = document.getElementById("peoples");
    console.log(ul)
    people.forEach(person => {
      var newLi = document.createElement("li");
      var span = document.createElement('span');
      span.style.color = `${person.color}`;
      var color = document.createTextNode('\u2022');
      span.appendChild(color);
      newLi.appendChild(span);
      var name = document.createTextNode(`${person.name}`);

      if(newLi !== null){
        newLi.appendChild(name);
      }
      newLi.id = "li";

      if(ul !== null){
        ul.appendChild(newLi);
      }
    });
  }

  renderPeople();
}
