
if (typeof gdjs.evtsExt__MPlusGameServer__GetGameRoom !== "undefined") {
  gdjs.evtsExt__MPlusGameServer__GetGameRoom.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MPlusGameServer__GetGameRoom = {};

gdjs.evtsExt__MPlusGameServer__GetGameRoom.conditionTrue_0 = {val:false};
gdjs.evtsExt__MPlusGameServer__GetGameRoom.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MPlusGameServer__GetGameRoom.userFunc0x9e1ab0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
try {
    gdjs.evtTools.MplusGameServer.getGameRoom(function(r) {
        if (r.gameSession) {
            // Edit your action when you get game information
            let vs = runtimeScene.getGame().getVariables();
            vs.get("gameSession").setString(JSON.stringify(r.gameSession));
            
        }
        if (r.onlinePlayers) {
            // Edit your action when you get game information
            let vs = runtimeScene.getGame().getVariables();
            vs.get("onlinePlayers").setString(JSON.stringify(r.onlinePlayers));
            //console.log(r.onlinePlayers);
            vs.get("playernum").setNumber(r.onlinePlayers.length);
        }
        /*
            {
            "gameSession": {
                "roomId": "string",
                "createTime": 0,
                "startTime": 0,
                "endTime": 0
            },
            "onlinePlayers": [
                {
                "userId": "string",
                "available": "string",
                "lastTimeUsed": 0,
                "roomId": "string",
                "playerId": 0,
                "createTime": 0,
                "clientId": "string",
                "nickname": "string",
                "iconUrl": "string"
                }
            ]
            }
        */
    }, gdjs.evtTools.MplusGameServer._error);
} catch(e) {
    console.error(e);
}
};
gdjs.evtsExt__MPlusGameServer__GetGameRoom.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MPlusGameServer__GetGameRoom.userFunc0x9e1ab0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MPlusGameServer__GetGameRoom.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MPlusGameServer__GetGameRoom.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__MPlusGameServer__GetGameRoom.registeredGdjsCallbacks = [];