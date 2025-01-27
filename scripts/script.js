let contactPg = document.getElementsByClassName("contactMePg")[0];
let homePg = document.getElementsByClassName("homePg")[0];
let showCasePg = document.getElementsByClassName("showCasePg")[0];
let showCaseBtn = document.getElementById("showCaseBtn");
let contactMeBtn = document.getElementById("contactMeBtn");
let homePgBtn = document.getElementById("homePgBtn");
const viewportWidth = window.innerWidth;
let unOrderedList = document.getElementsByClassName("unOrderedList")[0];


if(viewportWidth >= 504 && unOrderedList.classList.contains('hidden')){
   unOrderedList.classList.remove('hidden');
}

if(contactPg != null && homePg != null && showCasePg !=null){
    homePgBtn.addEventListener("click",() => {
        if(homePg.classList.contains("hidden")){
            homePg.classList.remove("hidden");
            contactPg.classList.add("hidden");
            showCasePg.classList.remove("flex");
            showCasePg.classList.add("hidden");


            if(viewportWidth <= 504){
                unOrderedList.classList.add('hidden');
            }
    });
        contactMeBtn.addEventListener("click",() => {
        if(contactPg.classList.contains("hidden")){
            homePg.classList.add("hidden");
            contactPg.classList.remove("hidden");
            showCasePg.classList.add("hidden");
            showCasePg.classList.remove("flex");

            if(viewportWidth <= 504){
                unOrderedList.classList.add('hidden');
            }


            let animationOnContacts = document.querySelectorAll('.animationOnContacts');

animationOnContacts.forEach((animationOnContacts , index)=>{
    let delay = index == 0 ? 200 :  400;
        if(!contactPg.classList.contains('hidden')){
            setTimeout(()=>{
                animationOnContacts.classList.add('scaleIn');
                animationOnContacts.classList.add('fadeInEffect');
            }, (index + 1) * delay);
        }
});
        }
    });
        showCaseBtn.addEventListener("click" ,()=>{
          if(showCasePg.classList.contains("hidden")){
            homePg.classList.add("hidden");
            contactPg.classList.add("hidden");
            showCasePg.classList.remove("hidden");
            showCasePg.classList.add("flex");

            if(viewportWidth <= 504){
                unOrderedList.classList.add('hidden');
            }
          }
        });
}

let downloadResumeBtn = document.getElementById("downloadResumeBtn");

if(downloadResumeBtn != null){
    downloadResumeBtn.addEventListener("click",() => {
        console.log("Element Clicked");
       let resumeURL = ".\assets\Resume\Fahad_Resume.pdf";
       let link = document.createElement("a");

       link.href = resumeURL;
       link.download = "Fahad Graphics Designer And CG Artist.pdf";
       document.body.appendChild(link);
       link.click();
       document.body.removeChild(link);
    });
}


//WhatsApp Funtion

function openWhatsApp() {
    const phoneNumber = "923215977229";
    const message = "Hello, I want to request a UI design.";
    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  }

  const whatsappDiv = document.getElementById("whatsappDiv");
  if (whatsappDiv) {
    whatsappDiv.addEventListener("click", openWhatsApp);
  }


// Mailing Funtion


const emailInput = document.getElementById("userEmailId");
const messageInput = document.getElementById("userQuery");
const sendMailButton = document.getElementById("sendMailBtn");

sendMailButton.addEventListener("click", () => {

  const userEmail = emailInput.value.trim();
  const userMessage = messageInput.value.trim();

  if (!userEmail || !userMessage) {
    alert("Please fill out both the email and message fields before sending.");
    return;
  }

  const recipientEmail = "fahadfadi1192@gmail.com";

  const subject = encodeURIComponent("Message from Website");
  const body = encodeURIComponent(`From: ${userEmail}\n\nMessage:\n${userMessage}`);

  const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

  window.location.href = mailtoLink;
});


let navToggler = document.getElementById("navToggler");
let mobileNav = document.getElementById("mobileNav");

if(navToggler != null && mobileNav != null){
    navToggler.addEventListener('click', ()=>{
        if(mobileNav.classList.contains('max-[504px]:hidden')){
            mobileNav.classList.remove("max-[504px]:hidden");
            console.log("Mobile Nav Displayed");
        }
        else{
            mobileNav.classList.add("max-[504px]:hidden");
            console.log("Mobile Nav is hidden");
        }
    })
}
else{
    console.log($`navToggler : {navToggler} \n mobileNav : {mobileNav}`)
}


  

  




