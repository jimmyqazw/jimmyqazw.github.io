gdjs.manuCode = {};
gdjs.manuCode.GDMusicButtonObjects1_1final = [];

gdjs.manuCode.GDSoundButtonObjects1_1final = [];

gdjs.manuCode.GDPlayerCountObjects1= [];
gdjs.manuCode.GDPlayerCountObjects2= [];
gdjs.manuCode.GDPlayerCountObjects3= [];
gdjs.manuCode.GDPlayerCountObjects4= [];
gdjs.manuCode.GDPlayerNameObjects1= [];
gdjs.manuCode.GDPlayerNameObjects2= [];
gdjs.manuCode.GDPlayerNameObjects3= [];
gdjs.manuCode.GDPlayerNameObjects4= [];
gdjs.manuCode.GDMusicButtonObjects1= [];
gdjs.manuCode.GDMusicButtonObjects2= [];
gdjs.manuCode.GDMusicButtonObjects3= [];
gdjs.manuCode.GDMusicButtonObjects4= [];
gdjs.manuCode.GDSoundButtonObjects1= [];
gdjs.manuCode.GDSoundButtonObjects2= [];
gdjs.manuCode.GDSoundButtonObjects3= [];
gdjs.manuCode.GDSoundButtonObjects4= [];
gdjs.manuCode.GDstartObjects1= [];
gdjs.manuCode.GDstartObjects2= [];
gdjs.manuCode.GDstartObjects3= [];
gdjs.manuCode.GDstartObjects4= [];
gdjs.manuCode.GDblackObjects1= [];
gdjs.manuCode.GDblackObjects2= [];
gdjs.manuCode.GDblackObjects3= [];
gdjs.manuCode.GDblackObjects4= [];
gdjs.manuCode.GDcometObjects1= [];
gdjs.manuCode.GDcometObjects2= [];
gdjs.manuCode.GDcometObjects3= [];
gdjs.manuCode.GDcometObjects4= [];
gdjs.manuCode.GDidObjects1= [];
gdjs.manuCode.GDidObjects2= [];
gdjs.manuCode.GDidObjects3= [];
gdjs.manuCode.GDidObjects4= [];
gdjs.manuCode.GDNewVideoObjects1= [];
gdjs.manuCode.GDNewVideoObjects2= [];
gdjs.manuCode.GDNewVideoObjects3= [];
gdjs.manuCode.GDNewVideoObjects4= [];

gdjs.manuCode.conditionTrue_0 = {val:false};
gdjs.manuCode.condition0IsTrue_0 = {val:false};
gdjs.manuCode.condition1IsTrue_0 = {val:false};
gdjs.manuCode.condition2IsTrue_0 = {val:false};
gdjs.manuCode.condition3IsTrue_0 = {val:false};
gdjs.manuCode.conditionTrue_1 = {val:false};
gdjs.manuCode.condition0IsTrue_1 = {val:false};
gdjs.manuCode.condition1IsTrue_1 = {val:false};
gdjs.manuCode.condition2IsTrue_1 = {val:false};
gdjs.manuCode.condition3IsTrue_1 = {val:false};


gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.manuCode.GDstartObjects1});
gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.manuCode.GDstartObjects1});
gdjs.manuCode.asyncCallback17086420 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("start"), gdjs.manuCode.GDstartObjects4);

{for(var i = 0, len = gdjs.manuCode.GDstartObjects4.length ;i < len;++i) {
    gdjs.manuCode.GDstartObjects4[i].getBehavior("Tween").addObjectAngleTween("", 0, "easeOutQuad", 200, false);
}
}}
gdjs.manuCode.eventsList0 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.manuCode.GDstartObjects3) asyncObjectsList.addObject("start", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.manuCode.asyncCallback17086420(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.manuCode.asyncCallback17085956 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("start"), gdjs.manuCode.GDstartObjects3);

{for(var i = 0, len = gdjs.manuCode.GDstartObjects3.length ;i < len;++i) {
    gdjs.manuCode.GDstartObjects3[i].getBehavior("Tween").addObjectAngleTween("", 3, "easeOutQuad", 200, false);
}
}
{ //Subevents
gdjs.manuCode.eventsList0(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.manuCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.manuCode.GDstartObjects2) asyncObjectsList.addObject("start", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.manuCode.asyncCallback17085956(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.manuCode.asyncCallback17085020 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("start"), gdjs.manuCode.GDstartObjects2);

{for(var i = 0, len = gdjs.manuCode.GDstartObjects2.length ;i < len;++i) {
    gdjs.manuCode.GDstartObjects2[i].getBehavior("Tween").addObjectAngleTween("", -(3), "easeOutQuad", 200, false);
}
}
{ //Subevents
gdjs.manuCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.manuCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.manuCode.GDstartObjects1) asyncObjectsList.addObject("start", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.manuCode.asyncCallback17085020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.manuCode.GDstartObjects1});
gdjs.manuCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.manuCode.GDstartObjects1);

gdjs.manuCode.condition0IsTrue_0.val = false;
gdjs.manuCode.condition1IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.manuCode.condition0IsTrue_0.val ) {
{
gdjs.manuCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.manuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.manuCode.GDblackObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(24), true);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Press Start......mp3", false, 70, 1);
}{for(var i = 0, len = gdjs.manuCode.GDblackObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDblackObjects1[i].setZOrder(11);
}
}{for(var i = 0, len = gdjs.manuCode.GDblackObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDblackObjects1[i].setOpacity(0);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("fade"), false);
}{gdjs.evtsExt__MPlusGameServer__StartGame.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDblackObjects1Objects = Hashtable.newFrom({"black": gdjs.manuCode.GDblackObjects1});
gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDblackObjects1Objects = Hashtable.newFrom({"black": gdjs.manuCode.GDblackObjects1});
gdjs.manuCode.asyncCallback17092220 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "main game", false);
}}
gdjs.manuCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.manuCode.asyncCallback17092220(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.manuCode.mapOfEmptyGDstartObjects = Hashtable.newFrom({"start": []});
gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDstartObjects1Objects = Hashtable.newFrom({"start": gdjs.manuCode.GDstartObjects1});
gdjs.manuCode.eventsList5 = function(runtimeScene) {

{


{
{runtimeScene.getGame().getVariables().getFromIndex(37).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(59)));
}}

}


};gdjs.manuCode.eventsList6 = function(runtimeScene) {

};gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDSoundButtonObjects2Objects = Hashtable.newFrom({"SoundButton": gdjs.manuCode.GDSoundButtonObjects2});
gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDMusicButtonObjects2Objects = Hashtable.newFrom({"MusicButton": gdjs.manuCode.GDMusicButtonObjects2});
gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDMusicButtonObjects1Objects = Hashtable.newFrom({"MusicButton": gdjs.manuCode.GDMusicButtonObjects1});
gdjs.manuCode.eventsList7 = function(runtimeScene) {

{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), true);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.manuCode.GDMusicButtonObjects1, gdjs.manuCode.GDMusicButtonObjects2);

{for(var i = 0, len = gdjs.manuCode.GDMusicButtonObjects2.length ;i < len;++i) {
    gdjs.manuCode.GDMusicButtonObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), false);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.manuCode.GDMusicButtonObjects1 */
{for(var i = 0, len = gdjs.manuCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDMusicButtonObjects1[i].setAnimation(2);
}
}}

}


};gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDSoundButtonObjects1Objects = Hashtable.newFrom({"SoundButton": gdjs.manuCode.GDSoundButtonObjects1});
gdjs.manuCode.eventsList8 = function(runtimeScene) {

{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), true);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.manuCode.GDSoundButtonObjects1, gdjs.manuCode.GDSoundButtonObjects2);

{for(var i = 0, len = gdjs.manuCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.manuCode.GDSoundButtonObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), false);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.manuCode.GDSoundButtonObjects1 */
{for(var i = 0, len = gdjs.manuCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDSoundButtonObjects1[i].setAnimation(2);
}
}}

}


};gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDMusicButtonObjects1Objects = Hashtable.newFrom({"MusicButton": gdjs.manuCode.GDMusicButtonObjects1});
gdjs.manuCode.eventsList9 = function(runtimeScene) {

{


gdjs.manuCode.condition0IsTrue_0.val = false;
gdjs.manuCode.condition1IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), true);
}if ( gdjs.manuCode.condition0IsTrue_0.val ) {
{
gdjs.manuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("click"), true);
}}
if (gdjs.manuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), false);
}{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 4);
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
gdjs.manuCode.condition1IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), false);
}if ( gdjs.manuCode.condition0IsTrue_0.val ) {
{
gdjs.manuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("click"), true);
}}
if (gdjs.manuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), false);
}{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 4);
}}

}


};gdjs.manuCode.eventsList10 = function(runtimeScene) {

{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.manuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)), 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), true);
}
{ //Subevents
gdjs.manuCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDSoundButtonObjects1Objects = Hashtable.newFrom({"SoundButton": gdjs.manuCode.GDSoundButtonObjects1});
gdjs.manuCode.eventsList11 = function(runtimeScene) {

{


gdjs.manuCode.condition0IsTrue_0.val = false;
gdjs.manuCode.condition1IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), true);
}if ( gdjs.manuCode.condition0IsTrue_0.val ) {
{
gdjs.manuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("click"), true);
}}
if (gdjs.manuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), false);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(-(100));
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
gdjs.manuCode.condition1IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), false);
}if ( gdjs.manuCode.condition0IsTrue_0.val ) {
{
gdjs.manuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("click"), true);
}}
if (gdjs.manuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), false);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(50);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)), 1);
}}

}


};gdjs.manuCode.eventsList12 = function(runtimeScene) {

{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), true);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.manuCode.GDSoundButtonObjects1, gdjs.manuCode.GDSoundButtonObjects2);

{for(var i = 0, len = gdjs.manuCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.manuCode.GDSoundButtonObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), false);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.manuCode.GDSoundButtonObjects1, gdjs.manuCode.GDSoundButtonObjects2);

{for(var i = 0, len = gdjs.manuCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.manuCode.GDSoundButtonObjects2[i].setAnimation(3);
}
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.manuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), true);
}
{ //Subevents
gdjs.manuCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.manuCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.manuCode.GDstartObjects1);

gdjs.manuCode.condition0IsTrue_0.val = false;
gdjs.manuCode.condition1IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDstartObjects1Objects, runtimeScene, true, false);
}if ( gdjs.manuCode.condition0IsTrue_0.val ) {
{
{gdjs.manuCode.conditionTrue_1 = gdjs.manuCode.condition1IsTrue_0;
gdjs.manuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17077156);
}
}}
if (gdjs.manuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.manuCode.GDstartObjects1 */
{for(var i = 0, len = gdjs.manuCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDstartObjects1[i].setColor("107;238;209");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Video Game Beep - Sound Effect.mp3", false, 20, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.manuCode.GDstartObjects1);

gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDstartObjects1Objects, runtimeScene, true, true);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.manuCode.GDstartObjects1 */
{for(var i = 0, len = gdjs.manuCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDstartObjects1[i].setColor("255;255;255");
}
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.manuCode.GDNewVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.manuCode.GDblackObjects1);
gdjs.copyArray(runtimeScene.getObjects("id"), gdjs.manuCode.GDidObjects1);
{for(var i = 0, len = gdjs.manuCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDNewVideoObjects1[i].play();
}
}{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Comet");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(32), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(33), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(24), false);
}{gdjs.evtsExt__MPlusGameServer__LocalDebug.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("RoomID")), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("nickname")), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MPlusGameServer__InitMplusGameServer.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MPlusGameServer__OnConnect.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MPlusGameServer__OnMessage.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MPlusGameServer__OnOffline.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MPlusGameServer__OnError.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MPlusGameServer__OnReconnect.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MPlusGameServer__OnClose.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MPlusGameServer__ConnectWebSocket.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MPlusGameServer__CreateGameRoom.func(runtimeScene, 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__MPlusGameServer__GetGameRoom.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), true);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(50);
}{for(var i = 0, len = gdjs.manuCode.GDblackObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDblackObjects1[i].setZOrder(11);
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Par ici les jetons ! - Super Paper Mario OST.mp3", 0, true, 20, 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("fade"), true);
}{for(var i = 0, len = gdjs.manuCode.GDidObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDidObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("RoomID")));
}
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "", 3, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.manuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.manuCode.GDstartObjects1);
{for(var i = 0, len = gdjs.manuCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDstartObjects1[i].getBehavior("Tween").addObjectAngleTween("", 3, "easeOutQuad", 200, false);
}
}
{ //Subevents
gdjs.manuCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(32), true);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PlayerName"), gdjs.manuCode.GDPlayerNameObjects1);
{for(var i = 0, len = gdjs.manuCode.GDPlayerNameObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDPlayerNameObjects1[i].setString("Name |" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("nickname")));
}
}
{ //Subevents
gdjs.manuCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.manuCode.GDblackObjects1);

gdjs.manuCode.condition0IsTrue_0.val = false;
gdjs.manuCode.condition1IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("fade"), true);
}if ( gdjs.manuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.manuCode.GDblackObjects1.length;i<l;++i) {
    if ( gdjs.manuCode.GDblackObjects1[i].getOpacity() > 0 ) {
        gdjs.manuCode.condition1IsTrue_0.val = true;
        gdjs.manuCode.GDblackObjects1[k] = gdjs.manuCode.GDblackObjects1[i];
        ++k;
    }
}
gdjs.manuCode.GDblackObjects1.length = k;}}
if (gdjs.manuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.manuCode.GDblackObjects1 */
{gdjs.evtsExt__fade__Fadein.func(runtimeScene, gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDblackObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("fade"), false);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.manuCode.GDblackObjects1);
{gdjs.evtsExt__fade__Fadeout.func(runtimeScene, gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDblackObjects1Objects, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
gdjs.manuCode.condition1IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(33), true);
}if ( gdjs.manuCode.condition0IsTrue_0.val ) {
{
{gdjs.manuCode.conditionTrue_1 = gdjs.manuCode.condition1IsTrue_0;
gdjs.manuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17091308);
}
}}
if (gdjs.manuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("fade"), false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Press Start......mp3", false, 70, 1);
}
{ //Subevents
gdjs.manuCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
gdjs.manuCode.condition1IsTrue_0.val = false;
gdjs.manuCode.condition2IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(38)) == 1;
}if ( gdjs.manuCode.condition0IsTrue_0.val ) {
{
gdjs.manuCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37)) > 1;
}if ( gdjs.manuCode.condition1IsTrue_0.val ) {
{
gdjs.manuCode.condition2IsTrue_0.val = gdjs.evtTools.object.getSceneInstancesCount((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.manuCode.mapOfEmptyGDstartObjects) == 0;
}}
}
if (gdjs.manuCode.condition2IsTrue_0.val) {
gdjs.manuCode.GDstartObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDstartObjects1Objects, 503, 515, "");
}{for(var i = 0, len = gdjs.manuCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDstartObjects1[i].setZOrder(10);
}
}{for(var i = 0, len = gdjs.manuCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDstartObjects1[i].setSize(247, 131);
}
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(38)) != 1;
}if (gdjs.manuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("start"), gdjs.manuCode.GDstartObjects1);
{for(var i = 0, len = gdjs.manuCode.GDstartObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDstartObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(38)) >= 6;
}if (gdjs.manuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "", 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.manuCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__MPlusGameServer__GetGameRoom.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.manuCode.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.manuCode.eventsList6(runtimeScene);
}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), true);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 0);
}}

}


{


gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), false);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 0);
}}

}


{

gdjs.manuCode.GDMusicButtonObjects1.length = 0;

gdjs.manuCode.GDSoundButtonObjects1.length = 0;


gdjs.manuCode.condition0IsTrue_0.val = false;
gdjs.manuCode.condition1IsTrue_0.val = false;
{
{gdjs.manuCode.conditionTrue_1 = gdjs.manuCode.condition0IsTrue_0;
gdjs.manuCode.GDMusicButtonObjects1_1final.length = 0;gdjs.manuCode.GDSoundButtonObjects1_1final.length = 0;gdjs.manuCode.condition0IsTrue_1.val = false;
gdjs.manuCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.manuCode.GDSoundButtonObjects2);
gdjs.manuCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDSoundButtonObjects2Objects, runtimeScene, true, false);
if( gdjs.manuCode.condition0IsTrue_1.val ) {
    gdjs.manuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.manuCode.GDSoundButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.manuCode.GDSoundButtonObjects1_1final.indexOf(gdjs.manuCode.GDSoundButtonObjects2[j]) === -1 )
            gdjs.manuCode.GDSoundButtonObjects1_1final.push(gdjs.manuCode.GDSoundButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.manuCode.GDMusicButtonObjects2);
gdjs.manuCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDMusicButtonObjects2Objects, runtimeScene, true, false);
if( gdjs.manuCode.condition1IsTrue_1.val ) {
    gdjs.manuCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.manuCode.GDMusicButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.manuCode.GDMusicButtonObjects1_1final.indexOf(gdjs.manuCode.GDMusicButtonObjects2[j]) === -1 )
            gdjs.manuCode.GDMusicButtonObjects1_1final.push(gdjs.manuCode.GDMusicButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.manuCode.GDMusicButtonObjects1_1final, gdjs.manuCode.GDMusicButtonObjects1);
gdjs.copyArray(gdjs.manuCode.GDSoundButtonObjects1_1final, gdjs.manuCode.GDSoundButtonObjects1);
}
}
}if ( gdjs.manuCode.condition0IsTrue_0.val ) {
{
{gdjs.manuCode.conditionTrue_1 = gdjs.manuCode.condition1IsTrue_0;
gdjs.manuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17098772);
}
}}
if (gdjs.manuCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Button.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.manuCode.GDMusicButtonObjects1);

gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDMusicButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.manuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.manuCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.manuCode.GDSoundButtonObjects1);

gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDSoundButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.manuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.manuCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton"), gdjs.manuCode.GDMusicButtonObjects1);

gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDMusicButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.manuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.manuCode.GDMusicButtonObjects1 */
{for(var i = 0, len = gdjs.manuCode.GDMusicButtonObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDMusicButtonObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.manuCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.manuCode.GDSoundButtonObjects1);

gdjs.manuCode.condition0IsTrue_0.val = false;
{
gdjs.manuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.manuCode.mapOfGDgdjs_46manuCode_46GDSoundButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.manuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.manuCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PlayerCount"), gdjs.manuCode.GDPlayerCountObjects1);
{for(var i = 0, len = gdjs.manuCode.GDPlayerCountObjects1.length ;i < len;++i) {
    gdjs.manuCode.GDPlayerCountObjects1[i].setString("player  count：" + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(37))));
}
}}

}


};

gdjs.manuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.manuCode.GDPlayerCountObjects1.length = 0;
gdjs.manuCode.GDPlayerCountObjects2.length = 0;
gdjs.manuCode.GDPlayerCountObjects3.length = 0;
gdjs.manuCode.GDPlayerCountObjects4.length = 0;
gdjs.manuCode.GDPlayerNameObjects1.length = 0;
gdjs.manuCode.GDPlayerNameObjects2.length = 0;
gdjs.manuCode.GDPlayerNameObjects3.length = 0;
gdjs.manuCode.GDPlayerNameObjects4.length = 0;
gdjs.manuCode.GDMusicButtonObjects1.length = 0;
gdjs.manuCode.GDMusicButtonObjects2.length = 0;
gdjs.manuCode.GDMusicButtonObjects3.length = 0;
gdjs.manuCode.GDMusicButtonObjects4.length = 0;
gdjs.manuCode.GDSoundButtonObjects1.length = 0;
gdjs.manuCode.GDSoundButtonObjects2.length = 0;
gdjs.manuCode.GDSoundButtonObjects3.length = 0;
gdjs.manuCode.GDSoundButtonObjects4.length = 0;
gdjs.manuCode.GDstartObjects1.length = 0;
gdjs.manuCode.GDstartObjects2.length = 0;
gdjs.manuCode.GDstartObjects3.length = 0;
gdjs.manuCode.GDstartObjects4.length = 0;
gdjs.manuCode.GDblackObjects1.length = 0;
gdjs.manuCode.GDblackObjects2.length = 0;
gdjs.manuCode.GDblackObjects3.length = 0;
gdjs.manuCode.GDblackObjects4.length = 0;
gdjs.manuCode.GDcometObjects1.length = 0;
gdjs.manuCode.GDcometObjects2.length = 0;
gdjs.manuCode.GDcometObjects3.length = 0;
gdjs.manuCode.GDcometObjects4.length = 0;
gdjs.manuCode.GDidObjects1.length = 0;
gdjs.manuCode.GDidObjects2.length = 0;
gdjs.manuCode.GDidObjects3.length = 0;
gdjs.manuCode.GDidObjects4.length = 0;
gdjs.manuCode.GDNewVideoObjects1.length = 0;
gdjs.manuCode.GDNewVideoObjects2.length = 0;
gdjs.manuCode.GDNewVideoObjects3.length = 0;
gdjs.manuCode.GDNewVideoObjects4.length = 0;

gdjs.manuCode.eventsList13(runtimeScene);
return;

}

gdjs['manuCode'] = gdjs.manuCode;
