class appFrame extends ui {
    constructor() {
        super();

        this.title = "";
        this.footerText = "";
        this.footerHref = "";
        this.orderBy = 'displayOrder';
        //this.screenHeight = window.outerHeight;
    }

    get html() {
        return `
        <div class="fixed top-0 left-0 right-0 bottom-0 bg-gray-50 flex">
            <!-- Header -->
            <div class="fixed top-0 w-full h-12 bg-blue-950 pl-4 flex items-center select-none">
                <div class="flex justify-between w-full">   
                    <div class="flex items-center">
                        <h1 class="text-slate-100 font-sans text-xl">@{title}</h1>

                        <button id="@{_addInput}" class="icon-[mdi-light--plus-circle] text-white hover:text-blue-500 text-2xl text-[32px] ml-2" >Add Input</button>
                       
                    </div>

                    
                </div>
            </div>

            <!-- Contents -->
            <!-- space-x-2 space-y-2 -->
            <div id="@{_controlsDiv}" class="list-group fixed top-12 w-full p-2 flex flex-row flex-wrap gap-2 overflow-y-auto max-h-fit"></div>

            

            <!-- Footer -->
            <div class="fixed bottom-0 w-full h-8 bg-blue-950 pl-4 flex items-center gap-1">
                <span class="icon-[mdi--github] text-slate-400 text-sm"></span>
                <span class="text-slate-400 font-sans text-sm"><a href="@{footerHref}">@{footerText}</a></span>
            </div>
        </div>
        `;
    }

    Init() {
       let a = this;
       this._controlsDiv.style.maxHeight = (window.outerHeight - 180) + "px";

        // Update max screen height
        
        window.addEventListener("load", function() {
            window.dispatchEvent(new Event('resize'));
        });
        
        window.onresize = function() {
            a._controlsDiv.style.maxHeight = (window.outerHeight - 180) + "px";
        }


        this._addInput.addEventListener('click', () => {
            this._topLevelParent.inputSelector.visible = true;
        });
              
        
        // // Save the list order when the Card order is changed
        // var sortable = Sortable.create(this._controlsDiv, {
        //     handle: '.CCPanel',
        //     animation: 350,
        //     chosenClass: "sortable-chosen",
        //     dragClass: "sortable-drag",
        //     group: {
        //         name: 'my-sortable-group'
        //     },

        //     store: {
        //         /**
        //          * Save the order of elements. Called onEnd (when the item is dropped).
        //          * @param {Sortable}  sortable
        //          */
        //         set: function (sortable) {
                    
        //             // Update the displayOrder property for each Router
        //             a.updateOrder();
        //         },

        //     }
            
        // });

    }

    // Update the displayOrder property for each control using Sortable js
    // updateOrder() {
    //     var sortable = Sortable.create(this._controlsDiv, {
    //         handle: '.CCPanel',
    //         animation: 350,
    //         chosenClass: "sortable-chosen",
    //         dragClass: "sortable-drag",
    //         group: {
    //             name: 'my-sortable-group'
    //         }
    //     });

    //     // Get the ordered list of children elements
    //     var controlElements = sortable.el.children;

    //     // Create a list of all the routers
    //     Object.values(controls.appFrame._controls)

    //     var controlId
    //     const CCPanel = [];
  
    //     // Get the ordered list of all the routers
    //     for (var i = 0; i < controlElements.length; i++) {
    //       controlId = controlElements[i].id;
          
    //       CCPanel[i] = Object.values(controls.appFrame._controls).find(R => R._uuid == controlId.toString());
           
    //     }

    //     // Update the displayOrder property for each control
    //     for (var i = 0; i < CCPanel.length; i++) {
    //         CCPanel[i].displayOrder = i;
    //       }
    // }

}