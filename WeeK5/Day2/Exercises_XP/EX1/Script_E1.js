  // Using a DOM property, retrieve the h1 and console.log it.
  const h1 = document.querySelector('h1')
  console.log(h1)

  // Using DOM methods, remove the last paragraph in the <article> tag.
  const article = document.querySelector('article')
  const lastParagraph = article.lastElementChild
  article.removeChild(lastParagraph)

  // Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
  const h2 = document.querySelector('h2')
  h2.addEventListener('click', function() {
      h2.style.backgroundColor = 'red'
  })

  // Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
  const h3 = document.querySelector('h3')
  h3.addEventListener('click', function() {
      h3.style.display = 'none'
  })


  // Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
  const button = document.createElement('button')
  button.innerHTML = 'Make paragraphs bold'
  document.body.appendChild(button)

  button.addEventListener('click', function() {
      const paragraphs = document.querySelectorAll('p')
      paragraphs.forEach(function(paragraph) {
          paragraph.style.fontWeight = 'bold'
      })
  })


  // BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
  const elementH1 = document.querySelector('h1')
  elementH1.addEventListener('mouseover', function() {
      elementH1.style.fontSize = `${Math.floor(Math.random() * 100)}px`
  })

  // BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
  const secondParagraph = document.querySelectorAll('p')[1]
  secondParagraph.addEventListener('mouseover', function() {
      secondParagraph.classList.add('fade-out')
  })