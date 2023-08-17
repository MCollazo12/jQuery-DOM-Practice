/*
Build an application that uses jQuery to do the following:
    - Contains a form with two inputs for a title and rating along with a button to submit the form.
    - When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
    - When the button to remove is clicked, remove each title and rating from the DOM.
*/

class Movie {
  constructor(titleInput, ratingInput, formSubmit) {
    this.titleInput = titleInput;
    this.ratingInput = ratingInput;
    this.formSubmit = formSubmit;
    this.captureInput();
    this.removeMovie();
  }

  captureInput() {
    $(this.formSubmit).on('click', (e) => {
      e.preventDefault();
      this.movieTitle = $(this.titleInput).val();
      this.movieRating = $(this.ratingInput).val();
      this.displayMovie();
    });
  }

  displayMovie() {
    $('ol').append(
      $('<li>', {
        text: this.movieTitle + '  ' + this.movieRating + '/10',
      }).append($("<button class='remove-button'>X</button>"))
    );
  }

  removeMovie() {
    $('ol').on('click', '.remove-button', function () {
      $(this).parent().remove();
    });
  }
}

$(document).ready(function () {
  const movie = new Movie('.title', '.rating', '#form-submit');
});
