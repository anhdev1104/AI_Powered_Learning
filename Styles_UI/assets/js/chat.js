//Push Image
document.getElementById("pushImage").onclick = function () {
    let input = document.createElement("input");
    input.type = "file";
    input.onchange = (_) => {
        let files = Array.from(input.files);
        console.log(files);
    };
    input.click();
};

//Push microphone
document.getElementById("mic").onclick = function () {
    let output = document.getElementById("message");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    let recognization = new SpeechRecognition();
    recognization.onstart = () => {};
    recognization.onresult = (e) => {
        var transcript = e.results[0][0].transcript;
        output.innerText = transcript;
    };
    recognization.start();
};

//Chat message
function message(text) {
    return `<p
id="messageUser"
class="chat-message__text"
>${text}</p>`;
}

document.getElementById("send").onclick = function () {
    let mess = document.getElementById("inputMessage").value;
    document.getElementById("inputMessage").value = "";
    document.getElementById("chat").innerHTML += message(mess);
};

// text to speech
function speakText() {
    const utterance = new SpeechSynthesisUtterance();
    utterance.value = 5;
    utterance.rate = 0.9;
    utterance.lang = "en-GB";
    utterance.text = document.getElementById("messageAI").value;
    window.speechSynthesis.speak(utterance);
}

function like() {
    let likes = document.querySelectorAll(".like");
    for (like of likes) {
        like.style.fill = "#ffd43b";
    }
}

function unLike() {
    let unLikes = document.querySelectorAll(".unLike");
    for (unLike of unLikes) {
        unLike.style.fill = "#c6a905";
    }
}
