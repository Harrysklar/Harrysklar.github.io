$(document).ready(function() {
    $('#thumbnails li').on('click', function() {
      const src     = $(this).data('src');
      const caption = $(this).data('caption');
      $('#slideImage').attr('src', src).attr('alt', caption);
      $('#slideCaption').text(caption);
    });
  });
  