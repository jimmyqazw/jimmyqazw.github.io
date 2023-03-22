
if (typeof gdjs.evtsExt__MPlusGameServer__OnConnect !== "undefined") {
  gdjs.evtsExt__MPlusGameServer__OnConnect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MPlusGameServer__OnConnect = {};

gdjs.evtsExt__MPlusGameServer__OnConnect.conditionTrue_0 = {val:false};
gdjs.evtsExt__MPlusGameServer__OnConnect.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MPlusGameServer__OnConnect.userFunc0x9e1ab0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.evtTools.MplusGameServer.event.connect = function(clientId) {
    try {
        console.log("webSocket connect:" + clientId);
        // Edit your action when the webSocket connect
        gdjs.evtTools.player_Id = []
        gdjs.evtTools.player_objects = []

        
        let vs = runtimeScene.getGame().getVariables();
        vs.get("clientId").setString(clientId);
        gdjs.evtTools.player_Id.push(clientId);

        //Check if nickname is null, if it is not, send the nickname
        const name = vs.get("nickname").getAsString() && vs.get("nickname").getAsString() != "0" ? vs.get("nickname").getAsString() : null;

        gdjs.evtTools.MplusGameServer.playerJoin(clientId, name, function() {
            gdjs.evtTools.MplusGameServer.getPlayer(clientId, function(r) {
                // Config webSocket connect state
                vs.get("IsConnect").setBoolean(true);
                console.log("IsConnect:", vs.get("IsConnect").getAsBoolean())
                if (r) {
                    // Edit your action when you get player information
                    vs.get("myPlayerId").setNumber(r.playerId);
                    vs.get("player").setString(JSON.stringify(r));
                    vs.get("userId").setString(r.userId);
                    vs.get("nickname").setString(r.nickname);
                    vs.get("iconUrl").setString(r.iconUrl);
                    vs.get("lastTimeUsed").setString(r.lastTimeUsed);

                    const m = {
                        'event':'PlayerJoined',
                        'clientId':clientId,
                        'clientPlayerID':r.playerId,
                        'clientName':r.nickname,
                        'lastTimeUsed':r.lastTimeUsed
                    }
                    gdjs.evtTools.MplusGameServer.event.sendJsonMessage(m)

                    console.log("OnConnect Last Time Used: " + r.lastTimeUsed)
                    /* 
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
                    */
                }
            }, gdjs.evtTools.MplusGameServer._error);
        }, gdjs.evtTools.MplusGameServer._error);
    } catch(e) {
        console.error(e);
    }
};
};
gdjs.evtsExt__MPlusGameServer__OnConnect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MPlusGameServer__OnConnect.userFunc0x9e1ab0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MPlusGameServer__OnConnect.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__MPlusGameServer__OnConnect.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__MPlusGameServer__OnConnect.registeredGdjsCallbacks = [];