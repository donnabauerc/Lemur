// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1, label: 'Internet'},
    {id: 2, label: 'Node Backend'},
    {id: 3, label: 'MQTT'},
    {id: 4, label: 'Leonie Web'},
    {id: 6, label: 'Leonie Holo'},
    {id: 5, label: 'Leonie Face Recognition'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 2, to: 3},
    {from: 3, to: 4},
    {from: 3, to: 5},
    {from: 3, to: 6}
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    edges:{
        arrows: 'to',
        color: 'black',
        font: '12px arial #ff0000',
        scaling:{
          label: true,
        },
        shadow: true,
        smooth: true,

      },
};


// initialize your network!
var network = new vis.Network(container, data, options);