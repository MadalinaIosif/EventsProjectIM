function renderJSON(jsonData)
{
    let eventFactory = new EventFactory();
    var events =[];
    console.log("Hallo");
    for(let e in jsonData["events"])
    {
        var evt = jsonData["events"][e];
        events.push(eventFactory.eventFromJSON(evt));
        
    }
    for(let instance in events)
    {
        document.getElementById("events").innerHTML += events[instance].render();
    }
}
function loadData(){
let req = new XMLHttpRequest();
let data = "";
req.onreadystatechange = () => {
  if (req.readyState == XMLHttpRequest.DONE) {
    console.log(req.responseText);
    renderJSON(JSON.parse(req.responseText));
  }
};
 
req.open("GET", "https://api.npoint.io/40070fece5f75f9756f9", true);
req.send();
};