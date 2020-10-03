function randomDogImage(numberOfDogs){
  
    fetch(`https://dog.ceo/api/breeds/image/random/${numberOfDogs}`)
    //converts data into JSON
    .then(response => response.json())
    //runs JSON file through. display result
    .then(responseJson => displayResults(responseJson))
    //if something goes wrong, there is an error message to show
    .catch(error => alert('Something went wrong. Try again later'));
  
  }
  
  //Webpage results
  function displayResults(responseJson){
    console.log(responseJson);
    $('.results').html('<h2>Check out these cute dogs</h2>');
    responseJson.message.forEach(renderedImg=>{
      $('.results').append(`<img src="${renderedImg}" class="results">`)
    });
    $('.results').removeClass('hidden');
  }
  
  //This function looks out for submit events on the Form
  function watchForm(){
    $('form').submit(event =>{
    event.preventDefault();
    let numberOfDogs=$('input[class="chooseNumber"]').val();
    console.log(numberOfDogs);
    randomDogImage(numberOfDogs);
    });
  }
  
  //function that runs when the DOM is loaded
  $(function(){
    console.log('App loaded! Waiting for submit!');
    watchForm();
  });
  