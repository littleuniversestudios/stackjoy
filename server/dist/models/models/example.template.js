"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exampleTemplateText = void 0;
exports.exampleTemplateText = `
Hello Stackjoy User! 

> Stackjoy uses its own custom BLU (short for blueprint) scripting 
language that makes your generators smart and powerful. It is a limited 
language that is still evolving as the project grows. 


> Anything inside ^^"two double caret characters"^^ is an expression 
  that will be evaluated by the system to determine its value.

  ### Example: The name of this generator is: ^^name^^.

  'name' is the most common input available in all generators. It is
   the name that you pass to the generator at generation time.


> BLU language comes with other inputs by default (you can always add you own too)

  Default inputs:

  - Name given to this generator:                             ^^name^^
  - File name of this generator:                              ^^filename^^
  - Base File name of this generator:                         ^^basename^^
  - File name extension of this generator:                    ^^extname^^
  - Relative Path where this generator will be gererated:     ^^destination^^
  - File Path where this generator will be gererated:         ^^filePath^^
  - Absolute path to your codebase associated 
    with this workspace:                                      ^^CODEBASE_PATH^^
  
* *    Hint:    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*                                                                         *
*   You can quickly bring up all availble inputs by pressing ctrl+space   *
*   to get all code hints (cursor/focus must is in the file otherwise     *
*   you will launch the console instead)                                  *
*                                                                         *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *


> BLU language also comes with executable functions.

  ### Example: ^^name^^ [to camel case] = ^^camelCase(name)^^


> Often times we use a 'transformation' instead of a function call. This is
  just syntactic sugar to make your generators more readable.

  ### Example: ^^camelCase(name)^^ [written as a transformation] = ^^name:camelCase^^

  Using the 'transformation' syntax the value before the ':' is passed as input
  to the function after the ':'. This has limitations as obviously you can only 
  pass one parameter to the function. 

  The value before the ':' does not have to be variable such as 'name'. It can
  also be any other hard coded value.

  ### Example: ^^"this is my string":camelCase^^



* *    Hint:    * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
*                                                                             *
*   Strings used within expression must be stricly wrapped by DOUBLE QUOTES   *
*   "my string " is a valid string, 'my string' is NOT a valid string         *
*                                                                             *
* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *



  ### Examples of other transformations avaiable by deafult:

  Starting Value:    ^^name^^
  Constant Case:     ^^name:constantCase^^
  Dot Case:          ^^name:dotCase^^
  Param Case:        ^^name:paramCase^^
  Pascal Case:       ^^name:pascalCase^^
  Camel Case:        ^^name:camelCase^^
  Path Case:         ^^name:pathCase^^
  Sentence Case:     ^^name:sentenceCase^^
  Snake Case:        ^^name:snakeCase^^
  Title Case:        ^^name:titleCase^^
  

> There are other helper functions to help with determining paths to other files:

  Join path (strings only):     ^^join("/some/path", "some/other/path")^^
  Join path (string & input):   ^^join("/my/root/path",destination)^^
  Join path (inputs only):      ^^join(CODEBASE_PATH,destination)^^

  Relative Paths:               ^^relativeTo("/start/folder","/start/folder/end/folder")^^
  Relative To Codebase          ^^relativeToCodebase(destination)^^

  
> BLU Language also has syntax for adding logic. For that we utilize a "BLU Block"

  ### Example:  [blu if(5>2)]This will be visible[/blu]
                [blu if(5<2)]This is not visible[/blu]

  ### Full "If / Else if / Else" example
    [blu if(strongPassword == "#SDFG34vdf$as&faw5n3**s")]This is a strong password.[/blu]
    [blu if(strongPassword == "as&faw5nfe")]This is an ok password[/blu]
    [blu else]"^^strongPassword^^" is not a strong password. Nice try 1999.[/blu]

  ### Example of Switch Syntax

  [blu switch(strongPassword)]
    [blu switchCase="#SDFG34vdf$as&faw5n3**s"]This is a strong password.[/blu]
    [blu switchCase="as&faw5nfe"]This is an ok password[/blu]
    [blu switchCase="password"]The 90s called, they want their password back[/blu]
    [blu switchDefault]This will be shown if none of the above cases are triggered[/blu]
  [/blu]

  ### Example of itertion
  
  You can iterate over an array that is passed as an input to the generator:  
  
  [blu forEach(color in colors)]
    Color ^^index^^: ^^color^^
  [/blu]

  My english teacher would fail me for spelling colour as color.
  
`;
//# sourceMappingURL=example.template.js.map