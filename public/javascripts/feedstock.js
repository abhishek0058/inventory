$.getJSON(`/brand/allJSON`, result => $.each(result, (i, item) =>
    $("#brand").append(`<option value="${item.id}">${item.name}</option>`)));

var models = [];

$.getJSON(`/model/allJSON`, result => models = result);

$('#brand').change(() => {
    const data = models.filter(item => item.brandid == $('#brand').val())
    $("#model").empty();
    $("#model").append(`<option value="0">Select Model</option>`);
    $.each(data, (i, item) =>
    $("#model").append(`<option value="${item.id}">${item.name}</option>`))
})