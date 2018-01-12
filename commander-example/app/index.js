var program = require('commander');

program
    .version('Hultsfred 2020')
    .option('-m, --metal-act [artist]', 'Add metal act [artist]')
    .option('-s, --synth-act [artist]', 'Add synth act [artist]')
    .option('-r, --rock-act [artist]', 'Add rock-act  [artist]')
    .option('-i, --indie-act [artist]', 'Add indie-act [artist]')
    .option('-h, --headline-act [artist]', 'Add headline-act [artist] (default is PJ Harvey)', 'PJ Harvey')
    .parse(process.argv);

console.log('You have booked the following acts to Hultsfred 2020:');

if (program.metalAct) console.log('Metal: %s', program.metalAct);
if (program.synthAct) console.log('Synth: %s', program.synthAct);
if (program.rockAct) console.log('Rock: %s' , program.rockAct);
if (program.indieAct) console.log('Indie: %s', program.indieAct);

console.log('Headline: %s', program.headlineAct);