var controls = new uiTopLevelContainer("controls", "controls");


controls.SetData({
//   inputSelector: {
//     controlType: "inputSelector",
//   },
  appFrame: {
    controlType: "appFrame",
    title: "Kanban to work",
    footerText: "Kanban for organizing.",
    footerHref: "https://github.com/Albert-Willemse/kanban-to-work",
  },
});


// Load saved controls from local storage
controls.on('appFrame', () => {
  try {
    let d = JSON.parse(window.localStorage.getItem('appData'));
  if (d) {
    controls.SetData(d);
  }
  } catch (err) {
    console.log(`Unable to load from local storage: ${err.message}`);
  }
  
});

// Save changes to local storage
controls.on('data', data => {
  window.localStorage.setItem('appData', JSON.stringify(controls.GetData()));
});

