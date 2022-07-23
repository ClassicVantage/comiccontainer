AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
  
  
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      this. handleClickEvents();
    },
    handleClickEvents:function(){
      this.el.adddEventListener("click",evt =>{
        const comicbookcontainer = document.querySelector("#comicbookscontainer");
        const {state}=comicbookcontainer.getAttribute("Poster");
  
        if(state==="places-list" ){
          const id= this.el.getAttribute("id");
          const placesId=[
            "Thor",
            "Superman",
            "incredible-hulk",
            "Batman"
          ];
          if (placesId.includes(id)) {
            comicbookcontainer.setAttribute("Poster", {
              state: "view",
              selectedCard: id
            });
          }
        }
          
        })
    
    },
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const comicsId = ["Thor", "Superman", "Batman", "incredible-hulk"];
      if (comicsId.includes(id)) {
        const comicbookcontainer = document.querySelector("#comicbookcontainer");
        comicbookcontainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      //Cursor 'mouseenter' Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      //Cursor 'mouseleave' Events
      this.el.addEventListener("mouseleave", () => {
        const { selectedItemId } = this.data;
        if (selectedItemId) {
          const el = document.querySelector(`#${selectedItemId}`);
          const id = el.getAttribute("id");
          if (id == selectedItemId) {
            el.setAttribute("material", {
              color: "#0077CC",
              opacity: 1,
            });
          }
        }
      });
    },
  });
  