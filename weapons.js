const txtToJson = require("txt-file-to-json");
var url = new URL('https://wf.snekw.com/');
var searchParams = new URLSearchParams({
    action: 'scribunto-console',
    format: 'json',
    title: 'Module:Weapons',
    // Alternatively, run "return require('Module:LuaSerializer')._serialize('Weapons/data')"
    // If you want to convert Lua tables to native JSON, run "return require('Module:JSON').stringify(require('Module:Weapons/data'))"
    content: "return require('Module:Weapons/data')",
    question: '=p',
    clear: 1
});
fetch('https://wf.snekw.com/weapons-wiki')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    writetofile(data); // This will log the response data to the console
    // You can handle the response data further as needed
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

function writetofile(weapondata) {
    // console.log (weapondata);
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    let r1 = readline.question('What is the weapon name? ', name => {
        //
        
        // if (weapon) {
            // console.log(weapon);
            // let wdata = JSON.stringify(weapon);
            // console.log(wdata);
            var fs = require('fs');
            fs.writeFile('weapon.json', JSON.stringify(weapondata), function (err) {
                if (err) throw err;
                console.log('Saved!');
            });
        // } 
        // else {
        //     console.log('Weapon not found');
        // }
        readline.close();

    });
}