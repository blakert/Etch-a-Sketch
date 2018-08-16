
// author: Blake Tibbitts

       
        //wait for page to load DOM and all elements before starting to run functions
        window.onload = function () { 
            makeGrid(16); 
            addListeners(); }

        function addListeners() {
            document.getElementById('resize').addEventListener('click', function() {

                makeGrid(getDimension());
            })
            document.getElementById('clear').addEventListener('click', function() {
                clearGrid();
            })

        }

        function clearGrid() {
            var children = document.getElementById('container').childNodes;
            achildren = Array.from(children);
            achildren.forEach(function(item) {
                if (item.classList.contains('clicked')) {
                    item.classList.toggle('gridCell');
                    item.classList.remove('clicked');
                }

            })
        }

        function changeColor(div) {
            if (div.classList.contains('gridCell')) {
                div.classList.toggle('gridCell');
                div.classList.add('clicked');
            }

        }
        // Function takes user input for use in grid creation, minor error-checking
        function getDimension() {
            var dimensions = prompt("Enter one side of a square: ");

            while (!parseInt(dimensions)) {
                dimensions = prompt("please enter a number greater than 0: ")
            }
            while (parseInt(dimensions) <= 0) {
                dimensions = prompt("Please enter a number greater than 0: ")
            }
            return parseInt(dimensions);
        }
        //takes input side of square to create a grid of x by x size
        function makeGrid(Dimension) {
            var container = document.getElementById('container');
            container.innerHTML = '';
            container.style.gridTemplateRows = '';
            container.style.gridTemplateColumns = '';

            // first loop creates 16 rows, interior loop 16 columns, CSS added at the end to make the grid items fit.
            for (var j = 0; j < Dimension; j++) {
                for (var i = 0; i < Dimension; i++) {
                    const newDiv = document.createElement('div');
                    newDiv.classList.add('gridCell');
                    newDiv.addEventListener('mouseenter', function() {
                        changeColor(newDiv);
                    });
                    var container = document.getElementById('container');
                    container.appendChild(newDiv);

                }
                container.style.gridTemplateColumns += " auto";
                container.style.gridTemplateRows += " auto";
            }
               
        }

        /*
        for(var i = 0; i<16; i++){
            const newDiv = document.createElement('div');
            newDiv.textContent = "test";
            var container = document.getElementById('container');
            container.appendChild(newDiv);
            container.style.gridRowColumns += " auto";
        }*/

    