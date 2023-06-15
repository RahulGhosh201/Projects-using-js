document.addEventListener('DOMContentLoaded', function () {
    let pass = document.getElementById("password");
    let msg = document.getElementById("message");
    let str = document.getElementById("strength");

    pass.addEventListener("input", () => {
      //password type korar por ja event hoar ho66e tai password e eventlistner lagabo
      if (pass.value.length > 0) {
        msg.style.display = "block"; //jokhn password r modhye ki6u type korbo the event listener will show "this message" on the screen
      } else {
        msg.style.display = "none"; //jokhn password box ta faka thakbe mane message r length 0 hbe then display one mne ki6u show korabe na
      }
      if (pass.value.length < 4) {//password is weak show korbe with red colored border and text 
        str.innerHTML = "weak";
        pass.style.borderColor="#ff5925";
        msg.style.color="#ff5925";
      }else if (pass.value.length > 4 && pass.value.length < 8) {//password is medium show korbe with yellow colored border and text 
        str.innerHTML = "medium";
        pass.style.borderColor="violet";
        msg.style.color="violet";
      } else if (pass.value.length >= 8) {//password is strong show korbe with green colored border and text 
        str.innerHTML = "strong";
        pass.style.borderColor="#26d730";
        msg.style.color="#26d730";
      }
    });
});