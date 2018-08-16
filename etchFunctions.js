
        
       

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
        // const base = 0;
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

        function makeGrid(Dimension) {
            var container = document.getElementById('container');
            container.innerHTML = '';
            container.style.gridTemplateRows = '';
            container.style.gridTemplateColumns = '';

            // base = parseInt(dimensions[0]);
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

    