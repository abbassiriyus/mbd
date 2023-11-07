var a=1
function menu_chiq() {
    if (a==0) {
    document.querySelector(".menu").style = "right:-100%"
    a=1
    } else {
    document.querySelector(".menu").style = "right: 0px"    
    a=0
    }
    
    console.log(a);
}

var verifyCallback = function(response) {
    alert(response);
  };
  var widgetId1;
  var widgetId2;
  var onloadCallback = function() {
    // Renders the HTML element with id 'example1' as a reCAPTCHA widget.
    // The id of the reCAPTCHA widget is assigned to 'widgetId1'.
    widgetId1 = grecaptcha.render('example1', {
      'sitekey' : 'your_site_key',
      'theme' : 'light'
    });
    widgetId2 = grecaptcha.render(document.getElementById('example2'), {
      'sitekey' : ''
    });
    grecaptcha.render('example3', {
      'sitekey' : 'your_site_key',
      'callback' : verifyCallback,
      'theme' : 'dark'
    });
  };

