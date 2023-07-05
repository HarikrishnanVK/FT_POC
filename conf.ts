import { Config, browser } from 'protractor';
var AllureReporter = require('jasmine-allure-reporter');

let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

//var screenreporter = require('util/screenreporter.js');

export let config: Config = {
  directconnect: false,
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
        silent: true
    },
    allScriptsTimeout: 30000,
    multiCapabilities: [
        {
            seleniumAddress: 'http://localhost:4445/wd/hub',
            browserName: 'chrome',
            specs: ['specs/suite1/*.spec.js'],
            shardTestFiles: true,
            maxInstances: 4,
        },
        {
            seleniumAddress: 'http://localhost:4445/wd/hub',
            browserName: 'firefox',
            specs: ['specs/suite1/*.spec.js'],
            shardTestFiles: true,
            maxInstances: 4,
        },
        {
            seleniumAddress: 'http://localhost:4455/wd/hub',
            browserName: 'chrome',
            specs: ['specs/suite2/*.spec.js'],
            shardTestFiles: true,
            maxInstances: 3,
        },
        {
            seleniumAddress: 'http://localhost:4455/wd/hub',
            browserName: 'firefox',
            specs: ['specs/suite2/*.spec.js'],
            shardTestFiles: true,
            maxInstances: 3,
        }
    ],

  // suites: {
  //   calc: './specs/calculator.js',
  //   //to run each suite
  //   //protractor conf.js calc
  //   //protractor conf.js bank
  //   //protractor conf.js calc,bank
  //   //protractor conf.js bothtest
  // },

  // specs: ["specs2/TabOrderSpec.js"],


  onPrepare: () => {
    let globals = require('protractor');
    let browser = globals.browser;
    browser.ignoreSynchronization = true;
    // browser.manage().window().maximize();
    browser.manage().timeouts().implicitlyWait(10000);
    // doing a browser.get will lead to a transpile error. 
    // undefined does not have a get method

      /* Jasmine spec reporter */
      var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
      jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));

      jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
      }));

     
      }
    }

