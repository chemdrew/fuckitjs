# FuckItNode

### JavaScript Runtime Error Steamroller (Now for Node.js)

**Forked from the legendary [FuckItJS](https://github.com/mattdiamond/fuckitjs) by Matt Diamond.**  
This version brings all the chaotic energy of the original browser tool to your backend scripts.  
Now you can steamroll your server-side JS like it’s the early 2000s and nothing matters.

> ⚠️ This project was vibe-coded with maximum confidence and minimum planning. Use at your own peril. Or don't. We honestly don't care.

## Technology

Through a process known as *Try-It-Explode-It-Nuke-It-And-Retry*, FuckItNode repeatedly attempts to execute your horrific script, slicing out any line that dares throw a runtime error. If a syntax error gets in the way? We steamroll from the bottom of the file up until something vaguely resembling code survives.

Unlike the original, we don’t rely on jQuery, `onerror`, or the browser. This one’s pure Node.js, powered by `vm.Script`, `uncaughtException`, and sheer nihilism.

## Usage

```bash
npm install phuckit-node
# npm has a bad word filter 🙃
```

Just require it using Node's -r flag so it wraps your disaster before it can scream.

```bash
node -r phuckit-node ./your-shitty-script.js
```

Or require it in any file
```js
require('phuckit-node')

// your shitty code
```

### Runtime Compatibility
Node.js 16+. Possibly earlier. Possibly never tested.

Works best on scripts that:
- Were written quickly
- Were never reviewed
- Should never have worked in the first place

### Credit
Massive praise and full credit to Matt Diamond, who birthed this masterpiece of controlled failure known as FuckItJS back in 2012.
This Node version is a spiritual sequel and unholy homage.

### Support
If you encounter issues, have questions, or just want to scream into the void, you can reach out via:

- Email: `404@chemdrew.com` (all messages automatically routed to `/dev/null`)
- GitHub Issues: Sure, open one. Why not.
- Carrier pigeon: Might get a faster reply.
- Yelling into the night sky: Surprisingly therapeutic.

All support requests are carefully reviewed, considered, and then ignored with professional-grade indifference. We guarantee your message will be lost, misinterpreted, or flagged as spam by an AI trained on sarcasm.

For personal growth, emotional support, or debugging advice: try meditation, or just delete your code. It’s what we do.

### LICENSE
Copyright (C) 2012, Matt Diamond

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, pulverize, distribute, synergize, compost, defenestrate, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

If the Author of the Software (the "Author") needs a place to crash and you have a sofa available, you should maybe give the Author a break and let him sleep on your couch.

If you are caught in a dire situation wherein you only have enough time to save one person out of a group, and the Author is a member of that group, you must save the Author.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO BLAH BLAH BLAH ISN'T IT FUNNY HOW UPPER-CASE MAKES IT SOUND LIKE THE LICENSE IS ANGRY AND SHOUTING AT YOU.