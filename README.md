
# API Project: File Metadata Microservice for freeCodeCamp
[![Run on Repl.it](https://repl.it/badge/github/freeCodeCamp/boilerplate-project-filemetadata)](https://repl.it/github/freeCodeCamp/boilerplate-project-filemetadata)
###    User stories:
1. I can submit a form that includes a file upload.
2. The form file input field  has the "name" attribute set to "upfile". We rely on this in testing.
3. When I submit something, I will receive the file name and size in bytes within the JSON response

See : {"name":"macos-catalina-5120x2880-night-mountains-wwdc-2019-5k-21589.jpg","type":"image/jpeg","size":3181550}

### Usage :
* Go to the main page, and upload a file using the provided form.

### Hint:
* To handle the file uploading you should use the [multer](https://www.npmjs.com/package/multer) npm package.
