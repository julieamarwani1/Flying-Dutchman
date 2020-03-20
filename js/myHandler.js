$(function () {

    // First we hide all menus, but the one with all courses.
    //
    $("#whisky").show();
    $("#wine").hide();
    $("#beer").hide();
    $("#spirit").hide();

    // Here we show the whiskys menu and hide all other menus.
    //
    $("#whiskys").click(function () { /* Here we show and hide the field. */
        $("#whisky").show();
        $("#spirit").hide();
        $("#wine").hide();
        $("#beer").hide();
    });

    // Here we show the alcohol-Frees menu and hide all other menus.
    //
    $("#spirits").click(function () { /* Here we show and hide the field. */
        $("#whisky").hide();
        $("#spirit").show();
        $("#wine").hide();
        $("#beer").hide();
    });

    // Here we show the wine course menu and hide all other menus.
    //
    $("#wines").click(function () { /* Here we show and hide the field. */
        $("#whisky").hide();
        $("#spirit").hide();
        $("#wine").show();
        $("#beer").hide();
    });

    // Here we show the beers menu and hide all other menus.
    //
    $("#beers").click(function () {
        $("#whisky").hide();
        $("#spirit").hide();
        $("#wine").hide();
        $("#beer").show();
    });

    // Here we put the different kinds of food into the respective menus.
    //
    var data = getAllData();

    $(setCategory(data.beer)).appendTo("#beer");
    $(setCategory(data.wine)).appendTo("#wine");
    $(setCategory(data.spirits)).appendTo("#spirit");
    $(setCategory(data.whisky)).appendTo("#whisky");
});


// ===================================================================================================================
// The function returns all food strings (created as divs) of a certain type (given as argument).
//
function setCategory(menuItems) {

    // The collection variable
    //
    var itemToDisplay = 8;
    var out = "";
   
    var i = 0;
    // Go through the array and collect all the items of the desired type.
    //

        // if the item is of the desired type, then we add the HTML string to the collection variable.
        // Otherwise we skip to the next item.
        //
        menuItems.forEach(myFunction);
    
        function myFunction(item) { 
            i++;

            var name = item[0]+" "+item[1];
            var price = item[2];
            var desc = item[3];

            if(i < itemToDisplay)
            {
                    if(price != undefined)
                    {
                        out += '<div id="' + "menuitem" + '" draggable="true" ondragstart="drag(event)">' 
                        + name +' '+'<span class="price">'+ price +'kr' + '</span><br>';
                    }
                    if(desc!= undefined)
                    {
                       out += desc +'</div><br>';
                    }
                }
        } 
        
    // Once we are finished we return the resulting HTML string containing all the menu items for the desired menu.
    //
    return out;
}



// ===================================================================================================================
// This function returns an array, which can be read as a JSON object. This means that it is easy to
// add new elements, and that the data is easy to access, and also update if needed.
//
//
function getAllData() {

    var abeers = [];
    var awines = [];
    var awhiskys = [];
    var aspirits = [];
    

    // Using a local variable to collect the items.
    var collector = {
        beer: abeers,
        wine: awines,
        whisky: awhiskys,
        spirits: aspirits
    }
    // The DB is stored in the variable DB2, with "spirits" as key element. If you need to select only certain
    // items, you may introduce filter functions in the loop... see the template within comments.
    //
    for (i = 0; i < NewDB.length; i++) {

        str = NewDB[i].catgegory.toLowerCase();

        if(str.includes("beer") || str.includes("ale") )
        abeers.push([NewDB[i].name, NewDB[i].name2, NewDB[i].priceinclvat, NewDB[i].alcoholstrength]);

        else if(str.includes("spicy spirits") || str.includes("okryddad sprit") )
        aspirits.push([NewDB[i].name, NewDB[i].name2, NewDB[i].priceinclvat, NewDB[i].alcoholstrength]);

        else if(str.includes("wine") || str.includes("vin"))
        awines.push([NewDB[i].name, NewDB[i].name2, NewDB[i].priceinclvat, NewDB[i].alcoholstrength]);

        else if(str.includes("whisky") || str.includes("whisky"))
        awhiskys.push([NewDB[i].name, NewDB[i].name2, NewDB[i].priceinclvat, NewDB[i].alcoholstrength]);
    }
    
    //
    return collector;
}

// ===================================================================================================================
// END OF FILE
// ===================================================================================================================