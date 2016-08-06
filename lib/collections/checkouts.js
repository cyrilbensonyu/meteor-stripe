Checkouts = new Mongo.Collection("checkouts");

Checkouts.schema = new SimpleSchema({
	reference_key: { type: String },

	cart_id: { type: String },

	created_at: { type: Date },

	email: { type: String },

	name: { type: String },

	ip: { type: String },

	country_code: { type: String },

	description: { type: String },

	items: { type: [Object] },

	billing_address: { type: Object },

	shipping_address: { type: Object },

	total: { type: Number },

	terms_accepted: { type: Boolean },

	processor: { type: String },

	token: { type: Object },

	payment_details: { type: Object }
});