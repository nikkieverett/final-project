const fs = require('fs');
const request = require('request');

const fileContents = fs.readFileSync('./recipes.csv', 'utf-8');
const lines = fileContents.split('\r');

for(let i = 1; i < lines.length -1; i ++){
  const line = lines[i];
  const pieces = line.split(',');

  request.post('http://localhost:5003/api/recipes', {
    form: {
      title: pieces[0].toUpperCase(),
      prepTime: '',
      cookTime: '',
      totalTime: '',
      href: pieces[1].toLowerCase(),
      category: pieces[3].toUpperCase(),
      img: pieces[2].toLowerCase(),
      ease: pieces[4].toUpperCase(),
      rating: pieces[5],
      ingredients: '',
      directions: '',
      notes: '',
      servings: pieces[7].toUpperCase(),
      tried: pieces[6].toUpperCase()
    }
  });

}
