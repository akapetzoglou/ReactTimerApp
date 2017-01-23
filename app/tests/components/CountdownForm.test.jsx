var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
	it('should exist', () => {
		expect(CountdownForm).toExist();
	});

	it('should call onSetCountdown if valid seconds entered', () => {
		var spy = expect.createSpy();
		//render the component with 'spy' as an argument
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
		var $el = $(ReactDOM.findDOMNode(countdownForm));

		countdownForm.refs.seconds.value = '109';
		//.find checks into childs of the elements 
		TestUtils.Simulate.submit($el.find('form')[0]);

		expect(spy).toHaveBeenCalledWith(109);
	});

	it('it should not call onSetCountdown if invalid seconds entered', () => {
	var spy = expect.createSpy();
	//render the component with 'spy' as an argument
	var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy} />);
	var $el = $(ReactDOM.findDOMNode(countdownForm));

	countdownForm.refs.seconds.value = 'asdg!';
	//.find checks into childs of the elements 
	TestUtils.Simulate.submit($el.find('form')[0]);

	expect(spy).toNotHaveBeenCalled('asdg!');
	});
});