

const myHeader = document.querySelector('#insert-header')
const myFooter = document.querySelector('#insert-footer')


// Version 2
fetch('X_header.html')
  .then(res => {
    if (res.ok) {
      return res.text()    
    }
  })
  .then(data => {
    myHeader.innerHTML = data

    // ----- for js code in X-Header -----------
    // const myParser = new DOMParser()
    // const myDoc = myParser.parseFromString(data, 'text/html')
    // eval( myDoc.querySelector('script').textContent )
    // ------------------------------------------

  })
  
// Version 1
fetch('Y_footer.html')
  .then(res => res.text())
  .then(data => {
    myFooter.innerHTML = data
  })

  

// Version 1
// ---------------------------------
// fetch('X_header.html')
//   .then(res => res.text())
//   .then(data => {
//     myHeader.innerHTML = data
//   })
