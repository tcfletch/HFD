document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // get the user inputs
    const formData = {
      streetName : document.getElementById('streetName').value,
      streetNumber: document.getElementById('streetNumber').value,
      Town: document.getElementById('Town').value,
      lastName: document.getElementById('lastName').value,
      historicalDistrict : document.getElementById('Historical District').value,
      village : document.getElementById('Village').value,
      stillExists : document.getElementById('stillExists').checked,
      sideOfRoad : document.getElementById('sideOfRoad').value,
      Architect : document.getElementById('Architect').value,
      Style : document.getElementById('ArchitectStyle').value
    };
    console.log(formData); // display array in console
  });

// //CREATION OF A CLIENT SIDE FETCH FUNCTION FOR SERVER SIDE GET CALL



// //fetch building inventory



// function fetchFormData(for)


// fetch(`/dbsearch`)


// .then(response => response.json())


