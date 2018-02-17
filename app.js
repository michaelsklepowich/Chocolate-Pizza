var ingredients = document.getElementById('ingredients');

function crossOut(event) {
  var decoration = event.target.style.textDecoration; 
  if(decoration === 'line-through') {
    event.target.style.textDecoration = 'none';
  } else {
    event.target.style.textDecoration = 'line-through';
  }

}

ingredients.addEventListener('click', crossOut);