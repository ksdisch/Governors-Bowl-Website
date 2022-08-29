function buildCharts() {
    var selector = d3.select("#wins");
    d3.json("league_history.json").then((data) => {
        console.log(data);
        // get array of all the governors, convert to title case w/ function
        // found on stackoverflow (x-axis)
        var governorsArray = Object.keys(data).map(function toTitleCase(str) {
            return str.replace(
              /\w\S*/g,
              function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
              }
            );
          });
        console.log(governorsArray);
        // get array of all time win totals
        // var governorWins = Object.entries(data);
        var governorWins = Object.values(data).map(val => val.total_wins);
        console.log(governorWins);
        
        // create trace for the wins bar chart
        var winsBarData = [{
            type: "bar",
            x: governorsArray,
            y: governorWins
        }];

        var winsBarLayout = {
            title: "Total Regular Season Wins"
        };

        
        Plotly.newPlot("wins", winsBarData, winsBarLayout);

    });
};

buildCharts();

