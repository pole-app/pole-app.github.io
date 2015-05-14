function updatePrice() {
	if ($('#numResponses').val() == "")
		$("#estimate").text("Please enter target response number.");

	num = parseInt($('#numResponses').val());

	numChecked = 0;
	if ($("#filter_age").prop("checked"))
		numChecked++;

	if ($("#filter_location").prop("checked"))
		numChecked++;

	if ($("#filter_gender").prop("checked"))
		numChecked++;

	if ($("#filter_income").prop("checked"))
		numChecked++;

	price = (num)*(1 + numChecked*0.1);
	$("#estimate").text("$" + Math.round(price));
}