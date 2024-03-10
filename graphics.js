// Ximena Bedoya Posada - 2024

function graph(execution_order, title) {
  const margin = {top: 50, right: 30, bottom: 50, left: 60};
  const width = 600 - margin.left - margin.right;
  const height = 400 - margin.top - margin.bottom;

  const svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  const y = d3.scaleBand()
    .domain(execution_order.map(d => d.name))
    .range([0, height])
    .padding(0.1);

  const x = d3.scaleLinear()
    .domain([0, d3.max(execution_order, d => d.end)])
    .range([0, width]);

  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  svg.append("g")
    .call(d3.axisLeft(y));

  svg.selectAll(".bar")
    .data(execution_order)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.start))
    .attr("y", d => y(d.name))
    .attr("width", d => x(d.end) - x(d.start))
    .attr("height", y.bandwidth())
    .attr("fill", (d, i) => d3.schemeCategory10[i % 10]);

  svg.append("text")
    .attr("y", 0 - (margin.top / 2))
    .attr("x", width / 2)
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .style("font-size", "20px")
    .text(title);
}