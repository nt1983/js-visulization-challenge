function Demographic(Option){
  d3.json("../data/samples.json").then((data) =>{
    metadata=data.metadata;
    var filterdata=metadata.filter(Object)

  });

}

function DrawPlot(Option) {
  d3.json("../data/samples.json").then((data) =>{
    var samples=data.samples;
    var filterdata = samples.filter(object => object.id.toString() === Option)[0];
    console.log(filterdata);
    var sample_values=filterdata.sample_values;
    var otu_ids=filterdata.otu_ids;
    var otu_labels=filterdata.otu_labels;

    //Bar Chart
    var trace1={
      x: sample_values.slice(0,10).reverse(),
      y: otu_ids.slice(0.10).map(id => `OTU ${id}`).reverse(),
      text: otu_labels.slice(0,10).reverse(),
      type: "bar",
      orientation: "h"
    };
    var data=[trace1];
    var layout={title: "Top 10 OTU for Test Subject ID: "+ Option};
    Plotly.newPlot("bar", data, layout);

    //Bubble Chart
    var trace2={
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: 'markers',
      marker: {
        color: otu_ids,
        colorscale: "Viridis",
        size: sample_values
      }
    };
    var layout2={
      title: "Bacteria size per sample",
      xaxis: { title: "OTU ID" + Option },
      showlegend: false,
    };
    var data=[trace2];
    Plotly.newPlot("bubble", data, layout2);


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
        Demographic(FirstOption);

    });    
}
        
function optionChanged(Opt){
  DrawPlot(Opt);
  Demographic(Opt);
}

init();
  

