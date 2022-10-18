## Collections

A collection is the parent folder of a [generator](documentation/generator/introduction). A collection represents a "collection" of generators. It is a 
construct to group and separate similar generators. One of the main reasons for a collection is that it also has a
config where [variables](documentation/generator/config/variables), [functions](documentation/generator/config/functions), [filenames](documentation/generator/config/filenames) and a [readme.md](documentation/generator/config/readme) can be set. 

For example, if you had a [function](documentation/generator/config/functions) that was needed by two generators you could group the two generators under one "collection"
and place the function in the collection's config instead of placing the same function once in generator 1 and once in generator 2.

Similar approach can be taken with the [filenames](documentation/generator/config/filenames) property. If a bunch of generators follow the same filename naming 
strategy you could set that strategy at the collection config level and place the generators in the collection. Now
all the generators within that collection will follow the same naming strategy without having to repeat it for every single generator.

Stackjoy was designed with a [hierarchy pattern](documentation/structure/hierarchy) in mind where the generator is the last leaf in a tree like structure 
and will look upwards for needed [inputs](documentation/generator/inputs), [variables](documentation/generator/config/variables), [functions](documentation/generator/config/functions), [filenames](documentation/generator/config/filenames) in the collection if it does not find them
within itself. Please see here for more info on how the [hierarchy lookup works](documentation/structure/hierarchy).


