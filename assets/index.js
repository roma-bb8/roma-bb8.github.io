var w = 1000,
    h = 800,
    circleWidth = 5;

var nodes = [
    {name: "Git", value: 40, color: "#F44336"},
    {name: "HTML5", target: [0], value: 58, color: "#E91E63"},
    {name: "CSS3", target: [0, 1], value: 65, color: "#9C27B0"},
    {name: "Redux", target: [0, 1, 2], value: 52, color: "#673AB7"},
    {name: "ReactJS", target: [0, 3], value: 48, color: "#3F51B5"},
    {name: "PostCSS", target: [0, 3, 4], value: 40, color: "#2196F3"},
    {name: "Silex", target: [0, 3, 4, 5], value: 36, color: "#03A9F4"},
    {name: "Doctrine", target: [0, 1, 2], value: 52, color: "#00BCD4"},
    {name: "Javascript", target: [0, 1, 2, 8], value: 42, color: "#009688"},
    {name: "PHP", target: [0, 1, 2], value: 35, color: "#4CAF50"},
    {name: "Symfony", target: [0, 1, 2, 3, 9], value: 67, color: "#8BC34A"},
    {name: "Git", target: [0, 1, 2, 3, 4, 5, 6, 7, 8, 10], value: 68, color: "#CDDC39"},
    {name: "Webpack", target: [0, 1, 2, 7, 8], value: 16, color: "#FFEB3B"},
    {name: "Gulp", target: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], value: 45, color: "#FFC107"},
    {name: "SQL", target: [0, 1, 2, 7, 8], value: 25, color: "#FF9800"},
    {name: "Java", target: [0, 1, 2, 7, 8], value: 27, color: "#FF5722"},
    {name: "Docker", target: [0, 1, 2, 12], value: 57, color: "#795548"},
    {name: "MySql", target: [0, 9, 10], value: 20, color: "#9E9E9E"},
    {name: "Node.js", target: [0, 9, 10], value: 37, color: "#607D8B"},
];

var links = [];

for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].target !== undefined) {
        for (var x = 0; x < nodes[i].target.length; x++)
            links.push({
                source: nodes[i],
                target: nodes[nodes[i].target[x]]
            });
    }
}

var myChart = d3.select('#skills')
    .append("div")
    .classed("svg-container", true)
    .append('svg')
    .attr("preserveAspectRatio", "xMinYMin meet")
    .attr("viewBox", "0 0 1000 800")
    .classed("svg-content-responsive", true);

var force = d3.layout.force()
    .nodes(nodes)
    .links([])
    .gravity(0.1)
    .charge(-1000)
    .size([w, h]);

var link = myChart.selectAll('line')
    .data(links).enter().append('line')
    .attr('stroke', '#E0E0E0')
    .attr('strokewidth', '1');

var node = myChart.selectAll('circle')
    .data(nodes).enter()
    .append('g')
    .call(force.drag);

node.append('circle')
    .attr('cx', function (d) {
        return d.x;
    })
    .attr('cy', function (d) {
        return d.y;
    })
    .attr('r', function (d) {
        return circleWidth + d.value;
    })
    .attr('fill', function (d) {
        return d.color;
    })
    .attr('strokewidth', function (d, i) {
        if (i > 0) {
            return '0';
        } else {
            return '2';
        }
    });

force.on('tick', function () {
    node.attr('transform', function (d) {
        return 'translate(' + d.x + ',' + d.y + ')'
    });

    link
        .attr('x1', function (d) {
            return d.source.x;
        })
        .attr('y1', function (d) {
            return d.source.y;
        })
        .attr('x2', function (d) {
            return d.target.x;
        })
        .attr('y2', function (d) {
            return d.target.y;
        })
});

node.append('text')
    .text(function (d) {
        return d.name;
    })
    .attr('font-family', 'Roboto')
    .attr('fill', function () {
        return '#fff';
    })
    .attr('text-anchor', function () {
        return 'middle';
    })
    .attr('font-size', function () {
        return '.8em';
    });

force.start();
