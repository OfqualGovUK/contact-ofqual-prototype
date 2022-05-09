/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
});

// Add an alert if you click on a link with a hash
$('a[href=#]').on('click', function (event) {
  if(this.pathname === window.location.pathname){
    
    var message ='Sorry, this hasn’t been built yet';
    alert(message);

  }
});

// Powers the select all checkbox thingo
// Found here: https://stackoverflow.com/a/21248785

// If the 'My request does not relate to specific qualification type checkbox exists'
if ($('#foi-isItQual-7').length) {
  
  var deselectOthersCheckbox = $('#foi-isItQual-7')

  // Deselect all others if the checkbox is checked
  $(deselectOthersCheckbox).change(function() {
    $('.govuk-checkboxes__input').not(this).attr('checked', false);
  });

  // Deselect the checkbox if any of the others are checked
  $('.govuk-checkboxes__input').not(deselectOthersCheckbox).change(function() {
    $(deselectOthersCheckbox).attr('checked', false);
  });

}
