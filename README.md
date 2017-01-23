#Basic Structure and Components
    For this project we are goint to use 5 components in total
    * Main (our top- container component which will include every other component)
        * Nav (for our navigation bar as in the previous project)
        * Timer which will be the container component for : 
            * Clock (will visualize a clock)
            * Controls ( will include our buttons and functioning)

#Testing 
    https://github.com/mjackson/expect
    check "spy" in the documentation

    karma -> https://karma-runner.github.io/1.0/index.html
    mocha -> http://mochajs.org/
    $npm install karma@0.13.22 karma-chrome-launcher@0.2.2 karma-mocha@0.2.2 karma-mocha-reporter@2.0.0 karma-sourcemap-loader@0.3.7 karma-webpack@1.7.0 mocha@2.4.5 expect@1.14.0 --save-dev

    $npm install react-addons-test-utils@0.14.7 --save-dev //needs to match our react version

    Create a new file, in the root folder, named: 'karma.conf.js' which includes something like this: 
        var webpackConfig = require('./wepack.config.js');
        module.exports = function(config) {
            config.set({
                browsers: ['Chrome'],
                singleRun: true,
                frameWorks: ['mocha'],
                files: ['app/tests/**/*.test.jsx'],
                preprocessors: {
                    'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
                },
                reporters: ['mocha'],
                client: {
                    mocha: {
                        timeout: '5000' //miliseconds
                    }
                },
                webpack: webpackConfig,
                webpackServer: {
                    noInfo: true
                }
            });
        };
    Create a new file in app/tests/app.test.jsx 
        Inside here we are going to write our tests. Example: 
            var expect = require('expect');
            describe('App', () => {
              it('should properly run tests', () => {
                expect(1).toBe(1);
              });
            });

    In "package.json" change the "test" attr to :     "test": "karma start"


# Add a new presentational component
    Create the new component file and generated code
    app.jsx - > add the route for the component
    Navigation.jsx -> fix the links

#rems
    root- ems. Root of the browser
    Check flex box

