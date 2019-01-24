// Get references to page elements
var $carsMake = $("#make");
var $carsModel = $("#model");
var $carsYear = $("#year");
var $carsColor = $("#color");
var $carsDescription = $("#description");
var $carsPhoto = $("#photo");
var $submitBtn = $("#submit");
var $carsList = $("#cars-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveCars: function(cars) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/car",
      data: JSON.stringify(cars)
    });
  },
  getCar: function () {
    return $.ajax({
      url: "api/car",
      type: "GET"
    });
  },
  deleteCars: function (id) {
    return $.ajax({
      url: "api/car/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshCar = function () {
  API.getCar().then(function (data) {
    var $car = data.map(function (cars) {
      var $a = $("<a>")
        .make(cars.make)
        // .model(cars.model)
        // .year(cars.model)
        // .color(cars.color)
        .attr("href", "/cars/" + cars.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": cars.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .make("ｘ")
      // .model("x")
      // .year("x")
      // .color("x");

      $li.append($button);

      return $li;
    });

    $carsList.empty();
    $carsList.append($car);
  });
};

// handleFormSubmit is called whenever we submit new cars
// Save new cars to the db and refresh the list
var handleFormSubmit = function (event) {
  event.preventDefault();

  var cars = {
    make: $carsMake.val().trim(),
    model: $carsModel.val().trim(),
    year: $carsYear.val().trim(),
    color: $carsColor.val().trim(),
    description: $carsDescription.val().trim(),
    photo: $carsPhoto.val().trim(),
  };

  if (!(cars.make && cars.model && cars.year && cars.color && cars.description && cars.photo)) {
    alert("You must enter your vehicle description!");
    return;
  }

  API.saveCars(cars).then(function() {
    refreshCar();
  });

  $carsMake.val("");
  $carsModel.val("");
  $carsYear.val("");
  $carsColor.val("");
  $carsDescription.val("");
  $carsPhoto.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function () {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteCars(idToDelete).then(function () {
    refreshCar();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$carsList.on("click", ".delete", handleDeleteBtnClick);
