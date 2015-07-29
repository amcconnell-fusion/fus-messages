# fusionMessages  [![GitHub version](https://badge.fury.io/gh/corinna000%2Ffusion-messages.svg)](http://badge.fury.io/gh/corinna000%2Ffusion-messages)

A friendly wrapper for the AngularJS [ngMessages directive](https://docs.angularjs.org/api/ngMessages/directive/ngMessages).

This directive address a few usability issues with `ngMessages`.

1. `ngMessages` displays all of the error messages for all input fields. `fusionMessages` only displays an error if the field is dirty or if the form has been submitted.
2. `ngMessages` requires you pass the `$error` object manually. `fusionMessages` will look this up from the input name.
3. `fusionMessages` provides and imperative mechanism for adding validation messages. Helpful for importing third-party validator messages.

## Usage

1. `bower install fusion-messages` (_coming soon!_)
2. Add `fus-messages.js` script to your application.
3. Add `fusionMessages` as a module dependency for your application.

### Basic Usage

`fusionMessages` wraps `ngMessages`. At minimum you can use it to add friendlier message behavior:

```html
<form name="myForm">
  <label for="myEmail">Email Address: </label>
  <input type="email" name="myEmail" ng-model="model.email" required>
  <div fus-messages="myForm.myEmail">
    <div ng-message="required">Field Required</div>
    <div ng-message="email">Invalid Email</div>
  </div>
</form>
```

### Supplying default messages via a controller

With `fusMessagesDefaults` directive you can assign default messages for an entire form at once.

```html
<script>
  app.controller('MainCtrl', function ($scope) {
      $scope.errorMsgs = {
        'required' : 'field is required',
        'email' : 'invalid email address'
      }
  });
</script>
<form name="myForm" fus-messages-defaults="errorMsgs">
  <label for="myEmail">Email Address: </label>
  <input type="email" name="myEmail" ng-model="model.email" required>
  <div fus-messages="myForm.myEmail"></div>
</form>
```

## Testing

Install all the project dependencies with `npm install` and `bower install` and run `npm test`.

## Contributors

[![Fusion Alliance Logo](https://avatars0.githubusercontent.com/u/1154219?v=3&u=e1451e6a65343331369d53a2b6e0c7046c2cc810&s=60)](https://github.com/FusionAlliance)
**fusionMessages** is a product of Fusion Alliance &copy; 2015.

+ [Corinna Cohn](https://github.com/corinna000) (Author)


## LICENSE

The MIT License (MIT)

Copyright (c) 2015 [Fusion Alliance](https://www.fusionalliance.com/?utm_source=GitHub&utm_medium=Website&utm_campaign=OpenSource)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
