import * as joint from 'jointjs';

export const portOptions = {
    groups: {
        'in': {
            label: {
                position: {
                    name: 'right',
                }
            }
        },
        'out': {
            label: {
                position: {
                    name: 'left',
                }
            },
        }
    }
};

export const createLink = function (source, sourcePort, target, targetPort, label) {
    var link = new joint.shapes.standard.Link({
        router: { name: 'manhattan' },
        connector: { name: 'rounded' },
        source: {
            id: source.id,
            port: sourcePort
        },
        target: {
            id: target.id,
            port: targetPort
        }
    });

    link.appendLabel({
        attrs: {
            text: {
                text: label || 'REF'
            },
            line: {
                strokeWidth: 4,
            }
        },
        body: {
            ref: 'label',
            fill: '#ffffff',
            stroke: 'red',
            strokeWidth: 2,
            refR: 1,
            refCx: 0,
            refCy: 0
        },
    });

    return link;
};

export const createPaper = function (paperDivElement, graph) {
    return new joint.dia.Paper({
        el: paperDivElement,
        width: '100%', 
        height: 800,
        gridSize: 1,
        model: graph,
        cellViewNamespace: joint.shapes,
    });
};