# BLU Language

BLU (short for blueprints) language is a scripting language specifically created for Stackjoy. It can be added to any file to turn it into a template and tell stackjoy how to then render it to a new file. 

> Any file + BLU language = Stackjoy Template

For example a javascript file:

```js
const myName = 'My name is Will';
```

Can be simply turned into a template:

```js
const myName = 'My name is ^^name^^';
```

Then when some input is applied such as:

```json
{
  "name": "Fred"
}
```

The output then becomes:

```js
const myName = 'My name is Fred';
```

> Template + Input = Output
