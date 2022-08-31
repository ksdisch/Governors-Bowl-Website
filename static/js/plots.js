// function init() {
//     var selector = d3.select("#selDataset");

//     d3.json("../../team_stats.json").then((data) => {
//         console.log(data);
//         Object.entries(data).forEach(([key, value]) => {
//             console.log(key)
//             console.log(value)
//         });
//     });
// }

function buildTable() {
    d3.json("weekly_matchups.json").then((matchupData) => {
        // Clear out any existing data
        var tBodies = d3.select("tbody");
        tBodies.html("");

        // Get table reference
        var matchupsTable = d3.select("#matchups");

        Object.entries(matchupData).forEach(matchup => {
            let [key, value] = matchup
            console.log(key, value);
            // Append a row to the table body
            let row = matchupsTable.append("tr");
            
            // assign each field in the matchup to desired column
            let matchupColumn = value.winner + "\nvs\n <hr>" + value.loser;
            let result_Column = value.winner + "(" + value.winner_score + ")" + " defeats " + value.loser + "(" + value.loser_score + ")" ;
            let marginColumn = "Margin of Victory: " + value.victory_margin;

            // add each teams record ot matchup column

            // append cells (td) to row and fill them in with desired values
            let matchupCell = row.append("td");
            let resultCell = row.append("td");
            let marginCell = row.append("td");

            matchupCell.text(matchupColumn);
            resultCell.text(result_Column);
            marginCell.text(marginColumn);
        }) 

        });
        // Next, loop through each object in the data
        // and append a row and cells for each value in the row


    
}

buildTable();

// init();