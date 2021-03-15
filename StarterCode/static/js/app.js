
function DrawPlot(Option) {
  d3.json("../data/samples.json").then((data) =>{
    var input=data.sample;
    console.log(input);
    //var datafilter=sample.filter(inputOption => inputOption.id===sample);
  

  });
}


function init() {
    var dropdown=d3.select("#selDataset");
    d3.json("../data/samples.json").then(function(data) {
        var SampleName=data.names;
        SampleName.forEach((item) => {
          dropdown.append("option").text(item).property("value", item);
        });
        const FirstOption=SampleName[0];
        DrawPlot(FirstOption);

    });    
}
        




init();
  

