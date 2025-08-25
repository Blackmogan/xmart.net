// Year in footer
(function(){
  var el = document.getElementById('year');
  if (el) el.textContent = new Date().getFullYear();
})();

// Contact helper (encodes product name safely)
const PHONE_WHATSAPP = "2348147727317"; // +234 81 4772 7317 -> no spaces
const TELEGRAM_HANDLE_OR_NUMBER = "2348147727317"; // using number as requested
const EMAIL_TO = "realhim2007@outlook.com";

function enquiryMessage(product){
  return `HI I'M ________________ AND I WANT TO MAKE ENQUIRIES ON THE PRODUCT ${product}.`;
}

function openWhatsApp(product){
  const text = encodeURIComponent(enquiryMessage(product));
  const url = `https://wa.me/${PHONE_WHATSAPP}?text=${text}`;
  window.open(url, "_blank");
}

function openTelegram(product){
  // Note: Telegram deep links to a phone number are not officially supported like WhatsApp.
  // This opens a chat link using the provided number with the text appended.
  const text = encodeURIComponent(enquiryMessage(product));
  const url = `https://t.me/${TELEGRAM_HANDLE_OR_NUMBER}?text=${text}`;
  window.open(url, "_blank");
}

function openEmail(product){
  const subject = encodeURIComponent("Product Enquiry");
  const body = encodeURIComponent(enquiryMessage(product));
  const url = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
  window.open(url, "_blank");
}
