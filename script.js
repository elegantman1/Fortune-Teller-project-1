$("button").click(function() {
    let name = $(".name").val();
    let sports=$(".sports").val();
    let hours = parseInt($(".time").val());

    let total = hours * 365 * 80;
    $("body").append(`${name},You will play ${sports} for ${ total} hours in the year of 2100`);
});