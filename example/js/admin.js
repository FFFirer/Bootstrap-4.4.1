$(document).ready(function () {
  $("#sidebarCollapse").on('click', function () {
    $('#sidebar, #content').toggleClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expended=true]').attr('aria-expended', 'false')
  })
})
