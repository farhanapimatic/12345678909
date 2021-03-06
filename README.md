# Getting started

comma seperated array serialization

## How to Build

The generated SDK relies on [Node Package Manager](https://www.npmjs.com/) (NPM) being available to resolve dependencies. If you don't already have NPM installed, please go ahead and follow instructions to install NPM from [here](https://nodejs.org/en/download/).
The SDK also requires Node to be installed. If Node isn't already installed, please install it from [here](https://nodejs.org/en/download/)
> NPM is installed by default when Node is installed

To check if node and npm have been successfully installed, write the following commands in command prompt:

* `node --version`
* `npm -version`

![Version Check](https://apidocs.io/illustration/nodejs?step=versionCheck&workspaceFolder=Comma%20Seperated%20Array%20Serialization-Node)

Now use npm to resolve all dependencies by running the following command in the root directory (of the SDK folder):

```bash
npm install
```

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency1&workspaceFolder=Comma%20Seperated%20Array%20Serialization-Node)

![Resolve Dependencies](https://apidocs.io/illustration/nodejs?step=resolveDependency2)

This will install all dependencies in the `node_modules` folder.

Once dependencies are resolved, you will need to move the folder `CommaSeperatedArraySerializationLib ` in to your `node_modules` folder.

## How to Use

The following section explains how to use the library in a new project.

### 1. Open Project Folder
Open an IDE/Text Editor for JavaScript like Sublime Text. The basic workflow presented here is also applicable if you prefer using a different editor or IDE.

Click on `File` and select `Open Folder`.

![Open Folder](https://apidocs.io/illustration/nodejs?step=openFolder)

Select the folder of your SDK and click on `Select Folder` to open it up in Sublime Text. The folder will become visible in the bar on the left.

![Open Project](https://apidocs.io/illustration/nodejs?step=openProject&workspaceFolder=Comma%20Seperated%20Array%20Serialization-Node)

### 2. Creating a Test File

Now right click on the folder name and select the `New File` option to create a new test file. Save it as `index.js` Now import the generated NodeJS library using the following lines of code:

```js
var lib = require('lib');
```

Save changes.

![Create new file](https://apidocs.io/illustration/nodejs?step=createNewFile&workspaceFolder=Comma%20Seperated%20Array%20Serialization-Node)

![Save new file](https://apidocs.io/illustration/nodejs?step=saveNewFile&workspaceFolder=Comma%20Seperated%20Array%20Serialization-Node)

### 3. Running The Test File

To run the `index.js` file, open up the command prompt and navigate to the Path where the SDK folder resides. Type the following command to run the file:

```
node index.js
```

![Run file](https://apidocs.io/illustration/nodejs?step=runProject&workspaceFolder=Comma%20Seperated%20Array%20Serialization-Node)


## How to Test

These tests use Mocha framework for testing, coupled with Chai for assertions. These dependencies need to be installed for tests to run.
Tests can be run in a number of ways:

### Method 1 (Run all tests)

1. Navigate to the root directory of the SDK folder from command prompt.
2. Type `mocha --recursive` to run all the tests.

### Method 2 (Run all tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha *` to run all the tests.

### Method 3 (Run specific controller's tests)

1. Navigate to the `../test/Controllers/` directory from command prompt.
2. Type `mocha  Comma Seperated Array SerializationController`  to run all the tests in that controller file.

> To increase mocha's default timeout, you can change the `TEST_TIMEOUT` parameter's value in `TestBootstrap.js`.

![Run Tests](https://apidocs.io/illustration/nodejs?step=runTests&controllerName=Comma%20Seperated%20Array%20SerializationController)

## Initialization

### 

API client can be initialized as following:

```JavaScript
const lib = require('lib');


```



# Class Reference

## <a name="list_of_controllers"></a>List of Controllers

* [CommaSeperatedController](#comma_seperated_controller)

## <a name="comma_seperated_controller"></a>![Class: ](https://apidocs.io/img/class.png ".CommaSeperatedController") CommaSeperatedController

### Get singleton instance

The singleton instance of the ``` CommaSeperatedController ``` class can be accessed from the API Client.

```javascript
var controller = lib.CommaSeperatedController;
```

### <a name="get_comma_seperated_in_query"></a>![Method: ](https://apidocs.io/img/method.png ".CommaSeperatedController.getCommaSeperatedInQuery") getCommaSeperatedInQuery

> TODO: Add a method description


```javascript
function getCommaSeperatedInQuery(dependent, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| dependent |  ``` Required ```  ``` Collection ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var dependent = [1,2,3,4];

    controller.getCommaSeperatedInQuery(dependent, function(error, response, context) {

    
    });
```



### <a name="get_comma_seperated_in_query1"></a>![Method: ](https://apidocs.io/img/method.png ".CommaSeperatedController.getCommaSeperatedInQuery1") getCommaSeperatedInQuery1

> TODO: Add a method description


```javascript
function getCommaSeperatedInQuery1(dependent, callback)
```
#### Parameters

| Parameter | Tags | Description |
|-----------|------|-------------|
| dependent |  ``` Required ```  ``` Collection ```  | TODO: Add a parameter description |



#### Example Usage

```javascript

    var dependent = ["ab","bc","cd","ef"];

    controller.getCommaSeperatedInQuery1(dependent, function(error, response, context) {

    
    });
```



[Back to List of Controllers](#list_of_controllers)



