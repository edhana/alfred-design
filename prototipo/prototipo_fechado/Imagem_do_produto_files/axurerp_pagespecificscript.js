
var PageName = 'Imagem do produto';
var PageId = 'e94bc2dac970420a9b76b7668f898b34'
var PageUrl = 'Imagem_do_produto.html'
document.title = 'Imagem do produto';
var PageNotes = 
{
"pageName":"Imagem do produto",
"showNotesNames":"False"}
var $OnLoadVariable = '';

var $CSUM;

var hasQuery = false;
var query = window.location.hash.substring(1);
if (query.length > 0) hasQuery = true;
var vars = query.split("&");
for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (pair[0].length > 0) eval("$" + pair[0] + " = decodeURIComponent(pair[1]);");
} 

if (hasQuery && $CSUM != 1) {
alert('Prototype Warning: The variable values were too long to pass to this page.\nIf you are using IE, using Firefox will support more data.');
}

function GetQuerystring() {
    return '#OnLoadVariable=' + encodeURIComponent($OnLoadVariable) + '&CSUM=1';
}

function PopulateVariables(value) {
    var d = new Date();
  value = value.replace(/\[\[OnLoadVariable\]\]/g, $OnLoadVariable);
  value = value.replace(/\[\[PageName\]\]/g, PageName);
  value = value.replace(/\[\[GenDay\]\]/g, '4');
  value = value.replace(/\[\[GenMonth\]\]/g, '7');
  value = value.replace(/\[\[GenMonthName\]\]/g, 'July');
  value = value.replace(/\[\[GenDayOfWeek\]\]/g, 'Wednesday');
  value = value.replace(/\[\[GenYear\]\]/g, '2012');
  value = value.replace(/\[\[Day\]\]/g, d.getDate());
  value = value.replace(/\[\[Month\]\]/g, d.getMonth() + 1);
  value = value.replace(/\[\[MonthName\]\]/g, GetMonthString(d.getMonth()));
  value = value.replace(/\[\[DayOfWeek\]\]/g, GetDayString(d.getDay()));
  value = value.replace(/\[\[Year\]\]/g, d.getFullYear());
  return value;
}

function OnLoad(e) {

}

var u270 = document.getElementById('u270');

u270.style.cursor = 'pointer';
if (bIE) u270.attachEvent("onclick", Clicku270);
else u270.addEventListener("click", Clicku270, true);
function Clicku270(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd5u261','none','',500,'none','',500);

}

}

var u271 = document.getElementById('u271');
gv_vAlignTable['u271'] = 'center';
var u272 = document.getElementById('u272');
gv_vAlignTable['u272'] = 'top';
var u273 = document.getElementById('u273');

u273.style.cursor = 'pointer';
if (bIE) u273.attachEvent("onclick", Clicku273);
else u273.addEventListener("click", Clicku273, true);
function Clicku273(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd2u261','none','',500,'none','',500);

}

}

var u274 = document.getElementById('u274');
gv_vAlignTable['u274'] = 'center';
var u275 = document.getElementById('u275');

u275.style.cursor = 'pointer';
if (bIE) u275.attachEvent("onclick", Clicku275);
else u275.addEventListener("click", Clicku275, true);
function Clicku275(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd4u261','none','',500,'none','',500);

}

}

var u276 = document.getElementById('u276');
gv_vAlignTable['u276'] = 'center';
var u277 = document.getElementById('u277');
gv_vAlignTable['u277'] = 'top';
var u278 = document.getElementById('u278');

u278.style.cursor = 'pointer';
if (bIE) u278.attachEvent("onclick", Clicku278);
else u278.addEventListener("click", Clicku278, true);
function Clicku278(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd1u261','none','',500,'none','',500);

}

}

var u279 = document.getElementById('u279');
gv_vAlignTable['u279'] = 'center';
var u280 = document.getElementById('u280');

u280.style.cursor = 'pointer';
if (bIE) u280.attachEvent("onclick", Clicku280);
else u280.addEventListener("click", Clicku280, true);
function Clicku280(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd3u261','none','',500,'none','',500);

}

}

var u281 = document.getElementById('u281');
gv_vAlignTable['u281'] = 'center';
var u282 = document.getElementById('u282');
gv_vAlignTable['u282'] = 'top';
var u283 = document.getElementById('u283');

u283.style.cursor = 'pointer';
if (bIE) u283.attachEvent("onclick", Clicku283);
else u283.addEventListener("click", Clicku283, true);
function Clicku283(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd0u261','none','',500,'none','',500);

}

}

var u284 = document.getElementById('u284');
gv_vAlignTable['u284'] = 'center';
var u285 = document.getElementById('u285');

u285.style.cursor = 'pointer';
if (bIE) u285.attachEvent("onclick", Clicku285);
else u285.addEventListener("click", Clicku285, true);
function Clicku285(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd2u261','none','',500,'none','',500);

}

}

var u286 = document.getElementById('u286');
gv_vAlignTable['u286'] = 'center';
var u287 = document.getElementById('u287');
gv_vAlignTable['u287'] = 'top';
var u288 = document.getElementById('u288');

var u289 = document.getElementById('u289');
gv_vAlignTable['u289'] = 'center';
var u490 = document.getElementById('u490');

var u491 = document.getElementById('u491');
gv_vAlignTable['u491'] = 'center';
var u492 = document.getElementById('u492');

u492.style.cursor = 'pointer';
if (bIE) u492.attachEvent("onclick", Clicku492);
else u492.addEventListener("click", Clicku492, true);
function Clicku492(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u463', 'pd1u463','none','',500,'none','',500);

}

}

var u493 = document.getElementById('u493');
gv_vAlignTable['u493'] = 'center';
var u494 = document.getElementById('u494');

u494.style.cursor = 'pointer';
if (bIE) u494.attachEvent("onclick", Clicku494);
else u494.addEventListener("click", Clicku494, true);
function Clicku494(e)
{
windowEvent = e;


if (true) {

	self.location.href="javascript:history.back()";

}

}

var u495 = document.getElementById('u495');
gv_vAlignTable['u495'] = 'center';
var u100 = document.getElementById('u100');
gv_vAlignTable['u100'] = 'center';
var u101 = document.getElementById('u101');

var u102 = document.getElementById('u102');
gv_vAlignTable['u102'] = 'center';
var u290 = document.getElementById('u290');

u290.style.cursor = 'pointer';
if (bIE) u290.attachEvent("onclick", Clicku290);
else u290.addEventListener("click", Clicku290, true);
function Clicku290(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd1u261','none','',500,'none','',500);

}

}

var u291 = document.getElementById('u291');
gv_vAlignTable['u291'] = 'center';
var u105 = document.getElementById('u105');

var u106 = document.getElementById('u106');
gv_vAlignTable['u106'] = 'center';
var u107 = document.getElementById('u107');

u107.style.cursor = 'pointer';
if (bIE) u107.attachEvent("onclick", Clicku107);
else u107.addEventListener("click", Clicku107, true);
function Clicku107(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd4u24','none','',500,'none','',500);

}

}

var u108 = document.getElementById('u108');
gv_vAlignTable['u108'] = 'center';
var u109 = document.getElementById('u109');

var u297 = document.getElementById('u297');

var u298 = document.getElementById('u298');

u298.style.cursor = 'pointer';
if (bIE) u298.attachEvent("onclick", Clicku298);
else u298.addEventListener("click", Clicku298, true);
function Clicku298(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u299 = document.getElementById('u299');
gv_vAlignTable['u299'] = 'center';
var u9 = document.getElementById('u9');
gv_vAlignTable['u9'] = 'top';
var u110 = document.getElementById('u110');
gv_vAlignTable['u110'] = 'center';
var u111 = document.getElementById('u111');

var u112 = document.getElementById('u112');
gv_vAlignTable['u112'] = 'center';
var u113 = document.getElementById('u113');

u113.style.cursor = 'pointer';
if (bIE) u113.attachEvent("onclick", Clicku113);
else u113.addEventListener("click", Clicku113, true);
function Clicku113(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}

}

var u114 = document.getElementById('u114');
gv_vAlignTable['u114'] = 'center';
var u115 = document.getElementById('u115');

var u116 = document.getElementById('u116');
gv_vAlignTable['u116'] = 'center';
var u117 = document.getElementById('u117');

var u118 = document.getElementById('u118');
gv_vAlignTable['u118'] = 'center';
var u119 = document.getElementById('u119');

u119.style.cursor = 'pointer';
if (bIE) u119.attachEvent("onclick", Clicku119);
else u119.addEventListener("click", Clicku119, true);
function Clicku119(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}

}

var u30 = document.getElementById('u30');
gv_vAlignTable['u30'] = 'center';
var u31 = document.getElementById('u31');

var u32 = document.getElementById('u32');
gv_vAlignTable['u32'] = 'center';
var u33 = document.getElementById('u33');

u33.style.cursor = 'pointer';
if (bIE) u33.attachEvent("onclick", Clicku33);
else u33.addEventListener("click", Clicku33, true);
function Clicku33(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd2u24','none','',500,'none','',500);

}

}

var u34 = document.getElementById('u34');
gv_vAlignTable['u34'] = 'center';
var u35 = document.getElementById('u35');

var u120 = document.getElementById('u120');
gv_vAlignTable['u120'] = 'center';
var u121 = document.getElementById('u121');

var u122 = document.getElementById('u122');
gv_vAlignTable['u122'] = 'center';
var u123 = document.getElementById('u123');

u123.style.cursor = 'pointer';
if (bIE) u123.attachEvent("onclick", Clicku123);
else u123.addEventListener("click", Clicku123, true);
function Clicku123(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd2u24','none','',500,'none','',500);

}

}

var u124 = document.getElementById('u124');
gv_vAlignTable['u124'] = 'center';
var u125 = document.getElementById('u125');

var u126 = document.getElementById('u126');
gv_vAlignTable['u126'] = 'center';
var u127 = document.getElementById('u127');

u127.style.cursor = 'pointer';
if (bIE) u127.attachEvent("onclick", Clicku127);
else u127.addEventListener("click", Clicku127, true);
function Clicku127(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd3u24','none','',500,'none','',500);

}

}

var u128 = document.getElementById('u128');
gv_vAlignTable['u128'] = 'center';
var u129 = document.getElementById('u129');

var u130 = document.getElementById('u130');
gv_vAlignTable['u130'] = 'center';
var u131 = document.getElementById('u131');

u131.style.cursor = 'pointer';
if (bIE) u131.attachEvent("onclick", Clicku131);
else u131.addEventListener("click", Clicku131, true);
function Clicku131(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd4u24','none','',500,'none','',500);

}

}

var u132 = document.getElementById('u132');
gv_vAlignTable['u132'] = 'center';
var u133 = document.getElementById('u133');

var u134 = document.getElementById('u134');
gv_vAlignTable['u134'] = 'center';
var u135 = document.getElementById('u135');

var u136 = document.getElementById('u136');

var u137 = document.getElementById('u137');
gv_vAlignTable['u137'] = 'center';
var u138 = document.getElementById('u138');
gv_vAlignTable['u138'] = 'top';
var u139 = document.getElementById('u139');
gv_vAlignTable['u139'] = 'top';
var u140 = document.getElementById('u140');
gv_vAlignTable['u140'] = 'top';
var u141 = document.getElementById('u141');

var u142 = document.getElementById('u142');

u142.style.cursor = 'pointer';
if (bIE) u142.attachEvent("onclick", Clicku142);
else u142.addEventListener("click", Clicku142, true);
function Clicku142(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u143 = document.getElementById('u143');
gv_vAlignTable['u143'] = 'center';
var u144 = document.getElementById('u144');

var u145 = document.getElementById('u145');
gv_vAlignTable['u145'] = 'top';
var u146 = document.getElementById('u146');

u146.style.cursor = 'pointer';
if (bIE) u146.attachEvent("onclick", Clicku146);
else u146.addEventListener("click", Clicku146, true);
function Clicku146(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u144', 'pd4u144','none','',500,'none','',500);

}

}

var u147 = document.getElementById('u147');
gv_vAlignTable['u147'] = 'center';
var u148 = document.getElementById('u148');

u148.style.cursor = 'pointer';
if (bIE) u148.attachEvent("onclick", Clicku148);
else u148.addEventListener("click", Clicku148, true);
function Clicku148(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u144', 'pd1u144','none','',500,'none','',500);

}

}

var u149 = document.getElementById('u149');
gv_vAlignTable['u149'] = 'center';
var u10 = document.getElementById('u10');

var u11 = document.getElementById('u11');
gv_vAlignTable['u11'] = 'top';
var u12 = document.getElementById('u12');

var u13 = document.getElementById('u13');
gv_vAlignTable['u13'] = 'top';
var u14 = document.getElementById('u14');

var u15 = document.getElementById('u15');
gv_vAlignTable['u15'] = 'center';
var u16 = document.getElementById('u16');

var u17 = document.getElementById('u17');
gv_vAlignTable['u17'] = 'center';
var u18 = document.getElementById('u18');

var u19 = document.getElementById('u19');
gv_vAlignTable['u19'] = 'center';
var u150 = document.getElementById('u150');
gv_vAlignTable['u150'] = 'top';
var u151 = document.getElementById('u151');

u151.style.cursor = 'pointer';
if (bIE) u151.attachEvent("onclick", Clicku151);
else u151.addEventListener("click", Clicku151, true);
function Clicku151(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u144', 'pd3u144','none','',500,'none','',500);

}

}

var u152 = document.getElementById('u152');
gv_vAlignTable['u152'] = 'center';
var u153 = document.getElementById('u153');

u153.style.cursor = 'pointer';
if (bIE) u153.attachEvent("onclick", Clicku153);
else u153.addEventListener("click", Clicku153, true);
function Clicku153(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u144', 'pd5u144','none','',500,'none','',500);

}

}

var u154 = document.getElementById('u154');
gv_vAlignTable['u154'] = 'center';
var u155 = document.getElementById('u155');
gv_vAlignTable['u155'] = 'top';
var u156 = document.getElementById('u156');

u156.style.cursor = 'pointer';
if (bIE) u156.attachEvent("onclick", Clicku156);
else u156.addEventListener("click", Clicku156, true);
function Clicku156(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u144', 'pd2u144','none','',500,'none','',500);

}

}

var u157 = document.getElementById('u157');
gv_vAlignTable['u157'] = 'center';
var u158 = document.getElementById('u158');

u158.style.cursor = 'pointer';
if (bIE) u158.attachEvent("onclick", Clicku158);
else u158.addEventListener("click", Clicku158, true);
function Clicku158(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u144', 'pd4u144','none','',500,'none','',500);

}

}

var u159 = document.getElementById('u159');
gv_vAlignTable['u159'] = 'center';
var u20 = document.getElementById('u20');

var u21 = document.getElementById('u21');
gv_vAlignTable['u21'] = 'center';
var u22 = document.getElementById('u22');

var u23 = document.getElementById('u23');
gv_vAlignTable['u23'] = 'top';
var u24 = document.getElementById('u24');

var u25 = document.getElementById('u25');

u25.style.cursor = 'pointer';
if (bIE) u25.attachEvent("onclick", Clicku25);
else u25.addEventListener("click", Clicku25, true);
function Clicku25(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}

}

var u26 = document.getElementById('u26');
gv_vAlignTable['u26'] = 'center';
var u27 = document.getElementById('u27');

var u28 = document.getElementById('u28');
gv_vAlignTable['u28'] = 'center';
var u29 = document.getElementById('u29');

u29.style.cursor = 'pointer';
if (bIE) u29.attachEvent("onclick", Clicku29);
else u29.addEventListener("click", Clicku29, true);
function Clicku29(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}

}

var u160 = document.getElementById('u160');
gv_vAlignTable['u160'] = 'top';
var u161 = document.getElementById('u161');

u161.style.cursor = 'pointer';
if (bIE) u161.attachEvent("onclick", Clicku161);
else u161.addEventListener("click", Clicku161, true);
function Clicku161(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u144', 'pd1u144','none','',500,'none','',500);

}

}

var u162 = document.getElementById('u162');
gv_vAlignTable['u162'] = 'center';
var u163 = document.getElementById('u163');

u163.style.cursor = 'pointer';
if (bIE) u163.attachEvent("onclick", Clicku163);
else u163.addEventListener("click", Clicku163, true);
function Clicku163(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u144', 'pd3u144','none','',500,'none','',500);

}

}

var u164 = document.getElementById('u164');
gv_vAlignTable['u164'] = 'center';
var u165 = document.getElementById('u165');
gv_vAlignTable['u165'] = 'top';
var u166 = document.getElementById('u166');

u166.style.cursor = 'pointer';
if (bIE) u166.attachEvent("onclick", Clicku166);
else u166.addEventListener("click", Clicku166, true);
function Clicku166(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u144', 'pd0u144','none','',500,'none','',500);

}

}

var u167 = document.getElementById('u167');
gv_vAlignTable['u167'] = 'center';
var u168 = document.getElementById('u168');

u168.style.cursor = 'pointer';
if (bIE) u168.attachEvent("onclick", Clicku168);
else u168.addEventListener("click", Clicku168, true);
function Clicku168(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u144', 'pd2u144','none','',500,'none','',500);

}

}

var u169 = document.getElementById('u169');
gv_vAlignTable['u169'] = 'center';
var u203 = document.getElementById('u203');
gv_vAlignTable['u203'] = 'center';
var u204 = document.getElementById('u204');
gv_vAlignTable['u204'] = 'top';
var u205 = document.getElementById('u205');

u205.style.cursor = 'pointer';
if (bIE) u205.attachEvent("onclick", Clicku205);
else u205.addEventListener("click", Clicku205, true);
function Clicku205(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u183', 'pd0u183','none','',500,'none','',500);

}

}

var u206 = document.getElementById('u206');
gv_vAlignTable['u206'] = 'center';
var u207 = document.getElementById('u207');

u207.style.cursor = 'pointer';
if (bIE) u207.attachEvent("onclick", Clicku207);
else u207.addEventListener("click", Clicku207, true);
function Clicku207(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u183', 'pd2u183','none','',500,'none','',500);

}

}

var u208 = document.getElementById('u208');
gv_vAlignTable['u208'] = 'center';
var u209 = document.getElementById('u209');
gv_vAlignTable['u209'] = 'top';
var u36 = document.getElementById('u36');
gv_vAlignTable['u36'] = 'center';
var u37 = document.getElementById('u37');

u37.style.cursor = 'pointer';
if (bIE) u37.attachEvent("onclick", Clicku37);
else u37.addEventListener("click", Clicku37, true);
function Clicku37(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd3u24','none','',500,'none','',500);

}

}

var u38 = document.getElementById('u38');
gv_vAlignTable['u38'] = 'center';
var u39 = document.getElementById('u39');

var u170 = document.getElementById('u170');
gv_vAlignTable['u170'] = 'top';
var u171 = document.getElementById('u171');

var u172 = document.getElementById('u172');
gv_vAlignTable['u172'] = 'center';
var u173 = document.getElementById('u173');

u173.style.cursor = 'pointer';
if (bIE) u173.attachEvent("onclick", Clicku173);
else u173.addEventListener("click", Clicku173, true);
function Clicku173(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u144', 'pd1u144','none','',500,'none','',500);

}

}

var u174 = document.getElementById('u174');
gv_vAlignTable['u174'] = 'center';
var u175 = document.getElementById('u175');

var u176 = document.getElementById('u176');
gv_vAlignTable['u176'] = 'center';
var u177 = document.getElementById('u177');
gv_vAlignTable['u177'] = 'top';
var u178 = document.getElementById('u178');
gv_vAlignTable['u178'] = 'top';
var u179 = document.getElementById('u179');
gv_vAlignTable['u179'] = 'top';
var u40 = document.getElementById('u40');
gv_vAlignTable['u40'] = 'center';
var u41 = document.getElementById('u41');

u41.style.cursor = 'pointer';
if (bIE) u41.attachEvent("onclick", Clicku41);
else u41.addEventListener("click", Clicku41, true);
function Clicku41(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd4u24','none','',500,'none','',500);

}

}

var u42 = document.getElementById('u42');
gv_vAlignTable['u42'] = 'center';
var u43 = document.getElementById('u43');

var u44 = document.getElementById('u44');
gv_vAlignTable['u44'] = 'center';
var u45 = document.getElementById('u45');

var u46 = document.getElementById('u46');
gv_vAlignTable['u46'] = 'center';
var u47 = document.getElementById('u47');

u47.style.cursor = 'pointer';
if (bIE) u47.attachEvent("onclick", Clicku47);
else u47.addEventListener("click", Clicku47, true);
function Clicku47(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}

}

var u48 = document.getElementById('u48');
gv_vAlignTable['u48'] = 'center';
var u49 = document.getElementById('u49');

var u180 = document.getElementById('u180');

var u181 = document.getElementById('u181');

u181.style.cursor = 'pointer';
if (bIE) u181.attachEvent("onclick", Clicku181);
else u181.addEventListener("click", Clicku181, true);
function Clicku181(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u182 = document.getElementById('u182');
gv_vAlignTable['u182'] = 'center';
var u183 = document.getElementById('u183');

var u184 = document.getElementById('u184');
gv_vAlignTable['u184'] = 'top';
var u185 = document.getElementById('u185');

u185.style.cursor = 'pointer';
if (bIE) u185.attachEvent("onclick", Clicku185);
else u185.addEventListener("click", Clicku185, true);
function Clicku185(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u183', 'pd4u183','none','',500,'none','',500);

}

}

var u186 = document.getElementById('u186');
gv_vAlignTable['u186'] = 'center';
var u187 = document.getElementById('u187');

u187.style.cursor = 'pointer';
if (bIE) u187.attachEvent("onclick", Clicku187);
else u187.addEventListener("click", Clicku187, true);
function Clicku187(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u183', 'pd1u183','none','',500,'none','',500);

}

}

var u188 = document.getElementById('u188');
gv_vAlignTable['u188'] = 'center';
var u189 = document.getElementById('u189');
gv_vAlignTable['u189'] = 'top';
var u50 = document.getElementById('u50');
gv_vAlignTable['u50'] = 'center';
var u51 = document.getElementById('u51');

u51.style.cursor = 'pointer';
if (bIE) u51.attachEvent("onclick", Clicku51);
else u51.addEventListener("click", Clicku51, true);
function Clicku51(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}

}

var u52 = document.getElementById('u52');
gv_vAlignTable['u52'] = 'center';
var u53 = document.getElementById('u53');

var u54 = document.getElementById('u54');
gv_vAlignTable['u54'] = 'center';
var u55 = document.getElementById('u55');

u55.style.cursor = 'pointer';
if (bIE) u55.attachEvent("onclick", Clicku55);
else u55.addEventListener("click", Clicku55, true);
function Clicku55(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd2u24','none','',500,'none','',500);

}

}

var u56 = document.getElementById('u56');
gv_vAlignTable['u56'] = 'center';
var u57 = document.getElementById('u57');

var u58 = document.getElementById('u58');
gv_vAlignTable['u58'] = 'center';
var u59 = document.getElementById('u59');

u59.style.cursor = 'pointer';
if (bIE) u59.attachEvent("onclick", Clicku59);
else u59.addEventListener("click", Clicku59, true);
function Clicku59(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd3u24','none','',500,'none','',500);

}

}

var u190 = document.getElementById('u190');

u190.style.cursor = 'pointer';
if (bIE) u190.attachEvent("onclick", Clicku190);
else u190.addEventListener("click", Clicku190, true);
function Clicku190(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u183', 'pd3u183','none','',500,'none','',500);

}

}

var u191 = document.getElementById('u191');
gv_vAlignTable['u191'] = 'center';
var u192 = document.getElementById('u192');

u192.style.cursor = 'pointer';
if (bIE) u192.attachEvent("onclick", Clicku192);
else u192.addEventListener("click", Clicku192, true);
function Clicku192(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u183', 'pd5u183','none','',500,'none','',500);

}

}

var u193 = document.getElementById('u193');
gv_vAlignTable['u193'] = 'center';
var u194 = document.getElementById('u194');
gv_vAlignTable['u194'] = 'top';
var u195 = document.getElementById('u195');

u195.style.cursor = 'pointer';
if (bIE) u195.attachEvent("onclick", Clicku195);
else u195.addEventListener("click", Clicku195, true);
function Clicku195(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u183', 'pd2u183','none','',500,'none','',500);

}

}

var u196 = document.getElementById('u196');
gv_vAlignTable['u196'] = 'center';
var u197 = document.getElementById('u197');

u197.style.cursor = 'pointer';
if (bIE) u197.attachEvent("onclick", Clicku197);
else u197.addEventListener("click", Clicku197, true);
function Clicku197(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u183', 'pd4u183','none','',500,'none','',500);

}

}

var u198 = document.getElementById('u198');
gv_vAlignTable['u198'] = 'center';
var u199 = document.getElementById('u199');
gv_vAlignTable['u199'] = 'top';
var u60 = document.getElementById('u60');
gv_vAlignTable['u60'] = 'center';
var u61 = document.getElementById('u61');

var u62 = document.getElementById('u62');
gv_vAlignTable['u62'] = 'center';
var u63 = document.getElementById('u63');

u63.style.cursor = 'pointer';
if (bIE) u63.attachEvent("onclick", Clicku63);
else u63.addEventListener("click", Clicku63, true);
function Clicku63(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd4u24','none','',500,'none','',500);

}

}

var u64 = document.getElementById('u64');
gv_vAlignTable['u64'] = 'center';
var u65 = document.getElementById('u65');

var u66 = document.getElementById('u66');
gv_vAlignTable['u66'] = 'center';
var u67 = document.getElementById('u67');

var u68 = document.getElementById('u68');
gv_vAlignTable['u68'] = 'center';
var u69 = document.getElementById('u69');

u69.style.cursor = 'pointer';
if (bIE) u69.attachEvent("onclick", Clicku69);
else u69.addEventListener("click", Clicku69, true);
function Clicku69(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}

}

var u70 = document.getElementById('u70');
gv_vAlignTable['u70'] = 'center';
var u71 = document.getElementById('u71');

var u72 = document.getElementById('u72');
gv_vAlignTable['u72'] = 'center';
var u73 = document.getElementById('u73');

u73.style.cursor = 'pointer';
if (bIE) u73.attachEvent("onclick", Clicku73);
else u73.addEventListener("click", Clicku73, true);
function Clicku73(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}

}

var u74 = document.getElementById('u74');
gv_vAlignTable['u74'] = 'center';
var u75 = document.getElementById('u75');

var u76 = document.getElementById('u76');
gv_vAlignTable['u76'] = 'center';
var u77 = document.getElementById('u77');

u77.style.cursor = 'pointer';
if (bIE) u77.attachEvent("onclick", Clicku77);
else u77.addEventListener("click", Clicku77, true);
function Clicku77(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd2u24','none','',500,'none','',500);

}

}

var u78 = document.getElementById('u78');
gv_vAlignTable['u78'] = 'center';
var u79 = document.getElementById('u79');

var u80 = document.getElementById('u80');
gv_vAlignTable['u80'] = 'center';
var u81 = document.getElementById('u81');

u81.style.cursor = 'pointer';
if (bIE) u81.attachEvent("onclick", Clicku81);
else u81.addEventListener("click", Clicku81, true);
function Clicku81(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd3u24','none','',500,'none','',500);

}

}

var u82 = document.getElementById('u82');
gv_vAlignTable['u82'] = 'center';
var u83 = document.getElementById('u83');

var u84 = document.getElementById('u84');
gv_vAlignTable['u84'] = 'center';
var u85 = document.getElementById('u85');

u85.style.cursor = 'pointer';
if (bIE) u85.attachEvent("onclick", Clicku85);
else u85.addEventListener("click", Clicku85, true);
function Clicku85(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd4u24','none','',500,'none','',500);

}

}

var u86 = document.getElementById('u86');
gv_vAlignTable['u86'] = 'center';
var u87 = document.getElementById('u87');

var u88 = document.getElementById('u88');
gv_vAlignTable['u88'] = 'center';
var u89 = document.getElementById('u89');

var u90 = document.getElementById('u90');
gv_vAlignTable['u90'] = 'center';
var u91 = document.getElementById('u91');

u91.style.cursor = 'pointer';
if (bIE) u91.attachEvent("onclick", Clicku91);
else u91.addEventListener("click", Clicku91, true);
function Clicku91(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd0u24','none','',500,'none','',500);

}

}

var u92 = document.getElementById('u92');
gv_vAlignTable['u92'] = 'center';
var u93 = document.getElementById('u93');

var u94 = document.getElementById('u94');
gv_vAlignTable['u94'] = 'center';
var u95 = document.getElementById('u95');

u95.style.cursor = 'pointer';
if (bIE) u95.attachEvent("onclick", Clicku95);
else u95.addEventListener("click", Clicku95, true);
function Clicku95(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd1u24','none','',500,'none','',500);

}

}

var u96 = document.getElementById('u96');
gv_vAlignTable['u96'] = 'center';
var u97 = document.getElementById('u97');

var u98 = document.getElementById('u98');
gv_vAlignTable['u98'] = 'center';
var u99 = document.getElementById('u99');

u99.style.cursor = 'pointer';
if (bIE) u99.attachEvent("onclick", Clicku99);
else u99.addEventListener("click", Clicku99, true);
function Clicku99(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd2u24','none','',500,'none','',500);

}

}

var u400 = document.getElementById('u400');

u400.style.cursor = 'pointer';
if (bIE) u400.attachEvent("onclick", Clicku400);
else u400.addEventListener("click", Clicku400, true);
function Clicku400(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd0u378','none','',500,'none','',500);

}

}

var u401 = document.getElementById('u401');
gv_vAlignTable['u401'] = 'center';
var u402 = document.getElementById('u402');

u402.style.cursor = 'pointer';
if (bIE) u402.attachEvent("onclick", Clicku402);
else u402.addEventListener("click", Clicku402, true);
function Clicku402(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd2u378','none','',500,'none','',500);

}

}

var u403 = document.getElementById('u403');
gv_vAlignTable['u403'] = 'center';
var u404 = document.getElementById('u404');
gv_vAlignTable['u404'] = 'top';
var u405 = document.getElementById('u405');

var u406 = document.getElementById('u406');
gv_vAlignTable['u406'] = 'center';
var u407 = document.getElementById('u407');

u407.style.cursor = 'pointer';
if (bIE) u407.attachEvent("onclick", Clicku407);
else u407.addEventListener("click", Clicku407, true);
function Clicku407(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd1u378','none','',500,'none','',500);

}

}

var u408 = document.getElementById('u408');
gv_vAlignTable['u408'] = 'center';
var u409 = document.getElementById('u409');

var u410 = document.getElementById('u410');
gv_vAlignTable['u410'] = 'center';
var u411 = document.getElementById('u411');
gv_vAlignTable['u411'] = 'top';
var u412 = document.getElementById('u412');
gv_vAlignTable['u412'] = 'top';
var u413 = document.getElementById('u413');
gv_vAlignTable['u413'] = 'top';
var u414 = document.getElementById('u414');

var u415 = document.getElementById('u415');

u415.style.cursor = 'pointer';
if (bIE) u415.attachEvent("onclick", Clicku415);
else u415.addEventListener("click", Clicku415, true);
function Clicku415(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u416 = document.getElementById('u416');
gv_vAlignTable['u416'] = 'center';
var u417 = document.getElementById('u417');

var u418 = document.getElementById('u418');
gv_vAlignTable['u418'] = 'top';
var u419 = document.getElementById('u419');

u419.style.cursor = 'pointer';
if (bIE) u419.attachEvent("onclick", Clicku419);
else u419.addEventListener("click", Clicku419, true);
function Clicku419(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd4u417','none','',500,'none','',500);

}

}

var u420 = document.getElementById('u420');
gv_vAlignTable['u420'] = 'center';
var u421 = document.getElementById('u421');

u421.style.cursor = 'pointer';
if (bIE) u421.attachEvent("onclick", Clicku421);
else u421.addEventListener("click", Clicku421, true);
function Clicku421(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd1u417','none','',500,'none','',500);

}

}

var u422 = document.getElementById('u422');
gv_vAlignTable['u422'] = 'center';
var u423 = document.getElementById('u423');
gv_vAlignTable['u423'] = 'top';
var u424 = document.getElementById('u424');

u424.style.cursor = 'pointer';
if (bIE) u424.attachEvent("onclick", Clicku424);
else u424.addEventListener("click", Clicku424, true);
function Clicku424(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd3u417','none','',500,'none','',500);

}

}

var u425 = document.getElementById('u425');
gv_vAlignTable['u425'] = 'center';
var u426 = document.getElementById('u426');

u426.style.cursor = 'pointer';
if (bIE) u426.attachEvent("onclick", Clicku426);
else u426.addEventListener("click", Clicku426, true);
function Clicku426(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd5u417','none','',500,'none','',500);

}

}

var u427 = document.getElementById('u427');
gv_vAlignTable['u427'] = 'center';
var u428 = document.getElementById('u428');
gv_vAlignTable['u428'] = 'top';
var u429 = document.getElementById('u429');

u429.style.cursor = 'pointer';
if (bIE) u429.attachEvent("onclick", Clicku429);
else u429.addEventListener("click", Clicku429, true);
function Clicku429(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd2u417','none','',500,'none','',500);

}

}

var u292 = document.getElementById('u292');

var u293 = document.getElementById('u293');
gv_vAlignTable['u293'] = 'center';
var u294 = document.getElementById('u294');
gv_vAlignTable['u294'] = 'top';
var u295 = document.getElementById('u295');
gv_vAlignTable['u295'] = 'top';
var u296 = document.getElementById('u296');
gv_vAlignTable['u296'] = 'top';
var u430 = document.getElementById('u430');
gv_vAlignTable['u430'] = 'center';
var u431 = document.getElementById('u431');

u431.style.cursor = 'pointer';
if (bIE) u431.attachEvent("onclick", Clicku431);
else u431.addEventListener("click", Clicku431, true);
function Clicku431(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd4u417','none','',500,'none','',500);

}

}

var u432 = document.getElementById('u432');
gv_vAlignTable['u432'] = 'center';
var u433 = document.getElementById('u433');
gv_vAlignTable['u433'] = 'top';
var u434 = document.getElementById('u434');

u434.style.cursor = 'pointer';
if (bIE) u434.attachEvent("onclick", Clicku434);
else u434.addEventListener("click", Clicku434, true);
function Clicku434(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd1u417','none','',500,'none','',500);

}

}

var u435 = document.getElementById('u435');
gv_vAlignTable['u435'] = 'center';
var u436 = document.getElementById('u436');

u436.style.cursor = 'pointer';
if (bIE) u436.attachEvent("onclick", Clicku436);
else u436.addEventListener("click", Clicku436, true);
function Clicku436(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd3u417','none','',500,'none','',500);

}

}

var u437 = document.getElementById('u437');
gv_vAlignTable['u437'] = 'center';
var u438 = document.getElementById('u438');
gv_vAlignTable['u438'] = 'top';
var u439 = document.getElementById('u439');

u439.style.cursor = 'pointer';
if (bIE) u439.attachEvent("onclick", Clicku439);
else u439.addEventListener("click", Clicku439, true);
function Clicku439(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd0u417','none','',500,'none','',500);

}

}

var u440 = document.getElementById('u440');
gv_vAlignTable['u440'] = 'center';
var u441 = document.getElementById('u441');

u441.style.cursor = 'pointer';
if (bIE) u441.attachEvent("onclick", Clicku441);
else u441.addEventListener("click", Clicku441, true);
function Clicku441(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd2u417','none','',500,'none','',500);

}

}

var u442 = document.getElementById('u442');
gv_vAlignTable['u442'] = 'center';
var u443 = document.getElementById('u443');
gv_vAlignTable['u443'] = 'top';
var u444 = document.getElementById('u444');

var u445 = document.getElementById('u445');
gv_vAlignTable['u445'] = 'center';
var u446 = document.getElementById('u446');

u446.style.cursor = 'pointer';
if (bIE) u446.attachEvent("onclick", Clicku446);
else u446.addEventListener("click", Clicku446, true);
function Clicku446(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u417', 'pd1u417','none','',500,'none','',500);

}

}

var u447 = document.getElementById('u447');
gv_vAlignTable['u447'] = 'center';
var u448 = document.getElementById('u448');

var u449 = document.getElementById('u449');
gv_vAlignTable['u449'] = 'center';
var u450 = document.getElementById('u450');

u450.style.cursor = 'pointer';
if (bIE) u450.attachEvent("onclick", Clicku450);
else u450.addEventListener("click", Clicku450, true);
function Clicku450(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u451 = document.getElementById('u451');
gv_vAlignTable['u451'] = 'center';
var u452 = document.getElementById('u452');

var u453 = document.getElementById('u453');
gv_vAlignTable['u453'] = 'center';
var u454 = document.getElementById('u454');

var u455 = document.getElementById('u455');
gv_vAlignTable['u455'] = 'center';
var u456 = document.getElementById('u456');
gv_vAlignTable['u456'] = 'top';
var u457 = document.getElementById('u457');

var u458 = document.getElementById('u458');
gv_vAlignTable['u458'] = 'center';
var u459 = document.getElementById('u459');

var u460 = document.getElementById('u460');
gv_vAlignTable['u460'] = 'center';
var u461 = document.getElementById('u461');

u461.style.cursor = 'pointer';
if (bIE) u461.attachEvent("onclick", Clicku461);
else u461.addEventListener("click", Clicku461, true);
function Clicku461(e)
{
windowEvent = e;


if (true) {

	self.location.href="Bebidas_confirmar_pedido.html" + GetQuerystring();

}

}

var u462 = document.getElementById('u462');
gv_vAlignTable['u462'] = 'center';
var u463 = document.getElementById('u463');

var u464 = document.getElementById('u464');
gv_vAlignTable['u464'] = 'top';
var u465 = document.getElementById('u465');

u465.style.cursor = 'pointer';
if (bIE) u465.attachEvent("onclick", Clicku465);
else u465.addEventListener("click", Clicku465, true);
function Clicku465(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u463', 'pd4u463','none','',500,'none','',500);

}

}

var u466 = document.getElementById('u466');
gv_vAlignTable['u466'] = 'center';
var u467 = document.getElementById('u467');

u467.style.cursor = 'pointer';
if (bIE) u467.attachEvent("onclick", Clicku467);
else u467.addEventListener("click", Clicku467, true);
function Clicku467(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u463', 'pd1u463','none','',500,'none','',500);

}

}

var u468 = document.getElementById('u468');
gv_vAlignTable['u468'] = 'center';
var u469 = document.getElementById('u469');
gv_vAlignTable['u469'] = 'top';
var u470 = document.getElementById('u470');

u470.style.cursor = 'pointer';
if (bIE) u470.attachEvent("onclick", Clicku470);
else u470.addEventListener("click", Clicku470, true);
function Clicku470(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u463', 'pd3u463','none','',500,'none','',500);

}

}

var u471 = document.getElementById('u471');
gv_vAlignTable['u471'] = 'center';
var u472 = document.getElementById('u472');

u472.style.cursor = 'pointer';
if (bIE) u472.attachEvent("onclick", Clicku472);
else u472.addEventListener("click", Clicku472, true);
function Clicku472(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u463', 'pd5u463','none','',500,'none','',500);

}

}

var u473 = document.getElementById('u473');
gv_vAlignTable['u473'] = 'center';
var u474 = document.getElementById('u474');
gv_vAlignTable['u474'] = 'top';
var u475 = document.getElementById('u475');

u475.style.cursor = 'pointer';
if (bIE) u475.attachEvent("onclick", Clicku475);
else u475.addEventListener("click", Clicku475, true);
function Clicku475(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u463', 'pd2u463','none','',500,'none','',500);

}

}

var u476 = document.getElementById('u476');
gv_vAlignTable['u476'] = 'center';
var u477 = document.getElementById('u477');

u477.style.cursor = 'pointer';
if (bIE) u477.attachEvent("onclick", Clicku477);
else u477.addEventListener("click", Clicku477, true);
function Clicku477(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u463', 'pd4u463','none','',500,'none','',500);

}

}

var u478 = document.getElementById('u478');
gv_vAlignTable['u478'] = 'center';
var u479 = document.getElementById('u479');
gv_vAlignTable['u479'] = 'top';
var u480 = document.getElementById('u480');

u480.style.cursor = 'pointer';
if (bIE) u480.attachEvent("onclick", Clicku480);
else u480.addEventListener("click", Clicku480, true);
function Clicku480(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u463', 'pd1u463','none','',500,'none','',500);

}

}

var u481 = document.getElementById('u481');
gv_vAlignTable['u481'] = 'center';
var u482 = document.getElementById('u482');

u482.style.cursor = 'pointer';
if (bIE) u482.attachEvent("onclick", Clicku482);
else u482.addEventListener("click", Clicku482, true);
function Clicku482(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u463', 'pd3u463','none','',500,'none','',500);

}

}

var u483 = document.getElementById('u483');
gv_vAlignTable['u483'] = 'center';
var u484 = document.getElementById('u484');
gv_vAlignTable['u484'] = 'top';
var u485 = document.getElementById('u485');

u485.style.cursor = 'pointer';
if (bIE) u485.attachEvent("onclick", Clicku485);
else u485.addEventListener("click", Clicku485, true);
function Clicku485(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u463', 'pd0u463','none','',500,'none','',500);

}

}

var u486 = document.getElementById('u486');
gv_vAlignTable['u486'] = 'center';
var u487 = document.getElementById('u487');

u487.style.cursor = 'pointer';
if (bIE) u487.attachEvent("onclick", Clicku487);
else u487.addEventListener("click", Clicku487, true);
function Clicku487(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u463', 'pd2u463','none','',500,'none','',500);

}

}

var u488 = document.getElementById('u488');
gv_vAlignTable['u488'] = 'center';
var u489 = document.getElementById('u489');
gv_vAlignTable['u489'] = 'top';
var u300 = document.getElementById('u300');

var u301 = document.getElementById('u301');
gv_vAlignTable['u301'] = 'top';
var u302 = document.getElementById('u302');

u302.style.cursor = 'pointer';
if (bIE) u302.attachEvent("onclick", Clicku302);
else u302.addEventListener("click", Clicku302, true);
function Clicku302(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd4u300','none','',500,'none','',500);

}

}

var u303 = document.getElementById('u303');
gv_vAlignTable['u303'] = 'center';
var u304 = document.getElementById('u304');

u304.style.cursor = 'pointer';
if (bIE) u304.attachEvent("onclick", Clicku304);
else u304.addEventListener("click", Clicku304, true);
function Clicku304(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd1u300','none','',500,'none','',500);

}

}

var u305 = document.getElementById('u305');
gv_vAlignTable['u305'] = 'center';
var u306 = document.getElementById('u306');
gv_vAlignTable['u306'] = 'top';
var u307 = document.getElementById('u307');

u307.style.cursor = 'pointer';
if (bIE) u307.attachEvent("onclick", Clicku307);
else u307.addEventListener("click", Clicku307, true);
function Clicku307(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd3u300','none','',500,'none','',500);

}

}

var u308 = document.getElementById('u308');
gv_vAlignTable['u308'] = 'center';
var u309 = document.getElementById('u309');

u309.style.cursor = 'pointer';
if (bIE) u309.attachEvent("onclick", Clicku309);
else u309.addEventListener("click", Clicku309, true);
function Clicku309(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd5u300','none','',500,'none','',500);

}

}

var u310 = document.getElementById('u310');
gv_vAlignTable['u310'] = 'center';
var u311 = document.getElementById('u311');
gv_vAlignTable['u311'] = 'top';
var u312 = document.getElementById('u312');

u312.style.cursor = 'pointer';
if (bIE) u312.attachEvent("onclick", Clicku312);
else u312.addEventListener("click", Clicku312, true);
function Clicku312(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd2u300','none','',500,'none','',500);

}

}

var u313 = document.getElementById('u313');
gv_vAlignTable['u313'] = 'center';
var u314 = document.getElementById('u314');

u314.style.cursor = 'pointer';
if (bIE) u314.attachEvent("onclick", Clicku314);
else u314.addEventListener("click", Clicku314, true);
function Clicku314(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd4u300','none','',500,'none','',500);

}

}

var u315 = document.getElementById('u315');
gv_vAlignTable['u315'] = 'center';
var u316 = document.getElementById('u316');
gv_vAlignTable['u316'] = 'top';
var u317 = document.getElementById('u317');

u317.style.cursor = 'pointer';
if (bIE) u317.attachEvent("onclick", Clicku317);
else u317.addEventListener("click", Clicku317, true);
function Clicku317(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd1u300','none','',500,'none','',500);

}

}

var u318 = document.getElementById('u318');
gv_vAlignTable['u318'] = 'center';
var u319 = document.getElementById('u319');

u319.style.cursor = 'pointer';
if (bIE) u319.attachEvent("onclick", Clicku319);
else u319.addEventListener("click", Clicku319, true);
function Clicku319(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd3u300','none','',500,'none','',500);

}

}

var u320 = document.getElementById('u320');
gv_vAlignTable['u320'] = 'center';
var u321 = document.getElementById('u321');
gv_vAlignTable['u321'] = 'top';
var u322 = document.getElementById('u322');

u322.style.cursor = 'pointer';
if (bIE) u322.attachEvent("onclick", Clicku322);
else u322.addEventListener("click", Clicku322, true);
function Clicku322(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd0u300','none','',500,'none','',500);

}

}

var u323 = document.getElementById('u323');
gv_vAlignTable['u323'] = 'center';
var u324 = document.getElementById('u324');

u324.style.cursor = 'pointer';
if (bIE) u324.attachEvent("onclick", Clicku324);
else u324.addEventListener("click", Clicku324, true);
function Clicku324(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd2u300','none','',500,'none','',500);

}

}

var u325 = document.getElementById('u325');
gv_vAlignTable['u325'] = 'center';
var u326 = document.getElementById('u326');
gv_vAlignTable['u326'] = 'top';
var u327 = document.getElementById('u327');

var u328 = document.getElementById('u328');
gv_vAlignTable['u328'] = 'center';
var u329 = document.getElementById('u329');

u329.style.cursor = 'pointer';
if (bIE) u329.attachEvent("onclick", Clicku329);
else u329.addEventListener("click", Clicku329, true);
function Clicku329(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u300', 'pd1u300','none','',500,'none','',500);

}

}

var u330 = document.getElementById('u330');
gv_vAlignTable['u330'] = 'center';
var u331 = document.getElementById('u331');

var u332 = document.getElementById('u332');
gv_vAlignTable['u332'] = 'center';
var u333 = document.getElementById('u333');
gv_vAlignTable['u333'] = 'top';
var u334 = document.getElementById('u334');
gv_vAlignTable['u334'] = 'top';
var u335 = document.getElementById('u335');
gv_vAlignTable['u335'] = 'top';
var u336 = document.getElementById('u336');

var u337 = document.getElementById('u337');

u337.style.cursor = 'pointer';
if (bIE) u337.attachEvent("onclick", Clicku337);
else u337.addEventListener("click", Clicku337, true);
function Clicku337(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u338 = document.getElementById('u338');
gv_vAlignTable['u338'] = 'center';
var u339 = document.getElementById('u339');

var u340 = document.getElementById('u340');
gv_vAlignTable['u340'] = 'top';
var u341 = document.getElementById('u341');

u341.style.cursor = 'pointer';
if (bIE) u341.attachEvent("onclick", Clicku341);
else u341.addEventListener("click", Clicku341, true);
function Clicku341(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd4u339','none','',500,'none','',500);

}

}

var u342 = document.getElementById('u342');
gv_vAlignTable['u342'] = 'center';
var u343 = document.getElementById('u343');

u343.style.cursor = 'pointer';
if (bIE) u343.attachEvent("onclick", Clicku343);
else u343.addEventListener("click", Clicku343, true);
function Clicku343(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd1u339','none','',500,'none','',500);

}

}

var u344 = document.getElementById('u344');
gv_vAlignTable['u344'] = 'center';
var u345 = document.getElementById('u345');
gv_vAlignTable['u345'] = 'top';
var u346 = document.getElementById('u346');

u346.style.cursor = 'pointer';
if (bIE) u346.attachEvent("onclick", Clicku346);
else u346.addEventListener("click", Clicku346, true);
function Clicku346(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd3u339','none','',500,'none','',500);

}

}

var u347 = document.getElementById('u347');
gv_vAlignTable['u347'] = 'center';
var u348 = document.getElementById('u348');

u348.style.cursor = 'pointer';
if (bIE) u348.attachEvent("onclick", Clicku348);
else u348.addEventListener("click", Clicku348, true);
function Clicku348(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd5u339','none','',500,'none','',500);

}

}

var u349 = document.getElementById('u349');
gv_vAlignTable['u349'] = 'center';
var u350 = document.getElementById('u350');
gv_vAlignTable['u350'] = 'top';
var u351 = document.getElementById('u351');

u351.style.cursor = 'pointer';
if (bIE) u351.attachEvent("onclick", Clicku351);
else u351.addEventListener("click", Clicku351, true);
function Clicku351(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd2u339','none','',500,'none','',500);

}

}

var u352 = document.getElementById('u352');
gv_vAlignTable['u352'] = 'center';
var u353 = document.getElementById('u353');

u353.style.cursor = 'pointer';
if (bIE) u353.attachEvent("onclick", Clicku353);
else u353.addEventListener("click", Clicku353, true);
function Clicku353(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd4u339','none','',500,'none','',500);

}

}

var u354 = document.getElementById('u354');
gv_vAlignTable['u354'] = 'center';
var u355 = document.getElementById('u355');
gv_vAlignTable['u355'] = 'top';
var u356 = document.getElementById('u356');

u356.style.cursor = 'pointer';
if (bIE) u356.attachEvent("onclick", Clicku356);
else u356.addEventListener("click", Clicku356, true);
function Clicku356(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd1u339','none','',500,'none','',500);

}

}

var u357 = document.getElementById('u357');
gv_vAlignTable['u357'] = 'center';
var u358 = document.getElementById('u358');

u358.style.cursor = 'pointer';
if (bIE) u358.attachEvent("onclick", Clicku358);
else u358.addEventListener("click", Clicku358, true);
function Clicku358(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd3u339','none','',500,'none','',500);

}

}

var u359 = document.getElementById('u359');
gv_vAlignTable['u359'] = 'center';
var u360 = document.getElementById('u360');
gv_vAlignTable['u360'] = 'top';
var u361 = document.getElementById('u361');

u361.style.cursor = 'pointer';
if (bIE) u361.attachEvent("onclick", Clicku361);
else u361.addEventListener("click", Clicku361, true);
function Clicku361(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd0u339','none','',500,'none','',500);

}

}

var u362 = document.getElementById('u362');
gv_vAlignTable['u362'] = 'center';
var u363 = document.getElementById('u363');

u363.style.cursor = 'pointer';
if (bIE) u363.attachEvent("onclick", Clicku363);
else u363.addEventListener("click", Clicku363, true);
function Clicku363(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd2u339','none','',500,'none','',500);

}

}

var u364 = document.getElementById('u364');
gv_vAlignTable['u364'] = 'center';
var u365 = document.getElementById('u365');
gv_vAlignTable['u365'] = 'top';
var u366 = document.getElementById('u366');

var u367 = document.getElementById('u367');
gv_vAlignTable['u367'] = 'center';
var u368 = document.getElementById('u368');

u368.style.cursor = 'pointer';
if (bIE) u368.attachEvent("onclick", Clicku368);
else u368.addEventListener("click", Clicku368, true);
function Clicku368(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u339', 'pd1u339','none','',500,'none','',500);

}

}

var u369 = document.getElementById('u369');
gv_vAlignTable['u369'] = 'center';
var u103 = document.getElementById('u103');

u103.style.cursor = 'pointer';
if (bIE) u103.attachEvent("onclick", Clicku103);
else u103.addEventListener("click", Clicku103, true);
function Clicku103(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u24', 'pd3u24','none','',500,'none','',500);

}

}

var u104 = document.getElementById('u104');
gv_vAlignTable['u104'] = 'center';
var u370 = document.getElementById('u370');

var u371 = document.getElementById('u371');
gv_vAlignTable['u371'] = 'center';
var u372 = document.getElementById('u372');
gv_vAlignTable['u372'] = 'top';
var u373 = document.getElementById('u373');
gv_vAlignTable['u373'] = 'top';
var u374 = document.getElementById('u374');
gv_vAlignTable['u374'] = 'top';
var u375 = document.getElementById('u375');

var u376 = document.getElementById('u376');

u376.style.cursor = 'pointer';
if (bIE) u376.attachEvent("onclick", Clicku376);
else u376.addEventListener("click", Clicku376, true);
function Clicku376(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u377 = document.getElementById('u377');
gv_vAlignTable['u377'] = 'center';
var u378 = document.getElementById('u378');

var u379 = document.getElementById('u379');
gv_vAlignTable['u379'] = 'top';
var u380 = document.getElementById('u380');

u380.style.cursor = 'pointer';
if (bIE) u380.attachEvent("onclick", Clicku380);
else u380.addEventListener("click", Clicku380, true);
function Clicku380(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd4u378','none','',500,'none','',500);

}

}

var u381 = document.getElementById('u381');
gv_vAlignTable['u381'] = 'center';
var u382 = document.getElementById('u382');

u382.style.cursor = 'pointer';
if (bIE) u382.attachEvent("onclick", Clicku382);
else u382.addEventListener("click", Clicku382, true);
function Clicku382(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd1u378','none','',500,'none','',500);

}

}

var u383 = document.getElementById('u383');
gv_vAlignTable['u383'] = 'center';
var u384 = document.getElementById('u384');
gv_vAlignTable['u384'] = 'top';
var u385 = document.getElementById('u385');

u385.style.cursor = 'pointer';
if (bIE) u385.attachEvent("onclick", Clicku385);
else u385.addEventListener("click", Clicku385, true);
function Clicku385(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd3u378','none','',500,'none','',500);

}

}

var u386 = document.getElementById('u386');
gv_vAlignTable['u386'] = 'center';
var u387 = document.getElementById('u387');

u387.style.cursor = 'pointer';
if (bIE) u387.attachEvent("onclick", Clicku387);
else u387.addEventListener("click", Clicku387, true);
function Clicku387(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd5u378','none','',500,'none','',500);

}

}

var u388 = document.getElementById('u388');
gv_vAlignTable['u388'] = 'center';
var u389 = document.getElementById('u389');
gv_vAlignTable['u389'] = 'top';
var u200 = document.getElementById('u200');

u200.style.cursor = 'pointer';
if (bIE) u200.attachEvent("onclick", Clicku200);
else u200.addEventListener("click", Clicku200, true);
function Clicku200(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u183', 'pd1u183','none','',500,'none','',500);

}

}

var u201 = document.getElementById('u201');
gv_vAlignTable['u201'] = 'center';
var u202 = document.getElementById('u202');

u202.style.cursor = 'pointer';
if (bIE) u202.attachEvent("onclick", Clicku202);
else u202.addEventListener("click", Clicku202, true);
function Clicku202(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u183', 'pd3u183','none','',500,'none','',500);

}

}

var u390 = document.getElementById('u390');

u390.style.cursor = 'pointer';
if (bIE) u390.attachEvent("onclick", Clicku390);
else u390.addEventListener("click", Clicku390, true);
function Clicku390(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd2u378','none','',500,'none','',500);

}

}

var u391 = document.getElementById('u391');
gv_vAlignTable['u391'] = 'center';
var u392 = document.getElementById('u392');

u392.style.cursor = 'pointer';
if (bIE) u392.attachEvent("onclick", Clicku392);
else u392.addEventListener("click", Clicku392, true);
function Clicku392(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd4u378','none','',500,'none','',500);

}

}

var u393 = document.getElementById('u393');
gv_vAlignTable['u393'] = 'center';
var u394 = document.getElementById('u394');
gv_vAlignTable['u394'] = 'top';
var u395 = document.getElementById('u395');

u395.style.cursor = 'pointer';
if (bIE) u395.attachEvent("onclick", Clicku395);
else u395.addEventListener("click", Clicku395, true);
function Clicku395(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd1u378','none','',500,'none','',500);

}

}

var u396 = document.getElementById('u396');
gv_vAlignTable['u396'] = 'center';
var u397 = document.getElementById('u397');

u397.style.cursor = 'pointer';
if (bIE) u397.attachEvent("onclick", Clicku397);
else u397.addEventListener("click", Clicku397, true);
function Clicku397(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u378', 'pd3u378','none','',500,'none','',500);

}

}

var u398 = document.getElementById('u398');
gv_vAlignTable['u398'] = 'center';
var u399 = document.getElementById('u399');
gv_vAlignTable['u399'] = 'top';
var u210 = document.getElementById('u210');

var u211 = document.getElementById('u211');
gv_vAlignTable['u211'] = 'center';
var u212 = document.getElementById('u212');

u212.style.cursor = 'pointer';
if (bIE) u212.attachEvent("onclick", Clicku212);
else u212.addEventListener("click", Clicku212, true);
function Clicku212(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u183', 'pd1u183','none','',500,'none','',500);

}

}

var u213 = document.getElementById('u213');
gv_vAlignTable['u213'] = 'center';
var u214 = document.getElementById('u214');

var u215 = document.getElementById('u215');
gv_vAlignTable['u215'] = 'center';
var u216 = document.getElementById('u216');
gv_vAlignTable['u216'] = 'top';
var u217 = document.getElementById('u217');
gv_vAlignTable['u217'] = 'top';
var u218 = document.getElementById('u218');
gv_vAlignTable['u218'] = 'top';
var u219 = document.getElementById('u219');

var u220 = document.getElementById('u220');

u220.style.cursor = 'pointer';
if (bIE) u220.attachEvent("onclick", Clicku220);
else u220.addEventListener("click", Clicku220, true);
function Clicku220(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u221 = document.getElementById('u221');
gv_vAlignTable['u221'] = 'center';
var u222 = document.getElementById('u222');

var u223 = document.getElementById('u223');
gv_vAlignTable['u223'] = 'top';
var u224 = document.getElementById('u224');

u224.style.cursor = 'pointer';
if (bIE) u224.attachEvent("onclick", Clicku224);
else u224.addEventListener("click", Clicku224, true);
function Clicku224(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u222', 'pd4u222','none','',500,'none','',500);

}

}

var u225 = document.getElementById('u225');
gv_vAlignTable['u225'] = 'center';
var u226 = document.getElementById('u226');

u226.style.cursor = 'pointer';
if (bIE) u226.attachEvent("onclick", Clicku226);
else u226.addEventListener("click", Clicku226, true);
function Clicku226(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u222', 'pd1u222','none','',500,'none','',500);

}

}

var u227 = document.getElementById('u227');
gv_vAlignTable['u227'] = 'center';
var u228 = document.getElementById('u228');
gv_vAlignTable['u228'] = 'top';
var u229 = document.getElementById('u229');

u229.style.cursor = 'pointer';
if (bIE) u229.attachEvent("onclick", Clicku229);
else u229.addEventListener("click", Clicku229, true);
function Clicku229(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u222', 'pd3u222','none','',500,'none','',500);

}

}

var u230 = document.getElementById('u230');
gv_vAlignTable['u230'] = 'center';
var u231 = document.getElementById('u231');

u231.style.cursor = 'pointer';
if (bIE) u231.attachEvent("onclick", Clicku231);
else u231.addEventListener("click", Clicku231, true);
function Clicku231(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u222', 'pd5u222','none','',500,'none','',500);

}

}

var u232 = document.getElementById('u232');
gv_vAlignTable['u232'] = 'center';
var u233 = document.getElementById('u233');
gv_vAlignTable['u233'] = 'top';
var u234 = document.getElementById('u234');

u234.style.cursor = 'pointer';
if (bIE) u234.attachEvent("onclick", Clicku234);
else u234.addEventListener("click", Clicku234, true);
function Clicku234(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u222', 'pd2u222','none','',500,'none','',500);

}

}

var u235 = document.getElementById('u235');
gv_vAlignTable['u235'] = 'center';
var u236 = document.getElementById('u236');

u236.style.cursor = 'pointer';
if (bIE) u236.attachEvent("onclick", Clicku236);
else u236.addEventListener("click", Clicku236, true);
function Clicku236(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u222', 'pd4u222','none','',500,'none','',500);

}

}

var u237 = document.getElementById('u237');
gv_vAlignTable['u237'] = 'center';
var u238 = document.getElementById('u238');
gv_vAlignTable['u238'] = 'top';
var u239 = document.getElementById('u239');

u239.style.cursor = 'pointer';
if (bIE) u239.attachEvent("onclick", Clicku239);
else u239.addEventListener("click", Clicku239, true);
function Clicku239(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u222', 'pd1u222','none','',500,'none','',500);

}

}

var u240 = document.getElementById('u240');
gv_vAlignTable['u240'] = 'center';
var u241 = document.getElementById('u241');

u241.style.cursor = 'pointer';
if (bIE) u241.attachEvent("onclick", Clicku241);
else u241.addEventListener("click", Clicku241, true);
function Clicku241(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u222', 'pd3u222','none','',500,'none','',500);

}

}

var u242 = document.getElementById('u242');
gv_vAlignTable['u242'] = 'center';
var u243 = document.getElementById('u243');
gv_vAlignTable['u243'] = 'top';
var u244 = document.getElementById('u244');

u244.style.cursor = 'pointer';
if (bIE) u244.attachEvent("onclick", Clicku244);
else u244.addEventListener("click", Clicku244, true);
function Clicku244(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u222', 'pd0u222','none','',500,'none','',500);

}

}

var u245 = document.getElementById('u245');
gv_vAlignTable['u245'] = 'center';
var u246 = document.getElementById('u246');

u246.style.cursor = 'pointer';
if (bIE) u246.attachEvent("onclick", Clicku246);
else u246.addEventListener("click", Clicku246, true);
function Clicku246(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u222', 'pd2u222','none','',500,'none','',500);

}

}

var u247 = document.getElementById('u247');
gv_vAlignTable['u247'] = 'center';
var u248 = document.getElementById('u248');
gv_vAlignTable['u248'] = 'top';
var u249 = document.getElementById('u249');

var u250 = document.getElementById('u250');
gv_vAlignTable['u250'] = 'center';
var u251 = document.getElementById('u251');

u251.style.cursor = 'pointer';
if (bIE) u251.attachEvent("onclick", Clicku251);
else u251.addEventListener("click", Clicku251, true);
function Clicku251(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u222', 'pd1u222','none','',500,'none','',500);

}

}

var u252 = document.getElementById('u252');
gv_vAlignTable['u252'] = 'center';
var u253 = document.getElementById('u253');

var u254 = document.getElementById('u254');
gv_vAlignTable['u254'] = 'center';
var u255 = document.getElementById('u255');
gv_vAlignTable['u255'] = 'top';
var u256 = document.getElementById('u256');
gv_vAlignTable['u256'] = 'top';
var u257 = document.getElementById('u257');
gv_vAlignTable['u257'] = 'top';
var u258 = document.getElementById('u258');

var u259 = document.getElementById('u259');

u259.style.cursor = 'pointer';
if (bIE) u259.attachEvent("onclick", Clicku259);
else u259.addEventListener("click", Clicku259, true);
function Clicku259(e)
{
windowEvent = e;


if (true) {

	self.location.href="#" + GetQuerystring();

}

}

var u0 = document.getElementById('u0');

var u1 = document.getElementById('u1');
gv_vAlignTable['u1'] = 'center';
var u2 = document.getElementById('u2');

var u3 = document.getElementById('u3');
gv_vAlignTable['u3'] = 'top';
var u4 = document.getElementById('u4');

var u5 = document.getElementById('u5');
gv_vAlignTable['u5'] = 'top';
var u6 = document.getElementById('u6');

var u7 = document.getElementById('u7');
gv_vAlignTable['u7'] = 'top';
var u8 = document.getElementById('u8');

var u260 = document.getElementById('u260');
gv_vAlignTable['u260'] = 'center';
var u261 = document.getElementById('u261');

var u262 = document.getElementById('u262');
gv_vAlignTable['u262'] = 'top';
var u263 = document.getElementById('u263');

u263.style.cursor = 'pointer';
if (bIE) u263.attachEvent("onclick", Clicku263);
else u263.addEventListener("click", Clicku263, true);
function Clicku263(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd4u261','none','',500,'none','',500);

}

}

var u264 = document.getElementById('u264');
gv_vAlignTable['u264'] = 'center';
var u265 = document.getElementById('u265');

u265.style.cursor = 'pointer';
if (bIE) u265.attachEvent("onclick", Clicku265);
else u265.addEventListener("click", Clicku265, true);
function Clicku265(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd1u261','none','',500,'none','',500);

}

}

var u266 = document.getElementById('u266');
gv_vAlignTable['u266'] = 'center';
var u267 = document.getElementById('u267');
gv_vAlignTable['u267'] = 'top';
var u268 = document.getElementById('u268');

u268.style.cursor = 'pointer';
if (bIE) u268.attachEvent("onclick", Clicku268);
else u268.addEventListener("click", Clicku268, true);
function Clicku268(e)
{
windowEvent = e;


if (true) {

	SetPanelState('u261', 'pd3u261','none','',500,'none','',500);

}

}

var u269 = document.getElementById('u269');
gv_vAlignTable['u269'] = 'center';
if (window.OnLoad) OnLoad();
