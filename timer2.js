// The user can press b and it should beep right away
// The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// The user can use ctrl + c to exit the program, at which point the program should say "Thanks for using me, ciao!" before terminating
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');
//  these  two lines of setup work.
stdin.on('data', (key) => {
  process.stdout.write(key);
  // \u0003 maps to ctrl+c input
  if (key === 'b') { // if 'b' pressed then this will execute 'beep'
    process.stdout.write('\x07');
  }
  if (Number(key) > 0 && Number(key) !== NaN) {
    process.stdout.write('setting timer for ' + key + ' seconds' + '\n');
    setTimeout(() => {
      process.stdout.write('\x07')
    }, Number(key) * 1000);
  } 
   
  if (key === '\u0003') { // if ctrl+c pressed then this will execute
   
    console.log('Thanks for using me, ciao!');
    process.exit();
  }

});
  console.log('after callback');