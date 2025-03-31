/*
    FuckItJS
    Copyright 2012, Matt Diamond

    Note: This is ALPHA software and may result in irreversible brain damage. All vibe coded by Andrew and chatgpt, use at your own risk.
*/

const fs = require('fs');
const path = require('path');
const vm = require('vm');

global._OriginalFuckIt = global.FuckIt;

let currentScriptPath = process.argv[1];
let currentScript = '';
let retryCount = 0;

// Load and run synchronously so the script is live before errors can occur
try {
  const absolutePath = path.resolve(currentScriptPath);
  currentScript = fs.readFileSync(absolutePath, 'utf8');

  const script = new vm.Script(currentScript, { filename: currentScriptPath });
  script.runInContext(vm.createContext(global));
} catch (err) {
  setImmediate(() => { throw err });
}

process.on('uncaughtException', (err) => {
  retryCount++;

  console.error(`\n🧨 Script blew up (#${retryCount})`);

  if (!currentScript) {
    console.error("🤷‍♂️ No script is currently loaded.");
    process.exit(1);
  }

  const lines = currentScript.split('\n');
  const match = err.stack && err.stack.match(/:(\d+):\d+/);
  let lineNumber = match ? parseInt(match[1], 10) : null;

  if (!lineNumber || isNaN(lineNumber)) {
    console.warn(`📉 Couldn't determine the line number. Rage quitting.`);
    console.error(err.stack || err);
    process.exit(1);
  }

  // Clamp the line number to within bounds
  const clampedLine = Math.max(1, Math.min(lineNumber, lines.length));

  console.warn(`🔪 Removing line ${clampedLine}: "${lines[clampedLine - 1].trim()}"`);
  lines.splice(clampedLine - 1, 1);
  currentScript = lines.join('\n');

  if (!currentScript.trim()) {
    console.error("💀 Script has been entirely nuked. There's nothing left to run.");
    process.exit(1);
  }

  try {
    const script = new vm.Script(currentScript, { filename: currentScriptPath });
    script.runInContext(vm.createContext(global));
  } catch (newErr) {
    setImmediate(() => { throw newErr });
  }
});

const FuckIt = {
  noConflict: () => {
    global.FuckIt = global._OriginalFuckIt;
    return FuckIt;
  },
  moreConflict: () => {
    for (const prop in global) {
      if (prop === "process") continue;
      global[prop] = FuckIt;
    }
  }
};

global.FuckIt = FuckIt;
module.exports = FuckIt;
