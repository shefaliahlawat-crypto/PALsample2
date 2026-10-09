/* Force Quest: Force & Friction PAL (Class 8 Science)
   Content, branching diagnostic, learner model and app screens. */
"use strict";
"use strict";
/* ================= Content (aligned to PAL Pathway: Force v2) ================= */
const CONCEPTS = {
  FORCE_01:{name:"Pushes and pulls", short:"Force as push/pull"},
  FORCE_02:{name:"Touch and no-touch forces", short:"Contact vs non-contact"},
  FORCE_03:{name:"What a force can do", short:"Effects of force"},
  FORCE_05:{name:"Balanced forces", short:"Net force, balanced"},
  FORCE_06:{name:"Friction", short:"Friction"},
  FORCE_07:{name:"Weight and mass", short:"Gravity, weight ≠ mass"},
  FORCE_APP:{name:"Forces in real life", short:"Integrated application"}
};
const MCODES = {
  M1:{code:"M1_force_keeps_motion", text:"A moving object needs a continuing force to keep moving", concept:"FORCE_06", repair:"Toy-car predict–observe–explain: push and let go on tile, cloth and sand; explain what stops it."},
  M2:{code:"M2_still_means_no_force", text:"A stationary object has no forces on it", concept:"FORCE_05", repair:"Book-on-table and tug-of-war (5 N vs 5 N) predict–observe–explain."},
  M3:{code:"M3_balanced_means_none", text:"Balanced forces mean there are no forces", concept:"FORCE_05", repair:"Spring-balance tug of war: both readings stay non-zero while nothing moves."},
  M4:{code:"M4_one_effect_only", text:"A force only changes speed (not direction or shape)", concept:"FORCE_03", repair:"Before/after image pairs: football, clay, door."},
  M5:{code:"M5_friction_only_moving", text:"Friction acts only on moving things, or is always harmful", concept:"FORCE_06", repair:"“Box that won't move” predict–observe–explain, then the shoe-sole and tyre-tread sort."},
  M6:{code:"M6_contact_only", text:"A force needs touching; gravity or magnets aren't really forces", concept:"FORCE_02", repair:"Magnet-and-comb demo video, then the falling-mango picture card."},
  M7:{code:"M7_weight_is_mass", text:"Weight is measured in kg, or is the same on the Moon", concept:"FORCE_07", repair:"Moon vs Earth comparison card with a spring-balance reading."}
};
const CODE_PRIORITY = ["M1","M5","M3","M2","M6","M4","M7"];
const ROUTES = {
  A:{name:"Foundation", learner:"Start with hands-on basics: sort pictures, act it out, then three easy questions."},
  B:{name:"Core builder", learner:"Guided practice: a worked example, then one with gaps, then your own."},
  C:{name:"Misconception repair", learner:"Puzzle stop: predict what will happen, watch it, then explain the difference."},
  D:{name:"Apply and extend", learner:"Real-life challenges, like bicycle brakes and shoe treads."},
  E:{name:"Confirmation", learner:"A quick check in a different way: a picture, a drag-and-drop or an explain-your-answer."}
};
const STAGES = ["Warm-up","Explore","Explore","Explore","Explore","Try it out","One last check"];

/* next: item id, "@confirm" (rule picks Q7) or "@end" */
const ITEMS = {
  S1:{q:1, concept:["FORCE_01"], dok:1, skill:"identify", label:"Drawer: push or pull?",
    scene:"Sonali wants a spoon from the kitchen drawer.",
    stem:"She opens the drawer by its handle. What is she doing to the drawer?",
    opts:[
      {t:"Pulling it", ok:true, next:"S2A"},
      {t:"Pushing it", next:"S2B", note:"Push/pull confusion"},
      {t:"Nothing. A drawer just slides out by itself.", next:"S2B", note:"Doesn't see the action as a force"},
      {t:"Pushing and pulling at the same time", next:"S2B", note:"Push/pull confusion"}
    ]},
  S2A:{q:2, concept:["FORCE_02"], dok:2, skill:"classify", label:"Magnet & still ball",
    stem:"Which of these involves a force?",
    opts:[
      {t:"A magnet pulling a steel pin from a little distance", m:["M2"], next:"S3B"},
      {t:"A ball lying still on the ground", m:["M6"], next:"S3B"},
      {t:"Both of them", ok:true, next:"S3A"},
      {t:"Neither of them", m:["M2","M6"], next:"S3B"}
    ]},
  S2B:{q:2, concept:["FORCE_01","FORCE_03"], dok:1, skill:"identify", label:"Squeezing dough",
    scene:"Ragini squeezes a ball of dough between her hands. It becomes flat.",
    stem:"Did Ragini use a force?",
    opts:[
      {t:"Yes. Squeezing is a push, and it changed the dough's shape.", ok:true, next:"S3A"},
      {t:"No, because the dough did not move from its place", m:["M4"], next:"S3C"},
      {t:"No. Only machines can apply a force.", next:"S3C", note:"Narrow idea of force"},
      {t:"Yes, but only because the dough is heavy", next:"S3C", note:"Links force to heaviness"}
    ]},
  S3A:{q:3, concept:["FORCE_03"], dok:2, skill:"describe", label:"Cricket ball hit back",
    scene:"A cricket ball comes towards the batter. She hits it, and it flies back the other way, faster.",
    stem:"What did the force of the bat change?",
    opts:[
      {t:"Only the ball's speed", m:["M4"], next:"S4B"},
      {t:"Only the ball's direction", m:["M4"], next:"S4B"},
      {t:"Both its speed and its direction", ok:true, next:"S4A"},
      {t:"Nothing. The ball was already moving, so the bat's force wasn't needed.", m:["M1"], next:"S4B"}
    ]},
  S3B:{q:3, concept:["FORCE_02"], dok:2, skill:"classify", label:"Rubbed comb & paper",
    scene:"Ravi rubs a plastic comb in his dry hair and holds it near small bits of paper. The bits jump up to the comb.",
    stem:"Which is right?",
    opts:[
      {t:"It is a contact force, because the comb has to touch the paper", m:["M6"], next:"S4B"},
      {t:"It is a non-contact force (electrostatic) that acts from a distance", ok:true, next:"S4A"},
      {t:"It is not a force. The paper is light, so it floats up.", m:["M6"], next:"S4B"},
      {t:"It is a magnetic force, because the comb pulls", next:"S4B", note:"Mixes up non-contact force types"}
    ]},
  S3C:{q:3, concept:["FORCE_01"], dok:1, skill:"identify", label:"Which is a push?",
    stem:"Which of these is a push?",
    opts:[
      {t:"Pressing a doorbell button", ok:true, next:"S4B"},
      {t:"Plucking a mango from a tree", next:"S4C", note:"Push/pull confusion"},
      {t:"Pulling a bucket up from a well", next:"S4C", note:"Push/pull confusion"},
      {t:"Opening a drawer by its handle", next:"S4C", note:"Push/pull confusion"}
    ]},
  S4A:{q:4, concept:["FORCE_06"], dok:3, skill:"represent", label:"Toy car: force arrows",
    scene:"A child pushes a toy car on a smooth floor and lets go. The car rolls on, slows down and stops.",
    stem:"While the car is still rolling forward after she lets go, which forces act on it along the floor?",
    opts:[
      {t:"A forward push (→) and backward friction (←)", m:["M1"], next:"S5B"},
      {t:"Only friction, pointing backwards (←)", ok:true, next:"S5A"},
      {t:"No force at all until it stops", m:["M2"], next:"S5B"},
      {t:"Only a forward push (→) that gets smaller", m:["M1"], next:"S5B"}
    ]},
  S4B:{q:4, concept:["FORCE_06"], dok:2, skill:"explain", label:"Notebook: glass vs cloth",
    scene:"Rahul gives a notebook the same push on smooth glass and on a rough cloth, then lets go.",
    stem:"It stops much sooner on the cloth. Why?",
    opts:[
      {t:"The cloth gives more friction, which acts against the motion", ok:true, next:"S5C"},
      {t:"The push inside the notebook gets used up faster on cloth", m:["M1"], next:"S5B"},
      {t:"The cloth pulls the notebook with a magnetic force", next:"S5B", note:"Mixes up force types"},
      {t:"Gravity is stronger on soft things like cloth", next:"S5B", note:"Gravity confusion"}
    ]},
  S4C:{q:4, concept:["FORCE_06"], dok:1, skill:"identify", label:"Sliding box stops",
    stem:"A box slides across the floor and slowly stops. Which force stopped it?",
    opts:[
      {t:"Friction between the box and the floor", ok:true, next:"S5B"},
      {t:"Magnetic force", next:"S5D", note:"Can't yet name friction"},
      {t:"No force. Its push got used up.", m:["M1"], next:"S5B"},
      {t:"Gravity pulling it backwards", next:"S5D", note:"Gravity confusion"}
    ]},
  S5A:{q:5, concept:["FORCE_06","FORCE_05"], dok:3, skill:"explain", label:"Almirah won't move",
    scene:"Sonali pushes a heavy almirah with all her strength, but it does not move.",
    stem:"Which statement is true?",
    opts:[
      {t:"No force acts on the almirah, because it is not moving", m:["M2"], next:"APP_B"},
      {t:"Friction from the floor pushes back as hard as she pushes, so the forces balance", ok:true, next:"APP_A"},
      {t:"Friction acts only on moving things. The almirah is just too heavy.", m:["M5"], next:"APP_B"},
      {t:"The forces balance, so they cancel out and there are really no forces at all", m:["M3"], next:"APP_B"}
    ]},
  S5B:{q:5, concept:["FORCE_06"], dok:2, skill:"explain", label:"Ball: grass vs cement",
    scene:"Two friends roll the same ball with the same push, one on grass and one on a cement floor.",
    stem:"On the grass it stops much sooner. Why?",
    opts:[
      {t:"Grass gives more friction, which acts against the motion", ok:true, next:"APP_A"},
      {t:"The push inside the ball gets used up faster on grass", m:["M1"], next:"APP_B"},
      {t:"Grass is softer, so gravity pulls harder there", next:"APP_B", note:"Gravity confusion"},
      {t:"The cement floor keeps pushing the ball forward", m:["M1"], next:"APP_B"}
    ]},
  S5C:{q:5, concept:["FORCE_07"], dok:2, skill:"apply", label:"“5 kg weight” of rice",
    scene:"A shopkeeper says, “This bag of rice weighs 5 kg.”",
    stem:"How would a scientist say it?",
    opts:[
      {t:"Its mass is 5 kg. Its weight is a force, measured in newtons.", ok:true, next:"APP_A"},
      {t:"Its weight is 5 kg, which is the same thing as its mass", m:["M7"], next:"APP_B"},
      {t:"Its weight is 5 N", m:["M7"], next:"APP_B"},
      {t:"Its mass is 5 kg on Earth but would be less on the Moon", m:["M7"], next:"APP_B"}
    ]},
  S5D:{q:5, concept:["FORCE_06"], dok:1, skill:"identify", label:"Wet, soapy floor",
    stem:"Why is it easy to slip on a wet, soapy floor?",
    opts:[
      {t:"Soap and water make the floor smoother, so there is less friction", ok:true, next:"APP_B"},
      {t:"The water pushes your feet forward", next:"APP_B", note:"No friction idea yet"},
      {t:"Gravity is stronger on wet floors", next:"APP_B", note:"Gravity confusion"},
      {t:"Wet floors have more friction", next:"APP_B", note:"Reverses friction"}
    ]},
  APP_A:{q:6, concept:["FORCE_APP"], dok:3, skill:"apply", label:"Cycling up the hill",
    scene:"Sonali and Ragini are cycling up a hill. They stop pedalling. The bicycles slow down, stop for a moment, then start rolling back down.",
    stem:"Which forces cause this?",
    opts:[
      {t:"Gravity pulls the bicycles down the slope, and friction acts against their motion", ok:true, next:"@confirm"},
      {t:"Only friction. Gravity acts only on things that are falling.", m:["M6"], next:"@confirm"},
      {t:"The pedalling force they gave the bicycles runs out", m:["M1"], next:"@confirm"},
      {t:"No force. Bicycles stop and roll back on their own.", m:["M1"], next:"@confirm"}
    ]},
  APP_B:{q:6, concept:["FORCE_APP"], dok:2, skill:"apply", label:"Studs and tyre treads",
    stem:"Why do football shoes have studs and bicycle tyres have deep grooves (treads)?",
    opts:[
      {t:"To increase friction, so they grip the ground and don't slip", ok:true, next:"@confirm"},
      {t:"To reduce friction, because friction is always harmful", m:["M5"], next:"@confirm"},
      {t:"To make them heavier, so gravity holds them down", next:"@confirm", note:"Gravity confusion"},
      {t:"Only for decoration", next:"@confirm", note:"No friction idea yet"}
    ]},

  /* ---- Q7 confirmation pool (chosen by rule, not by the Q6 option) ---- */
  CF_M1:{q:7, concept:["FORCE_06"], dok:2, skill:"represent", pool:true, target:"M1", label:"Hit ball slides on",
    scene:"A hockey stick hits a ball on a smooth floor. The ball slides on after it leaves the stick.",
    stem:"While it slides, which force acts on it along the floor?",
    opts:[
      {t:"A forward force from the stick, carried by the ball", m:["M1"], next:"@end"},
      {t:"Only a small friction force, pointing backwards", ok:true, next:"@end"},
      {t:"No force at all", m:["M2"], next:"@end"},
      {t:"A forward force and a backward force that are equal", m:["M1"], next:"@end"}
    ]},
  CF_M2:{q:7, concept:["FORCE_05"], dok:2, skill:"explain", pool:true, target:"M2 / M3", label:"Book on a table",
    stem:"A book rests on a table. Which is true?",
    opts:[
      {t:"No forces act on it, because it is still", m:["M2"], next:"@end"},
      {t:"Gravity pulls it down and the table pushes it up. The forces are balanced.", ok:true, next:"@end"},
      {t:"Only gravity acts. A table cannot push.", m:["M2"], next:"@end"},
      {t:"The forces are balanced, so there are no forces", m:["M3"], next:"@end"}
    ]},
  CF_M4:{q:7, concept:["FORCE_03"], dok:2, skill:"describe", pool:true, target:"M4", label:"Potter shapes clay",
    stem:"A potter presses wet clay into the shape of a pot. What has the force done?",
    opts:[
      {t:"Changed the clay's shape", ok:true, next:"@end"},
      {t:"Nothing, because the clay did not move away", m:["M4"], next:"@end"},
      {t:"Only changed the clay's speed", m:["M4"], next:"@end"},
      {t:"Changed the clay's mass", m:["M7"], next:"@end"}
    ]},
  CF_M5:{q:7, concept:["FORCE_06"], dok:2, skill:"explain", pool:true, target:"M5", label:"Friction when walking",
    stem:"When you walk, what does friction between your shoes and the ground do?",
    opts:[
      {t:"It helps you push off and move forward without slipping", ok:true, next:"@end"},
      {t:"It only slows you down. Friction is always harmful.", m:["M5"], next:"@end"},
      {t:"Nothing, because it acts only when you slip", m:["M5"], next:"@end"},
      {t:"Nothing, because there is no friction on dry ground", m:["M5"], next:"@end"}
    ]},
  CF_M6:{q:7, concept:["FORCE_02"], dok:2, skill:"classify", pool:true, target:"M6", label:"Mango falls",
    stem:"A ripe mango falls from a tree when nobody touches it. What pulls it down?",
    opts:[
      {t:"Only the wind", m:["M6"], next:"@end"},
      {t:"Gravity, a non-contact force", ok:true, next:"@end"},
      {t:"Nothing. It falls because it is heavy.", m:["M6"], next:"@end"},
      {t:"The branch pushes it down", m:["M6"], next:"@end"}
    ]},
  CF_M7:{q:7, concept:["FORCE_07"], dok:2, skill:"apply", pool:true, target:"M7", label:"Bag on the Moon",
    stem:"A bag has a mass of 3 kg on Earth. If you take it to the Moon, what happens?",
    opts:[
      {t:"Its mass stays 3 kg, but its weight becomes smaller", ok:true, next:"@end"},
      {t:"Its mass becomes smaller, but its weight stays the same", m:["M7"], next:"@end"},
      {t:"Both its mass and its weight stay the same", m:["M7"], next:"@end"},
      {t:"Both its mass and its weight become one-sixth", m:["M7"], next:"@end"}
    ]},
  CF_GEN:{q:7, concept:["FORCE_06","FORCE_APP"], dok:3, skill:"justify", pool:true, target:"transfer", label:"Toy cars: sand vs tiles",
    scene:"Two identical toy cars get exactly the same push. One is on sand, the other on smooth tiles.",
    stem:"Which goes farther, and why?",
    opts:[
      {t:"The one on tiles, because there is less friction to slow it down", ok:true, next:"@end"},
      {t:"The one on sand, because sand pushes it along", m:["M1"], next:"@end"},
      {t:"They go the same distance, because the push was the same", m:["M1"], next:"@end"},
      {t:"The one on sand, because more grip helps it keep moving", m:["M5"], next:"@end"}
    ]}
};
const CF_BY_CODE = {M1:"CF_M1",M2:"CF_M2",M3:"CF_M2",M4:"CF_M4",M5:"CF_M5",M6:"CF_M6",M7:"CF_M7"};
const CF_BY_CONCEPT = {FORCE_01:"CF_M4",FORCE_02:"CF_M6",FORCE_03:"CF_M4",FORCE_05:"CF_M2",FORCE_06:"CF_M5",FORCE_07:"CF_M7",FORCE_APP:"CF_GEN"};
const KEYS = ["A","B","C","D"];

/* ================= About me: learner preference ================= */
const MODS = {
  video:  {name:"Video", long:"Watch a short narrated clip", icon:'<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9l5 3-5 3z"/></svg>'},
  vtr:    {name:"Visual thinking routine", long:"Look closely at a picture and think it through", icon:'<svg viewBox="0 0 24 24"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'},
  notes:  {name:"Visual notes", long:"Sketch notes you can read or listen to", icon:'<svg viewBox="0 0 24 24"><path d="M5 3h10l4 4v14H5z"/><path d="M8 11h8M8 15h5"/><path d="M15 3v4h4"/></svg>'},
  example:{name:"Solved example", long:"See it worked out step by step, then try one", icon:'<svg viewBox="0 0 24 24"><path d="M4 6h3M4 12h3M4 18h3"/><path d="M10 6h10M10 12h10M10 18h6"/></svg>'},
  hands:  {name:"Hands-on activity", long:"Try it yourself and record what you see", icon:'<svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v6L5 19a1.5 1.5 0 0 0 1.3 2h11.4A1.5 1.5 0 0 0 19 19l-5-10V3"/><path d="M7.5 14h9"/></svg>'}
};
const MOD_ORDER = ["hands","video","vtr","notes","example"];
const PREFS = [
  {id:"P1", stem:"When you learn something new, what helps you most at the start?", opts:[
    {t:"Watching a short video", mod:"video"},
    {t:"Looking closely at a picture and asking questions about it", mod:"vtr"},
    {t:"Short notes with drawings that I can read or listen to", mod:"notes"},
    {t:"Trying it out with my own hands", mod:"hands"}]},
  {id:"P2", stem:"When something feels tricky, what helps you understand it?", opts:[
    {t:"Seeing a solved example, one step at a time", mod:"example"},
    {t:"Watching it happen again in a video", mod:"video"},
    {t:"Doing a small test and writing down what I see", mod:"hands"},
    {t:"Thinking about a picture, alone or with a friend", mod:"vtr"}]},
  {id:"P3", stem:"Would you like the words read aloud to you?", opts:[
    {t:"Yes, please read things aloud to me", aloud:"yes"},
    {t:"Sometimes, when there is a lot to read", aloud:"some"},
    {t:"No, I like to read by myself", aloud:"no"}]}
];
const ROUTE_BOOST = {
  A:{video:1, hands:.5, why:"Foundation route: start concrete, so video and hands-on move up."},
  B:{example:1, why:"Core builder route: solved examples move up."},
  C:{hands:1, video:.5, why:"Repair route: learners need to predict and then see it happen, so hands-on and video move up."},
  D:{hands:.5, example:.5, why:"Apply route: hands-on and examples move up."},
  E:{example:.5, why:"Confirmation route: a solved example moves up."},
  X:{why:""}
};
function profileOf(prefs){
  const sc = {video:0, vtr:0, notes:0, example:0, hands:0};
  const p1 = PREFS[0].opts[prefs.P1], p2 = PREFS[1].opts[prefs.P2], p3 = PREFS[2].opts[prefs.P3];
  if (p1) sc[p1.mod] += 3;
  if (p2) sc[p2.mod] += 2;
  const aloud = p3 ? p3.aloud : "some";
  if (aloud === "yes"){ sc.notes += 1.5; sc.video += .5; }
  if (aloud === "some") sc.notes += .5;
  const ranking = MOD_ORDER.slice().sort((a,b) => (sc[b]-sc[a]) || (MOD_ORDER.indexOf(a)-MOD_ORDER.indexOf(b)));
  return {scores:sc, ranking, aloud};
}
function playlistFor(prefs, route){
  const pr = profileOf(prefs), b = ROUTE_BOOST[route] || {};
  const sc = {...pr.scores}; Object.keys(sc).forEach(k => sc[k] += (b[k]||0));
  const order = MOD_ORDER.slice().sort((a,b2) => (sc[b2]-sc[a]) || (MOD_ORDER.indexOf(a)-MOD_ORDER.indexOf(b2)));
  return {order, picked:order.slice(0,2), why:b.why || ""};
}

/* ================= Pictures (used by clips and thinking routines) ================= */
function arrow(x1,y1,x2,y2,c){ // c: "B" or "R"
  const a = Math.atan2(y2-y1,x2-x1), s = 11;
  const p1 = [x2 - s*Math.cos(a-0.45), y2 - s*Math.sin(a-0.45)], p2 = [x2 - s*Math.cos(a+0.45), y2 - s*Math.sin(a+0.45)];
  return `<line class="ar${c}" x1="${x1}" y1="${y1}" x2="${x2 - 6*Math.cos(a)}" y2="${y2 - 6*Math.sin(a)}"/><polygon class="hd${c}" points="${x2},${y2} ${p1[0].toFixed(1)},${p1[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}"/>`;
}
const PICS = {
  FORCE_01: () => `<svg viewBox="0 0 320 180" role="img" aria-label="A child pulls a box with a rope">
    <line class="thin" x1="10" y1="152" x2="310" y2="152"/>
    <circle class="ln" cx="92" cy="62" r="12"/><line class="ln" x1="92" y1="74" x2="96" y2="114"/>
    <line class="ln" x1="96" y1="114" x2="80" y2="150"/><line class="ln" x1="96" y1="114" x2="108" y2="150"/>
    <line class="ln" x1="94" y1="88" x2="122" y2="104"/>
    <line class="ln" x1="122" y1="104" x2="206" y2="118"/>
    <rect class="fillamber" x="206" y="96" width="74" height="56" rx="4"/>
    ${arrow(236,78,160,78,"B")}<text class="b" x="172" y="66">pull</text></svg>`,
  FORCE_02: () => `<svg viewBox="0 0 320 180" role="img" aria-label="A bar magnet pulls steel pins across a gap">
    <rect class="fillred" x="34" y="70" width="60" height="40"/><rect class="fillblue" x="94" y="70" width="60" height="40"/>
    <text x="56" y="96">N</text><text x="118" y="96">S</text>
    <line class="ln" x1="220" y1="72" x2="206" y2="108"/><line class="ln" x1="238" y1="74" x2="226" y2="110"/><line class="ln" x1="256" y1="76" x2="246" y2="112"/>
    <path class="thin" stroke-dasharray="5 5" d="M154 80 Q185 70 205 86"/><path class="thin" stroke-dasharray="5 5" d="M154 100 Q185 112 205 100"/>
    ${arrow(240,140,170,140,"B")}<text class="b" x="160" y="166">pulls without touching</text></svg>`,
  FORCE_03: () => `<svg viewBox="0 0 320 180" role="img" aria-label="A kicked football changes direction">
    <line class="thin" x1="10" y1="150" x2="310" y2="150"/>
    <rect class="fillsoft" x="24" y="118" width="58" height="26" rx="12"/>
    <circle class="fillamber" cx="104" cy="134" r="15"/>
    <path class="thin" stroke-dasharray="6 6" d="M30 134 L88 134"/>
    <path class="arB" stroke-dasharray="7 6" d="M120 130 C190 126 215 70 268 40"/>
    <polygon class="hdB" points="276,35 262,38 268,49"/>
    <text x="150" y="168" class="m">new speed + new direction</text></svg>`,
  FORCE_05: () => `<svg viewBox="0 0 320 180" role="img" aria-label="Tug of war with 5 newtons on each side">
    <line class="ln" x1="54" y1="104" x2="266" y2="104"/>
    <circle class="fillblue" cx="40" cy="104" r="16"/><circle class="fillred" cx="280" cy="104" r="16"/>
    <rect class="fillamber" x="152" y="96" width="16" height="16"/>
    ${arrow(150,70,74,70,"B")}${arrow(170,70,246,70,"R")}
    <text class="b" x="96" y="58">5 N</text><text class="r" x="196" y="58">5 N</text>
    <text x="112" y="150">net force = 0 N</text></svg>`,
  FORCE_06: () => `<svg viewBox="0 0 320 180" role="img" aria-label="Zoomed view of two rough surfaces catching on each other">
    <rect class="fillamber" x="96" y="44" width="130" height="50"/>
    <polyline class="ln" points="96,94 106,102 116,94 126,104 136,94 146,102 156,94 166,104 176,94 186,102 196,94 206,104 216,94 226,100"/>
    <path class="fillsoft" d="M40 108 L52 100 L62 110 L74 100 L86 110 L98 102 L110 110 L122 100 L134 110 L146 102 L158 110 L170 100 L182 110 L194 102 L206 110 L218 100 L230 110 L242 102 L254 110 L266 100 L280 108 L280 140 L40 140 Z"/>
    ${arrow(120,28,210,28,"B")}<text class="b" x="134" y="20">motion</text>
    ${arrow(214,160,124,160,"R")}<text class="r" x="226" y="165">friction</text></svg>`,
  FORCE_07: () => `<svg viewBox="0 0 320 180" role="img" aria-label="Two spring balances: the heavier bag stretches the spring more">
    <line class="ln" x1="30" y1="16" x2="290" y2="16"/>
    <polyline class="ln" points="100,16 100,26 90,32 110,40 90,48 110,56 100,62 100,72"/>
    <rect class="fillblue" x="82" y="72" width="36" height="30" rx="4"/><text class="b" x="88" y="122">2 N</text>
    <polyline class="ln" points="220,16 220,26 208,34 232,44 208,54 232,64 208,74 232,84 208,94 220,100 220,110"/>
    <rect class="fillred" x="196" y="110" width="48" height="40" rx="4"/><text class="r" x="206" y="172">5 N</text></svg>`,
  FORCE_APP: () => `<svg viewBox="0 0 320 180" role="img" aria-label="A bicycle on a slope with gravity and friction arrows">
    <polygon class="fillsoft" points="16,166 304,166 304,62"/>
    <circle class="ln" cx="150" cy="99" r="15"/><circle class="ln" cx="206" cy="79" r="15"/>
    <polyline class="ln" points="150,99 172,78 206,79 186,96 150,99"/><line class="ln" x1="172" y1="78" x2="168" y2="66"/><line class="ln" x1="200" y1="62" x2="206" y2="79"/>
    ${arrow(178,104,178,150,"R")}<text class="r" x="186" y="146">gravity</text>
    ${arrow(118,96,72,113,"B")}<text class="b" x="34" y="86">rolls back</text>
    ${arrow(228,54,268,40,"R")}<text class="r" x="226" y="30">friction</text></svg>`
};

/* ================= Mission playlists (one per concept) ================= */
const SEE_THINK_WONDER = {name:"See · Think · Wonder", prompts:["What do you see?","What do you think is happening?","What does it make you wonder?"]};
const CLAIM_SUPPORT_Q = {name:"Claim · Support · Question", prompts:["Claim: what do you think is true here?","Support: what in the picture backs up your claim?","Question: what are you still not sure about?"]};
const ACT = {
  FORCE_01:{
    video:{title:"Pushes and pulls all around us", mins:3, frames:[
      "A force is a push or a pull.",
      "Opening a drawer by its handle is a pull. The drawer comes towards you.",
      "Closing a door is a push. The door moves away from you.",
      "A force always needs two objects: one that pushes or pulls, and one that is pushed or pulled.",
      "We measure force in newtons. The short way to write it is N."]},
    vtr:{routine:SEE_THINK_WONDER},
    notes:{title:"Force = push or pull", boxes:[
      {h:"Push", t:"Moves something away from you. Closing a door, kicking a ball."},
      {h:"Pull", t:"Moves something towards you. Opening a drawer, drawing water from a well."},
      {h:"Two objects", t:"A force needs two objects. Both of them feel it."},
      {h:"Unit", t:"Force is measured in newtons, written N."}]},
    example:{title:"Push or pull?", problem:"You lift your school bag from the floor. Is that a push or a pull?",
      steps:["Who applies the force? Your hand.","Which way does the bag move? Up, towards your hand.","Something moving towards the one applying the force is being pulled.","So lifting the bag is a pull."],
      turn:{q:"Your turn: kicking a football is a…", opts:["Push","Pull","Neither"], ok:0, why:"The ball moves away from your foot, so it is a push."}},
    hands:{title:"Push-pull hunt", mins:10, materials:["A door","A drawer","A ball","A bag","Clay or dough"],
      predict:"Which actions do you think will be pulls?",
      steps:["Do five actions with things around you.","For each one, decide: push or pull?","Write what changed: did it start moving, stop, turn or change shape?"],
      cols:["Object","What I did","Push or pull?","What changed?"], rows:["Door","Drawer","Ball","Bag","Clay"]}
  },
  FORCE_02:{
    video:{title:"Forces that touch and forces that don't", mins:3, frames:[
      "When you push a cart, your hands touch it. That is a contact force.",
      "Muscular force and friction are contact forces.",
      "A magnet can pull steel pins from a little distance. No touching needed.",
      "A rubbed comb pulls bits of paper. That is an electrostatic force.",
      "A mango falls because the Earth pulls it. Gravity is a non-contact force too."]},
    vtr:{routine:SEE_THINK_WONDER},
    notes:{title:"Touch or no touch?", boxes:[
      {h:"Contact forces", t:"Need touching. Muscular force and friction."},
      {h:"Non-contact forces", t:"Act from a distance. Magnetic, electrostatic and gravitational."},
      {h:"Magnets and charges", t:"Like poles or charges repel. Unlike ones attract."},
      {h:"Gravity", t:"Always pulls. It never pushes."}]},
    example:{title:"Contact or non-contact?", problem:"A compass needle turns when you bring a magnet near it. What kind of force is acting?",
      steps:["Does the magnet touch the needle? No.","The needle still moves, so a force acts across the gap.","A force that acts across a gap is a non-contact force.","It comes from a magnet, so it is a magnetic force."],
      turn:{q:"Your turn: a boy pushes a loaded cart. The force is…", opts:["Contact (muscular)","Non-contact (magnetic)","Non-contact (gravity)"], ok:0, why:"His hands touch the cart, so it is a contact force from his muscles."}},
    hands:{title:"Comb and paper", mins:10, materials:["Plastic comb","Dry hair or a woollen cloth","Small bits of paper","Ruler"],
      predict:"Will the paper move before the comb touches it?",
      steps:["Tear paper into tiny bits.","Rub the comb in dry hair 10 times.","Hold it 5 cm, then 2 cm, then 1 cm above the paper.","Record what happens each time."],
      cols:["Distance","Did the paper move?","What I noticed"], rows:["5 cm","2 cm","1 cm"]}
  },
  FORCE_03:{
    video:{title:"What a force can do", mins:3, frames:[
      "A force can make a still object start moving, like a ball you kick.",
      "A force can change speed. A goalkeeper slows the ball, and a strong kick speeds it up.",
      "A force can change direction. A batter sends the ball back the other way.",
      "A force can change shape. Pressing clay makes it flat.",
      "One force can do more than one of these at the same time."]},
    vtr:{routine:SEE_THINK_WONDER},
    notes:{title:"Four things a force can do", boxes:[
      {h:"Start or stop", t:"A kick starts a ball. A catch stops it."},
      {h:"Change speed", t:"Pedal harder and the bicycle speeds up."},
      {h:"Change direction", t:"A bat sends the ball the other way."},
      {h:"Change shape", t:"Squeezing dough makes it flat."}]},
    example:{title:"Which effect?", problem:"A goalkeeper catches a fast ball. What did her force do?",
      steps:["Before: the ball was moving fast.","After: the ball is still in her hands.","Its speed went from fast to zero.","So the force changed its speed and stopped it."],
      turn:{q:"Your turn: you press a sponge. The force…", opts:["Changed its shape","Changed its direction","Did nothing, because it didn't move"], ok:0, why:"The sponge gets squashed, so the force changed its shape even though it stayed in place."}},
    hands:{title:"Before and after", mins:10, materials:["Ball","Clay or dough","Sponge","Toy car"],
      predict:"Which action will change shape, and which will change direction?",
      steps:["Do each action once.","Note what the object was like before and after.","Name the effect: start/stop, speed, direction or shape."],
      cols:["Action","Before","After","Effect"], rows:["Roll the ball, then tap it sideways","Press the clay","Squeeze the sponge","Push the toy car, then stop it"]}
  },
  FORCE_05:{
    video:{title:"When forces balance", mins:3, frames:[
      "In a tug of war, both teams pull. If they pull equally, the knot doesn't move.",
      "Equal forces in opposite directions are balanced. The net force is 0 N.",
      "A book on a table is still. Gravity pulls it down, and the table pushes it up.",
      "Balanced does not mean no forces. It means the forces cancel each other's effect.",
      "If one side pulls harder, the forces are unbalanced and the knot moves that way."]},
    vtr:{routine:CLAIM_SUPPORT_Q},
    notes:{title:"Balanced forces", boxes:[
      {h:"Balanced", t:"Equal and opposite. No change in motion."},
      {h:"Still things", t:"Still objects still have forces on them. A book: gravity down, table up."},
      {h:"Net force", t:"Add forces in the same direction. Take away opposite ones."},
      {h:"Unbalanced", t:"Net force is not zero, so speed or direction changes."}]},
    example:{title:"Find the net force", problem:"Team Blue pulls with 7 N to the left. Team Red pulls with 5 N to the right. What happens?",
      steps:["The forces are in opposite directions, so subtract: 7 N − 5 N.","Net force = 2 N.","The bigger force is Blue's, to the left.","So the knot moves to the left."],
      turn:{q:"Your turn: 6 N to the left and 6 N to the right. The knot…", opts:["Stays still. The net force is 0 N.","Moves left","Moves right"], ok:0, why:"6 N − 6 N = 0 N. The forces are balanced, so nothing changes."}},
    hands:{title:"Rubber-band tug of war", mins:12, materials:["Two rubber bands","A small box","A ruler","A friend"],
      predict:"If you both pull the same amount, will the box move?",
      steps:["Hook one rubber band on each side of the box.","Both pull gently. Measure how long each band stretches.","Now one of you pulls harder. Measure again.","Record when the box moves and which way."],
      cols:["Try","Left band stretch (cm)","Right band stretch (cm)","Did the box move?","Which way?"], rows:["Try 1","Try 2","Try 3"]}
  },
  FORCE_06:{
    video:{title:"Why things slow down and stop", mins:4, frames:[
      "Push a toy car and let go. It rolls, slows down and stops. Something is acting on it.",
      "That force is friction. It acts between two surfaces, opposite to the motion.",
      "Zoom in and every surface is bumpy. The bumps catch on each other.",
      "Rough surfaces like sand and cloth have more friction. Glass and tiles have less.",
      "Friction acts on still things too. That's why a heavy box can stay put when you push it.",
      "Friction helps us walk and lets brakes work. It also wears out shoe soles and tyres."]},
    vtr:{routine:SEE_THINK_WONDER},
    notes:{title:"Friction", boxes:[
      {h:"What it is", t:"A force between two surfaces that opposes motion."},
      {h:"Why it happens", t:"Tiny bumps on both surfaces catch on each other."},
      {h:"Rough vs smooth", t:"Rougher surface, more friction. Things stop sooner."},
      {h:"Not only when moving", t:"Friction can stop a heavy box from starting to move."},
      {h:"Helpful", t:"Walking, writing, brakes, tyre treads."},
      {h:"In air and water", t:"Fluid friction. Streamlined shapes like planes and boats cut it down."}]},
    example:{title:"Explain with friction", problem:"A ball rolls farther on a cement floor than on grass. Why?",
      steps:["Both balls got the same push, so the push isn't the difference.","After the push, the only force along the ground is friction.","Grass is rougher than cement, so it gives more friction.","More friction slows the ball sooner, so it stops sooner on grass."],
      turn:{q:"Your turn: why do players sprinkle powder on a carrom board?", opts:["To reduce friction so the coins slide farther","To increase friction so the coins grip","To make the board heavier"], ok:0, why:"Powder makes the surface smoother, so there is less friction and the coins glide."}},
    hands:{title:"Surface race", mins:15, materials:["A book for a ramp","A toy car or round pencil","A ruler or tape","Tile, cloth, sand, newspaper"],
      predict:"On which surface will the car go farthest? Where will it stop first?",
      steps:["Rest a book on one end of a notebook to make a ramp.","Let the car roll down from the same spot each time. Don't push it.","Measure how far it travels on each surface.","Feel each surface. Is it smooth or rough?"],
      cols:["Surface","My prediction","Distance (cm)","Smooth or rough?"], rows:["Tile","Newspaper","Cloth","Sand"]}
  },
  FORCE_07:{
    video:{title:"Mass and weight are different", mins:4, frames:[
      "Mass is how much matter something has. We measure it in grams or kilograms.",
      "Weight is the force with which the Earth pulls something. It is measured in newtons.",
      "Hang a bag on a spring balance. The heavier the bag, the more the spring stretches.",
      "On the Moon, gravity is about one-sixth as strong. Your weight drops, but your mass stays the same.",
      "So “this bag weighs 5 kg” really means its mass is 5 kg."]},
    vtr:{routine:SEE_THINK_WONDER},
    notes:{title:"Mass is not weight", boxes:[
      {h:"Mass", t:"Amount of matter. Grams or kilograms. Same everywhere."},
      {h:"Weight", t:"Earth's pull on an object. A force, in newtons."},
      {h:"Spring balance", t:"Measures weight. Heavier things stretch the spring more."},
      {h:"On the Moon", t:"Weight is about one-sixth. Mass doesn't change."}]},
    example:{title:"Weight on the Moon", problem:"A bag has a weight of 60 N on Earth. What is its weight on the Moon?",
      steps:["Moon's pull is about one-sixth of Earth's.","So weight on the Moon = 60 N ÷ 6.","60 ÷ 6 = 10.","The weight on the Moon is about 10 N. The mass of the bag doesn't change."],
      turn:{q:"Your turn: a box has a mass of 4 kg on Earth. On the Moon its mass is…", opts:["4 kg","About 0.7 kg","4 N"], ok:0, why:"Mass is the amount of matter. Going to the Moon doesn't remove any matter."}},
    hands:{title:"Rubber-band balance", mins:12, materials:["A long rubber band","A paper cup with a string handle","Coins of the same kind","Ruler"],
      predict:"What will happen to the stretch when you double the coins?",
      steps:["Hang the cup from the rubber band.","Measure the band's length with no coins.","Add coins one at a time and measure again.","Work out the stretch: length now minus the starting length."],
      cols:["Number of coins","Length of band (cm)","Stretch (cm)"], rows:["0","1","2","3","4"]}
  },
  FORCE_APP:{
    video:{title:"Forces on a bicycle", mins:4, frames:[
      "Sonali and Ragini cycle up a hill. Their legs push the pedals. That's muscular force.",
      "Gravity pulls the bicycles down the slope the whole time.",
      "Friction acts between the tyres and the road, and air pushes back on them too.",
      "When they stop pedalling, gravity and friction slow them down. Then gravity rolls them back.",
      "To explain any situation: name the forces, draw the arrows, predict, then give your reason."]},
    vtr:{routine:CLAIM_SUPPORT_Q},
    notes:{title:"Solve it in four steps", boxes:[
      {h:"1 · Name", t:"Which forces act? Muscular, friction, gravity, magnetic, electrostatic."},
      {h:"2 · Draw", t:"An arrow for each force, pointing the way it acts."},
      {h:"3 · Predict", t:"Balanced: no change. Unbalanced: speed or direction changes."},
      {h:"4 · Justify", t:"Say which force is bigger and why."}]},
    example:{title:"A bicycle coasting", problem:"A bicycle moves on a flat road and the rider stops pedalling. What happens, and why?",
      steps:["Name: friction from the road, and air pushing back. No forward push now.","Draw: both arrows point backwards, against the motion.","Predict: the forces are unbalanced, so the bicycle slows down.","Justify: nothing pushes it forward, and friction keeps slowing it until it stops."],
      turn:{q:"Your turn: the rider squeezes the brakes. The bicycle…", opts:["Stops sooner, because brakes add friction","Speeds up, because brakes push","Keeps going, because the brakes don't touch the wheel"], ok:0, why:"Brake pads rub the wheel, which adds friction against the motion."}},
    hands:{title:"Shoe-grip test", mins:15, materials:["A flat board or tray","A pile of books","Two or three shoes or slippers"],
      predict:"Which shoe will grip best? Why do you think so?",
      steps:["Put a shoe on the flat board.","Raise one end of the board by adding one book at a time.","Count the books when the shoe starts to slide.","Repeat for each shoe and look at the sole pattern."],
      cols:["Footwear","Sole pattern","Books when it slides","More or less grip?"], rows:["Shoe 1","Shoe 2","Shoe 3"]}
  }
};

/* ================= Video lesson broken into mission units ================= */
const VIDEO = {
  id:"yuVn6RLruj4", title:"Force Explained in 5 Minutes", full:"Force Explained in 5 Minutes | Push, Pull, Contact & Non-Contact Forces | Class 8 Science", channel:"ChemOrbit",
  units:[
    {id:"U1", title:"Push and pull", start:0, end:90, concepts:["FORCE_01"],
      watchFor:"What makes something a push, and what makes it a pull? Spot two examples of each.",
      check:{q:"Ragini opens the gate by drawing it towards herself. That is a…", opts:["Pull","Push","Neither, the gate just moves"], ok:0, why:"The gate moves towards the person applying the force, so it is a pull."}},
    {id:"U2", title:"Contact forces", start:90, end:180, concepts:["FORCE_02","FORCE_06"],
      watchFor:"Which forces only work when two things touch? Listen for muscular force and friction.",
      check:{q:"Which of these is a contact force?", opts:["Friction between your shoe and the floor","A magnet pulling a pin from a distance","The Earth pulling a falling mango"], ok:0, why:"Friction acts only where two surfaces touch. The other two act across a gap."}},
    {id:"U3", title:"Non-contact forces", start:180, end:300, concepts:["FORCE_02","FORCE_07"],
      watchFor:"Which forces work across a gap? Listen for magnetic, electrostatic and gravitational forces.",
      check:{q:"A rubbed balloon pulls bits of paper without touching them. Which force is this?", opts:["Electrostatic force","Friction","Muscular force"], ok:0, why:"Rubbing charges the balloon. Charged objects attract light things from a distance, which is an electrostatic, non-contact force."}}
  ]
};
const DEFAULT_TIMES = VIDEO.units.map(u => [u.start, u.end]);
const mmss = s => `${Math.floor(s/60)}:${String(Math.round(s%60)).padStart(2,"0")}`;
const parseMmss = t => { const m = String(t).trim().match(/^(\d{1,2}):([0-5]\d)$/); return m ? (+m[1])*60 + (+m[2]) : NaN; };
const ytLink = s => `https://www.youtube.com/watch?v=${VIDEO.id}&t=${Math.round(s)}s`;
const unitsFor = c => VIDEO.units.filter(u => u.concepts.includes(c));
const unitNo = u => VIDEO.units.indexOf(u) + 1;

/* ================= Mission checks: 2 multiple-correct + 1 drag-and-drop response ================= */
/* FRQ text: words in {braces} are the blanks; bank = the pre-made answer chips (answers + distractors) */
const MCHECK = {
  FORCE_01:[
    {type:"mca", q:"Which of these are pulls?", opts:["Opening a drawer by its handle","Drawing water up from a well","Kicking a football","Pressing a doorbell"], ok:[0,1]},
    {type:"mca", q:"Which statements about force are true?", opts:["A force needs two objects that interact","Force is measured in newtons (N)","Only living things can apply a force","A force always makes things go faster"], ok:[0,1]},
    {type:"frq", q:"Explain push and pull.", text:"When you lift your bag, it moves {towards} your hand, so it is a {pull}. When you kick a ball, it moves {away from} your foot, so it is a {push}.", bank:["towards","away from","pull","push","faster","newton"]}],
  FORCE_02:[
    {type:"mca", q:"Which of these are non-contact forces?", opts:["Magnetic force","Gravitational force","Electrostatic force","Friction"], ok:[0,1,2]},
    {type:"mca", q:"Which statements are true?", opts:["Like poles of two magnets repel","Gravity always pulls and never pushes","A force can act only by touching","Friction acts across a gap"], ok:[0,1]},
    {type:"frq", q:"Explain the comb and paper.", text:"A rubbed comb pulls bits of paper {without touching} them. This is an {electrostatic} force, so it is a {non-contact} force.", bank:["without touching","by touching","electrostatic","muscular","non-contact","contact"]}],
  FORCE_03:[
    {type:"mca", q:"A batter hits a ball back the other way, faster. What did the force change?", opts:["Its speed","Its direction","Its mass","Nothing, it was already moving"], ok:[0,1]},
    {type:"mca", q:"Which actions change an object's shape?", opts:["Squeezing a sponge","Pressing clay into a pot","Catching a ball","Turning a bicycle's handle"], ok:[0,1]},
    {type:"frq", q:"Explain what the forces did.", text:"A goalkeeper catches a fast ball. Her force changes the ball's {speed} until it {stops}. Pressing dough changes its {shape}.", bank:["speed","stops","shape","mass","speeds up","colour"]}],
  FORCE_05:[
    {type:"mca", q:"A book rests on a table. Which are true?", opts:["Gravity pulls it down","The table pushes it up","The forces on it are balanced","No forces act, because it is still"], ok:[0,1,2]},
    {type:"mca", q:"Blue pulls 8 N to the left. Red pulls 5 N to the right. Which are true?", opts:["The net force is 3 N","The knot moves to the left","The forces are balanced","The knot moves to the right"], ok:[0,1]},
    {type:"frq", q:"Explain balanced forces.", text:"When two equal forces act in {opposite} directions, the net force is {0 N} and the forces are {balanced}. The object's motion does {not change}.", bank:["opposite","the same","0 N","10 N","balanced","unbalanced","not change","change"]}],
  FORCE_06:[
    {type:"mca", q:"Which are true about friction?", opts:["It acts opposite to the motion","It is larger on rough surfaces","It acts only on moving objects","It is always harmful"], ok:[0,1]},
    {type:"mca", q:"Where is friction useful?", opts:["Walking without slipping","Brakes stopping a bicycle","Writing with a pencil","Wearing out shoe soles"], ok:[0,1,2]},
    {type:"frq", q:"Explain why the ball stops sooner on grass.", text:"A ball rolls farther on cement than on grass because grass is {rougher}, so it gives {more} friction. Friction acts {opposite to} the motion and stops the ball {sooner}.", bank:["rougher","smoother","more","less","opposite to","along with","sooner","later"]}],
  FORCE_07:[
    {type:"mca", q:"Which are true?", opts:["Mass is measured in kilograms","Weight is a force measured in newtons","Mass changes on the Moon","Weight is the same everywhere"], ok:[0,1]},
    {type:"mca", q:"A bag has a weight of 60 N on Earth. On the Moon…", opts:["its weight is about 10 N","its mass stays the same","its mass becomes one-sixth","its weight stays 60 N"], ok:[0,1]},
    {type:"frq", q:"Say it like a scientist.", text:"The shopkeeper says the rice “weighs 5 kg”. A scientist says its {mass} is 5 kg. Its weight is a {force}, measured in {newtons}, and it would be {smaller} on the Moon.", bank:["mass","weight","force","newtons","kilograms","smaller","bigger"]}],
  FORCE_APP:[
    {type:"mca", q:"A cyclist stops pedalling on a flat road. Which forces slow the bicycle down?", opts:["Friction from the road","Air pushing back on the rider","A forward force stored in the bicycle","Magnetic force"], ok:[0,1]},
    {type:"mca", q:"Why do tyres have treads and football boots have studs?", opts:["To grip the ground better","To increase friction with the ground","To reduce friction","Only for decoration"], ok:[0,1]},
    {type:"frq", q:"Explain the bicycle on the hill.", text:"Sonali stops pedalling uphill. {Gravity} pulls the bicycle down the slope and {friction} acts against its motion. The forces are {unbalanced}, so it slows down and then rolls {back}.", bank:["Gravity","Magnetism","friction","muscular force","unbalanced","balanced","back","forward"]}]
};
const frqParts = text => text.split(/(\{[^}]+\})/).filter(Boolean).map(p => p.startsWith("{") ? {blank:p.slice(1,-1)} : {t:p});
function scoreMca(it, picks){
  const hit = picks.filter(i => it.ok.includes(i)).length, miss = picks.filter(i => !it.ok.includes(i)).length;
  return Math.max(0, (hit - miss) / it.ok.length);
}
function scoreFrq(it, filled){
  const blanks = frqParts(it.text).filter(p => p.blank).map(p => p.blank);
  return blanks.filter((b,i) => filled[i] === b).length / blanks.length;
}

/* ================= Read aloud ================= */
const canSpeak = typeof window.speechSynthesis !== "undefined" && typeof window.SpeechSynthesisUtterance !== "undefined";
let speakToken = 0;
function speak(text, onend){
  const my = ++speakToken; let fired = false;
  const done = () => { if (fired || my !== speakToken) return; fired = true; onend && onend(); };
  if (!canSpeak) return false;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text); u.lang = "en-IN"; u.rate = .95;
    u.onend = done; u.onerror = done;
    speechSynthesis.speak(u); return true;
  } catch(_) { return false; }
}
function stopSpeak(){ speakToken++; try { if (canSpeak) speechSynthesis.cancel(); } catch(_){} }
const SPEAKER = '<svg viewBox="0 0 24 24"><path d="M4 9h4l5-4v14l-5-4H4z"/><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a8 8 0 0 1 0 11"/></svg>';

/* ================= Engine ================= */
function chooseConfirm(log){
  const counts = {};
  log.forEach(e => e.codes.forEach(c => counts[c] = (counts[c]||0)+1));
  const flagged = CODE_PRIORITY.filter(c => counts[c]);
  if (flagged.length){
    flagged.sort((a,b) => (counts[b]-counts[a]) || (CODE_PRIORITY.indexOf(a)-CODE_PRIORITY.indexOf(b)));
    const c = flagged[0];
    return {id:CF_BY_CODE[c], reason:`Rule 1: misconception ${c} was chosen ${counts[c]} time(s). Q7 tests it again in a new context.`};
  }
  const wrong = [...log].reverse().find(e => !e.ok);
  if (wrong){
    const c = wrong.concepts[0];
    return {id:CF_BY_CONCEPT[c], reason:`Rule 2: ${wrong.id} was wrong without a misconception code. Q7 gives a second look at ${c}.`};
  }
  return {id:"CF_GEN", reason:"Rule 3: every answer was correct. Q7 is a transfer check on friction."};
}

function evidence(e){
  if (e.ok) return e.hint ? 0.7 : 1;
  return e.codes.length ? 0 : 0.2;
}
function bandOf(score, n, allSure){
  if (n === 0) return "None";
  if (score < .40) return "Foundation";
  if (score < .65) return "Developing";
  if (score < .80) return "Secure";
  return (n >= 2 && allSure) ? "Mastered" : "Secure";
}
const BAND_LABEL = {None:"Not tested",Foundation:"Foundation",Developing:"Developing",Secure:"Secure",Mastered:"Mastered (prov.)"};

function computeReport(log, confirmPick){
  const con = {};
  const touch = id => con[id] || (con[id] = {id, items:[], E:[], codes:new Set()});
  log.forEach(e => {
    const E = evidence(e);
    e.concepts.forEach(c => {
      const r = touch(c); r.items.push(e.id); r.E.push(E);
      e.codes.forEach(m => r.codes.add(m));
    });
  });
  // misconceptions
  const codes = {};
  log.forEach(e => e.codes.forEach(c => {
    codes[c] = codes[c] || {count:0, items:[]}; codes[c].count++; codes[c].items.push(e.id);
  }));
  const cfEntry = log.find(e => ITEMS[e.id].pool);
  Object.entries(codes).forEach(([c, v]) => {
    const targetedByCF = cfEntry && CF_BY_CODE[c] === cfEntry.id;
    if (v.count >= 2) v.status = "Confirmed";
    else if (targetedByCF && cfEntry.ok) v.status = "Not repeated in a new context";
    else v.status = "Seen once";
    const home = MCODES[c].concept;
    touch(home).codes.add(c);
  });
  // per concept route
  Object.values(con).forEach(r => {
    const n = r.E.length;
    r.score = n ? r.E.reduce((a,b)=>a+b,0)/n : null;
    r.band = bandOf(r.score ?? 0, n, n>=2 && r.E.every(x=>x===1));
    const own = [...r.codes].filter(c => MCODES[c].concept === r.id && codes[c]);
    const live = own.filter(c => codes[c].status !== "Not repeated in a new context");
    if (live.length){ r.route = "C"; r.rule = "Rule 2: misconception flagged"; r.repairCodes = live; }
    else if (n === 0){ r.route = "X"; r.rule = "No items: check in the first lesson"; }
    else if (r.id === "FORCE_01" && r.score < .40){ r.route = "A"; r.rule = "Rule 3: prerequisite below 0.40"; }
    else if (r.score < .65){ r.route = "B"; r.rule = r.score < .40 ? "Rule 4: Foundation band, start with worked examples" : "Rule 4: Developing band"; }
    else if (own.length){ r.route = "E"; r.rule = "Rule 7: misconception not repeated, quick re-check"; }
    else { r.route = "D"; r.rule = r.band === "Mastered" ? "Rule 6: provisional mastery, unlock extension" : "Rule 5: Secure, needs transfer tasks"; }
  });
  const fast = log.filter(e => e.ms < 4000).length;
  const reliability = fast >= 3 ? "low" : "moderate";
  // first stop
  const all = Object.values(con);
  const byRoute = r => all.filter(x => x.route === r);
  let first;
  const cs = byRoute("C");
  if (cs.length){
    cs.sort((a,b) => Math.min(...a.repairCodes.map(c=>CODE_PRIORITY.indexOf(c))) - Math.min(...b.repairCodes.map(c=>CODE_PRIORITY.indexOf(c))));
    first = cs[0];
  } else if (byRoute("A").length) first = byRoute("A")[0];
  else if (byRoute("B").length) first = byRoute("B").sort((a,b)=>a.score-b.score)[0];
  else if (byRoute("E").length) first = byRoute("E")[0];
  else first = con.FORCE_APP || all.find(x=>x.route==="D");
  const order = {C:0,A:1,B:2,E:3,D:4,X:5};
  const sequence = all.slice().sort((a,b) => (order[a.route]-order[b.route]) || ((a.score??1)-(b.score??1)));
  // untested concepts
  Object.keys(CONCEPTS).forEach(id => { if (!con[id]) sequence.push({id, items:[], E:[], score:null, band:"None", route:"X", rule:"No items: check in the first lesson", codes:new Set()}); });
  return {con, codes, reliability, fast, first, sequence, confirm:confirmPick};
}


/* ================= Cartoon art (original drawings) ================= */
const BUDDY = (mood = "happy") => `<svg viewBox="0 0 90 90" class="buddy" aria-hidden="true">
  <line class="k" x1="45" y1="20" x2="45" y2="8"/><polygon class="k f-butter" points="45,1 52,11 38,11"/>
  ${mood === "cheer" ? `<path class="k" fill="none" d="M20 46 L8 28"/><path class="k" fill="none" d="M70 46 L82 28"/>`
    : `<path class="k" fill="none" d="M18 54 L8 62"/><path class="k" fill="none" d="M72 54 L82 62"/>`}
  <circle class="k f-lav" cx="45" cy="50" r="28"/>
  <circle class="f-white k" cx="35" cy="45" r="7" style="stroke-width:2"/><circle class="f-white k" cx="55" cy="45" r="7" style="stroke-width:2"/>
  <circle class="f-ink" cx="${mood === "think" ? 37 : 36}" cy="${mood === "think" ? 43 : 46}" r="3.2"/><circle class="f-ink" cx="${mood === "think" ? 57 : 56}" cy="${mood === "think" ? 43 : 46}" r="3.2"/>
  <circle class="f-rose" cx="27" cy="58" r="4" opacity=".8"/><circle class="f-rose" cx="63" cy="58" r="4" opacity=".8"/>
  ${mood === "think" ? `<path class="k" fill="none" d="M38 63 L52 61"/>` : `<path class="k f-white" d="M35 59 Q45 71 55 59 Z" style="stroke-width:2.5"/>`}
</svg>`;


const ART = {
  FORCE_01: `<svg viewBox="0 0 200 140" aria-hidden="true"><path class="k" fill="none" d="M8 124 H192"/>
    <rect class="k f-peach" x="78" y="60" width="86" height="46" rx="12"/><circle class="k f-sky" cx="98" cy="112" r="11"/><circle class="k f-sky" cx="146" cy="112" r="11"/>
    <circle class="f-ink" cx="108" cy="80" r="3.5"/><circle class="f-ink" cx="134" cy="80" r="3.5"/><path class="k" fill="none" d="M110 92 Q121 100 132 92"/>
    <path class="k" fill="none" d="M78 82 Q58 76 44 64"/><circle class="k f-skin" cx="40" cy="61" r="7"/>
    <polygon class="k f-rose" points="70,36 36,36 36,26 14,42 36,58 36,48 70,48"/></svg>`,
  FORCE_02: `<svg viewBox="0 0 200 140" aria-hidden="true">
    <path class="k f-rose" d="M60 54 V92 A40 40 0 0 0 140 92 V54 H116 V92 A16 16 0 0 1 84 92 V54 Z"/>
    <rect class="k f-white" x="60" y="54" width="24" height="16"/><rect class="k f-white" x="116" y="54" width="24" height="16"/>
    <circle class="f-ink" cx="92" cy="116" r="3"/><circle class="f-ink" cx="108" cy="116" r="3"/><path class="k" fill="none" d="M94 124 Q100 129 106 124" style="stroke-width:2"/>
    <rect class="k f-sky" x="64" y="12" width="14" height="28" rx="7" transform="rotate(-12 71 26)"/><rect class="k f-sky" x="122" y="10" width="14" height="28" rx="7" transform="rotate(14 129 24)"/>
    <path class="k" fill="none" d="M48 26 l-8 -4 M152 22 l8 -4 M100 22 l0 -10" style="stroke-width:2.5"/></svg>`,
  FORCE_03: `<svg viewBox="0 0 200 140" aria-hidden="true"><path class="k" fill="none" d="M8 126 H192"/>
    <rect class="k f-sky" x="14" y="98" width="46" height="24" rx="12"/>
    <path class="k" fill="none" stroke-dasharray="5 7" d="M64 108 Q86 100 96 92"/>
    <circle class="k f-white" cx="116" cy="82" r="22"/><polygon class="f-ink" points="116,70 124,76 121,85 111,85 108,76"/>
    <circle class="f-ink" cx="108" cy="94" r="2.5"/><circle class="f-ink" cx="124" cy="94" r="2.5"/>
    <path class="k" fill="none" d="M140 70 Q164 50 178 26"/><polygon class="k f-rose" points="172,22 186,16 182,32"/>
    <ellipse class="k f-peach" cx="168" cy="116" rx="22" ry="10"/></svg>`,
  FORCE_05: `<svg viewBox="0 0 200 140" aria-hidden="true"><path class="k" fill="none" d="M30 86 H170"/>
    <circle class="k f-lav" cx="28" cy="86" r="20"/><circle class="f-ink" cx="22" cy="82" r="3"/><circle class="f-ink" cx="34" cy="82" r="3"/><path class="k" fill="none" d="M22 94 Q28 98 34 94" style="stroke-width:2"/>
    <circle class="k f-mint" cx="172" cy="86" r="20"/><circle class="f-ink" cx="166" cy="82" r="3"/><circle class="f-ink" cx="178" cy="82" r="3"/><path class="k" fill="none" d="M166 94 Q172 98 178 94" style="stroke-width:2"/>
    <rect class="k f-rose" x="95" y="74" width="10" height="24" rx="3"/>
    <polygon class="k f-sky" points="88,38 56,38 56,30 40,44 56,58 56,50 88,50"/><polygon class="k f-sky" points="112,38 144,38 144,30 160,44 144,58 144,50 112,50"/>
    <text x="100" y="132" class="ctext" text-anchor="middle">5 N = 5 N</text></svg>`,
  FORCE_06: `<svg viewBox="0 0 200 140" aria-hidden="true">
    <path class="k f-mint" d="M0 118 Q12 110 24 118 T48 118 T72 118 T96 118 T120 118 T144 118 T168 118 T192 118 T216 118 V140 H0 Z"/>
    <rect class="k f-white" x="82" y="44" width="56" height="28" rx="10"/><rect class="k f-sky" x="62" y="66" width="98" height="34" rx="12"/>
    <circle class="f-ink" cx="104" cy="58" r="3"/><circle class="f-ink" cx="120" cy="58" r="3"/><path class="k" fill="none" d="M146 84 Q150 88 154 84" style="stroke-width:2"/>
    <circle class="k f-ink" cx="84" cy="104" r="12"/><circle class="k f-ink" cx="138" cy="104" r="12"/><circle class="f-white" cx="84" cy="104" r="4"/><circle class="f-white" cx="138" cy="104" r="4"/>
    <path class="k" fill="none" d="M20 72 H44 M14 86 H40" style="stroke-width:2.5"/>
    <polygon class="k f-butter" points="64,118 68,108 72,118 80,112 74,122"/><polygon class="k f-butter" points="150,118 154,108 158,118 166,112 160,122"/></svg>`,
  FORCE_07: `<svg viewBox="0 0 200 140" aria-hidden="true">
    <path class="k" fill="none" d="M70 8 H130"/><line class="k" x1="100" y1="8" x2="100" y2="18"/>
    <polyline class="k" fill="none" points="100,18 88,26 112,34 88,42 112,50 88,58 100,64 100,72"/>
    <path class="k" fill="none" d="M100 72 Q100 80 96 80"/>
    <circle class="k f-rose" cx="100" cy="100" r="22"/><path class="k f-mint" d="M100 78 Q112 70 116 80 Q106 84 100 78 Z"/>
    <circle class="f-ink" cx="93" cy="98" r="3"/><circle class="f-ink" cx="107" cy="98" r="3"/><path class="k" fill="none" d="M94 108 Q100 113 106 108" style="stroke-width:2"/>
    <path class="k f-butter" d="M170 20 A20 20 0 1 0 186 46 A16 16 0 1 1 170 20 Z"/></svg>`,
  FORCE_APP: `<svg viewBox="0 0 200 140" aria-hidden="true"><circle class="f-butter" cx="170" cy="28" r="18"/>
    <polygon class="k f-mint" points="0,140 200,140 200,62"/>
    <circle class="k f-white" cx="82" cy="100" r="16"/><circle class="k f-white" cx="128" cy="82" r="16"/>
    <polyline class="k" fill="none" points="82,100 102,80 128,82 112,98 82,100"/><line class="k" x1="102" y1="80" x2="98" y2="68"/>
    <circle class="k f-skin" cx="104" cy="44" r="10"/><path class="k f-lav" d="M98 54 L96 74 L112 74 L110 54 Z"/>
    <circle class="f-ink" cx="107" cy="43" r="2"/></svg>`,
  EXAM: `<svg viewBox="0 0 200 140" aria-hidden="true">
    <path class="k f-butter" d="M64 22 H136 V54 A36 36 0 0 1 64 54 Z"/>
    <path class="k" fill="none" d="M64 32 H48 Q44 58 70 66 M136 32 H152 Q156 58 130 66"/>
    <rect class="k f-peach" x="92" y="88" width="16" height="18"/><rect class="k f-lav" x="72" y="106" width="56" height="18" rx="5"/>
    <polygon class="k f-white" points="100,32 105,44 118,44 108,52 112,64 100,57 88,64 92,52 82,44 95,44"/>
    <circle class="f-rose" cx="30" cy="40" r="5"/><circle class="f-sky" cx="170" cy="30" r="5"/><circle class="f-mint" cx="164" cy="100" r="5"/><circle class="f-lav" cx="36" cy="104" r="5"/></svg>`
};
const ART_BG = {FORCE_01:"peach",FORCE_02:"rose",FORCE_03:"sky",FORCE_05:"lav",FORCE_06:"mint",FORCE_07:"butter",FORCE_APP:"mint",EXAM:"butter"};

/* ================= Support: hints for diagnostic items ================= */
const HINTS = {
  S1:"Does the drawer move towards Sonali or away from her?",
  S2A:"Even when nothing moves, gravity is still pulling.",
  S2B:"A force can change shape, not only move things.",
  S3A:"Compare how fast it went, and which way, before and after the hit.",
  S3B:"Did the comb touch the paper?",
  S3C:"A push moves something away from you.",
  S4A:"After she lets go, is her hand still touching the car?",
  S4B:"Which surface is rougher?",
  S4C:"Something between the box and the floor slows it down.",
  S5A:"Something from the floor pushes back on the almirah.",
  S5B:"Which surface is rougher?",
  S5C:"Kilograms measure the amount of matter. Newtons measure force.",
  S5D:"Soap makes a floor smooth and slippery.",
  APP_A:"On a slope, one force pulls down and one force rubs.",
  APP_B:"Studs and treads help things grip.",
  CF_M1:"Once the ball leaves the stick, is the stick still touching it?",
  CF_M2:"Gravity pulls the book down. What stops it from falling?",
  CF_M4:"Look at the clay before and after.",
  CF_M5:"Try walking on a very slippery floor. What is missing?",
  CF_M6:"Nobody touched the mango. Which force works without touching?",
  CF_M7:"Mass is the amount of stuff. Does stuff disappear on the Moon?",
  CF_GEN:"Which surface is smoother?"
};

/* Misconceptions in learner-friendly words */
const TRICKY = {
  M1:"Things keep moving without a push",
  M2:"Still things have forces on them too",
  M3:"Balanced forces are still forces",
  M4:"A force can change shape and direction, not only speed",
  M5:"Friction can help, and it acts on still things too",
  M6:"Some forces work without touching",
  M7:"Mass and weight are different"
};

/* ================= Challenge quests (optional, after a mission) ================= */
const CHALLENGE = {
  FORCE_01:{title:"Rope riddle", q:"You pull hard on a rope tied to a heavy box. The box doesn't move. Is your pull a force?", opts:["Yes. A pull is a force, even if nothing moves.","No. Nothing moved, so there was no force."], ok:0, why:"A force is a push or a pull. Here your pull is balanced by friction, so the box stays put."},
  FORCE_02:{title:"Magic trick", q:"How can you make a steel paper clip slide across a sheet of paper without touching the clip?", opts:["Move a magnet under the paper","Blow on the paper","Wet the paper"], ok:0, why:"The magnet pulls the clip through the paper. That's a non-contact force."},
  FORCE_03:{title:"Triple effect", q:"Which single action changes speed, direction and shape all at once?", opts:["Hitting a soft clay ball with a bat","Pushing open a door","Lifting a bag"], ok:0, why:"The clay ball flies off faster, in a new direction, and gets squashed."},
  FORCE_05:{title:"Tug-of-war maths", q:"Team A pulls with 3 N, 4 N and 2 N. Team B pulls with 5 N and 3 N. Who wins?", opts:["Team A, by 1 N","Team B, by 1 N","It's a tie"], ok:0, why:"Team A: 3 + 4 + 2 = 9 N. Team B: 5 + 3 = 8 N. Team A wins by 1 N."},
  FORCE_06:{title:"Super slide", q:"Which slide would let you slide down fastest?", opts:["A smooth steel slide with a little water","A rough wooden slide","A slide covered in sand"], ok:0, why:"Smooth and wet means the least friction, so you speed down."},
  FORCE_07:{title:"Space trip", q:"Riya's bag weighs 60 N on Earth. About how much would it weigh on the Moon?", opts:["About 10 N","60 N","360 N"], ok:0, why:"The Moon pulls about one-sixth as hard: 60 ÷ 6 = 10 N. The bag's mass stays the same."},
  FORCE_APP:{title:"Bonus: heavy or light?", q:"You give the same push to a football and a heavy cricket ball. Which speeds up more?", opts:["The football","The cricket ball","Both the same"], ok:0, why:"The same push changes the speed of a lighter object more."}
};

/* ================= Summative: Final challenge (10 marks) ================= */
const EXAM = [
  {sec:"Part A · 1 mark each", marks:1, type:"mcq", concepts:["FORCE_01","FORCE_03"], q:"A football rolling towards you is kicked back the other way, faster. The kick changed its…", opts:["speed and direction","speed only","shape only","nothing"], ok:0},
  {sec:"Part A · 1 mark each", marks:1, type:"mcq", concepts:["FORCE_02"], q:"Which pair are both non-contact forces?", opts:["Magnetic and gravitational","Friction and magnetic","Muscular and friction","Muscular and electrostatic"], ok:0},
  {sec:"Part A · 1 mark each", marks:1, type:"mcq", concepts:["FORCE_05","FORCE_06"], q:"You push a heavy almirah gently and it doesn't move. Why?", opts:["Friction from the floor balances your push","No forces act on it","It has no weight","Friction acts only on moving things"], ok:0},
  {sec:"Part A · 1 mark each", marks:1, type:"mcq", concepts:["FORCE_07"], q:"A 6 kg bag is taken to the Moon. Its mass is…", opts:["still 6 kg","1 kg","36 kg","0 kg"], ok:0},
  {sec:"Part B · choose all that are correct · 1 mark each", marks:1, type:"mca", concepts:["FORCE_06"], q:"Which of these reduce friction?", opts:["Oiling a bicycle chain","Sprinkling powder on a carrom board","Adding treads to tyres","Walking on sand"], ok:[0,1]},
  {sec:"Part B · choose all that are correct · 1 mark each", marks:1, type:"mca", concepts:["FORCE_05"], q:"A box is pushed with 10 N to the right. Friction pulls with 10 N to the left. Which are true?", opts:["The forces are balanced","The net force is 0 N","The box speeds up","No friction acts"], ok:[0,1]},
  {sec:"Part C · 2 marks", marks:2, type:"frq", concepts:["FORCE_06","FORCE_APP"], q:"Complete the explanation.", text:"Two toy cars get the same push. The car on {tiles} goes farther, because {less} friction acts on it. Friction acts {opposite to} the motion, so the car on {sand} stops sooner.", bank:["tiles","sand","less","more","opposite to","along with"]},
  {sec:"Part D · 2 marks", marks:2, type:"match", concepts:["FORCE_02","FORCE_06","FORCE_07"], q:"Match each happening to its force.", rows:[["A compass needle turns","magnetic"],["A rubbed balloon sticks to a wall","electrostatic"],["A mango falls from a tree","gravitational"],["A ball rolling on grass slows down","friction"]], bank:["magnetic","electrostatic","gravitational","friction","muscular"]}
];
const EXAM_TOTAL = EXAM.reduce((t,q) => t + q.marks, 0);

/* ================= Badges ================= */
const BADGES = {
  starter:{name:"Brave Starter", how:"Finish the first questions", art:"FORCE_01"},
  FORCE_01:{name:"Push-Pull Pro", how:"Complete Pushes and pulls", art:"FORCE_01"},
  FORCE_02:{name:"Gap Jumper", how:"Complete Touch and no-touch forces", art:"FORCE_02"},
  FORCE_03:{name:"Effect Spotter", how:"Complete What a force can do", art:"FORCE_03"},
  FORCE_05:{name:"Balance Keeper", how:"Complete Balanced forces", art:"FORCE_05"},
  FORCE_06:{name:"Friction Finder", how:"Complete Friction", art:"FORCE_06"},
  FORCE_07:{name:"Weight Wizard", how:"Complete Weight and mass", art:"FORCE_07"},
  FORCE_APP:{name:"Real-World Ranger", how:"Complete Forces in real life", art:"FORCE_APP"},
  grit:{name:"Never Give Up", how:"Try a check again and finish it", art:"FORCE_05"},
  challenge:{name:"Challenge Champion", how:"Solve a challenge quest", art:"FORCE_03"},
  master:{name:"Force Master", how:"Score 8 or more in the final challenge", art:"EXAM"}
};

/* Short cheers: chosen at random so screens don't repeat */
const CHEERS_WIN = ["You did it, {n}!","Brilliant work, {n}!","Super force, {n}!","Way to go, {n}!"];
const CHEERS_TRY = ["Great try, {n}!","Nice effort, {n}!","You're getting there, {n}!"];

const HERO_IMG = "images/force-quest-hero.webp";
/* =====================================================================
   FORCE QUEST: learner app
   Understand → About me + branching diagnostic build the learner model
   Support    → hints, read-aloud, buddy, "try it another way"
   Adapt      → route per concept, lane (boost / steady / fast), playlist order,
                warm-up reviews, road re-ordering after every check
   Progress   → missions done, mission celebrations, final challenge
   ===================================================================== */
const $ = s => document.querySelector(s);
const esc = s => String(s ?? "").replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const pickOne = a => a[Math.floor(Math.random()*a.length)];
const STORE = "force-quest-v1";
const ORDER = ["FORCE_01","FORCE_02","FORCE_03","FORCE_05","FORCE_06","FORCE_07","FORCE_APP"];

/* ---------------- State (saved on this device) ---------------- */
function fresh(){ return {
  phase:"home", name:"", prefs:{}, prefIdx:0,
  diag:{log:[], current:"S1", confirm:null, wrongRun:0, fastRun:0},
  lm:null,             // learner model
  done:{}, rec:{}, checks:{}, chal:{}, stars:0, badges:[], exam:null,
  mission:null, act:null, ui:{}
}; }
let S = fresh();
try { const raw = localStorage.getItem(STORE); if (raw){ const s = JSON.parse(raw); if (s && s.diag) S = Object.assign(fresh(), s, {phase:"home", ui:{}}); } } catch(_) {}
function save(){
  try { const {ui, ...keep} = S; localStorage.setItem(STORE, JSON.stringify({...keep, ui:{}})); } catch(_) {}
}
const NAME = () => S.name || "Explorer";

/* ---------------- Learner model ---------------- */
function initModel(R){
  const lm = {concepts:{}, codes:{}, reviews:[], passedCount:0, firstStop:R.first.id};
  ORDER.forEach(id => {
    const r = R.con[id];
    lm.concepts[id] = {m: r ? +r.score.toFixed(2) : null, n: r ? r.items.length : 0, passed:false, tries:0, best:0, failedLast:false, revisit:false, fast:false};
  });
  Object.entries(R.codes).forEach(([c,v]) => lm.codes[c] = {status: v.status === "Not repeated in a new context" ? "watch" : "working", seen:v.count});
  return lm;
}
function addEvidence(c, E){
  const k = S.lm.concepts[c]; if (!k) return;
  k.m = k.m == null ? E : +(0.7*k.m + 0.3*E).toFixed(3);
  k.n++;
}
const liveCodes = c => Object.keys(S.lm.codes).filter(x => MCODES[x].concept === c && S.lm.codes[x].status === "working");
function routeFor(c){
  const k = S.lm.concepts[c];
  if (liveCodes(c).length) return "C";
  if (k.m == null) return "B";
  if (k.m < .40) return c === "FORCE_01" ? "A" : "B";
  if (k.m < .65) return "B";
  return Object.keys(S.lm.codes).some(x => MCODES[x].concept === c && S.lm.codes[x].status === "watch") ? "E" : "D";
}
function bandWord(m){
  if (m == null) return ["Not checked yet","var(--rule)"];
  if (m < .40) return ["Getting started","var(--rose)"];
  if (m < .65) return ["Growing","var(--butter)"];
  if (m < .80) return ["Strong","var(--sky)"];
  return ["Super strong","var(--mint)"];
}
function lane(){
  const ms = ORDER.map(c => S.lm.concepts[c].m).filter(x => x != null);
  const mean = ms.length ? ms.reduce((a,b)=>a+b,0)/ms.length : .5;
  const anyFail = ORDER.some(c => S.lm.concepts[c].failedLast);
  const working = Object.values(S.lm.codes).some(v => v.status === "working");
  if (mean < .45 || anyFail) return "boost";
  if (mean >= .70 && !working) return "fast";
  return "steady";
}
const LANES = {
  boost:{name:"Boost lane", bg:"bg-rose", say:"We'll go step by step. Hints are always ready for you."},
  steady:{name:"Steady lane", bg:"bg-sky", say:"Pick an activity or two, then show what you know."},
  fast:{name:"Fast lane", bg:"bg-mint", say:"You know lots already! Skip ahead and grab the bonus challenges."}
};
function isOpen(c){
  const L = S.lm.concepts;
  if (c === "FORCE_01") return true;
  if (c === "FORCE_APP") return (L.FORCE_06.passed || L.FORCE_06.m >= .65) && (L.FORCE_07.passed || L.FORCE_07.m >= .65);
  return L.FORCE_01.passed || (L.FORCE_01.m != null && L.FORCE_01.m >= .40);
}
function nextStop(){
  const pri = {C:0,A:1,B:2,E:3,D:4};
  const cand = ORDER.filter(c => isOpen(c) && (!S.lm.concepts[c].passed || S.lm.concepts[c].revisit));
  cand.sort((a,b) => (S.lm.concepts[b].revisit - S.lm.concepts[a].revisit) || (pri[routeFor(a)] - pri[routeFor(b)]) || ((S.lm.concepts[a].m ?? .5) - (S.lm.concepts[b].m ?? .5)) || (ORDER.indexOf(a) - ORDER.indexOf(b)));
  return cand[0] || null;
}
const allPassed = () => ORDER.every(c => S.lm.concepts[c].passed);
const passedN = () => ORDER.filter(c => S.lm.concepts[c].passed).length;
const proveIt = c => { const k = S.lm.concepts[c]; return k.m != null && k.m >= .65 && !liveCodes(c).length; };
function addStars(){}
function award(){ return null; }

/* ---------------- Shell ---------------- */
function go(phase, extra){ stopSpeak(); Object.assign(S, extra || {}); S.phase = phase; S.ui = {}; save(); render(); window.scrollTo({top:0}); }
function toast(msg){ const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(toast._t); toast._t = setTimeout(() => t.classList.remove("show"), 2000); }
function renderTop(){
  const inApp = !!S.lm && !["home","name","pref","diag"].includes(S.phase);
  $("#top").innerHTML = `<button class="logo" id="tLogo">Force <span>Quest</span></button>
    ${inApp ? `<span class="starchip" aria-label="${passedN()} of 7 missions done">${passedN()} / 7</span>
      <button class="iconbtn" id="tRoad" ${S.phase === "road" ? 'aria-current="page"' : ""}>Road</button>
      <button class="iconbtn" id="tMe" ${S.phase === "me" ? 'aria-current="page"' : ""}>Me</button>` : ""}`;
  $("#tLogo").onclick = () => go(S.lm ? "road" : "home");
  if (inApp){ $("#tRoad").onclick = () => go("road"); $("#tMe").onclick = () => go("me"); }
}
const thumb = (art, bg) => `<span class="thumb bg-${bg || ART_BG[art]}">${ART[art]}</span>`;
const buddySays = (text, mood) => `<div class="buddyline">${BUDDY(mood)}<p class="bubble">${text}</p></div>`;
const sayBtn = text => canSpeak ? `<button class="say" data-say="${esc(text)}" aria-label="Read aloud">${SPEAKER}</button>` : "";
function wireSay(){ document.querySelectorAll("[data-say]").forEach(b => b.onclick = () => speak(b.dataset.say)); }
const autoRead = text => { if (S.prefs.P3 === 0 && canSpeak) setTimeout(() => speak(text), 250); };

function render(){
  renderTop();
  const m = $("#main");
  const views = {home, name, pref, diag, ready, road, mission, act, check, win, chal, me, exam, examdone};
  (views[S.phase] || home)(m);
  wireSay();
}

/* ---------------- Landing ---------------- */
function home(m){
  const resume = !!S.lm || S.diag.log.length > 0 || Object.keys(S.prefs).length > 0;
  m.innerHTML = `<section class="screen">
    <div class="heroimg"><div class="heroframe">
      <img src="${HERO_IMG}" alt="A boy pushes a smiling cardboard box, an apple falls, and a smiling magnet pulls paper clips" width="1200" height="607">
      <button class="startbtn" id="start" aria-label="${resume ? "Start: continue my missions" : "Start"}"></button>
    </div></div>
    <div class="hero-text">
      <h1 class="big">Pushes, pulls and friction</h1>
      <p class="lead">${resume ? `Welcome back, ${esc(NAME())}! Tap START to carry on with your missions.` : "Tap START to begin your missions."}</p>
      ${resume ? `<button class="link" id="restart" style="justify-self:start">Start a new quest</button>` : ""}
    </div></section>`;
  $("#start").onclick = () => {
    if (S.lm) return go(S.lm && allPassed() && !S.exam ? "road" : "mission", {mission: nextStop() || S.mission || S.lm.firstStop});
    if (resume) return go(Object.keys(S.prefs).length === PREFS.length ? "diag" : "pref", {prefIdx: Math.min(Object.keys(S.prefs).length, PREFS.length-1)});
    go("name");
  };
  if (resume) $("#restart").onclick = () => { if ($("#restart").dataset.sure){ try{localStorage.removeItem(STORE);}catch(_){} S = fresh(); render(); } else { $("#restart").dataset.sure = "1"; $("#restart").textContent = "Tap again to clear your progress and start over"; } };
}
function name(m){
  m.innerHTML = `<section class="screen">
    ${buddySays("Hi! I'm Fizz, your force buddy. What should I call you?", "cheer")}
    <div class="card" style="display:grid;gap:14px">
      <label class="namefield" for="nm">Your first name<input id="nm" maxlength="24" autocomplete="given-name" placeholder="Type your name"></label>
      <div class="row" style="justify-content:space-between"><button class="link" id="skip">Skip</button><button class="btn primary" id="nx">Next</button></div>
    </div></section>`;
  $("#nm").focus();
  const next = () => { S.name = $("#nm").value.trim().slice(0,24); go("pref", {prefIdx:0}); };
  $("#nx").onclick = next; $("#skip").onclick = () => go("pref", {prefIdx:0});
  $("#nm").onkeydown = ev => { if (ev.key === "Enter") next(); };
}

/* ---------------- About me (Understand) ---------------- */
function pref(m){
  const P = PREFS[S.prefIdx], pick = S.ui.pick ?? null;
  m.innerHTML = `<section class="screen">
    ${buddySays(S.prefIdx === 0 ? `Hi ${esc(NAME())}! First, tell me how you like to learn.` : "No right or wrong answers here.", "happy")}
    <div class="card" style="display:grid;gap:14px">
      <div class="qmeta"><span class="tag">About me</span><span class="dots">${PREFS.map((_,i) => `<i class="${i < S.prefIdx ? "done" : i === S.prefIdx ? "now" : ""}"></i>`).join("")}</span></div>
      <div class="qhead"><p class="stem" id="ps">${esc(P.stem)}</p>${sayBtn(P.stem)}</div>
      <div class="opts" role="group" aria-labelledby="ps">${P.opts.map((o,i) => `<button class="opt" data-i="${i}" aria-pressed="${pick===i}"><span class="k2">${KEYS[i]}</span><span>${esc(o.t)}</span></button>`).join("")}</div>
      <div class="row end"><button class="btn primary" id="nx" ${pick===null ? "disabled" : ""}>Next</button></div>
    </div></section>`;
  m.querySelectorAll(".opt").forEach(b => b.onclick = () => { S.ui.pick = +b.dataset.i; pref(m); wireSay(); $("#nx").focus({preventScroll:true}); });
  $("#nx").onclick = () => {
    S.prefs[P.id] = S.ui.pick;
    if (S.prefIdx < PREFS.length - 1){ S.prefIdx++; S.ui = {}; save(); pref(m); wireSay(); }
    else if (S.ui.redo){ go("me"); toast("Your playlists now follow your new choices"); }
    else go("diag", {diag:{log:[], current:"S1", confirm:null, wrongRun:0, fastRun:0}});
  };
}

/* ---------------- Diagnostic (Understand + Support) ---------------- */
function diag(m){
  const D = S.diag, it = ITEMS[D.current], n = D.log.length + 1, u = S.ui;
  if (u.t0 == null) { u.t0 = performance.now(); autoRead((it.scene ? it.scene + " " : "") + it.stem); }
  const right = it.opts.findIndex(o => o.ok);
  const cls = i => !u.checked ? "" : i === right ? "right" : i === u.pick ? "wrong" : "";
  let msg = "";
  if (D.wrongRun >= 3) msg = buddySays("Let's slow down together. You're doing fine, and every answer helps me know you.", "think");
  else if (D.fastRun >= 3) msg = buddySays("Take your time and read each question. There's no rush!", "think");
  else if (n === 1) msg = buddySays(`Seven quick questions, ${esc(NAME())}. No marks, just finding your starting point.`, "happy");
  m.innerHTML = `<section class="screen">${msg}
    <div class="card" style="display:grid;gap:14px">
      <div class="qmeta"><span class="tag">Question ${n} of 7</span><span class="dots">${Array.from({length:7},(_,i) => `<i class="${i < n-1 ? "done" : i === n-1 ? "now" : ""}"></i>`).join("")}</span></div>
      ${it.scene ? `<p class="scene">${esc(it.scene)}</p>` : ""}
      <div class="qhead"><p class="stem" id="qs">${esc(it.stem)}</p>${sayBtn((it.scene ? it.scene + " " : "") + it.stem)}</div>
      <div class="opts" role="group" aria-labelledby="qs">${it.opts.map((o,i) => `<button class="opt ${cls(i)}" data-i="${i}" aria-pressed="${u.pick===i}" ${u.checked ? "disabled" : ""}><span class="k2">${KEYS[i]}</span><span>${esc(o.t)}</span></button>`).join("")}</div>
      ${u.hint ? `<p class="hintbox">💡 ${esc(HINTS[D.current] || "Read each answer slowly and picture it.")}</p>` : ""}
      ${u.checked ? `<div class="fb ${u.pick === right ? "ok" : "no"}">${u.pick === right ? "Yes, that's right!" : "Not quite, and that's okay."}<span>${u.pick === right ? "" : `The answer is ${KEYS[right]}. It helps me pick your next question.`}</span></div>` : ""}
      <div class="qfoot">${!u.checked && !u.hint ? `<button class="link" id="hint">Need a hint?</button>` : "<span></span>"}
        <button class="btn primary" id="nx" ${u.pick == null ? "disabled" : ""}>${u.checked && n === 7 ? "Finish" : "Next"}</button></div>
    </div></section>`;
  m.querySelectorAll(".opt").forEach(b => b.onclick = () => { if (u.checked) return; u.pick = +b.dataset.i; diag(m); wireSay(); $("#nx").focus({preventScroll:true}); });
  if ($("#hint")) $("#hint").onclick = () => { u.hint = true; diag(m); wireSay(); };
  $("#nx").onclick = () => {
    if (!u.checked){ u.ms = performance.now() - u.t0; u.checked = true; diag(m); wireSay(); $("#nx").focus({preventScroll:true}); return; }
    const o = it.opts[u.pick];
    D.log.push({id:D.current, opt:u.pick, ok:!!o.ok, codes:o.m || [], ms:Math.round(u.ms), concepts:it.concept, dok:it.dok, hint:!!u.hint});
    D.wrongRun = o.ok ? 0 : D.wrongRun + 1;
    D.fastRun = u.ms < 4000 ? D.fastRun + 1 : 0;
    if (o.next === "@end"){ finishDiag(); return; }
    if (o.next === "@confirm"){ D.confirm = chooseConfirm(D.log); D.current = D.confirm.id; } else D.current = o.next;
    S.ui = {}; save(); diag(m); wireSay(); window.scrollTo({top:0});
  };
}
function finishDiag(){
  const R = computeReport(S.diag.log, S.diag.confirm);
  S.lm = initModel(R);
  addStars(2); award("starter");
  go("ready");
}
function ready(m){
  const L = LANES[lane()], f = nextStop() || S.lm.firstStop;
  m.innerHTML = `<section class="screen center celebrate">${confetti(18)}
    <div class="card center" style="display:grid;gap:14px">
      ${BUDDY("cheer").replace('class="buddy"','class="buddy" style="width:110px;height:110px"')}
      <h2 class="big">Your road is ready, ${esc(NAME())}!</h2>
      <p class="lead">Thank you for answering. Now I know where to start.</p>
      <div class="lane ${L.bg}" style="color:var(--outline)"><div><b>${L.name}</b><br>${esc(L.say)}</div></div>
      <button class="btn primary block" id="toRoad">Start with ${esc(CONCEPTS[f].name)}</button>
    </div></section>`;
  $("#toRoad").onclick = () => go("mission", {mission:f});
}
function confetti(n){
  const cols = ["var(--rose)","var(--sky)","var(--butter)","var(--mint)","var(--lav)","var(--peach)"];
  return `<div class="confetti" aria-hidden="true">${Array.from({length:n},(_,i) => `<i style="left:${(i*97)%100}%;background:${cols[i%6]};animation-delay:${(i%7)*.12}s"></i>`).join("")}</div>`;
}

/* ---------------- Road (Adapt + Progress) ---------------- */
function road(m){
  const L = LANES[lane()], nx = nextStop();
  const stops = ORDER.map(c => {
    const k = S.lm.concepts[c], open = isOpen(c), chk = S.checks[c];
    let st = "Ready when you are", cls = "";
    if (!open) { st = c === "FORCE_APP" ? "Opens after Friction and Weight and mass" : "Opens after Pushes and pulls"; cls = "locked"; }
    else if (k.revisit) st = "Quick revisit";
    else if (k.passed) st = `<span class="tick">✓</span> Done`;
    else if (k.tries) st = "Keep going, you're close";
    if (c === nx){ cls += " next"; st = k.revisit ? "Next: quick revisit" : "Next stop"; }
    return `<li><button class="stop ${cls}" data-c="${c}" ${!open ? 'aria-disabled="true"' : ""}>${thumb(c)}
      <span class="card2"><span class="nm">${esc(CONCEPTS[c].name)}</span><br><span class="st">${st}</span></span></button></li>`;
  }).join("");
  const examOpen = allPassed();
  m.innerHTML = `<section class="screen">
    ${buddySays(nx ? `Hi ${esc(NAME())}! Next stop: <b>${esc(CONCEPTS[nx].name)}</b>.` : examOpen ? `Every mission done, ${esc(NAME())}! The Final Challenge is open.` : "Great work today!", "happy")}
    <div class="lane ${L.bg}" style="color:var(--outline)"><div><b>${L.name}</b><br>${esc(L.say)}</div></div>
    <ul class="road">${stops}
      <li><button class="stop ${examOpen ? (nx ? "" : "next") : "locked"}" id="examStop" ${!examOpen ? 'aria-disabled="true"' : ""}>${thumb("EXAM")}
        <span class="card2"><span class="nm">Final Challenge</span><br><span class="st">${S.exam ? `${fmtScore(S.exam.score)} / ${EXAM_TOTAL} marks` : examOpen ? "Open! 10 marks" : `Opens when all missions are done (${passedN()} of 7)`}</span></span></button></li>
    </ul></section>`;
  m.querySelectorAll(".stop[data-c]").forEach(b => b.onclick = () => {
    if (!isOpen(b.dataset.c)) { toast(b.querySelector(".st").textContent); return; }
    go("mission", {mission:b.dataset.c});
  });
  $("#examStop").onclick = () => examOpen ? go("exam") : toast("Finish all 7 missions to open the Final Challenge");
}

/* ---------------- Mission (Adapt + Support) ---------------- */
function mission(m){
  const c = S.mission, k = S.lm.concepts[c], route = routeFor(c), ln = lane();
  const pl = playlistFor(S.prefs, route);
  const need = ln === "boost" ? 3 : 2;
  const doneN = pl.order.filter(x => S.done[c+":"+x]).length;
  const fast = proveIt(c) && !k.passed;
  // after a failed check: suggest a way of learning not yet tried
  let suggest = null;
  if (k.failedLast){ suggest = pl.order.find(x => !S.done[c+":"+x]) || pl.order[0]; }
  const review = S.ui.rvKeep || dueReview(c); if (review) S.ui.rvKeep = review;
  m.innerHTML = `<section class="screen">
    <div class="banner bg-${ART_BG[c]}" style="color:var(--outline)">${ART[c]}<div><h2 style="font-size:1.6rem">${esc(CONCEPTS[c].name)}</h2>
      <p>${k.passed && !k.revisit ? "Mission complete! Play again any time." : fast ? "You already know lots here!" : ln === "boost" ? `Do ${need} short activities, then the check.` : `Try ${need} activities, then take the check.`}</p></div></div>
    ${review ? reviewCard(review) : ""}
    ${suggest ? buddySays(`Let's try it another way: <b>${esc(MODS[suggest].name)}</b>.`, "happy") : ""}
    <ul class="plist">${pl.order.map(x => { const d = S.done[c+":"+x], A = ACT[c][x];
      const title = x === "vtr" ? A.routine.name : x === "video" && unitsFor(c).length ? "Video lesson + recap" : A.title;
      return `<li><button class="pitem ${d ? "done" : ""} ${x === suggest ? "suggest" : ""}" data-x="${x}">
        <span class="ico bg-${{video:"rose",vtr:"sky",notes:"butter",example:"lav",hands:"mint"}[x]}">${MODS[x].icon}</span>
        <span><span class="tt">${esc(MODS[x].name)}</span>${pl.picked.includes(x) && !d ? '<span class="pick">For you</span>' : ""}<br><span class="ds">${esc(title)}</span></span>
        <span class="tick" aria-label="${d ? "Done" : ""}">${d ? "✓" : ""}</span></button></li>`; }).join("")}</ul>
    <button class="btn primary block" id="chk">${fast ? "Prove it now: take the check" : k.passed && !k.revisit ? "Take the check again" : "Take the mission check"}</button>
    ${k.passed && !S.chal[c] ? `<button class="btn block" id="chal">${ln === "fast" ? "⚡ " : ""}Bonus challenge: ${esc(CHALLENGE[c].title)}</button>` : ""}
    <p class="note" style="text-align:center">${doneN} of 5 activities done${doneN < need && !fast && !k.passed ? ` · ${need - doneN} more before the check is a good idea` : ""}</p>
  </section>`;
  m.querySelectorAll(".pitem").forEach(b => b.onclick = () => go("act", {act:b.dataset.x}));
  $("#chk").onclick = () => go("check", {});
  if ($("#chal")) $("#chal").onclick = () => go("chal");
  if (review) wireReview(review, m);
}
/* Spaced review: a misconception fixed in an earlier mission comes back once as a warm-up */
function dueReview(current){
  const r = S.lm.reviews.find(r => !r.done && r.concept !== current && S.lm.passedCount >= r.after);
  return r ? {...r, item:ITEMS[CF_BY_CODE[r.code]]} : null;
}
function reviewCard(r){
  const it = r.item, u = S.ui;
  const right = it.opts.findIndex(o => o.ok);
  return `<div class="card" style="display:grid;gap:10px;border-color:var(--butter)">
    <span class="tag">Warm-up · remember this?</span>
    <div class="qhead"><p class="stem" id="rv" style="font-size:1.08rem">${esc(it.stem)}</p>${sayBtn(it.stem)}</div>
    <div class="opts" role="group" aria-labelledby="rv">${it.opts.map((o,i) => `<button class="opt ${u.rv != null ? (i === right ? "right" : i === u.rv ? "wrong" : "") : ""}" data-rv="${i}" ${u.rv != null ? "disabled" : ""}><span class="k2">${KEYS[i]}</span><span>${esc(o.t)}</span></button>`).join("")}</div>
    ${u.rv != null ? `<div class="fb ${u.rv === right ? "ok" : "no"}">${u.rv === right ? "You remembered!" : "Good to check! We'll pop back to that idea."}</div>` : ""}
  </div>`;
}
function wireReview(r, m){
  m.querySelectorAll("[data-rv]").forEach(b => b.onclick = () => {
    const i = +b.dataset.rv, ok = !!r.item.opts[i].ok;
    S.ui.rv = i;
    const rev = S.lm.reviews.find(x => x.code === r.code && !x.done); rev.done = true;
    addEvidence(r.concept, ok ? 1 : 0);
    if (ok){ S.lm.codes[r.code].status = "fixed"; addStars(1); }
    else { S.lm.codes[r.code].status = "working"; S.lm.concepts[r.concept].revisit = true; }
    save(); const keep = S.ui; mission(m); S.ui = keep; wireSay();
  });
}

/* ---------------- Activities (Support) ---------------- */
let V = {i:0, playing:false, timer:null, sound:true};
function act(m){
  stopSpeak(); clearTimeout(V.timer); V.playing = false;
  const c = S.mission, x = S.act, A = ACT[c][x], key = c+":"+x;
  const title = x === "vtr" ? A.routine.name : A.title;
  let body = "";
  if (x === "video") body = videoBody(c, A);
  if (x === "vtr") body = vtrBody(c, A);
  if (x === "notes") body = notesBody(A);
  if (x === "example") body = exampleBody(A);
  if (x === "hands") body = handsBody(c, A);
  m.innerHTML = `<section class="screen"><div class="card" style="display:grid;gap:14px">
    <div class="acthead"><span class="ico bg-${{video:"rose",vtr:"sky",notes:"butter",example:"lav",hands:"mint"}[x]}">${MODS[x].icon}</span><div><span class="tag">${esc(MODS[x].name)}</span><h2>${esc(title)}</h2></div></div>
    ${body}
    <div class="row" style="justify-content:space-between"><button class="btn" id="back">Back</button><button class="btn primary" id="done">${S.done[key] ? "Done ✓" : "I'm done"}</button></div>
  </div></section>`;
  $("#back").onclick = () => { saveAct(); go("mission"); };
  $("#done").onclick = () => { saveAct(); if (!S.done[key]){ S.done[key] = true; toast("Nice work!"); } go("mission"); };
  if (x === "video") wireVideo(A);
  if (x === "notes") wireNotes(A);
  if (x === "example") wireExample(A);
}
function saveAct(){
  const c = S.mission, x = S.act; if (x !== "vtr" && x !== "hands") return;
  const rec = {}; document.querySelectorAll("#main [data-f]").forEach(el => rec[el.dataset.f] = el.value.trim());
  if (Object.values(rec).some(v => v)) S.rec[c+":"+x] = rec;
  save();
}
function videoBody(c, A){
  V.i = 0; V.sound = S.prefs.P3 !== 2 && canSpeak;
  const vu = unitsFor(c), rec = S.rec[c+":video"] || {};
  const units = vu.map(u => { const k = "U" + unitNo(u); const ans = rec[k];
    return `<div class="vunit"><div class="row"><span class="vno">Part ${unitNo(u)}</span><b>${esc(u.title)}</b></div>
      <p>👀 ${esc(u.watchFor)}</p>
      <a class="btn primary" href="${ytLink(u.start)}" target="_blank" rel="noopener">▶ Watch ${mmss(u.start)}–${mmss(u.end)}</a>
      <p class="note">Opens YouTube at ${mmss(u.start)}. Pause at ${mmss(u.end)}, then come back.</p>
      <p class="stem" style="font-size:1.05rem" id="uq${u.id}">${esc(u.check.q)}</p>
      <div class="opts" role="group" aria-labelledby="uq${u.id}">${u.check.opts.map((o,i) => `<button class="opt ${ans != null ? (i === u.check.ok ? "right" : ans === i ? "wrong" : "") : ""}" data-u="${u.id}" data-i="${i}" ${ans != null ? "disabled" : ""}><span class="k2">${KEYS[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>
      ${ans != null ? `<div class="fb ${ans === u.check.ok ? "ok" : "no"}">${ans === u.check.ok ? "Yes!" : "Not quite."}<span>${esc(u.check.why)}</span></div>` : ""}</div>`; }).join("");
  return `${units}
    ${vu.length ? `<p class="sect">Quick recap</p>` : ""}
    <div class="pic">${PICS[c]()}</div>
    <p class="cap" id="cap" aria-live="polite">${esc(A.frames[0])}</p>
    <div class="ctrl"><button class="btn small primary" id="vPlay">▶ Play</button><button class="btn small" id="vPrev" aria-label="Previous">‹</button><button class="btn small" id="vNext" aria-label="Next">›</button>
      ${canSpeak ? `<button class="btn small" id="vSound" aria-pressed="${V.sound}">${V.sound ? "🔊 On" : "🔇 Off"}</button>` : ""}<span class="dots" style="margin-left:auto">${A.frames.map((_,i) => `<i class="${i===0?"now":""}"></i>`).join("")}</span></div>`;
}
function wireVideo(A){
  document.querySelectorAll("[data-u]").forEach(b => b.onclick = () => {
    const u = VIDEO.units.find(x => x.id === b.dataset.u), i = +b.dataset.i, key = S.mission+":video";
    S.rec[key] = {...(S.rec[key]||{}), ["U"+unitNo(u)]: i};
    addEvidence(S.mission, i === u.check.ok ? 1 : 0.2); save(); act($("#main"));
  });
  const show = () => { $("#cap").textContent = A.frames[V.i]; document.querySelectorAll(".ctrl .dots i").forEach((d,i) => d.className = i === V.i ? "now" : i < V.i ? "done" : ""); };
  const step = () => {
    if (!V.playing) return; show();
    const after = () => { if (!V.playing) return; if (V.i < A.frames.length-1){ V.i++; V.timer = setTimeout(step, 500); } else { V.playing = false; $("#vPlay").textContent = "↻ Again"; } };
    if (!(V.sound && speak(A.frames[V.i], after))) V.timer = setTimeout(after, 1600 + A.frames[V.i].split(" ").length*320);
  };
  $("#vPlay").onclick = () => {
    if (V.playing){ V.playing = false; clearTimeout(V.timer); stopSpeak(); $("#vPlay").textContent = "▶ Play"; return; }
    if ($("#vPlay").textContent.includes("Again")) V.i = 0;
    V.playing = true; $("#vPlay").textContent = "❚❚ Pause"; step();
  };
  const jump = d => { V.playing = false; clearTimeout(V.timer); stopSpeak(); $("#vPlay").textContent = "▶ Play"; V.i = Math.max(0, Math.min(A.frames.length-1, V.i+d)); show(); };
  $("#vPrev").onclick = () => jump(-1); $("#vNext").onclick = () => jump(1);
  const sb = $("#vSound"); if (sb) sb.onclick = () => { V.sound = !V.sound; sb.textContent = V.sound ? "🔊 On" : "🔇 Off"; sb.setAttribute("aria-pressed", V.sound); if (!V.sound) stopSpeak(); };
}
function vtrBody(c, A){
  const saved = S.rec[c+":vtr"] || {};
  return `<p class="muted">Look closely for one minute. Then answer in your own words.</p>
    <div class="pic">${PICS[c]()}</div>
    <div class="routine">${A.routine.prompts.map((p,i) => { const key = p.split(":")[0];
      return `<label for="v${i}">${esc(p)}<textarea id="v${i}" data-f="${esc(key)}">${esc(saved[key] || "")}</textarea></label>`; }).join("")}</div>`;
}
function notesBody(A){
  const cols = ["sky","butter","mint","rose","lav","peach"];
  return `<div class="row" style="justify-content:space-between"><p class="vtitle">${esc(A.title)}</p>
      ${canSpeak ? `<button class="btn small primary" id="readAll">🔊 Read aloud</button>` : ""}</div>
    ${!canSpeak ? `<p class="note">Read-aloud doesn't work in this browser. Try Chrome or Edge.</p>` : ""}
    <div class="vnotes">${A.boxes.map((b,i) => `<div class="vbox bg-${cols[i%6]}" id="vb${i}"><h4>${esc(b.h)}</h4>${esc(b.t)}${canSpeak ? `<button class="say" data-b="${i}" aria-label="Read ${esc(b.h)}">${SPEAKER}</button>` : ""}</div>`).join("")}</div>`;
}
function wireNotes(A){
  if (!canSpeak) return;
  const btn = $("#readAll"); let on = false;
  const mark = i => document.querySelectorAll(".vbox").forEach((b,j) => b.classList.toggle("reading", j === i));
  const run = i => { if (!on) return; if (i >= A.boxes.length){ on = false; mark(-1); btn.textContent = "🔊 Read aloud"; return; } mark(i); speak(`${A.boxes[i].h}. ${A.boxes[i].t}`, () => run(i+1)); };
  btn.onclick = () => { if (on){ on = false; stopSpeak(); mark(-1); btn.textContent = "🔊 Read aloud"; return; } on = true; btn.textContent = "■ Stop"; speak(A.title, () => run(0)); };
  document.querySelectorAll(".vbox .say").forEach(b => { b.removeAttribute("data-say"); b.onclick = () => { on = false; btn.textContent = "🔊 Read aloud"; const i = +b.dataset.b; mark(i); speak(`${A.boxes[i].h}. ${A.boxes[i].t}`, () => mark(-1)); }; });
  if (S.prefs.P3 === 0) btn.click();
}
function exampleBody(A){
  return `<p class="stem" style="font-size:1.1rem">${esc(A.problem)}</p>
    <ol class="steps" id="exS"><li>${esc(A.steps[0])}</li></ol>
    <button class="btn" id="exN">Show next step</button>
    <div id="exT" hidden style="display:grid;gap:10px"><p class="stem" style="font-size:1.08rem" id="tq">${esc(A.turn.q)}</p>
      <div class="opts" role="group" aria-labelledby="tq">${A.turn.opts.map((o,i) => `<button class="opt" data-t="${i}"><span class="k2">${KEYS[i]}</span><span>${esc(o)}</span></button>`).join("")}</div><div id="exF"></div></div>`;
}
function wireExample(A){
  let shown = 1;
  $("#exN").onclick = () => {
    if (shown < A.steps.length){ const li = document.createElement("li"); li.textContent = A.steps[shown++]; $("#exS").appendChild(li); }
    if (shown >= A.steps.length){ $("#exN").hidden = true; $("#exT").hidden = false; }
  };
  document.querySelectorAll("[data-t]").forEach(b => b.onclick = () => {
    const i = +b.dataset.t, ok = i === A.turn.ok;
    document.querySelectorAll("[data-t]").forEach((x,j) => { x.disabled = true; x.classList.toggle("right", j === A.turn.ok); x.classList.toggle("wrong", j === i && !ok); });
    $("#exF").innerHTML = `<div class="fb ${ok?"ok":"no"}">${ok ? "You got it!" : "Not quite."}<span>${esc(A.turn.why)}</span></div>`;
    addEvidence(S.mission, ok ? 1 : 0.2); save();
  });
}
function handsBody(c, A){
  const saved = S.rec[c+":hands"] || {}, v = k => esc(saved[k] || "");
  return `<p class="sect">You need</p><div class="mat">${A.materials.map(x => `<span>${esc(x)}</span>`).join("")}</div>
    <label class="routine" for="hp"><span class="sect">1. Guess first</span><span class="muted" style="font-weight:500">${esc(A.predict)}</span><textarea id="hp" data-f="Prediction">${v("Prediction")}</textarea></label>
    <p class="sect">2. Do it</p><ol class="do">${A.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
    <p class="sect">3. Write what you see</p>
    <div class="tbl"><table class="obs"><thead><tr>${A.cols.map(h => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>
      ${A.rows.map((r,ri) => `<tr><td><b>${esc(r)}</b></td>${A.cols.slice(1).map((h,ci) => { const k = `${r} | ${h}`; return `<td><input id="h${ri}_${ci}" data-f="${esc(k)}" value="${v(k)}" aria-label="${esc(r)}: ${esc(h)}"></td>`; }).join("")}</tr>`).join("")}
    </tbody></table></div>
    <label class="routine" for="hn"><span class="sect">4. What did you notice?</span><textarea id="hn" data-f="What I noticed">${v("What I noticed")}</textarea></label>
    <p class="note">Ask an adult before using anything sharp or heavy.</p>`;
}

/* ---------------- Mission check (2 multiple-correct + 1 drag-and-drop) ---------------- */
const fmtScore = x => Number.isInteger(x) ? String(x) : x.toFixed(1);
function check(m){
  const c = S.mission, u = S.ui;
  if (!u.k) u.k = {i:0, picks:[], filled:[], sel:null, checked:false, hint:false, scores:[], hints:[]};
  const K = u.k, it = MCHECK[c][K.i], n = K.i + 1;
  if (!K.read){ K.read = true; autoRead(it.q); }
  const body = it.type === "mca" ? mcaBody(it, K) : gapBody(frqParts(it.text), it.bank, K);
  const answered = it.type === "mca" ? K.picks.length > 0 : frqParts(it.text).filter(p => p.blank).every((_,i) => K.filled[i]);
  let fb = "";
  if (K.checked){ const s = K.scores[K.i];
    fb = `<div class="fb ${s >= .99 ? "ok" : "no"}">${s >= .99 ? pickOne(["Brilliant!","Spot on!","Yes!"]) : s > 0 ? "Partly right, good thinking!" : "Not yet, and that's okay."}<span>${it.type === "mca" ? (s < .99 ? "Green shows the right answers." : "") : (s < .99 ? "The right word is under each red gap." : "")}</span></div>`; }
  const hintText = it.type === "mca" ? `There ${it.ok.length === 1 ? "is 1 right answer" : `are ${it.ok.length} right answers`}.` : `The first gap is “${frqParts(it.text).find(p => p.blank).blank}”.`;
  m.innerHTML = `<section class="screen">
    <div class="card" style="display:grid;gap:14px">
      <div class="qmeta"><span class="tag">Mission check · ${n} of 3</span><span class="dots">${[0,1,2].map(i => `<i class="${i < K.i ? "done" : i === K.i ? "now" : ""}"></i>`).join("")}</span></div>
      <span class="tag" style="color:var(--accent)">${it.type === "mca" ? "Tap all the right answers" : "Drag or tap a word for each gap"}</span>
      <div class="qhead"><p class="stem" id="cq">${esc(it.q)}</p>${sayBtn(it.type === "mca" ? it.q + ". " + it.opts.join(". ") : it.q + " " + it.text.replace(/[{}]/g,""))}</div>
      ${body}
      ${K.hint && !K.checked ? `<p class="hintbox">💡 ${esc(hintText)}</p>` : ""}
      ${fb}
      <div class="qfoot">${!K.checked && !K.hint ? `<button class="link" id="hint">Need a hint?</button>` : "<span></span>"}
        <button class="btn primary" id="nx" ${answered ? "" : "disabled"}>${K.checked && n === 3 ? "See how I did" : "Next"}</button></div>
    </div></section>`;
  if (it.type === "mca") m.querySelectorAll("[data-mi]").forEach(b => b.onclick = () => { const i = +b.dataset.mi; K.picks = K.picks.includes(i) ? K.picks.filter(x => x !== i) : [...K.picks, i]; check(m); wireSay(); });
  else if (!K.checked) wireGaps(K, frqParts(it.text).filter(p => p.blank).length, () => { check(m); wireSay(); });
  if ($("#hint")) $("#hint").onclick = () => { K.hint = true; check(m); wireSay(); };
  $("#nx").onclick = () => {
    if (!K.checked){
      let s = it.type === "mca" ? scoreMca(it, K.picks) : scoreFrq(it, K.filled);
      if (K.hint) s = s * 0.7;                       // v2: correct after hint = 0.7
      K.scores[K.i] = s; K.hints[K.i] = K.hint; K.checked = true; check(m); wireSay(); $("#nx").focus({preventScroll:true}); return;
    }
    if (K.i < 2){ Object.assign(K, {i:K.i+1, picks:[], filled:[], sel:null, checked:false, hint:false, read:false}); check(m); wireSay(); window.scrollTo({top:0}); }
    else finishCheck(K);
  };
}
function mcaBody(it, K){
  return `<div class="opts" role="group" aria-labelledby="cq">${it.opts.map((o,i) => {
    let cls = ""; if (K.checked){ const p = K.picks.includes(i), g = it.ok.includes(i); cls = p && g ? "right" : p ? "wrong" : g ? "missed" : ""; }
    return `<button class="opt ${cls}" data-mi="${i}" aria-pressed="${K.picks.includes(i)}" ${K.checked ? "disabled" : ""}><span class="box" aria-hidden="true"></span><span>${esc(o)}</span></button>`; }).join("")}</div>`;
}
/* Shared gap-fill renderer: used by the mission FRQ and the exam's gap and match items */
function gapBody(parts, bank, K, matchRows){
  const answers = matchRows ? matchRows.map(r => r[1]) : parts.filter(p => p.blank).map(p => p.blank);
  const slot = b => { const w = K.filled[b], st = K.checked && K.showAns ? (w === answers[b] ? "right" : "wrong") : "";
    return `<button class="slot ${w ? "filled" : ""} ${K.sel === b && !K.checked ? "sel" : ""} ${st}" data-slot="${b}" ${K.checked ? "disabled" : ""} aria-label="Gap ${b+1}${w ? ": " + esc(w) : ", empty"}">${w ? esc(w) : "&nbsp;"}${st === "wrong" ? `<span class="fix">${esc(answers[b])}</span>` : ""}</button>`; };
  if (K.showAns === undefined) K.showAns = true;
  let b = -1;
  const text = matchRows
    ? `<div>${matchRows.map((r,i) => `<div class="matchrow"><span>${esc(r[0])}</span>${slot(i)}</div>`).join("")}</div>`
    : `<p class="frqtext">${parts.map(p => p.blank ? slot(++b) : esc(p.t)).join("")}</p>`;
  return `${text}<div class="bank" aria-label="Word bank">${bank.map(w => `<button class="wchip" data-w="${esc(w)}" ${K.filled.includes(w) || K.checked ? "disabled" : ""}>${esc(w)}</button>`).join("")}</div>`;
}
function wireGaps(K, nSlots, rerender){
  const fill = (s, w) => { const p = K.filled.indexOf(w); if (p > -1) K.filled[p] = undefined; K.filled[s] = w; K.sel = null; rerender(); };
  const target = () => { if (K.sel !== null && !K.filled[K.sel]) return K.sel; for (let i = 0; i < nSlots; i++) if (!K.filled[i]) return i; return null; };
  document.querySelectorAll("[data-slot]").forEach(s => s.onclick = () => { const i = +s.dataset.slot; if (K.filled[i]) { K.filled[i] = undefined; K.sel = i; } else K.sel = K.sel === i ? null : i; rerender(); });
  document.querySelectorAll(".wchip").forEach(chip => {
    let d = null, suppress = false;
    chip.onclick = () => { if (suppress){ suppress = false; return; } const t = target(); if (t !== null) fill(t, chip.dataset.w); };
    chip.addEventListener("pointerdown", e => { if (chip.disabled) return; d = {x:e.clientX, y:e.clientY, g:null, over:null}; try { chip.setPointerCapture(e.pointerId); } catch(_){} });
    chip.addEventListener("pointermove", e => {
      if (!d) return;
      if (!d.g && Math.hypot(e.clientX-d.x, e.clientY-d.y) > 6){ d.g = chip.cloneNode(true); d.g.classList.add("ghost"); document.body.appendChild(d.g); }
      if (d.g){ d.g.style.left = e.clientX+"px"; d.g.style.top = e.clientY+"px";
        const el = document.elementFromPoint(e.clientX, e.clientY), sl = el && el.closest(".slot");
        if (d.over && d.over !== sl) d.over.classList.remove("over"); d.over = sl; if (sl) sl.classList.add("over"); }
    });
    chip.addEventListener("pointerup", () => { if (!d) return; const x = d; d = null; if (x.g){ x.g.remove(); suppress = true; setTimeout(() => suppress = false, 400); if (x.over) fill(+x.over.dataset.slot, chip.dataset.w); } });
    chip.addEventListener("pointercancel", () => { if (d && d.g) d.g.remove(); d = null; });
  });
}
function finishCheck(K){
  const c = S.mission, k = S.lm.concepts[c];
  K.scores.forEach(E => addEvidence(c, E));
  const total = K.scores.reduce((a,b) => a+b, 0);
  const passed = total >= 2.5 || (total >= 2 && k.m >= .65);
  const wasFailed = k.failedLast || k.tries > 0 && !k.passed;
  k.tries++;
  const res = {total, passed, stars:0, badge:null, newBadges:[]};
  if (passed){
    res.stars = total >= 2.9 ? 3 : total >= 2.5 ? 2 : 1;
    const first = !k.passed;
    k.passed = true; k.failedLast = false; k.revisit = false;
    if (first){ S.lm.passedCount++; }
    // misconceptions tied to this concept count as fixed for now, and come back once later as a warm-up
    Object.keys(S.lm.codes).filter(x => MCODES[x].concept === c && S.lm.codes[x].status !== "fixed").forEach(x => {
      S.lm.codes[x].status = "fixed";
      if (!S.lm.reviews.some(r => r.code === x)) S.lm.reviews.push({code:x, concept:c, after:S.lm.passedCount + 1, done:false});
    });
    const b1 = award(c); if (b1) res.newBadges.push(b1);
    if (wasFailed){ const b2 = award("grit"); if (b2) res.newBadges.push(b2); }
  } else {
    k.failedLast = true; res.stars = 1;   // effort star
  }
  addStars(res.stars);
  S.checks[c] = {total, stars: Math.max(res.stars, (S.checks[c]||{}).stars || 0), scores:K.scores};
  go("win", {winRes:res});
}

/* ---------------- Celebration / encouragement after a mission ---------------- */
function win(m){
  const c = S.mission, r = S.winRes, nx = nextStop();
  if (r.passed){
    m.innerHTML = `<section class="screen celebrate">${confetti(26)}
      <div class="card center" style="display:grid;gap:14px;justify-items:center">
        <div class="bg-${ART_BG[c]}" style="border-radius:28px;padding:10px 18px">${ART[c].replace("<svg",'<svg class="artbig"')}</div>
        <h2 class="big">${esc(pickOne(CHEERS_WIN).replace("{n}", NAME()))}</h2>
        <p class="lead">You finished <b>${esc(CONCEPTS[c].name)}</b>.</p>
        <p class="lead">${passedN()} of 7 missions done. Keep going!</p>
        ${nx ? `<button class="btn primary block" id="nxt">Next stop: ${esc(CONCEPTS[nx].name)}</button>` : allPassed() ? `<button class="btn primary block" id="exm">Open the Final Challenge 🏆</button>` : ""}
        ${!S.chal[c] ? `<button class="link" id="chal">Try the bonus challenge</button>` : ""}
      </div></section>`;
  } else {
    const k = S.lm.concepts[c], pl = playlistFor(S.prefs, routeFor(c));
    const sug = pl.order.find(x => !S.done[c+":"+x]) || pl.order[0];
    m.innerHTML = `<section class="screen">
      <div class="card center" style="display:grid;gap:14px;justify-items:center">
        ${BUDDY("happy").replace('class="buddy"','class="buddy" style="width:120px;height:120px"')}
        <h2 class="big">${esc(pickOne(CHEERS_TRY).replace("{n}", NAME()))}</h2>
        <p class="lead">Every try makes your brain stronger. Let's learn it another way.</p>
        <div class="bg-${ART_BG[c]}" style="border-radius:22px;padding:8px 14px">${ART[c].replace("<svg",'<svg style="width:150px;height:auto"')}</div>
        <button class="btn primary block" id="sug">Let's try: ${esc(MODS[sug].name)}</button>
        <button class="link" id="bk">Back to my mission</button>
      </div></section>`;
    $("#sug").onclick = () => go("act", {act:sug});
    $("#bk").onclick = () => go("mission");
  }
  if ($("#nxt")) $("#nxt").onclick = () => go("mission", {mission:nx});
  if ($("#exm")) $("#exm").onclick = () => go("exam");
  if ($("#chal")) $("#chal").onclick = () => go("chal");
}

/* ---------------- Bonus challenge (for everyone, highlighted on the fast lane) ---------------- */
function chal(m){
  const c = S.mission, C = CHALLENGE[c], u = S.ui;
  m.innerHTML = `<section class="screen ${u.ans != null && u.ans === C.ok ? "celebrate" : ""}">${u.ans != null && u.ans === C.ok ? confetti(16) : ""}
    <div class="card" style="display:grid;gap:14px">
      <div class="row">${thumb(c)}<div><span class="tag">Bonus challenge</span><h2>${esc(C.title)}</h2></div></div>
      <div class="qhead"><p class="stem" id="chq">${esc(C.q)}</p>${sayBtn(C.q)}</div>
      <div class="opts" role="group" aria-labelledby="chq">${C.opts.map((o,i) => `<button class="opt ${u.ans != null ? (i === C.ok ? "right" : i === u.ans ? "wrong" : "") : ""}" data-i="${i}" ${u.ans != null ? "disabled" : ""}><span class="k2">${KEYS[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>
      ${u.ans != null ? `<div class="fb ${u.ans === C.ok ? "ok" : "no"}">${u.ans === C.ok ? "Challenge solved!" : "Tricky one!"}<span>${esc(C.why)}</span></div>
        <button class="btn primary block" id="bk">Back to my road</button>` : ""}
    </div></section>`;
  m.querySelectorAll("[data-i]").forEach(b => b.onclick = () => {
    u.ans = +b.dataset.i; S.chal[c] = true;
    if (u.ans === C.ok){ addStars(2); award("challenge"); addEvidence(c === "FORCE_APP" ? "FORCE_APP" : c, 1); }
    save(); const keep = S.ui; render(); S.ui = keep;
  });
  if ($("#bk")) $("#bk").onclick = () => go("road");
}

/* ---------------- Me: progress the learner can read (driven by the learner model) ---------------- */
function me(m){
  const prof = profileOf(S.prefs);
  const tricky = Object.entries(S.lm.codes);
  m.innerHTML = `<section class="screen">
    <div class="card center" style="display:grid;gap:8px;justify-items:center">
      ${BUDDY("cheer").replace('class="buddy"','class="buddy" style="width:90px;height:90px"')}
      <h2 class="big">${esc(NAME())}</h2>
      <p class="lead">${passedN()} of 7 missions done</p>
    </div>
    <div class="card" style="display:grid;gap:14px"><h3>My force powers</h3>
      ${ORDER.map(c => { const k = S.lm.concepts[c], [w, col] = bandWord(k.m), pct = k.m == null ? 4 : Math.max(6, Math.round(k.m*100));
        return `<div class="meter"><div class="lbl"><span>${esc(CONCEPTS[c].name)}</span><small>${w}</small></div><div class="bar" role="img" aria-label="${esc(CONCEPTS[c].name)}: ${w}"><i style="width:${pct}%;background:${col}"></i></div></div>`; }).join("")}
    </div>
    ${tricky.length ? `<div class="card" style="display:grid;gap:6px"><h3>Tricky ideas</h3>
      ${tricky.map(([code,v]) => `<div class="trick"><span class="pill ${v.status === "fixed" ? "fixed" : "work"}">${v.status === "fixed" ? "Fixed ✓" : "Working on it"}</span><span>${esc(TRICKY[code])}</span></div>`).join("")}</div>` : ""}
    <div class="card" style="display:grid;gap:10px"><h3>How I like to learn</h3>
      <div class="chips">${prof.ranking.slice(0,3).map(x => `<span>${esc(MODS[x].name)}</span>`).join("")}</div>
      <button class="link" id="redo" style="justify-self:start">Change how I like to learn</button></div>
  </section>`;
  $("#redo").onclick = () => { go("pref", {prefIdx:0}); S.ui.redo = true; };
}

/* ---------------- Final Challenge: summative, 10 marks ---------------- */
function exam(m){
  const u = S.ui;
  if (!u.started){
    m.innerHTML = `<section class="screen"><div class="card center" style="display:grid;gap:14px;justify-items:center">
      <div class="bg-butter" style="border-radius:28px;padding:8px 18px">${ART.EXAM.replace("<svg",'<svg class="artbig"')}</div>
      <h2 class="big">The Final Challenge</h2>
      <p class="lead">8 questions · 10 marks. No hints this time, but you can listen to every question. Take your time!</p>
      <button class="btn primary block" id="go">I'm ready</button></div></section>`;
    $("#go").onclick = () => { u.started = true; u.i = 0; u.ans = []; u.k = null; exam(m); };
    return;
  }
  const q = EXAM[u.i];
  if (!u.k) u.k = {picks:[], filled:[], sel:null, checked:false, showAns:false, pick:null};
  const K = u.k;
  let body = "";
  if (q.type === "mcq") body = `<div class="opts" role="group" aria-labelledby="eq">${q.opts.map((o,i) => `<button class="opt" data-e="${i}" aria-pressed="${K.pick===i}"><span class="k2">${KEYS[i]}</span><span>${esc(o)}</span></button>`).join("")}</div>`;
  if (q.type === "mca") body = mcaBody(q, K).replace('aria-labelledby="cq"','aria-labelledby="eq"');
  if (q.type === "frq") body = gapBody(frqParts(q.text), q.bank, K);
  if (q.type === "match") body = gapBody(null, q.bank, K, q.rows);
  const nSlots = q.type === "frq" ? frqParts(q.text).filter(p => p.blank).length : q.type === "match" ? q.rows.length : 0;
  const answered = q.type === "mcq" ? K.pick != null : q.type === "mca" ? K.picks.length > 0 : Array.from({length:nSlots},(_,i) => K.filled[i]).every(Boolean);
  const readText = q.q + " " + (q.opts ? q.opts.join(". ") : q.text ? q.text.replace(/[{}]/g,"") : q.rows.map(r => r[0]).join(". "));
  m.innerHTML = `<section class="screen"><div class="card" style="display:grid;gap:14px">
    <div class="qmeta"><span class="tag">${esc(q.sec)}</span><span class="tag">${u.i+1} / ${EXAM.length}</span></div>
    <div class="dots">${EXAM.map((_,i) => `<i class="${i < u.i ? "done" : i === u.i ? "now" : ""}"></i>`).join("")}</div>
    <div class="qhead"><p class="stem" id="eq">${esc(q.q)}</p>${sayBtn(readText)}</div>
    ${body}
    <div class="row end"><button class="btn primary" id="nx" ${answered ? "" : "disabled"}>${u.i === EXAM.length-1 ? "Finish" : "Next"}</button></div>
  </div></section>`;
  const re = () => { exam(m); wireSay(); };
  if (q.type === "mcq") m.querySelectorAll("[data-e]").forEach(b => b.onclick = () => { K.pick = +b.dataset.e; re(); });
  if (q.type === "mca") m.querySelectorAll("[data-mi]").forEach(b => b.onclick = () => { const i = +b.dataset.mi; K.picks = K.picks.includes(i) ? K.picks.filter(x => x !== i) : [...K.picks, i]; re(); });
  if (nSlots) wireGaps(K, nSlots, re);
  $("#nx").onclick = () => {
    u.ans[u.i] = q.type === "mcq" ? K.pick : q.type === "mca" ? K.picks.slice() : K.filled.slice(0, nSlots);
    if (u.i < EXAM.length-1){ u.i++; u.k = null; re(); window.scrollTo({top:0}); }
    else finishExam(u.ans);
  };
}
function examMarks(q, a){
  if (q.type === "mcq") return a === q.ok ? q.marks : 0;
  if (q.type === "mca") return Math.round(scoreMca(q, a) * q.marks * 2) / 2;
  const ans = q.type === "match" ? q.rows.map(r => r[1]) : frqParts(q.text).filter(p => p.blank).map(p => p.blank);
  return ans.filter((w,i) => a[i] === w).length / ans.length * q.marks;
}
function finishExam(answers){
  const marks = EXAM.map((q,i) => examMarks(q, answers[i]));
  const score = Math.round(marks.reduce((a,b) => a+b, 0) * 2) / 2;
  const byC = {};
  EXAM.forEach((q,i) => q.concepts.forEach(c => { byC[c] = byC[c] || [0,0]; byC[c][0] += marks[i]; byC[c][1] += q.marks; addEvidence(c, marks[i] / q.marks); }));
  const review = Object.entries(byC).filter(([,v]) => v[0]/v[1] < .5).map(([c]) => c);
  review.forEach(c => S.lm.concepts[c].revisit = true);           // adapt: weak concepts reopen as quick revisits
  const stars = score >= 9 ? 5 : score >= 8 ? 4 : score >= 6 ? 3 : 2;
  addStars(stars);
  const newB = score >= 8 ? award("master") : null;
  S.exam = {score, marks, answers, review, stars, best: Math.max(score, (S.exam||{}).best || 0)};
  go("examdone", {examBadge: newB ? "master" : null});
}
function examdone(m){
  const E = S.exam, pct = E.score / EXAM_TOTAL, C = 2*Math.PI*62;
  const title = E.score >= 8 ? "Force Master!" : E.score >= 6 ? "Force Explorer!" : "Force Learner, on the way up!";
  const strong = ORDER.filter(c => !E.review.includes(c) && EXAM.some(q => q.concepts.includes(c)));
  m.innerHTML = `<section class="screen celebrate">${confetti(E.score >= 6 ? 30 : 12)}
    <div class="card center" style="display:grid;gap:14px;justify-items:center">
      <svg class="ring" viewBox="0 0 150 150" role="img" aria-label="${fmtScore(E.score)} out of ${EXAM_TOTAL}"><circle class="bgc" cx="75" cy="75" r="62"/><circle class="fgc" cx="75" cy="75" r="62" stroke-dasharray="${(C*pct).toFixed(1)} ${C.toFixed(1)}"/><text x="75" y="82">${fmtScore(E.score)}</text><text class="s" x="75" y="104">out of ${EXAM_TOTAL}</text></svg>
      <h2 class="big">${title}</h2>
      <div class="cert"><span class="tag" style="color:var(--outline)">Certificate</span><h3>${esc(NAME())}</h3>
        <p>completed the Force &amp; Friction quest</p>${ART.FORCE_06.replace("<svg",'<svg style="width:140px;height:auto"')}<p>All 7 missions complete</p></div>
      ${strong.length ? `<p><b>Strong in:</b> ${strong.map(c => esc(CONCEPTS[c].name)).join(", ")}</p>` : ""}
      ${E.review.length ? `<p><b>Let's revisit:</b> ${E.review.map(c => esc(CONCEPTS[c].name)).join(", ")}. They're marked on your road.</p>` : `<p>You can try the bonus challenges on your road any time.</p>`}
      <button class="btn primary block" id="rd">Back to my road</button>
      <button class="link" id="rv">See my answers</button>
      <div id="rvBox" class="review" hidden style="width:100%;text-align:left"></div>
    </div></section>`;
  $("#rd").onclick = () => go("road");
  $("#rv").onclick = () => {
    const box = $("#rvBox"); box.hidden = !box.hidden; if (box.innerHTML) return;
    box.innerHTML = EXAM.map((q,i) => {
      const right = q.type === "mcq" ? q.opts[q.ok] : q.type === "mca" ? q.ok.map(j => q.opts[j]).join(", ") : q.type === "match" ? q.rows.map(r => `${r[0]} → ${r[1]}`).join("; ") : q.text.replace(/\{([^}]+)\}/g, "[$1]");
      return `<div class="ri"><b>${i+1}. ${esc(q.q)}</b><br><span class="${E.marks[i] === q.marks ? "tick" : "muted"}">${fmtScore(E.marks[i])} / ${q.marks}</span><br><span class="note">Answer: ${esc(right)}</span></div>`; }).join("");
  };
}

/* ---------------- Boot ---------------- */
render();
