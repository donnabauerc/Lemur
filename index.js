// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1, label: 'Node Backend', group: 'backend'},
    {id: 2, label: 'MQTT', group: 'mqtt'},
    {id: 3, label: 'Leonie Web', group: 'frontend'},
    {id: 4, label: 'Leonie Holo', group: 'frontend'},
    {id: 5, label: 'Leonie Face \n Recognition', group: 'frontend'}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 2, to: 3},
    {from: 2, to: 4},
    {from: 2, to: 5}
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};
var options = {
    groups: {
        backend: {color:{background:'#ffa34d'}},
        mqtt: {color:{background:'#f67575'}},
        frontend: {color:{background:'#1eb2a6'}}
    },
    edges:{
        arrows: 'to from',
        color: 'white',
        font: '12px arial #ff0000',
        scaling:{
          label: true,
        },
        shadow: true,
        smooth: true,

      },
    interaction:{
        dragNodes: false,
        dragView: true,
    },
    layout: {
        randomSeed: 3.1,
    },
    nodes: {
        borderWidth: 0,
        scaling: {
            label: true,
        },
        font: {
            color: '#FFFFFF',
        },
        shape: 'box',
        shapeProperties: {
            borderRadius: 60,
        },
        size: 65,
    } 
};


// initialize your network!
var network = new vis.Network(container, data, options);
network.focus(2,{scale: 200,});