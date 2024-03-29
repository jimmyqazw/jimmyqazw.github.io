
if (typeof gdjs.evtsExt__fade__Fadeout !== "undefined") {
  gdjs.evtsExt__fade__Fadeout.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__fade__Fadeout = {};
gdjs.evtsExt__fade__Fadeout.GDObjectObjects1= [];
gdjs.evtsExt__fade__Fadeout.GDObjectObjects2= [];

gdjs.evtsExt__fade__Fadeout.conditionTrue_0 = {val:false};
gdjs.evtsExt__fade__Fadeout.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__fade__Fadeout.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__fade__Fadeout.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__fade__Fadeout.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__fade__Fadeout.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__fade__Fadeout.GDObjectObjects1[i].setOpacity(gdjs.evtsExt__fade__Fadeout.GDObjectObjects1[i].getOpacity() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 300));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__fade__Fadeout.GDObjectObjects1);

gdjs.evtsExt__fade__Fadeout.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__fade__Fadeout.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__fade__Fadeout.GDObjectObjects1[i].getOpacity() >= 255 ) {
        gdjs.evtsExt__fade__Fadeout.condition0IsTrue_0.val = true;
        gdjs.evtsExt__fade__Fadeout.GDObjectObjects1[k] = gdjs.evtsExt__fade__Fadeout.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__fade__Fadeout.GDObjectObjects1.length = k;}if (gdjs.evtsExt__fade__Fadeout.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Scene") : ""), false);
}}

}


};

gdjs.evtsExt__fade__Fadeout.func = function(runtimeScene, Object, _, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": gdjs.objectsListsToArray(Object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__fade__Fadeout.GDObjectObjects1.length = 0;
gdjs.evtsExt__fade__Fadeout.GDObjectObjects2.length = 0;

gdjs.evtsExt__fade__Fadeout.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__fade__Fadeout.registeredGdjsCallbacks = [];