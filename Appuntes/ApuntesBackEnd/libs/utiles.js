const nodemailer = require('nodemailer');

//genera un codigo aleatorio de 4 caracteres
function generarCodigo() {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let codigo = '';
  for (let i = 0; i < 4; i++) {
    codigo += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return codigo;
}

//funcion para enviar mail

 async function enviarCorreo(destinatario, asunto, mensaje) {
  console.log('enviando mensaje')
    // Crear un objeto de transporte SMTP con los datos de tu cuenta de correo electrónico
 
    let transporter = nodemailer.createTransport({
      
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'appuntes2@gmail.com',
        pass: 'ubarxpqictktkosy'
      },
      tls: {
        rejectUnauthorized: false
      }

  });
  
  // Configurar los datos del correo electrónico
  let mailOptions = {
    from: 'Soporte  apuntes <appuntes2@gmail>',
    to: destinatario,
    subject: asunto,
    text: mensaje
  };

  // Enviar el correo electrónico
  let info = transporter.sendMail(mailOptions);

  console.log('Mensaje enviado: %s', info.messageId);
}

module.exports={
    generarCodigo,
    enviarCorreo
}