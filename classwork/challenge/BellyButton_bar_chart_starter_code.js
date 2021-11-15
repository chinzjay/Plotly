function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
    function buildCharts(sample) {
      // 2. Use d3.json to load and retrieve the samples.json file 
      d3.json("samples.json").then((data) => {
        // 3. Create a variable that holds the samples array. 
        var dataArray=data.samples
        var meta=data.metadata
        // 4. Create a variable that filters the samples for the object with the desired sample number.
        var filteredSample=dataArray.filter(filteredData=>filteredData.id==sample)
         var filteredMeta=meta.filter(md=>md.id==sample)
        //  5. Create a variable that holds the first sample in the array.
        var firstResult=filteredSample[0]
        var firstMeta=filteredMeta[0]
        
        // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
        var otuIds=firstResult.otu_ids
        var otuLabels=firstResult.otu_labels
        var otuValues=firstResult.sample_values
        // var firstSampleMeta=metadata[0]
        var washingFrequency=firstMeta.wfreq
        console.log(washingFrequency)
    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otuIds.slice(0, 10).map(otuId=>'OTU'+otuId).reverse();
    // 8. Create the trace for the bar chart. 
var barData = [{ x:otuValues.slice(0,10).reverse(),
  y:yticks,
  type:"bar",
  text:otuLabels.slice(0,10).reverse(),
  orientation:'h'
  }
  
];
// 9. Create the layout for the bar chart. 
var barLayout = {title:"Top 10 Bacteria Cultures found",
};
// 10. Use Plotly to plot the data with the layout. 
Plotly.newPlot("bar", barData, barLayout)


// -------------------------------------------------------------------------------------------------------------
// 1. Create the trace for the bubble chart.
var bubbleData = [{x:otuIds,
  y:otuValues,
  text:otuLabels,
  mode: 'markers',
  marker: {color: ['rgb(255,148,201)', 'rgb(0,214,214)',  'rgb(180,82,255)', 'rgb(36,255,36)', 'rgb(255,229,82)', 'rgb(255,82,82)','rgb(124,252,0)','rgb(127,255,212)'],
  size: otuValues

}}];

// 2. Create the layout for the bubble chart.
var bubbleLayout = {title: 'Bacteria Cultures per Sample',
xaxis:{title:"OTU_ID"},
showlegend: false
  
};

// 3. Use Plotly to plot the data with the layout.
Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
  


// -------------------------------------------------------------------------------------------------------

  var gaugeData = [
    {
      
      value: washingFrequency,
      title: { text: "Belly Button Washing Frequency" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {axis: { range: [null, 10] },
        bar: { color: "black" },
        borderwidth: 2,
        bordercolor: "white",
        steps: [
          { range: [0, 2], color: "#ff0000" },
          { range: [2,4], color: "#ffa343" },
          { range: [4,6], color: "#fff44f" },
          { range: [6,8], color: "#39ff14" },
          { range: [8,10], color: "#008000" }
        ],
        
      }
      }
  ];
  Plotly.newPlot("gauge", gaugeData);

});  
}
