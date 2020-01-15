const meals = [
  { name: 'Pizza', Price: 14, Popularity: 'high' },
  { name: 'Hamburger', Price: 8, Popularity: 'high' }
];

function fromDataToTable(data) {
  var tableNode = document.createElement('table');
  tableNode.setAttribute('id', 'myTable');
  tableNode.setAttribute(
    'style',
    'background-color: white; text-decoration: none'
  );
  document.getElementById('intro').appendChild(tableNode);

  const fields = Object.keys(data[0]);
  const rowNode = document.createElement('tr');

  for (f in fields) {
    const headingNode = document.createElement('th');
    let fieldNode = document.createTextNode(fields[f]);
    headingNode.appendChild(fieldNode);
    rowNode.appendChild(headingNode);
    document.getElementById('myTable').appendChild(rowNode);
  }

  for (i in data) {
    const rowNode = document.createElement('tr');
    let line = data[i];
    Object.keys(line).map((e) => {
      const dataNode = document.createElement('td');
      let valueNode = document.createTextNode(line[e]);
      dataNode.setAttribute('class', 'cell');
      dataNode.appendChild(valueNode);
      rowNode.appendChild(dataNode);
    });
    document.getElementById('myTable').appendChild(rowNode);
  }

  var headings = document.getElementsByClassName('cell');

  for (var i = 0; i < headings.length; i++) {
    headings[i].addEventListener('mouseover', function(elem) {
      elem.target.style.backgroundColor = '#eeeeee';
    });
    headings[i].addEventListener('mouseout', function(elem) {
      elem.target.style.backgroundColor = 'white';
    });
  }
}
fromDataToTable(meals);

// const td = document.getElementById('myTable');
// td.addEventListener(
//   'mouseover',
//   function(event) {
//     // highlight the mouseover target
//     event.target.style.color = 'orange';
//   },
//   false
// );
// td.addEventListener(
//   'mouseout',
//   function(event) {
//     // highlight the mouseover target
//     event.target.style.color = 'black';
//   },
//   false
// );

function addMeal() {
  let name = document.form.name.value || '-';
  let price = document.form.price.value || '-';
  let popularity = document.form.popularity.value || '-';
  let Meal = { name, price, popularity };
  if (
    confirm(
      `{ name: ${Meal.name}, price: ${Meal.price}, popularity: ${Meal.popularity} }\nAdd to menu?`
    )
  ) {
    let element = document.getElementById('intro');
    while (element.firstChild) element.removeChild(element.firstChild);
    meals.push(Meal);
    fromDataToTable(meals);
  }
}
