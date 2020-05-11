var width = document.getElementById("mynetwork").clientWidth; //754 1536
var height = document.getElementById("mynetwork").clientHeight;

// create an array with nodes
var nodes = new vis.DataSet([
    {id: 1, label: 'NODE JS\nBackend', group: 'backend', x:300 , y:height/3*2, margin: {left: 45, right: 45, top: 32, bottom: 32}},
    {id: 2, label: 'MQTT', group: 'mqtt', x:700 , y:height/3*2},
    {id: 3, label: 'Leonie WEB', group: 'frontend', x:1100 , y:height/3, margin: {left: 20, right: 20}},
    {id: 4, label: 'Leonie HOLO', group: 'frontend', x:1100 , y:height/3*2, margin: {left: 15, right: 15}},
    {id: 5, label: 'Leonie Face\nReco.', group: 'frontend', x:1100 , y:height, margin: {left: 30, right: 30, top: 32, bottom: 32}},
    {id: 6, group: 'icons', shape: 'image', image: {unselected: './assets/icons/cloud.png'}, x:-0 , y:height/3*2},
    {id: 7, group: 'icons', shape: 'image', image: {unselected: './assets/icons/speaker.png'}, x:1400 , y:height/3-100, imagePadding: {top: 30,left: 30}, size: 90},
    {id: 8, group: 'icons', shape: 'image', image: {unselected: './assets/icons/microphone.png'}, x:1400 , y:height/3+100, size: 80},
    {id: 9, group: 'icons', shape: 'image', image: {unselected: './assets/icons/pyramid.png'}, x:1400 , y:height/3*2},
    {id: 10, group: 'icons', shape: 'image', image: {unselected: './assets/icons/camera.png'}, x:1400 , y:height, imagePadding: {bottom: 30,left: 30}, size: 100}
]);

// create an array with edges
var edges = new vis.DataSet([
    {from: 1, to: 2},
    {from: 2, to: 3},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 6, to: 1},
    {from: 3, to: 7},
    {from: 3, to: 8},
    {from: 4, to: 9},
    {from: 5, to: 10}
]);

// create a network
var container = document.getElementById('mynetwork');

// provide the data in the vis format
var data = {
    nodes: nodes,
    edges: edges
};

var options = {
    width: width + 'px',
    height: height + 'px',
    groups: {
        backend: {color:{background:'#7D90B5'}},
        mqtt: {color:{background:'#BAD8FF'}, margin:45},
        frontend: {color:{background:'#FF975E'}},
        icons: {size: 90}
    },
    physics: false,
    edges:{
        color: 'black',
        font: '12px MyAsap #000000',
        scaling:{
          label: false,
        },
        shadow: true,
        smooth: true,
        width: 2,
      },
    interaction:{
        dragNodes: false,
        dragView: false,
    },
    nodes: {
        borderWidth: 0,
        scaling: {
            label: false,
        },
        font: {
            color: '#000000',
            size: 30,
            face: 'MyAsap',
        },
        shape: 'box',
        shapeProperties: {
            borderRadius: 30,
        },
        margin: {
            top: 45,
            bottom: 45,
        }
    }
};


// initialize your network!
var network = new vis.Network(container, data, options);
network.once('stabilized', function() {
    network.moveTo({
        position: {x: 0, y: 0},
        offset: {x: -width/2, y: -height/2},
        scale: 2,
    })
})

function highlightNode(id) {
    var node = network.body.nodes[id];
    node.setOptions({
        borderWidth: 10,
        color: {
            border: '#FFDDA6',
        }
    });
}

highlightNode(5);