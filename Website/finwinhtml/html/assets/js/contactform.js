// contactform.js

document.getElementById('form-contact').addEventListener('submit', function (event) {
    event.preventDefault(); // Formun varsayılan gönderimini engelle
  
    // Formdaki verileri al
    const name = document.getElementById('form-contact-name').value;
    const email = document.getElementById('form-contact-email').value;
    const message = document.getElementById('form-contact-message').value;
  
    // Gönderilen metinleri göster
    document.getElementById('submitted-name').textContent = name;
    document.getElementById('submitted-email').textContent = email;
    document.getElementById('submitted-message').textContent = message;
  
    // Form gönderildiğinde başka işlemler yapabilirsiniz (örneğin sunucuya göndermek için AJAX kullanmak)
  });
  