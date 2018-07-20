// this is the code which will be injected into a given page...

jQuery(document).ready(function($){

  $('<input class="api_label" type="text"  name="api_pabels" placeholder="Client Name">').insertBefore('.et_api_key');
  $('<input class="api_url" type="text"  name="api_pabels" placeholder="Client URL">').insertAfter('.api_label');
  $('.api_label').attr('id', function(i) {
   return 'api-label-'+(i+1);
  });
  $('.api_url').attr('id', function(i) {
   return 'api-url-'+(i+1);
  });
  $('<button id="save">Save Information</button>').insertBefore('#et_add_new_api_key');
  $('<p class="save-message">Saved to Local Storage</p>').insertAfter('#save');
  $('.save-message').hide();

  $('#save').on('click', function(){
      $('.api_label').each(function(){
          var id = $(this).attr('id');
          var value = $(this).val();
         localStorage.setItem(id, value);
      });
      $('.api_url').each(function(){
          var id = $(this).attr('id');
          var value = $(this).val();
         localStorage.setItem(id, value);
      });
      $('.save-message').show();
      $('.save-message').delay(500).fadeOut(2000);
  });

      $('.api_label').each(function(){
          var id = $(this).attr('id');
          var value = localStorage.getItem(id);
          $(this).val(value);
      });
      $('.api_url').each(function(){
          var id = $(this).attr('id');
          var value = localStorage.getItem(id);
          $(this).val(value);
      });

});
