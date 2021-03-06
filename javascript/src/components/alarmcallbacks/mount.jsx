'use strict';

var React = require('react/addons');
var AlarmCallbackComponent = require('./AlarmCallbackComponent');
var $ = require('jquery'); // excluded and shimed

$(".react-alarmcallback-component").each(function() {
    var streamId = this.getAttribute('data-stream-id');
    var permissions = JSON.parse(this.getAttribute('data-permissions'));
    var component = <AlarmCallbackComponent streamId={streamId} permissions={permissions}/>;

    React.render(component, this);
});
