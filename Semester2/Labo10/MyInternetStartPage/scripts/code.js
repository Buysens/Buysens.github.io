const setup = () => {
    let btnSearch = document.getElementById("btnSearch");
    btnSearch.addEventListener("click", voerCommandoUit);

    let lsHistory = JSON.parse(localStorage.getItem("history"));
    if(lsHistory){
        for(let i = 0; i<lsHistory.length; i++){
            makeCard(lsHistory[i].title, lsHistory[i].text, lsHistory[i].url);
        }
    }
};

const voerCommandoUit = () => {
    let txtinput = document.getElementById("txtinput");
    let commando = txtinput.value;


    let regex = commando.match("\/[a-z]{1} [a-z]*");
    if(regex != null){
        let commandPrefix = commando.substr(0,2);
        if(commandPrefix === '/g'){
            google(commando.substr(3, commando.length));
        }
        else if (commandPrefix === '/t') {
            twitter(commando.substr(3, commando.length));
        }
        else if(commandPrefix === '/y'){
            youtube(commando.substr(3, commando.length));
        }
        else if(commandPrefix === '/i'){
            instagram(commando.substr(3, commando.length));
        }
        else {
            alert("Unknown command prefix");
        }
        txtinput.value = "";
    }
    else {
        alert("Invalid command");
    }
};


const google = (commandoSuffix) => {
    let url = "https://www.google.com/search?q="+commandoSuffix;
    window.open(url, '_blank');
    makeCard("Google", commandoSuffix, url);
    saveLocalStorage("Google", commandoSuffix, url);
};

const twitter = (commandoSuffix) => {
    let url = "https://twitter.com/hashtag/"+commandoSuffix;
    window.open(url, '_blank');
    makeCard("Twitter", commandoSuffix, url);
    saveLocalStorage("Twitter", commandoSuffix, url);
};

const youtube = (commandoSuffix) => {
    let url = "https://www.youtube.com/results?search_query="+commandoSuffix;
    window.open(url, '_blank');
    makeCard("Youtube", commandoSuffix, url);
    saveLocalStorage("Youtube", commandoSuffix, url);
};

const instagram = (commandoSuffix) => {
    let url = "https://www.instagram.com/explore/tags/"+commandoSuffix;
    window.open(url, '_blank');
    makeCard("Instagram", commandoSuffix, url);
    saveLocalStorage("Instagram", commandoSuffix, url);
};

const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};

const createElementWithClassNameAndText = (element, className, text) => {
    let e = createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};

const createLinkButton = (url) => {
    let linkGo = document.createElement("a");
    linkGo.setAttribute("href", url);
    linkGo.setAttribute("target", "_blank");
    linkGo.setAttribute("class", "btn btn-primary");
    linkGo.appendChild(document.createTextNode("Go!"));
    return linkGo;
};

const saveLocalStorage = (title, commandoSuffix, url) => {
    let historyObject = {
        title: title,
        text: commandoSuffix,
        url: url
    };

    let lsHistory = JSON.parse(localStorage.getItem("history"));
    if(!lsHistory){
        lsHistory = [historyObject];
    }
    else {
        lsHistory.push(historyObject);
    }

    localStorage.setItem("history", JSON.stringify(lsHistory));
};

const makeCard = (title, commandoSuffix, url) => {
    let col4 = createElementWithClassName("div","col-4");
    let card = createElementWithClassName("div","card");
    card.classList.add(title.toLowerCase()+"-card");
    let body = createElementWithClassName("div","card-body");
    let cardTitel = createElementWithClassNameAndText("h5", "card-title", title);
    let text = createElementWithClassNameAndText("p", "card-text", commandoSuffix);

    let linkGo = createLinkButton(url);
    linkGo.classList.add(title.toLowerCase()+"-button");

    body.appendChild(cardTitel);
    body.appendChild(text);
    body.appendChild(linkGo);
    card.appendChild(body);
    col4.appendChild(card);

    let row = document.querySelector(".row");
    row.appendChild(col4);
};


window.addEventListener("load", setup);