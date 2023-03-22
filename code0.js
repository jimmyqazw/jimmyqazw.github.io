gdjs.game_32startCode = {};
gdjs.game_32startCode.GDMusicButton3Objects1_1final = [];

gdjs.game_32startCode.GDSoundButtonObjects1_1final = [];

gdjs.game_32startCode.GDcreateroomObjects1_1final = [];

gdjs.game_32startCode.GDenterObjects1_1final = [];

gdjs.game_32startCode.GDidObjects1_1final = [];

gdjs.game_32startCode.GDidObjects2_1final = [];

gdjs.game_32startCode.GDjoingameObjects1_1final = [];

gdjs.game_32startCode.GDnameObjects1_1final = [];

gdjs.game_32startCode.GDnameObjects1= [];
gdjs.game_32startCode.GDnameObjects2= [];
gdjs.game_32startCode.GDnameObjects3= [];
gdjs.game_32startCode.GDblackObjects1= [];
gdjs.game_32startCode.GDblackObjects2= [];
gdjs.game_32startCode.GDblackObjects3= [];
gdjs.game_32startCode.GDidObjects1= [];
gdjs.game_32startCode.GDidObjects2= [];
gdjs.game_32startCode.GDidObjects3= [];
gdjs.game_32startCode.GDenterObjects1= [];
gdjs.game_32startCode.GDenterObjects2= [];
gdjs.game_32startCode.GDenterObjects3= [];
gdjs.game_32startCode.GDcreateroomObjects1= [];
gdjs.game_32startCode.GDcreateroomObjects2= [];
gdjs.game_32startCode.GDcreateroomObjects3= [];
gdjs.game_32startCode.GDjoingameObjects1= [];
gdjs.game_32startCode.GDjoingameObjects2= [];
gdjs.game_32startCode.GDjoingameObjects3= [];
gdjs.game_32startCode.GDwarnningObjects1= [];
gdjs.game_32startCode.GDwarnningObjects2= [];
gdjs.game_32startCode.GDwarnningObjects3= [];
gdjs.game_32startCode.GDstarObjects1= [];
gdjs.game_32startCode.GDstarObjects2= [];
gdjs.game_32startCode.GDstarObjects3= [];
gdjs.game_32startCode.GDcometObjects1= [];
gdjs.game_32startCode.GDcometObjects2= [];
gdjs.game_32startCode.GDcometObjects3= [];
gdjs.game_32startCode.GDMusicButton3Objects1= [];
gdjs.game_32startCode.GDMusicButton3Objects2= [];
gdjs.game_32startCode.GDMusicButton3Objects3= [];
gdjs.game_32startCode.GDSoundButtonObjects1= [];
gdjs.game_32startCode.GDSoundButtonObjects2= [];
gdjs.game_32startCode.GDSoundButtonObjects3= [];
gdjs.game_32startCode.GDNewVideoObjects1= [];
gdjs.game_32startCode.GDNewVideoObjects2= [];
gdjs.game_32startCode.GDNewVideoObjects3= [];

gdjs.game_32startCode.conditionTrue_0 = {val:false};
gdjs.game_32startCode.condition0IsTrue_0 = {val:false};
gdjs.game_32startCode.condition1IsTrue_0 = {val:false};
gdjs.game_32startCode.condition2IsTrue_0 = {val:false};
gdjs.game_32startCode.condition3IsTrue_0 = {val:false};
gdjs.game_32startCode.condition4IsTrue_0 = {val:false};
gdjs.game_32startCode.condition5IsTrue_0 = {val:false};
gdjs.game_32startCode.conditionTrue_1 = {val:false};
gdjs.game_32startCode.condition0IsTrue_1 = {val:false};
gdjs.game_32startCode.condition1IsTrue_1 = {val:false};
gdjs.game_32startCode.condition2IsTrue_1 = {val:false};
gdjs.game_32startCode.condition3IsTrue_1 = {val:false};
gdjs.game_32startCode.condition4IsTrue_1 = {val:false};
gdjs.game_32startCode.condition5IsTrue_1 = {val:false};
gdjs.game_32startCode.conditionTrue_2 = {val:false};
gdjs.game_32startCode.condition0IsTrue_2 = {val:false};
gdjs.game_32startCode.condition1IsTrue_2 = {val:false};
gdjs.game_32startCode.condition2IsTrue_2 = {val:false};
gdjs.game_32startCode.condition3IsTrue_2 = {val:false};
gdjs.game_32startCode.condition4IsTrue_2 = {val:false};
gdjs.game_32startCode.condition5IsTrue_2 = {val:false};


gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDblackObjects1Objects = Hashtable.newFrom({"black": gdjs.game_32startCode.GDblackObjects1});
gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDblackObjects1Objects = Hashtable.newFrom({"black": gdjs.game_32startCode.GDblackObjects1});
gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDjoingameObjects1Objects = Hashtable.newFrom({"joingame": gdjs.game_32startCode.GDjoingameObjects1});
gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDjoingameObjects1Objects = Hashtable.newFrom({"joingame": gdjs.game_32startCode.GDjoingameObjects1});
gdjs.game_32startCode.eventsList0 = function(runtimeScene) {

{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
{gdjs.game_32startCode.conditionTrue_1 = gdjs.game_32startCode.condition0IsTrue_0;
gdjs.game_32startCode.condition0IsTrue_1.val = false;
gdjs.game_32startCode.condition1IsTrue_1.val = false;
{
gdjs.game_32startCode.condition0IsTrue_1.val = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
if( gdjs.game_32startCode.condition0IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
}
}
{
gdjs.game_32startCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.game_32startCode.condition1IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("id"), gdjs.game_32startCode.GDidObjects1);
gdjs.copyArray(runtimeScene.getObjects("warnning"), gdjs.game_32startCode.GDwarnningObjects1);
{for(var i = 0, len = gdjs.game_32startCode.GDwarnningObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDwarnningObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)), 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("needid"), true);
}{for(var i = 0, len = gdjs.game_32startCode.GDidObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDidObjects1[i].hide(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(24), false);
}}

}


};gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDenterObjects2Objects = Hashtable.newFrom({"enter": gdjs.game_32startCode.GDenterObjects2});
gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDcreateroomObjects2Objects = Hashtable.newFrom({"createroom": gdjs.game_32startCode.GDcreateroomObjects2});
gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDjoingameObjects2Objects = Hashtable.newFrom({"joingame": gdjs.game_32startCode.GDjoingameObjects2});
gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDSoundButtonObjects2Objects = Hashtable.newFrom({"SoundButton": gdjs.game_32startCode.GDSoundButtonObjects2});
gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDMusicButton3Objects2Objects = Hashtable.newFrom({"MusicButton3": gdjs.game_32startCode.GDMusicButton3Objects2});
gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDenterObjects1Objects = Hashtable.newFrom({"enter": gdjs.game_32startCode.GDenterObjects1});
gdjs.game_32startCode.eventsList1 = function(runtimeScene) {

{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
{gdjs.game_32startCode.conditionTrue_1 = gdjs.game_32startCode.condition0IsTrue_0;
gdjs.game_32startCode.condition0IsTrue_1.val = false;
gdjs.game_32startCode.condition1IsTrue_1.val = false;
{
gdjs.game_32startCode.condition0IsTrue_1.val = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
if( gdjs.game_32startCode.condition0IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
}
}
{
gdjs.game_32startCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.game_32startCode.condition1IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("warnning"), gdjs.game_32startCode.GDwarnningObjects1);
{for(var i = 0, len = gdjs.game_32startCode.GDwarnningObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDwarnningObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)), 1);
}}

}


};gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDcreateroomObjects1Objects = Hashtable.newFrom({"createroom": gdjs.game_32startCode.GDcreateroomObjects1});
gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDcreateroomObjects1Objects = Hashtable.newFrom({"createroom": gdjs.game_32startCode.GDcreateroomObjects1});
gdjs.game_32startCode.eventsList2 = function(runtimeScene) {

{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
{gdjs.game_32startCode.conditionTrue_1 = gdjs.game_32startCode.condition0IsTrue_0;
gdjs.game_32startCode.condition0IsTrue_1.val = false;
gdjs.game_32startCode.condition1IsTrue_1.val = false;
{
gdjs.game_32startCode.condition0IsTrue_1.val = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
if( gdjs.game_32startCode.condition0IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
}
}
{
gdjs.game_32startCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.game_32startCode.condition1IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
}
}
{
}
}
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("id"), gdjs.game_32startCode.GDidObjects1);
gdjs.copyArray(runtimeScene.getObjects("warnning"), gdjs.game_32startCode.GDwarnningObjects1);
{for(var i = 0, len = gdjs.game_32startCode.GDwarnningObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDwarnningObjects1[i].hide();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)), 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("needid"), false);
}{for(var i = 0, len = gdjs.game_32startCode.GDidObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDidObjects1[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(24), true);
}}

}


};gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDenterObjects1Objects = Hashtable.newFrom({"enter": gdjs.game_32startCode.GDenterObjects1});
gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDenterObjects1Objects = Hashtable.newFrom({"enter": gdjs.game_32startCode.GDenterObjects1});
gdjs.game_32startCode.asyncCallback17039612 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "manu", false);
}}
gdjs.game_32startCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.game_32startCode.asyncCallback17039612(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.game_32startCode.asyncCallback17041636 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "manu", false);
}}
gdjs.game_32startCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.game_32startCode.asyncCallback17041636(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.game_32startCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.game_32startCode.GDnameObjects2);
gdjs.game_32startCode.GDidObjects2.length = 0;


gdjs.game_32startCode.condition0IsTrue_0.val = false;
gdjs.game_32startCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.game_32startCode.GDnameObjects2.length;i<l;++i) {
    if ( gdjs.game_32startCode.GDnameObjects2[i].getString() != "" ) {
        gdjs.game_32startCode.condition0IsTrue_0.val = true;
        gdjs.game_32startCode.GDnameObjects2[k] = gdjs.game_32startCode.GDnameObjects2[i];
        ++k;
    }
}
gdjs.game_32startCode.GDnameObjects2.length = k;}if ( gdjs.game_32startCode.condition0IsTrue_0.val ) {
{
{gdjs.game_32startCode.conditionTrue_1 = gdjs.game_32startCode.condition1IsTrue_0;
gdjs.game_32startCode.GDidObjects2_1final.length = 0;gdjs.game_32startCode.condition0IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("id"), gdjs.game_32startCode.GDidObjects3);
{gdjs.game_32startCode.conditionTrue_2 = gdjs.game_32startCode.condition0IsTrue_1;
gdjs.game_32startCode.condition0IsTrue_2.val = false;
gdjs.game_32startCode.condition1IsTrue_2.val = false;
{
gdjs.game_32startCode.condition0IsTrue_2.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("needid"), true);
}if ( gdjs.game_32startCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.game_32startCode.GDidObjects3.length;i<l;++i) {
    if ( gdjs.game_32startCode.GDidObjects3[i].getString() != "" ) {
        gdjs.game_32startCode.condition1IsTrue_2.val = true;
        gdjs.game_32startCode.GDidObjects3[k] = gdjs.game_32startCode.GDidObjects3[i];
        ++k;
    }
}
gdjs.game_32startCode.GDidObjects3.length = k;}}
gdjs.game_32startCode.conditionTrue_2.val = true && gdjs.game_32startCode.condition0IsTrue_2.val && gdjs.game_32startCode.condition1IsTrue_2.val;
}
if( gdjs.game_32startCode.condition0IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.game_32startCode.GDidObjects3.length;j<jLen;++j) {
        if ( gdjs.game_32startCode.GDidObjects2_1final.indexOf(gdjs.game_32startCode.GDidObjects3[j]) === -1 )
            gdjs.game_32startCode.GDidObjects2_1final.push(gdjs.game_32startCode.GDidObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.game_32startCode.GDidObjects2_1final, gdjs.game_32startCode.GDidObjects2);
}
}
}}
if (gdjs.game_32startCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDidObjects2 */
/* Reuse gdjs.game_32startCode.GDnameObjects2 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("fade"), false);
}{runtimeScene.getGame().getVariables().get("RoomID").setString((( gdjs.game_32startCode.GDidObjects2.length === 0 ) ? "" :gdjs.game_32startCode.GDidObjects2[0].getString()));
}{for(var i = 0, len = gdjs.game_32startCode.GDidObjects2.length ;i < len;++i) {
    gdjs.game_32startCode.GDidObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.game_32startCode.GDnameObjects2.length ;i < len;++i) {
    gdjs.game_32startCode.GDnameObjects2[i].hide();
}
}{runtimeScene.getGame().getVariables().get("nickname").setString((( gdjs.game_32startCode.GDnameObjects2.length === 0 ) ? "" :gdjs.game_32startCode.GDnameObjects2[0].getString()));
}
{ //Subevents
gdjs.game_32startCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("id"), gdjs.game_32startCode.GDidObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.game_32startCode.GDnameObjects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
gdjs.game_32startCode.condition1IsTrue_0.val = false;
gdjs.game_32startCode.condition2IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("needid"), false);
}if ( gdjs.game_32startCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.game_32startCode.GDidObjects1.length;i<l;++i) {
    if ( gdjs.game_32startCode.GDidObjects1[i].getString() == "" ) {
        gdjs.game_32startCode.condition1IsTrue_0.val = true;
        gdjs.game_32startCode.GDidObjects1[k] = gdjs.game_32startCode.GDidObjects1[i];
        ++k;
    }
}
gdjs.game_32startCode.GDidObjects1.length = k;}if ( gdjs.game_32startCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.game_32startCode.GDnameObjects1.length;i<l;++i) {
    if ( gdjs.game_32startCode.GDnameObjects1[i].getString() != "" ) {
        gdjs.game_32startCode.condition2IsTrue_0.val = true;
        gdjs.game_32startCode.GDnameObjects1[k] = gdjs.game_32startCode.GDnameObjects1[i];
        ++k;
    }
}
gdjs.game_32startCode.GDnameObjects1.length = k;}}
}
if (gdjs.game_32startCode.condition2IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDidObjects1 */
/* Reuse gdjs.game_32startCode.GDnameObjects1 */
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("fade"), false);
}{runtimeScene.getGame().getVariables().get("nickname").setString((( gdjs.game_32startCode.GDnameObjects1.length === 0 ) ? "" :gdjs.game_32startCode.GDnameObjects1[0].getString()));
}{for(var i = 0, len = gdjs.game_32startCode.GDidObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDidObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.game_32startCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDnameObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().get("RoomID").setString(gdjs.evtTools.common.toString(gdjs.randomInRange(100000, 999999)));
}
{ //Subevents
gdjs.game_32startCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDenterObjects1Objects = Hashtable.newFrom({"enter": gdjs.game_32startCode.GDenterObjects1});
gdjs.game_32startCode.eventsList6 = function(runtimeScene) {

{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
gdjs.game_32startCode.condition1IsTrue_0.val = false;
{
{gdjs.game_32startCode.conditionTrue_1 = gdjs.game_32startCode.condition0IsTrue_0;
gdjs.game_32startCode.condition0IsTrue_1.val = false;
gdjs.game_32startCode.condition1IsTrue_1.val = false;
{
gdjs.game_32startCode.condition0IsTrue_1.val = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
if( gdjs.game_32startCode.condition0IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
}
}
{
gdjs.game_32startCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if( gdjs.game_32startCode.condition1IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.game_32startCode.condition0IsTrue_0.val ) {
{
{gdjs.game_32startCode.conditionTrue_1 = gdjs.game_32startCode.condition1IsTrue_0;
gdjs.game_32startCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17044772);
}
}}
if (gdjs.game_32startCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("warnning"), gdjs.game_32startCode.GDwarnningObjects1);
{gdjs.evtsExt__CameraShake__CameraShake.func(runtimeScene, 20, 20, "", 0, 0.5, 0, 3, 0.09, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.game_32startCode.GDwarnningObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDwarnningObjects1[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Windows XP Error XP.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)), 1);
}}

}


};gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDMusicButton3Objects1Objects = Hashtable.newFrom({"MusicButton3": gdjs.game_32startCode.GDMusicButton3Objects1});
gdjs.game_32startCode.eventsList7 = function(runtimeScene) {

{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), true);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.game_32startCode.GDMusicButton3Objects1, gdjs.game_32startCode.GDMusicButton3Objects2);

{for(var i = 0, len = gdjs.game_32startCode.GDMusicButton3Objects2.length ;i < len;++i) {
    gdjs.game_32startCode.GDMusicButton3Objects2[i].setAnimation(0);
}
}}

}


{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), false);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDMusicButton3Objects1 */
{for(var i = 0, len = gdjs.game_32startCode.GDMusicButton3Objects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDMusicButton3Objects1[i].setAnimation(2);
}
}}

}


};gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDSoundButtonObjects1Objects = Hashtable.newFrom({"SoundButton": gdjs.game_32startCode.GDSoundButtonObjects1});
gdjs.game_32startCode.eventsList8 = function(runtimeScene) {

{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), true);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.game_32startCode.GDSoundButtonObjects1, gdjs.game_32startCode.GDSoundButtonObjects2);

{for(var i = 0, len = gdjs.game_32startCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.game_32startCode.GDSoundButtonObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), false);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDSoundButtonObjects1 */
{for(var i = 0, len = gdjs.game_32startCode.GDSoundButtonObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDSoundButtonObjects1[i].setAnimation(2);
}
}}

}


};gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDMusicButton3Objects1Objects = Hashtable.newFrom({"MusicButton3": gdjs.game_32startCode.GDMusicButton3Objects1});
gdjs.game_32startCode.eventsList9 = function(runtimeScene) {

{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
gdjs.game_32startCode.condition1IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), true);
}if ( gdjs.game_32startCode.condition0IsTrue_0.val ) {
{
gdjs.game_32startCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("click"), true);
}}
if (gdjs.game_32startCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), false);
}}

}


{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
gdjs.game_32startCode.condition1IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), false);
}if ( gdjs.game_32startCode.condition0IsTrue_0.val ) {
{
gdjs.game_32startCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("click"), true);
}}
if (gdjs.game_32startCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), false);
}}

}


};gdjs.game_32startCode.eventsList10 = function(runtimeScene) {

{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)), 1);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), true);
}
{ //Subevents
gdjs.game_32startCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDSoundButtonObjects1Objects = Hashtable.newFrom({"SoundButton": gdjs.game_32startCode.GDSoundButtonObjects1});
gdjs.game_32startCode.eventsList11 = function(runtimeScene) {

{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
gdjs.game_32startCode.condition1IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), true);
}if ( gdjs.game_32startCode.condition0IsTrue_0.val ) {
{
gdjs.game_32startCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("click"), true);
}}
if (gdjs.game_32startCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), false);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(-(100));
}}

}


{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
gdjs.game_32startCode.condition1IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), false);
}if ( gdjs.game_32startCode.condition0IsTrue_0.val ) {
{
gdjs.game_32startCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("click"), true);
}}
if (gdjs.game_32startCode.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), false);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(50);
}{gdjs.evtTools.sound.playSound(runtimeScene, "click.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)), 1);
}}

}


};gdjs.game_32startCode.eventsList12 = function(runtimeScene) {

{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), true);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.game_32startCode.GDSoundButtonObjects1, gdjs.game_32startCode.GDSoundButtonObjects2);

{for(var i = 0, len = gdjs.game_32startCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.game_32startCode.GDSoundButtonObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), false);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.game_32startCode.GDSoundButtonObjects1, gdjs.game_32startCode.GDSoundButtonObjects2);

{for(var i = 0, len = gdjs.game_32startCode.GDSoundButtonObjects2.length ;i < len;++i) {
    gdjs.game_32startCode.GDSoundButtonObjects2[i].setAnimation(3);
}
}}

}


{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("click"), true);
}
{ //Subevents
gdjs.game_32startCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.game_32startCode.eventsList13 = function(runtimeScene) {

{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("fade"), false);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.game_32startCode.GDblackObjects1);
{gdjs.evtsExt__fade__Fadeout.func(runtimeScene, gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDblackObjects1Objects, "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.game_32startCode.GDblackObjects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
gdjs.game_32startCode.condition1IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("fade"), true);
}if ( gdjs.game_32startCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.game_32startCode.GDblackObjects1.length;i<l;++i) {
    if ( gdjs.game_32startCode.GDblackObjects1[i].getOpacity() > 0 ) {
        gdjs.game_32startCode.condition1IsTrue_0.val = true;
        gdjs.game_32startCode.GDblackObjects1[k] = gdjs.game_32startCode.GDblackObjects1[i];
        ++k;
    }
}
gdjs.game_32startCode.GDblackObjects1.length = k;}}
if (gdjs.game_32startCode.condition1IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDblackObjects1 */
{gdjs.evtsExt__fade__Fadein.func(runtimeScene, gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDblackObjects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.game_32startCode.GDNewVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("black"), gdjs.game_32startCode.GDblackObjects1);
gdjs.copyArray(runtimeScene.getObjects("id"), gdjs.game_32startCode.GDidObjects1);
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.game_32startCode.GDnameObjects1);
gdjs.copyArray(runtimeScene.getObjects("star"), gdjs.game_32startCode.GDstarObjects1);
gdjs.copyArray(runtimeScene.getObjects("warnning"), gdjs.game_32startCode.GDwarnningObjects1);
{gdjs.evtTools.window.setWindowTitle(runtimeScene, "Comet");
}{for(var i = 0, len = gdjs.game_32startCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDstarObjects1[i].setPosition(369,-(216));
}
}{for(var i = 0, len = gdjs.game_32startCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDnameObjects1[i].setPosition(-(800),368);
}
}{for(var i = 0, len = gdjs.game_32startCode.GDidObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDidObjects1[i].setPosition(1600,464);
}
}{for(var i = 0, len = gdjs.game_32startCode.GDwarnningObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDwarnningObjects1[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("needid"), true);
}{runtimeScene.getGame().getVariables().get("RoomID").setString("<No Room ID Yet>");
}{runtimeScene.getGame().getVariables().get("StartGame").setString("");
}{runtimeScene.getGame().getVariables().getFromIndex(0).setString("");
}{runtimeScene.getGame().getVariables().get("SelfID").setString("");
}{runtimeScene.getGame().getVariables().get("CreatePlayerQueue").setString("");
}{runtimeScene.getGame().getVariables().getFromIndex(7).setString("");
}{runtimeScene.getGame().getVariables().get("nameSuccess").setString("");
}{for(var i = 0, len = gdjs.game_32startCode.GDstarObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDstarObjects1[i].getBehavior("Tween").addObjectPositionYTween("", 80, "bounce", 1000, false);
}
}{for(var i = 0, len = gdjs.game_32startCode.GDnameObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDnameObjects1[i].getBehavior("Tween").addObjectPositionXTween("", 350, "easeInOutCubic", 700, false);
}
}{for(var i = 0, len = gdjs.game_32startCode.GDidObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDidObjects1[i].getBehavior("Tween").addObjectPositionXTween("", 350, "easeInOutCubic", 700, false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(2);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(17), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), true);
}{runtimeScene.getGame().getVariables().getFromIndex(19).setNumber(10);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(24), false);
}{for(var i = 0, len = gdjs.game_32startCode.GDblackObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDblackObjects1[i].setZOrder(20);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getVariables().get("fade"), true);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "Par ici les jetons ! - Super Paper Mario OST.mp3", 0, true, 20, 1);
}{for(var i = 0, len = gdjs.game_32startCode.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDNewVideoObjects1[i].play();
}
}}

}


{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), true);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 0);
}}

}


{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(18), false);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("joingame"), gdjs.game_32startCode.GDjoingameObjects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDjoingameObjects1Objects, runtimeScene, true, true);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDjoingameObjects1 */
{for(var i = 0, len = gdjs.game_32startCode.GDjoingameObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDjoingameObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("joingame"), gdjs.game_32startCode.GDjoingameObjects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDjoingameObjects1Objects, runtimeScene, true, false);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDjoingameObjects1 */
{for(var i = 0, len = gdjs.game_32startCode.GDjoingameObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDjoingameObjects1[i].setColor("255;235;0");
}
}
{ //Subevents
gdjs.game_32startCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.game_32startCode.GDMusicButton3Objects1.length = 0;

gdjs.game_32startCode.GDSoundButtonObjects1.length = 0;

gdjs.game_32startCode.GDcreateroomObjects1.length = 0;

gdjs.game_32startCode.GDenterObjects1.length = 0;

gdjs.game_32startCode.GDjoingameObjects1.length = 0;


gdjs.game_32startCode.condition0IsTrue_0.val = false;
gdjs.game_32startCode.condition1IsTrue_0.val = false;
{
{gdjs.game_32startCode.conditionTrue_1 = gdjs.game_32startCode.condition0IsTrue_0;
gdjs.game_32startCode.GDMusicButton3Objects1_1final.length = 0;gdjs.game_32startCode.GDSoundButtonObjects1_1final.length = 0;gdjs.game_32startCode.GDcreateroomObjects1_1final.length = 0;gdjs.game_32startCode.GDenterObjects1_1final.length = 0;gdjs.game_32startCode.GDjoingameObjects1_1final.length = 0;gdjs.game_32startCode.condition0IsTrue_1.val = false;
gdjs.game_32startCode.condition1IsTrue_1.val = false;
gdjs.game_32startCode.condition2IsTrue_1.val = false;
gdjs.game_32startCode.condition3IsTrue_1.val = false;
gdjs.game_32startCode.condition4IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("enter"), gdjs.game_32startCode.GDenterObjects2);
gdjs.game_32startCode.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDenterObjects2Objects, runtimeScene, true, false);
if( gdjs.game_32startCode.condition0IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.game_32startCode.GDenterObjects2.length;j<jLen;++j) {
        if ( gdjs.game_32startCode.GDenterObjects1_1final.indexOf(gdjs.game_32startCode.GDenterObjects2[j]) === -1 )
            gdjs.game_32startCode.GDenterObjects1_1final.push(gdjs.game_32startCode.GDenterObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("createroom"), gdjs.game_32startCode.GDcreateroomObjects2);
gdjs.game_32startCode.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDcreateroomObjects2Objects, runtimeScene, true, false);
if( gdjs.game_32startCode.condition1IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.game_32startCode.GDcreateroomObjects2.length;j<jLen;++j) {
        if ( gdjs.game_32startCode.GDcreateroomObjects1_1final.indexOf(gdjs.game_32startCode.GDcreateroomObjects2[j]) === -1 )
            gdjs.game_32startCode.GDcreateroomObjects1_1final.push(gdjs.game_32startCode.GDcreateroomObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("joingame"), gdjs.game_32startCode.GDjoingameObjects2);
gdjs.game_32startCode.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDjoingameObjects2Objects, runtimeScene, true, false);
if( gdjs.game_32startCode.condition2IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.game_32startCode.GDjoingameObjects2.length;j<jLen;++j) {
        if ( gdjs.game_32startCode.GDjoingameObjects1_1final.indexOf(gdjs.game_32startCode.GDjoingameObjects2[j]) === -1 )
            gdjs.game_32startCode.GDjoingameObjects1_1final.push(gdjs.game_32startCode.GDjoingameObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.game_32startCode.GDSoundButtonObjects2);
gdjs.game_32startCode.condition3IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDSoundButtonObjects2Objects, runtimeScene, true, false);
if( gdjs.game_32startCode.condition3IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.game_32startCode.GDSoundButtonObjects2.length;j<jLen;++j) {
        if ( gdjs.game_32startCode.GDSoundButtonObjects1_1final.indexOf(gdjs.game_32startCode.GDSoundButtonObjects2[j]) === -1 )
            gdjs.game_32startCode.GDSoundButtonObjects1_1final.push(gdjs.game_32startCode.GDSoundButtonObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("MusicButton3"), gdjs.game_32startCode.GDMusicButton3Objects2);
gdjs.game_32startCode.condition4IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDMusicButton3Objects2Objects, runtimeScene, true, false);
if( gdjs.game_32startCode.condition4IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.game_32startCode.GDMusicButton3Objects2.length;j<jLen;++j) {
        if ( gdjs.game_32startCode.GDMusicButton3Objects1_1final.indexOf(gdjs.game_32startCode.GDMusicButton3Objects2[j]) === -1 )
            gdjs.game_32startCode.GDMusicButton3Objects1_1final.push(gdjs.game_32startCode.GDMusicButton3Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.game_32startCode.GDMusicButton3Objects1_1final, gdjs.game_32startCode.GDMusicButton3Objects1);
gdjs.copyArray(gdjs.game_32startCode.GDSoundButtonObjects1_1final, gdjs.game_32startCode.GDSoundButtonObjects1);
gdjs.copyArray(gdjs.game_32startCode.GDcreateroomObjects1_1final, gdjs.game_32startCode.GDcreateroomObjects1);
gdjs.copyArray(gdjs.game_32startCode.GDenterObjects1_1final, gdjs.game_32startCode.GDenterObjects1);
gdjs.copyArray(gdjs.game_32startCode.GDjoingameObjects1_1final, gdjs.game_32startCode.GDjoingameObjects1);
}
}
}if ( gdjs.game_32startCode.condition0IsTrue_0.val ) {
{
{gdjs.game_32startCode.conditionTrue_1 = gdjs.game_32startCode.condition1IsTrue_0;
gdjs.game_32startCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17026396);
}
}}
if (gdjs.game_32startCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Button.mp3", false, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(19)), 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enter"), gdjs.game_32startCode.GDenterObjects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDenterObjects1Objects, runtimeScene, true, false);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDenterObjects1 */
{for(var i = 0, len = gdjs.game_32startCode.GDenterObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDenterObjects1[i].setColor("255;235;0");
}
}
{ //Subevents
gdjs.game_32startCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("createroom"), gdjs.game_32startCode.GDcreateroomObjects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDcreateroomObjects1Objects, runtimeScene, true, true);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDcreateroomObjects1 */
{for(var i = 0, len = gdjs.game_32startCode.GDcreateroomObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDcreateroomObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("createroom"), gdjs.game_32startCode.GDcreateroomObjects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDcreateroomObjects1Objects, runtimeScene, true, false);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDcreateroomObjects1 */
{for(var i = 0, len = gdjs.game_32startCode.GDcreateroomObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDcreateroomObjects1[i].setColor("255;235;0");
}
}
{ //Subevents
gdjs.game_32startCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enter"), gdjs.game_32startCode.GDenterObjects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDenterObjects1Objects, runtimeScene, true, true);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDenterObjects1 */
{for(var i = 0, len = gdjs.game_32startCode.GDenterObjects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDenterObjects1[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("enter"), gdjs.game_32startCode.GDenterObjects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
gdjs.game_32startCode.condition1IsTrue_0.val = false;
gdjs.game_32startCode.condition2IsTrue_0.val = false;
{
{gdjs.game_32startCode.conditionTrue_1 = gdjs.game_32startCode.condition0IsTrue_0;
gdjs.game_32startCode.condition0IsTrue_1.val = false;
gdjs.game_32startCode.condition1IsTrue_1.val = false;
{
gdjs.game_32startCode.condition0IsTrue_1.val = gdjs.evtTools.input.hasAnyTouchStarted(runtimeScene);
if( gdjs.game_32startCode.condition0IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
}
}
{
gdjs.game_32startCode.condition1IsTrue_1.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if( gdjs.game_32startCode.condition1IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
}
}
{
}
}
}if ( gdjs.game_32startCode.condition0IsTrue_0.val ) {
{
gdjs.game_32startCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDenterObjects1Objects, runtimeScene, true, false);
}if ( gdjs.game_32startCode.condition1IsTrue_0.val ) {
{
{gdjs.game_32startCode.conditionTrue_1 = gdjs.game_32startCode.condition2IsTrue_0;
gdjs.game_32startCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(17037236);
}
}}
}
if (gdjs.game_32startCode.condition2IsTrue_0.val) {

{ //Subevents
gdjs.game_32startCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("enter"), gdjs.game_32startCode.GDenterObjects1);
gdjs.game_32startCode.GDidObjects1.length = 0;

gdjs.game_32startCode.GDnameObjects1.length = 0;


gdjs.game_32startCode.condition0IsTrue_0.val = false;
gdjs.game_32startCode.condition1IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDenterObjects1Objects, runtimeScene, true, false);
}if ( gdjs.game_32startCode.condition0IsTrue_0.val ) {
{
{gdjs.game_32startCode.conditionTrue_1 = gdjs.game_32startCode.condition1IsTrue_0;
gdjs.game_32startCode.GDidObjects1_1final.length = 0;gdjs.game_32startCode.GDnameObjects1_1final.length = 0;gdjs.game_32startCode.condition0IsTrue_1.val = false;
gdjs.game_32startCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("name"), gdjs.game_32startCode.GDnameObjects2);
for(var i = 0, k = 0, l = gdjs.game_32startCode.GDnameObjects2.length;i<l;++i) {
    if ( gdjs.game_32startCode.GDnameObjects2[i].getString() == "" ) {
        gdjs.game_32startCode.condition0IsTrue_1.val = true;
        gdjs.game_32startCode.GDnameObjects2[k] = gdjs.game_32startCode.GDnameObjects2[i];
        ++k;
    }
}
gdjs.game_32startCode.GDnameObjects2.length = k;if( gdjs.game_32startCode.condition0IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.game_32startCode.GDnameObjects2.length;j<jLen;++j) {
        if ( gdjs.game_32startCode.GDnameObjects1_1final.indexOf(gdjs.game_32startCode.GDnameObjects2[j]) === -1 )
            gdjs.game_32startCode.GDnameObjects1_1final.push(gdjs.game_32startCode.GDnameObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("id"), gdjs.game_32startCode.GDidObjects2);
{gdjs.game_32startCode.conditionTrue_2 = gdjs.game_32startCode.condition1IsTrue_1;
gdjs.game_32startCode.condition0IsTrue_2.val = false;
gdjs.game_32startCode.condition1IsTrue_2.val = false;
{
gdjs.game_32startCode.condition0IsTrue_2.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getVariables().get("needid"), true);
}if ( gdjs.game_32startCode.condition0IsTrue_2.val ) {
{
for(var i = 0, k = 0, l = gdjs.game_32startCode.GDidObjects2.length;i<l;++i) {
    if ( gdjs.game_32startCode.GDidObjects2[i].getString() == "" ) {
        gdjs.game_32startCode.condition1IsTrue_2.val = true;
        gdjs.game_32startCode.GDidObjects2[k] = gdjs.game_32startCode.GDidObjects2[i];
        ++k;
    }
}
gdjs.game_32startCode.GDidObjects2.length = k;}}
gdjs.game_32startCode.conditionTrue_2.val = true && gdjs.game_32startCode.condition0IsTrue_2.val && gdjs.game_32startCode.condition1IsTrue_2.val;
}
if( gdjs.game_32startCode.condition1IsTrue_1.val ) {
    gdjs.game_32startCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.game_32startCode.GDidObjects2.length;j<jLen;++j) {
        if ( gdjs.game_32startCode.GDidObjects1_1final.indexOf(gdjs.game_32startCode.GDidObjects2[j]) === -1 )
            gdjs.game_32startCode.GDidObjects1_1final.push(gdjs.game_32startCode.GDidObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.game_32startCode.GDidObjects1_1final, gdjs.game_32startCode.GDidObjects1);
gdjs.copyArray(gdjs.game_32startCode.GDnameObjects1_1final, gdjs.game_32startCode.GDnameObjects1);
}
}
}}
if (gdjs.game_32startCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.game_32startCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton3"), gdjs.game_32startCode.GDMusicButton3Objects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDMusicButton3Objects1Objects, runtimeScene, true, true);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.game_32startCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


{
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.game_32startCode.GDSoundButtonObjects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDSoundButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.game_32startCode.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("MusicButton3"), gdjs.game_32startCode.GDMusicButton3Objects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDMusicButton3Objects1Objects, runtimeScene, true, false);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
/* Reuse gdjs.game_32startCode.GDMusicButton3Objects1 */
{for(var i = 0, len = gdjs.game_32startCode.GDMusicButton3Objects1.length ;i < len;++i) {
    gdjs.game_32startCode.GDMusicButton3Objects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.game_32startCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SoundButton"), gdjs.game_32startCode.GDSoundButtonObjects1);

gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.game_32startCode.mapOfGDgdjs_46game_9532startCode_46GDSoundButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.game_32startCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) <= 2;
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(2);
}}

}


{


gdjs.game_32startCode.condition0IsTrue_0.val = false;
{
gdjs.game_32startCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(16)) >= 5;
}if (gdjs.game_32startCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(16).setNumber(5);
}}

}


};

gdjs.game_32startCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32startCode.GDnameObjects1.length = 0;
gdjs.game_32startCode.GDnameObjects2.length = 0;
gdjs.game_32startCode.GDnameObjects3.length = 0;
gdjs.game_32startCode.GDblackObjects1.length = 0;
gdjs.game_32startCode.GDblackObjects2.length = 0;
gdjs.game_32startCode.GDblackObjects3.length = 0;
gdjs.game_32startCode.GDidObjects1.length = 0;
gdjs.game_32startCode.GDidObjects2.length = 0;
gdjs.game_32startCode.GDidObjects3.length = 0;
gdjs.game_32startCode.GDenterObjects1.length = 0;
gdjs.game_32startCode.GDenterObjects2.length = 0;
gdjs.game_32startCode.GDenterObjects3.length = 0;
gdjs.game_32startCode.GDcreateroomObjects1.length = 0;
gdjs.game_32startCode.GDcreateroomObjects2.length = 0;
gdjs.game_32startCode.GDcreateroomObjects3.length = 0;
gdjs.game_32startCode.GDjoingameObjects1.length = 0;
gdjs.game_32startCode.GDjoingameObjects2.length = 0;
gdjs.game_32startCode.GDjoingameObjects3.length = 0;
gdjs.game_32startCode.GDwarnningObjects1.length = 0;
gdjs.game_32startCode.GDwarnningObjects2.length = 0;
gdjs.game_32startCode.GDwarnningObjects3.length = 0;
gdjs.game_32startCode.GDstarObjects1.length = 0;
gdjs.game_32startCode.GDstarObjects2.length = 0;
gdjs.game_32startCode.GDstarObjects3.length = 0;
gdjs.game_32startCode.GDcometObjects1.length = 0;
gdjs.game_32startCode.GDcometObjects2.length = 0;
gdjs.game_32startCode.GDcometObjects3.length = 0;
gdjs.game_32startCode.GDMusicButton3Objects1.length = 0;
gdjs.game_32startCode.GDMusicButton3Objects2.length = 0;
gdjs.game_32startCode.GDMusicButton3Objects3.length = 0;
gdjs.game_32startCode.GDSoundButtonObjects1.length = 0;
gdjs.game_32startCode.GDSoundButtonObjects2.length = 0;
gdjs.game_32startCode.GDSoundButtonObjects3.length = 0;
gdjs.game_32startCode.GDNewVideoObjects1.length = 0;
gdjs.game_32startCode.GDNewVideoObjects2.length = 0;
gdjs.game_32startCode.GDNewVideoObjects3.length = 0;

gdjs.game_32startCode.eventsList13(runtimeScene);
return;

}

gdjs['game_32startCode'] = gdjs.game_32startCode;
