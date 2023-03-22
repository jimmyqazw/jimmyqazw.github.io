
if (typeof gdjs.evtsExt__MPlusGameServer__CreateGameRoom !== "undefined") {
  gdjs.evtsExt__MPlusGameServer__CreateGameRoom.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MPlusGameServer__CreateGameRoom = {};

gdjs.evtsExt__MPlusGameServer__CreateGameRoom.conditionTrue_0 = {val:false};
gdjs.evtsExt__MPlusGameServer__CreateGameRoom.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MPlusGameServer__CreateGameRoom.userFunc0x9e1ab0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    let maxPlayer = eventsFunctionContext.getArgument("maxPlayer");
    gdjs.evtTools.MplusGameServer.createGameRoom(maxPlayer, null, function() {
        // handle the error event when game already start.
        alert('加入遊戲失敗，遊戲已在進行中!');
    });
} catch(e) {
    console.error(e);
}
};
gdjs.evtsExt__MPlusGameServer__CreateGameRoom.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MPlusGameServer__CreateGameRoom.userFunc0x9e1ab0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MPlusGameServer__CreateGameRoom.func = function(runtimeScene, maxPlayer, parentEventsFunctionContext) {
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
if (argName === "maxPlayer") return maxPlayer;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MPlusGameServer__CreateGameRoom.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__MPlusGameServer__CreateGameRoom.registeredGdjsCallbacks = [];