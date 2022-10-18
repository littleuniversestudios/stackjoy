## Hierarchy Order

Stackjoy was designed with a hierarchy pattern in mind where the generator is the last leaf in a tree like structure and 
the workspace is top most parent. A generator will traverse upwards looking for needed [inputs](documentation/generator/inputs), [variables](documentation/generator/config/variables), [functions](documentation/generator/config/functions), [filenames](documentation/generator/config/filenames) until it finds what it needs and will throw an error if it does not find what it's looking for.

Here's what the hierarchy looks like:

```
  |- workspace [top most level]
     |- collection
        |- generator [lowest level]

```

> The order of lookup will always flow upwards from generator to workspace. 
> i.e. generator > collection > workspace

Each "node" (workspace, collection, generator) in the hierarchy has its own config. This allows you to set [inputs](documentation/generator/inputs), [variables](documentation/generator/config/variables), [functions](documentation/generator/config/functions), [filenames](documentation/generator/config/filenames) at different levels so as not to repeat yourself.

> The order of lookup will stop at the level it finds what it needs and will NOT continue to go any further up. Take a look at [Generator Context](documentation/generator/config/context) section to see what your generator sees at run time.  

For example, if you had a [function](documentation/generator/config/functions) that was needed by two generators you could group the two generators under one "collection" and place the function in the collection's config instead of placing the same function once in generator 1 and once in generator 2. You could even go up a level and set the function at the workspace level. In that case ALL the 
collections, and in turn ALL the generators, would now have access to that function.

Similar approach can be taken with the [filenames](documentation/generator/config/filenames) property. If a bunch of generators follow the same filename naming 
strategy you could set that strategy at the collection config level and place the generators in the collection. Now
all the generators within that collection will follow the same naming strategy without having to repeat it for every single generator. Placing that same naming strategy at the workspace level would guarantee that every "node" in the tree structure (collections, generators) would follow the same strategy.

You can always access your [Workspace Structure here](/workspace/structure).

Keep in mind that the tree hierarchy is different with regards to generators that come from an installed [stack](documentation/introduction/stacks). Here's what the hierarchy of a generator from a stack looks like:

```
  |- workspace [top most level]
     |- collection1
        |- generator1
     |- stack
        |- collection2
           |-generator2
        
```

Generator2's order of lookup will look like this:

> generator2 > collection2 > stack > workspace

One final scenario is with [chained generators](documentation/generator/config/chains). You can pass/set inputs on a chained generator in the chain list. 


```
  |- workspace [top most level]
     |- collection
        |- generator1
        |- chain inputs
           |- generator2
```

In this case generator2's order of lookup will look like this:

> generator2 > chain-inputs > collection > workspace

This can sometimes be misleading since the generators may come from different collections. Each generator will follow the hierarchy order lookup based on where
that specific generator is coming from. 

For example, if you had a generator1 > generator2 chain but they came from different collections it would look something like this:

```
  |- workspace 
     |- collection1
        |- generator1
     |- collection2
        |- generator2
```

In this case generator1's order of lookup will look like this:

> generator1  > collection1 > workspace

And  generator2's order of lookup will look like this:

> generator2 > chain-inputs > collection2 > workspace
