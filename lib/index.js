/**
  * @module CommaSeperatedArraySerializationLib
  *
  * comma seperated array serialization
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const CommaSeperatedController = require('./Controllers/CommaSeperatedController');
const SuiteCodeEnum = require('./Models/SuiteCodeEnum');
const ServerResponse = require('./Models/ServerResponse');
const APIException = require('./Exceptions/APIException');


const initializer = {
    // functional components of CommaSeperatedArraySerializationLib
    Configuration,
    Environments,
    // controllers of CommaSeperatedArraySerializationLib
    CommaSeperatedController,
    // models of CommaSeperatedArraySerializationLib
    SuiteCodeEnum,
    ServerResponse,
    // exceptions of CommaSeperatedArraySerializationLib
    APIException,
};

module.exports = initializer;
