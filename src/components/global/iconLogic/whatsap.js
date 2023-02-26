export function getLinkWhastapp(telNumber , telMessage) {
    let number = telNumber;
    let message = telMessage.split(' ').join('%20');
  
    return ('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message)
  }