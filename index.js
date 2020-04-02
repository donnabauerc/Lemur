// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1, label: 'Node Backend', group: 'backend', x:0 , y:500},
    {id: 2, label: 'MQTT', group: 'mqtt', x:400 , y:500},
    {id: 3, label: 'Leonie Web', group: 'frontend', x:700 , y:200},
    {id: 4, label: 'Leonie Holo', group: 'frontend', x:700 , y:500},
    {id: 5, label: 'Leonie Face \n Recognition', group: 'frontend', x:700 , y:800}
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

var width = document.getElementById("mynetwork").clientWidth;
var height = document.getElementById("mynetwork").clientHeight;

var options = {
    groups: {
        backend: {color:{background:'#ffa34d'}},
        mqtt: {color:{background:'#f67575'}},
        frontend: {color:{background:'#1eb2a6'}}
    },
    physics: false,
    edges:{
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
        dragView: false,
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
            borderRadius: 0,
        },
        margin: 10,
        
    }
};


// initialize your network!
var network = new vis.Network(container, data, options);
network.once('stabilized', function() {
    network.moveTo({
        position: {x: 0, y: 0},
        offset: {x: -width/2, y: -height/2},
        scale: 0.5,
    })
})


