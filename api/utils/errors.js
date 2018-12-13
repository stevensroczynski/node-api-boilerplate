/*
 * Maps Postgres-specific error codes to more verbose explanations
 */
var errors = {
  "23505": "Uniqueness Violation",
  "23503": "Foreign Key Violation",
  "23502": "Not Null Violation",
  "22P02": "Invalid UUID Format",
  "22007": "Invalid DateTime Format"
}

module.exports = errors