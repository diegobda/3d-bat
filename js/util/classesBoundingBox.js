let classesBoundingBox = {
    "Vehicle": {
        color: '#51C38C',
        index: 0,
        nextTrackId: 1
    },
    "Truck": {
        color: '#EBCF36',
        index: 1,
        nextTrackId: 1
    },
    "Motorcycle": {
        color: '#FF604B',
        index: 2,
        nextTrackId: 1
    },
    "Bicycle": {
        color: '#F37CB2',
        index: 3,
        nextTrackId: 1

    },
    "Pedestrian": {
        color: '#74BAF5',
        index: 4,
        nextTrackId: 1
    },
    colorArray: ['#3ABB9D', '#4DA664', '#2F6CAD', '#4590B6', '#5CADCF', '#3585C5', '#2CA786', '#6ABB72', '#E66B5B', '#A28F85',
        '#F79E3D', '#75706B', '#EE7841', '#D1D5D8', '#CC4846', '#DC5047', '#28324E', '#EFEFEF', '#485675', '#F2D46F', '#533D7F',
        '#9069B5', '#F7C23E'],
    colorIdx: 0,
    content: [],
    add: function (label) {
        if (this.content[label] === undefined) {
            this.content[label] = {color: this.colorArray[this.colorIdx], index: this.colorIdx, nextTrackId: 1};
            this.colorIdx++;
        }
    },
    target: function () {
        if (labelTool.loadNuScenesLabels===true){
            return this.content[this.__target];
        }else{
            return this[this.__target];
        }

    },
    select: function (label) {
        this.onChange(label);
        if (annotationObjects.getSelectedBoundingBox() !== undefined) {
            annotationObjects.changeClass(annotationObjects.__selectionIndex, label);
        }
        this.__target = label;
    },
    onChange: function (label) {
        this.__target = label;
    },
    color: function (label) {
        return this[label].color;
    },
    targetName: function () {
        return this.__target;
    },
    __target: "Vehicle"
};