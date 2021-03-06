'use strict';

var React = require('react');
var Immutable = require('immutable');
var MessageFieldDescription = require('./MessageFieldDescription');

var MessageFields = React.createClass({
    SPECIAL_FIELDS: ["full_message", "level"],
    render() {
        var fields = [];
        var formattedFields = Immutable.Map(this.props.message['formatted_fields']).sortBy((value, key) => key, (a, b) => a.localeCompare(b));
        formattedFields.forEach((value, key) => {
            if (this.SPECIAL_FIELDS.indexOf(key) !== -1) {
                value = this.props.message['fields'][key];
            }
            fields.push(<dt key={key + "Title"}>{key}</dt>);
            fields.push(<MessageFieldDescription key={key + "Description"}
                                                 message={this.props.message}
                                                 fieldName={key}
                                                 fieldValue={value}
                                                 possiblyHighlight={this.props.possiblyHighlight}
                                                 disableFieldActions={this.props.disableFieldActions}/>);
        });

        return (
            <dl className="message-details message-details-fields">
                {fields}
            </dl>
        );
    }
});

module.exports = MessageFields;