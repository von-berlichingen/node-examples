# Accepting user input from forms
Web applications commonly gather user input through form submissions. Node does not handle the workload (like validation or file uploads) for you, Node just provides you with the body data. Although this may seem inconvenient, it leaves opinions to third-party frameworks in order to provide a simple efficient low-level API.
In this part, we'll take a look at how we can:
* Handle submitted form fields
* Handle uploaded files using *formidable*
* Calculate upload progress in real time

## Handling submitted form fields
Typically two `Content-Type` values are associated with form submission requests:
* `application/x-www-form-urlencoded`: The default form HTML forms
* `multipart/form-data`: Used when the form contains files, or non-ASCII or binary data
We'll rewrite [to-do list application](./to-do-list) application to utilize a form and a web browser.
