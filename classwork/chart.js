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
console.log(data)
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
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var filteredSample=dataArray.filter(filteredData=>filteredData.id==sample)
    //  5. Create a variable that holds the first sample in the array.
    var firstResult=filteredSample[0]
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIds=firstResult.otu_ids
    var otuLabels=firstResult.otu_labels
    var otuValues=firstResult.sample_values

    var firstSampleMeta=metadata[0]
    var washingFrequency=firstSampleMeta.wfreq

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 
    var yticks = otuIds.slice(0, 10).map(otuId=>'OTU'+otuId).reverse();
        // 8. Create the trace for the bar chart. 
  //   var barData = [{ x:otuValues.slice(0,10).reverse(),
  //     y:yticks,
  //     type:"bar",
  //     text:otuLabels.slice(0,10).reverse(),
  //     orientation:'h'
  //     }
      
  //   ];
  //   // 9. Create the layout for the bar chart. 
  //   var barLayout = {title:"Top 10 Bacteria Cultures found",
  // };
  //   // 10. Use Plotly to plot the data with the layout. 
  //   Plotly.newPlot("bar", barData, barLayout)

  //   // 1. Create the trace for the bubble chart.
  //   var bubbleData = [{x:otuIds,
  //     y:otuValues,
  //     text:otuLabels,
  //     mode: 'markers',
  //     marker: {color: ['rgb(255,148,201)', 'rgb(0,214,214)',  'rgb(180,82,255)', 'rgb(36,255,36)', 'rgb(255,229,82)', 'rgb(255,82,82)','rgb(124,252,0)','rgb(127,255,212)'],
  //     size: otuValues
   
  //   }}];

  //   // 2. Create the layout for the bubble chart.
  //   var bubbleLayout = {title: 'Bacteria Cultures per Sample',
  //   xaxis:{title:"OTU_ID"},
  //   showlegend: false
      
    };

    // 3. Use Plotly to plot the data with the layout.
    // Plotly.newPlot("bubble", bubbleData, bubbleLayout); 


    //........................................................................
//   //   console.log(washingFrequency)
//   //   var gaugeData =[
//   //     {
//   //       domain: { x: [0, 1], y: [0, 1] },
//   //       value: washingFrequency,
//   //       title: { text: "Belly Button Washing Frequency" },
//   //       type: "indicator",
//   //       mode: "gauge+number",
//   //       gauge: {
//   //         axis: { range: [null, 500] },
//   //         steps: [
//   //           { range: [0, 2], color: "rgb(255, 0, 0)" },
//   //           { range: [2,4], color: "rgb(255, 191, 0)" },
//   //           { range: [4,6], color: "rgb(255, 255, 0)" },
//   //           { range: [6,8], color: "rgb(64, 255, 0)" },
//   //           { range: [8,10], color: "rgb(34, 139, 34)" }
//   //         ],
//   //         threshold: {
//   //           line: { color: "red", width: 4 },
//   //           thickness: 0.75,
//   //           value: 490},
//   //           bar: { color: "darkblue" }
//   //       }
//   //     }
//   //   ]; 
//   // // 5. Create the layout for the gauge chart.
//   // var gaugeLayout ={ width: 200, height: 200 };
//   // // 6. Use Plotly to plot the gauge data and layout.
//   // Plotly.newPlot("gauge", gaugeData, gaugeLayout);
  

//   });
// }

// // / Create the buildChart function.
// // function buildCharts(sample) {
// //   // Use d3.json to load the samples.json file 
// //   d3.json("samples.json").then((data) => {
// //     console.log(data);

// //     // Create a variable that holds the samples array. 
// //     var dataArray=data.samples
// //     // Create a variable that filters the samples for the object with the desired sample number.
// //     var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
// //     // 1. Create a variable that filters the metadata array for the object with the desired sample number.
// //     var metadata = resultArray.metadata;
// //     // Create a variable that holds the first sample in the array.
// //     var result = resultArray[0];

// //     // 2. Create a variable that holds the first sample in the metadata array.
// //     var firstSampleMeta=metadata[0]

// //     // Create variables that hold the otu_ids, otu_labels, and sample_values.
// //     var otuIds=firstResult.otu_ids
// //     var otuLabels=firstResult.otu_labels
// //     var otuValues=firstResult.sample_values

// //     // 3. Create a variable that holds the washing frequency.
// //     var washingFrequency=firstSampleMeta.wfreq
// //     // Create the yticks for the bar chart.
// //     var yticks=otuIds.slice(0, 10).map(otuId=>'OTU'+otuId).reverse();
// //     var barData = [{ x:otuValues.slice(0,10).reverse(),
// //       y:yticks,
// //       type:"bar",
// //       text:otuLabels.slice(0,10).reverse(),
// //       orientation:'h'}
      
// //     ];
// //     var barLayout = {title:"Top 10 Bacteria Cultures found"};
// //     // Use Plotly to plot the bar data and layout.
// //     Plotly.newPlot("bar", barData, barLayout)

    
// //     // Use Plotly to plot the bubble data and layout.
// //     var bubbleData = [{x:otuIds,
// //       y:otuValues,
// //       text:otuLabels,
// //       mode: 'markers',
// //       marker: {color: ['rgb(255,148,201)', 'rgb(0,214,214)',  'rgb(180,82,255)', 'rgb(36,255,36)', 'rgb(255,229,82)', 'rgb(255,82,82)','rgb(124,252,0)','rgb(127,255,212)'],
// //       size: otuValues
   
// //     }}];

// //     // 2. Create the layout for the bubble chart.
// //     var bubbleLayout = {title: 'Bacteria Cultures per Sample',
// //     xaxis:{title:"OTU_ID"},
// //     showlegend: false
      
// //     };

// //     // 3. Use Plotly to plot the data with the layout.
// //     Plotly.newPlot("bubble", bubbleData, bubbleLayout); 
 
    
// //     // 4. Create the trace for the gauge chart.
// //     // var PANEL = d3.select("#sample-metadata")
// //     var gaugeData =[
// //         {
// //           domain: { x: [0, 1], y: [0, 1] },
// //           value: washingFrequency,
// //           title: { text: "Belly Button Washing Frequency" },
// //           type: "indicator",
// //           mode: "gauge+number",
// //           gauge: {
// //             axis: { range: [null, 500] },
// //             steps: [
// //               { range: [0, 2], color: "rgb(255, 0, 0)" },
// //               { range: [2,4], color: "rgb(255, 191, 0)" },
// //               { range: [4,6], color: "rgb(255, 255, 0)" },
// //               { range: [6,8], color: "rgb(64, 255, 0)" },
// //               { range: [8,10], color: "rgb(34, 139, 34)" }
// //             ],
// //             threshold: {
// //               line: { color: "red", width: 4 },
// //               thickness: 0.75,
// //               value: 490},
// //               bar: { color: "darkblue" }
// //           }
// //         }
// //       ]; 
// //     // 5. Create the layout for the gauge chart.
// //     var gaugeLayout ={ width: 200, height: 200 };
// //     // 6. Use Plotly to plot the gauge data and layout.
// //     Plotly.newPlot("gauge", gaugeData, gaugeLayout);
    
// //   });
// // }





