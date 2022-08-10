let content = document.querySelector('.js-generated.content')

let header = document.createElement('h1')          
header.setAttribute('class','dog-name')
header.append('Rizzo')
content.append(header)

let dogContent = document.createElement('dog-content')
dogContent.setAttribute('class', 'dog-content')
content.append(dogContent)

let dogImage = document.createElement('dog-image')
dogImage.setAttribute('class', 'dog-image')
dogImage.setAttribute('scr', './assets/rizzo.jpg')
content.append(dog-image)

let dogDetails = document.createElement('dog-details')
dogDetails.setAttribute('class', 'dog-details')
content.append(dog-details)
