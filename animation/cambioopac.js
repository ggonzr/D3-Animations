const svg = d3.select("#canvas").append("svg")
    .attr("width", 400)
    .attr("height", 200)
    .style("border-color", "black")
    .style("border-style", "solid")
    .style("border-width", "1px");

const rectangle = svg.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 50)
    .attr("height", 50);

d3.select("#start").on("click", function () {
    rectangle
        .transition()
        .attr("x", 250)
        .attr("width", 100) 
	    .attr("height", 100) 
        .attr("opacity",0.5);
});

d3.select("#reset").on("click", function () {
    rectangle
        .transition()
        .attr("x", 50)
        .attr("width", 50) 
        .attr("height", 50)
        .attr("opacity",1);
        
});