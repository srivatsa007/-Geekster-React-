let heading = React.createElement("h1", null, "Topics covered");

let p1 = React.createElement("p", null, "The following is a list of all the topics we cover in the MDN learning area.");

const a1 = React.createElement("a", {href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web", id: "anchor1"}, "Getting started with the web");

const a2 = React.createElement("a", { id: "anchor2", href: "https://developer.mozilla.org/en-US/docs/Learn/HTML"}, "HTML — Structuring the web");

const a3 = React.createElement("a",{ id: "anchor3", href: "https://developer.mozilla.org/en-US/docs/Learn/CSS"}, "CSS — Styling the web");


let p2 = React.createElement("pre", {style: {display: "flex", flexDirection: "column", gap: "1rem", textWrap: "wrap"}}, a1, "   Provides a practical introduction to web development for complete beginners.");

let p3 = React.createElement("pre", {style: {display: "flex", flexDirection: "column", gap: "1rem", textWrap: "wrap"}}, a2, "    HTML is the language that we use to structure the different parts of our content and define what their meaning or purpose is. This topic teaches HTML in detail.");

let p4 = React.createElement("pre", {style: {display: "flex", flexDirection: "column", gap: "1rem", textWrap: "wrap" }}, a3, "   CSS is the language that we use to control our web content's style and layout, as well as adding behavior like animation. This topic provides comprehensive coverage of CSS.");

console.log(p3);

let csscode = {display: "flex", flexDirection: "column", padding: "0 5vw"};

const container = React.createElement("div", {style: csscode}, heading, p1, p2, p3, p4);

ReactDOM.render(container, document.getElementsByClassName("root")[0]);