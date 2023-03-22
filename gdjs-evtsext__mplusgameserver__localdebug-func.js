
if (typeof gdjs.evtsExt__MPlusGameServer__LocalDebug !== "undefined") {
  gdjs.evtsExt__MPlusGameServer__LocalDebug.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MPlusGameServer__LocalDebug = {};

gdjs.evtsExt__MPlusGameServer__LocalDebug.conditionTrue_0 = {val:false};
gdjs.evtsExt__MPlusGameServer__LocalDebug.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MPlusGameServer__LocalDebug.userFunc0x9e1ab0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    let roomId = eventsFunctionContext.getArgument("roomId");
    let token = eventsFunctionContext.getArgument("token");
    let vs = runtimeScene.getGame().getVariables();
    vs.get("roomId").setString(roomId);
    vs.get("token").setString(token);
} catch(e) {
    console.error(e);
}
};
gdjs.evtsExt__MPlusGameServer__LocalDebug.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MPlusGameServer__LocalDebug.userFunc0x9e1ab0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MPlusGameServer__LocalDebug.func = function(runtimeScene, roomId, token, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "roomId") return roomId;
if (argName === "token") return token;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MPlusGameServer__LocalDebug.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__MPlusGameServer__LocalDebug.registeredGdjsCallbacks = [];