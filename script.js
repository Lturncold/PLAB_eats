(function () {

    /**
     * The class to manage the random generator
     * @constructor
     */
    var RandomManager = function () {
        /**
         * Initialize the values box
         * @type {*|jQuery|HTMLElement}
         */
        var $valuesBox = $('#values');

        /**
         * The instructions for the tool
         * @type {*|jQuery|HTMLElement}
         */
        var $instructions = $('#instructions');

        /**
         * The chooser box
         * @type {*|jQuery|HTMLElement}
         */
        var $chooserBox = $('#chooser');

        /**
         * The results box
         * @type {*|jQuery|HTMLElement}
         */
        var $resultBox = $('#results');       
        /**
         * The initialization function sort of
         *
         * This handles adding all the handlers the DOM items
         */
        function addHandlers() {
            $valuesBox.on('change keyup blur', handleBoxChange);
            $chooserBox.on('click', 'button', chooseWinner);
        }

        var $gmap_canvas = $('#gmap_canvas');

        var $recommendations = $('#recommendations');

        var $recoList = $('#recoList');

        /**
         * When the textarea changes, handle it
         */

         function handleBoxChange() {

            $chooserBox.fadeIn(200);

        }

        // function handleBoxChange() {
        //     if ($valuesBox.val().trim() === '') {
        //         $resultBox.fadeOut(200).empty();
        //         $chooserBox.fadeOut(200, function () {
        //             $instructions.fadeIn(200);
        //         });
        //     }
        //     else {
        //         $instructions.fadeOut(200, function () {
        //             $chooserBox.fadeIn(200);
        //         });
        //     }
        // }

        /**
         * Iterates through the winner and chooses
         */
        function chooseWinner() {
            var values = $valuesBox.val().trim().split("\n");
            if (values.length == 1) {
                handleOneWinner(values);
            }
            else {
                var chopIt = false;
                // if it's too small, let's add some more to it for a cool look
                if (values.length < 20) {
                    values.push.apply(values, values);
                }
                else if (values.length > 50) {
                    chopIt = true;
                }
                shuffleValues(values);
                if (chopIt) {
                    // if it's too long, the animation will suck!
                    values = values.slice(0, 50);
                }

                animateResults(values);
            }
        }

        /**
         * Show the results in an animated fashion
         * @param values
         */
        function animateResults(values) {
            $resultBox.show();
            $gmap_canvas.show(); //show the google map when click for results
            $recommendations.show(); //show the recommendations when click for results
            $resultBox[0].scrollTop = 0;
            $resultBox.empty();

            var resultList = $('<ul />');
            $.each(values, function (i, value) {
                var li = document.createElement('li');
                li.appendChild(document.createTextNode(value));
                resultList.append(li);
            });

            $resultBox.append(resultList);

            // $recommendations.append(resultList);

            $resultBox.animate({
                scrollTop: $resultBox[0].scrollHeight
            });

            //reference the results in results box to google maps
            document.getElementById("gmap_canvas").src = "https://maps.google.com/maps?q=" + values[values.length - 1].replaceAll(' ','%20') + "&t=&z=17&ie=UTF8&iwloc=&output=embed";
            // show the recommended food from results in results box
            var x = foodPlaces.find(foodPlaces => foodPlaces.name === values[values.length - 1]).reco;
            var y = x.split(",").map(item => item.trim());
            var z = y.join("\n");
            document.getElementById("recoList").value = z;
        }

        /**
         * Shuffle the values
         * @param values
         */
        function shuffleValues(values) {
            for (var i = values.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = values[i];
                values[i] = values[j];
                values[j] = temp;
            }
        }

        /**
         * When people are being silly and choose only one entry
         */
        function handleOneWinner(values) {
            var winner = values[0];
            $('main').html('<div class="jumbotron text-center"><h1>Good job!</h1><h2>There is only one option!</h2><p>You know exactly where to eat!!</p>');
        }

        // init the logic
        addHandlers();
    };

    // create the object - it's self managed
    new RandomManager();
})();