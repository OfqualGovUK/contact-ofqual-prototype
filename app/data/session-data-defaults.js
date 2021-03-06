/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]

============================================================================

*/

// Setting the default layout settings
let settings = {
  caseType: "Complaint",
  caseStatus: "Has multiple cases in the service",

}


module.exports = {

  settings: settings

  // Insert values here

}
