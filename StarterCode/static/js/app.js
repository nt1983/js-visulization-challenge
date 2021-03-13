
function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }



function init() {
    var dropdown=d3.select("#selDataset");
    d3.json("../data/samples.json").then(function(data) {
        var SampleName=data.names;
        console.log(SampleName);
        
    });
}








init();
  

