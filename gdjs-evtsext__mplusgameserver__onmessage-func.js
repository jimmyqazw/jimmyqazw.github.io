
if (typeof gdjs.evtsExt__MPlusGameServer__OnMessage !== "undefined") {
  gdjs.evtsExt__MPlusGameServer__OnMessage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MPlusGameServer__OnMessage = {};

gdjs.evtsExt__MPlusGameServer__OnMessage.conditionTrue_0 = {val:false};
gdjs.evtsExt__MPlusGameServer__OnMessage.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__MPlusGameServer__OnMessage.userFunc0x9e1ab0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.evtTools.MplusGameServer.event.message = function(topic, message) {
    try {
        let m = message;
        try {
            m = JSON.parse(message);
            console.log("recive message from " + topic + " : " + JSON.stringify(m));    
        } catch(ex){ 
            console.log("recive message from " + topic + " : " + m);
        }
        // automatic upload score when revice event all playes finish
        console.log(m);
        const g = runtimeScene.getGame();
        let score = g.getVariables().get("Score").getAsString();
        let userId = g.getVariables().get("userId").getAsString();
        let clientId = g.getVariables().get("clientId").getAsString();
        if (m.event && m.event == 'allPlayersFinish' && m.userId != userId) {
            if (score) {
                gdjs.evtTools.MplusGameServer.uploadScore(userId, score, null, gdjs.evtTools.MplusGameServer._error);
            }
        }
        if (m.clientInitiatedDisconnect === false) {
            if (m.clientId == clientId) {
                // Edit your action when this player disconnect
            } else {
                // Edit your action when others player disconnect
            }
        }
        if (m.event){
            if (m.event == 'PlayerJoined'){

                if( m.clientId != clientId && !gdjs.evtTools.player_Id.includes(m.clientId)){
                    const PlayerIDs = g.getVariables().get("PlayerIDs");
                    const TimeArray = g.getVariables().get("TimeArray");
                    gdjs.evtTools.player_Id.push(m.clientId);
                    g.getVariables().get(m.clientId + "_lastTimeUsed").setNumber(m.lastTimeUsed);
                    
                    const player = 
                    {
                        'PlayerID' : m.clientId,
                        'Name' : m.clientName,
                        'PlayerNumber' : m.clientPlayerID,
                        'lastTimeUsed' : m.lastTimeUsed, 
                    };

                    //Debug Message
                    PlayerIDs.addChild("Player" + m.clientId, player);
                    console.log("PlayerJoined Got Item: \nID => " + PlayerIDs.getChild("Player" + m.clientId)['PlayerID']
                    + "\nName => " + PlayerIDs.getChild("Player" + m.clientId)['Name']
                    + "\nPlayer Number => " + PlayerIDs.getChild("Player" + m.clientId)['PlayerNumber']
                    + "\nLast time Used => " + PlayerIDs.getChild("Player" + m.clientId)['lastTimeUsed']
                    );
                    
                    //Response Event
                    const response = {
                            'event':'PlayerJoined',
                            'clientId':clientId,
                            'clientPlayerID':g.getVariables().get("myPlayerId").getAsString(),
                            'clientName':g.getVariables().get("PlayerName").getAsString(),
                            'lastTimeUsed': g.getVariables().get("lastTimeUsed").getAsString()
                    };
                    gdjs.evtTools.MplusGameServer.event.sendJsonMessage(response);

                    console.log('new player joined' + m.clientId);
                }

                //Calculate the player's number.
                let order = 1;
                for(let i = 0; i < gdjs.evtTools.player_Id.length; i++){
                    
                    if(gdjs.evtTools.player_Id[i] == clientId){ 
                        console.log("ID is the same, skip!");
                        continue; 
                    }

                    console.log("Add order logic | " + g.getVariables().get(gdjs.evtTools.player_Id[i]+ "_lastTimeUsed").getAsNumber());
                    if(g.getVariables().get(gdjs.evtTools.player_Id[i]+ "_lastTimeUsed").getAsNumber() <= g.getVariables().get("lastTimeUsed").getAsNumber()){
                        console.log("Found someone earlier...order + 1");
                        order++;
                    }
                    
                }

                g.getVariables().get("myPlayerId").setString(order);

            }

            if (m.event == 'startGame') {
                let vs = runtimeScene.getGame().getVariables();
                vs.get("IsStarted").setBoolean(true);
            }
            if (m.event == "fire"){
                const o = gdjs.evtTools.player_objects.find((o) => o.player_Id === m.clientId && g.getVariables().get("clientId"));
                if (typeof o === 'undefined'){return}
                g.getVariables().get("fire").setString("1");
                g.getVariables().get("bulletX2").setString(m.bulletX);
                g.getVariables().get("bulletY2").setString(m.bulletY);
                g.getVariables().get("bulletAngle2").setString(m.bulletAngle);
            }if (m.event == "Rick"){
                const o = gdjs.evtTools.player_objects.find((o) => o.player_Id === m.clientId && g.getVariables().get("clientId"));
                if (typeof o === 'undefined'){return}
                g.getVariables().get("Rick").setString("1");
            }if (m.event == "meteorite"){
                const o = gdjs.evtTools.player_objects.find((o) => o.player_Id === m.clientId && g.getVariables().get("clientId"));
                if (typeof o === 'undefined'){return}
                g.getVariables().get("meteorite").setString("1");
                
            }if (m.event == "die"){
                g.getVariables().get("Name2").setString(m.name);
            }if (m.event == "explore"){
                const o = gdjs.evtTools.player_objects.find((o) => o.player_Id === m.clientId && g.getVariables().get("clientId"));
                if (typeof o === 'undefined'){return}
                g.getVariables().get("shipexplore").setString("1");
                 g.getVariables().get("dieX2").setNumber(m.dieX);
                 g.getVariables().get("dieY2").setNumber(m.dieY);
            }if (m.event == "score"){
                
                g.getVariables().get("playerName0").setString(m.playerName0);
                g.getVariables().get("playerName1").setString(m.playerName1);
                g.getVariables().get("playerName2").setString(m.playerName2);
                g.getVariables().get("playerName3").setString(m.playerName3);
                g.getVariables().get("playerName4").setString(m.playerName4);
            }if (m.event == "maxplayer"){
                g.getVariables().get("Maxplayer").setString(m.maxplayer);
                g.getVariables().get("notmax").setString("1");
            }if (m.event == "RedPotion"){
                const o = gdjs.evtTools.player_objects.find((o) => o.player_Id === m.clientId && g.getVariables().get("clientId"));
                if (typeof o === 'undefined'){return}
                g.getVariables().get("redpoition").setString("1");
                g.getVariables().get("potionx").setNumber(m.potionx);
                g.getVariables().get("potiony").setNumber(m.potiony);
            }if (m.event == "YellowPotion"){
                const o = gdjs.evtTools.player_objects.find((o) => o.player_Id === m.clientId && g.getVariables().get("clientId"));
                if (typeof o === 'undefined'){return}
                g.getVariables().get("yellowpoition").setString("1");
                g.getVariables().get("potionx").setNumber(m.potionx);
                g.getVariables().get("potiony").setNumber(m.potiony);

            }if (m.event == "cube"){
                const o = gdjs.evtTools.player_objects.find((o) => o.player_Id === m.clientId && g.getVariables().get("clientId"));
                if (typeof o === 'undefined'){return}
                g.getVariables().get("cube").setString("1");
            }

            // Add your events here...
            if (m.event == 'UpdatePosition'){
                const o = gdjs.evtTools.player_objects.find((o) => o.player_Id === m.clientId);
                if (typeof o === 'undefined'){return}
                o.setX(m.X);
                o.setY(m.Y);
                o.setAngle(m.angle);
                g.getVariables().get("fuelx2").setNumber(m.fuelx);
                g.getVariables().get("fuely2").setNumber(m.fuely);
                g.getVariables().get("fuel").setString("1");
            }
            if (m.event == "holechange"){
                const o = gdjs.evtTools.player_objects.find((o) => o.player_Id === m.clientId && g.getVariables().get("clientId"));
                if (typeof o === 'undefined'){return}
                g.getVariables().get("holechange").setNumber(m.holechange);

            }
        }
        // Edit your action when reivce message from webSocket
    } catch(e) {
        console.error(e);
    }
};
};
gdjs.evtsExt__MPlusGameServer__OnMessage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MPlusGameServer__OnMessage.userFunc0x9e1ab0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MPlusGameServer__OnMessage.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__MPlusGameServer__OnMessage.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

gdjs.evtsExt__MPlusGameServer__OnMessage.registeredGdjsCallbacks = [];