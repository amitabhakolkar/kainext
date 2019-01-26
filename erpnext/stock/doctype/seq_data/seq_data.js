// Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('SEQ DATA', {
	refresh: function(frm) {

	}
});
frappe.ui.form.on('SEQ DATA', "refresh", function(frm) {
    frm.add_custom_button(__("Do Something"), function() {
        // When this button is clicked, do this

        var subject = frm.doc.subject;
        var event_type = frm.doc.event_type;

        // do something with these values, like an ajax request 
        // or call a server side frappe function using frappe.call
        $.ajax({
            url: "http://example.com/just-do-it",
            data: {
                "subject": subject,
                "event_type": event_type
            }

            // read more about $.ajax syntax at http://api.jquery.com/jquery.ajax/

        });
    });
});