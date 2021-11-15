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
      d3.select("#sample-metadata")

      //-------------------------------------------------------------
      var metadata1 = data.metadata1
      d3.select("#sample-metadata")
      var results = metadata1.filter(sampleObj => sampleObj.id == sample);
      var firstSampleMeta=results[0]
      var washingFrequency=firstSampleMeta.wfreq
      console.log(washingFrequency)
          var gaugeData =[
            {
              domain: { x: [0, 1], y: [0, 1] },
              value: washingFrequency,
              title: { text: "Belly Button Washing Frequency" },
              type: "indicator",
              mode: "gauge+number",
              gauge: {
                axis: { range: [null, 500] },
                steps: [
                  { range: [0, 2], color: "rgb(255, 0, 0)" },
                  { range: [2,4], color: "rgb(255, 191, 0)" },
                  { range: [4,6], color: "rgb(255, 255, 0)" },
                  { range: [6,8], color: "rgb(64, 255, 0)" },
                  { range: [8,10], color: "rgb(34, 139, 34)" }
                ],
                threshold: {
                  line: { color: "red", width: 4 },
                  thickness: 0.75,
                  value: 490},
                  bar: { color: "darkblue" }
              }
            }
          ]; 
        // 5. Create the layout for the gauge chart.
        var gaugeLayout ={ width: 200, height: 200 };
        // 6. Use Plotly to plot the gauge data and layout.
        Plotly.newPlot("gauge", gaugeData, gaugeLayout);
        
      
        });
      }  