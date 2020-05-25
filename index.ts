import * as constants from './src/constants';
import { smoothDnD } from './src/container';
import * as dropHandlers from './src/dropHandlers';
import { ContainerOptions, SmoothDnDCreator } from './src/exportTypes';
import { ElementX } from './src/interfaces';

export * from './src/exportTypes';

export {
    constants,
    smoothDnD,
    dropHandlers,
};

function delegateProperty(from: any, to:any, propName: string) {
    Object.defineProperty(from, propName, {
        set: (val?: boolean) => {
            to[propName] = val;
        },
        get: () => to[propName]
    })
}
    
const deprecetedDefaultExport: SmoothDnDCreator = function(element: ElementX, options?: ContainerOptions) {
    console.warn('default export is deprecated. please use named export "smoothDnD"');
    return smoothDnD(element, options);
};

deprecetedDefaultExport.cancelDrag = function () {
    smoothDnD.cancelDrag();
}

deprecetedDefaultExport.isDragging = function () {
    return smoothDnD.isDragging();
}

delegateProperty(deprecetedDefaultExport, smoothDnD, 'useTransformForGhost');
delegateProperty(deprecetedDefaultExport, smoothDnD, 'maxScrollSpeed');
delegateProperty(deprecetedDefaultExport, smoothDnD, 'wrapChild');
delegateProperty(deprecetedDefaultExport, smoothDnD, 'dropHandler');


export default deprecetedDefaultExport;
