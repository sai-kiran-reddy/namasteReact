const div = React.createElement("div", {id:"div1"}, 
[React.createElement("div", {id:"div2"}, 
[React.createElement("h1", {}, "from React"),
React.createElement("h2", {}, "from React")]),React.createElement("div", {id:"div3"}, 
[React.createElement("h1", {}, "from React"),
React.createElement("h2", {}, "from React")])]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);