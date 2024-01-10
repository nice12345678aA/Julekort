function createcard() {
    document.getElementById("createbox").style.display = "none";
    let header = document.getElementById("header");
    document.getElementById("new-header").innerText = header.value;
    let text = document.getElementById("text");
    document.getElementById("new-text").innerText = text.value;
    let from = document.getElementById("from");
    document.getElementById("new-from").innerText = from.value;
    let color = document.getElementById("color");
    document.getElementById("new-header").style.color = color.value;
    document.getElementById("new-text").style.color = color.value;
    document.getElementById("new-from").style.color = color.value;
    let backgroundColor = document.getElementById("bcolor");
    document.getElementById("card").style.backgroundColor = backgroundColor.value;
    let image = document.getElementById("bilde").value;
    console.log(image);
    if (image=="krans") {
      document.getElementById("new-image").src = "images/Krans.png";
    }
    if (image=="snøman") {
      document.getElementById("new-image").src = "images/Snøman.jpg";
    }
}