# -*- coding: utf-8 -*-
# Copyright (c) 2018, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

class Seq100(Document):
	pass

@frappe.whitelist()
def hello():
	x = frappe.db.sql("select * from `tabPart Details`;")
	return x

@frappe.whitelist()
def fetchSelectedData():
	x = frappe.db.sql("select part_number,sum(qty) from `tabPart Details` where parent like '2018-08-08' group by part_number;")
	return x
