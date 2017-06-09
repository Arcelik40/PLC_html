$(document).ready(function () {
    $(".myLightButton").removeClass("btn-danger").addClass("btn-default");
    $(".myLightButton").removeClass("btn-success").addClass("btn-default");
    $(".myLightButton").removeClass("btn-warning").addClass("btn-default");

    $('#chkIleri').change(function () {
        alert($(this).val());
    });

    $('#tampon').removeClass("btn-success").addClass("btn-danger");
});
function onClickDanger()
{
    $('#StatusDanger').addClass("btn-danger");
}
function onClickWarning() {
    $('#StatusWarning').addClass("btn-warning");
}
function onClickSuccess() {
    $('#StatusSuccess').addClass("btn-success");
}