function sleep(msec) {
   return new Promise(function(resolve) {
 
      setTimeout(function() {resolve()}, msec);
 
   })
}

async function start() {
 document.open();
 //任意のコード document.write("<big><big><big><big>やりますねぇ！");
 document.close();
  //スリープ処理 await sleep(5000);
}
 
start();