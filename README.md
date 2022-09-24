# Stackjoy

#### To Install

>npm install stackjoy -g

#### To Run
Open a terminal at the root folder of your codebase. then type in:

>sj

#### Watch the demo

[![Stackjoy Demo](https://img.youtube.com/vi/Sb5d_kkQ3Aw/0.jpg)](https://www.youtube.com/watch?v=Sb5d_kkQ3Aw)


# Stackjoy

### Build Software Faster

Stackjoy is a software development tool to speed up your development process. It works with 
your current codebase or if you're staring a new one. It is based on generators (or simply 
templates) that can be created, edited, updated and finally applied to your codebase. The 
generators (templates) can be chained together to form more complex templates. They can 
receive inputs (any kind of data) to create the desired code. It works with any software 
language so you can use it with any part of your tech stack. All of this can be shared with
your teammates to promote consistency, collaboration, code quality and much more.


### For All Developers

Stackjoy works with any language, any framework, any library. You don't even need to be 
writing software to use it. You can use it to write a book, or customized emails. It 
generates "text" in any readable format. Stackjoy has its own scripting language to 
accomplish this. BLU (short for Blueprint) Language can be sprinkled into any file quickly
turning it into a generator that can then be (re)used to create the desired code.

### Development Tool

Stackjoy is not a library or framework, or low/no code prototyping tool. You can use it as 
little or as much as you'd like. You can use with your current codebase or use it to start a
new project. It is meant to be shared with team members or with the public. Think of it like
a hammer. The hammer does not know what you're building. It's there when you need it. It sits
idly when you don't. It works across a wide range of projects, everyone has a use for it, 
and it provides tremendous value for what it does.

### Stateless

Stackjoy does not know the "state" of your project/codebase. That is partially why it works
with any software language. It is good at creating (generating) desired text that can be 
stored as file(s). While it can update your files, it really shines when creating new files. 
That is why it does not need to understand how your project works, it just needs to know
what to generate and where to store it.

## Why Use Stackjoy?

### Speed, speeed, speeeed

Get going quickly, keep moving swiftly. 
Use console like commands to quickly generate different components (parts of the software) 
and place them directly into your codebase.

### Language Agnostic

Stackjoy will work with any programming language or framework. It is designed for every 
developer in mind. If some piece of code can be generated and needs to be repeated, 
Stackjoy will help you do it.

### New **OR** Existing Codebase

Whether you have an existing project or are starting a new one you can use Stackjoy to
help speed up your software development. Use one of the stacks with starter code to get
going on a new project or simply install just the needed templates to speed up development
of your current project.

### Great for Onboarding

New Developers to the project can find comfort in knowing that they can generate critical
parts of the software system by running simple commands that were authored and approved
by current team members. This allows them to start contributing faster, be more confident
in their contributions, and keep the consistency that is expected and set by the current team.

### Share across the project or team

Easily share your templates with other members of the team. Update and modify current 
generators and push them out to your team members. Once a team member logs into their 
Stackjoy platform they can start using every template shared by the team.

### Consistent Code

Different developers can generate same types of components (or any parts of software) from
different data models keeping the overall codebase consistent making future upgrades and 
maintenance much easier to deal with. Developers can jump form one part of the application
to another knowing that they will be familiar with different parts of the application in
turn speeding up the overall development. 

### Stacks

Store templates, data models and a starter code repository in a stack and use it for your
next project or share it with others. Stack other stacks into your stack and create a 
super stack. 

### Portability

Starting a new project and already have a stackjoy workspace with generators from an older
project? Duplicate your current workspace and point it to your new codebase and you 
are ready to re-use your generators in your new project.

### Your Files are **THE** Templates

No need to generate metadata describing what your template does. A file from your 
application/code (with its file extension) **IS** the template. 

### Quick and Easy Template Creation

Easily turn any project file into a generator directly form your codebase. Once created, 
adjust it so that it can be generated using other input data to quickly replicate 
its contents.



## Stackjoy Workspaces

- A stackjoy workspace stores the generators for your specific codebase.
- It is associated with a codebase by assigning a path to the root of your codebase. This path can be changed at any point.
- Each one of your codebases can have its own workspace.
- A Workspace can be shared with other members of your project.


### The FREE WORKSPACE

- Can be used without an account (no login required). 
- Majority of the functionality is available on the FREE WORKSPACE but for complete functionality a stackjoy account is required.## Stackjoy Stacks

## Stackjoy Stacks

Stacks are similar to Workspaces but have some differences:

- Stacks are designed to be **public**. This means that they are stored in the Stackjoy Community for the general public to consume.
- Stacks are meant to be installed **into** Workspaces.
- Stacks can be stacked. This means that one stack can have other stacks within it.
- Stacks can contain generators, data models and other stacks
- Stacks can also contain a link to a git repository that contains started code for a project 
- Stacks are installed into a Workspace to bring in new generators and data models

Where Workspaces are meant to be used directly on your codebase and shared with your teammates, 
Stacks are meant to be used as starters or additions that can be installed into a Workspace.

> A stack that has a link to a git repository containing starter code, plus contains generators and some data models
> can be installed into an empty folder. As a result, Stackjoy will:
> 1) Clone the starter code repository into the folder
> 2) Create a new Workspace that can be used by all team members of the project
> 3) Add all generators and data models from the stack into the new Workspace

In summary, Stacks are publicly accessible collections of generators designed to get your project going quickly

## BLU Language

Stackjoy has its own scripting language BLU (short for Blueprint). This Language can be
sprinkled into any file, quickly turning it into a generator. This generator can then be
(re)used to generate the desired code.

The main components of the BLU language are:
- Expressions: they evaluate inputs, variables, constants into text.
- Inputs: any type of value (simple or complex) passed into a generator for evaluation
- Functions: Lambda functions for more complex evaluation of inputs
- Transformations: Special type of syntax that passes and input into a function
- Logic: If/Else If/ Else statements
- Iterators: "For Each" syntax to iterate over arrays or lists
- Switch statements: "switch(some_value)" syntax for multi option statements

The language is somewhat unique in its syntax so that it does not collide with anything 
else within the code that is being generated. This was done on purpose because stackjoy 
works with any language so it was imperative that there were no collisions between the 
BLU Language and the language being generated. 

## BLU Language Expressions

Anything inside two double caret characters ```^^ ^^ ``` is an **expression** that 
will be evaluated by the system to determine its value.

Example: 

  > Expression:  ```^^name^^``` evaluates to ```stackjoy```
  
You can use many inputs: variables, strings (within double quotes " "), numbers, null, boolean 
as valid inputs for expressions. 

Examples:

  > Expression:  ```^^"String Text Input"^^``` evaluates to ```String Text Input```
  
  > Expression:  ```^^55^^``` evaluates to ``55```
  
  > Expression:  ```^^null^^``` evaluates to ```null```
  
  > Expression:  ```^^true^^``` evaluates to ```true```
  
  > Expression:  ```^^false^^``` evaluates to ```false```
 
# BLU Language Inputs

An input is any value that is passed to the generator. It can be a variable, string 
(within double quotes " "), numbers, null, boolean

BLU language comes with some inputs by default; and you can always add you own too.

  Default inputs:

  - Name given to this generator:  
  ```  ^^name^^    =   stackjoy```
  

  - File name of this generator:  
  ``` ^^filename^^    =   3.Inputs.md```


  - Base File name of this generator:  
  ``` ^^basename^^    =   3.Inputs```
  

  - File name extension of this generator:  
  ``` ^^extname^^    =   md```
  

  - Relative Path where this generator will be gererated:  
  ``` ^^destination^^    =   /codebase_root/tmp/stackjoy```


  - File Path where this generator will be gererated:  
  ``` ^^filePath^^    =   /codebase_root/tmp/stackjoy/2.BLU_Language/3.Inputs.md```


  - Absolute path to your codebase associated with this workspace:  
  ``` ^^CODEBASE_PATH^^    =   /codebase_root```
  

Hint:

>   You can quickly bring up all available inputs by pressing ctrl+space   
>   to get all code hints (cursor/focus must is in the file otherwise     
>   you will launch the console instead)                                  

## BLU Language Functions

BLU language also comes with executable functions.

Example:
>  ^^titleCase(name)^^  = Stackjoy

There are other helper functions to help with determining paths to other files:

Examples:

  > Join two (..or more paths, using paths as string parameters ):
  >
  >  ^^join("/some/path", "some/other/path")^^  = /some/path/some/other/path
  
  
  > Join two paths (using a string & input parameter):
  >
  > ^^join("/my/root/path",destination)^^ = /my/root/path/codebase_root/tmp/stackjoy
  
  > Join two path (using only inputs as parameters):
  >
  > ^^join(CODEBASE_PATH,destination)^^  = /codebase_root/codebase_root/tmp/stackjoy

  > Get a Relative Path (from starting folder to end folder):
  >
  >^^relativeTo("/start/folder","/start/folder/end/folder")^^  = end/folder
  
  > Get a Relative path To Codebase Root Folder
  >
  >  ^^relativeToCodebase(destination)^^  = ../..

Relative to Codebase can also be written as:

  >  ^^relativeTo(destination,CODEBASE_PATH)^^  = ../..

## BLU Language Transformation

Often times we use a 'transformation' instead of a function call. This is 
just syntactic sugar instead of using the function syntax to make your 
generators more readable.

Example: 
 > ^^titleCase(name)^^  written as a transformation is  ^^name:titleCase^^ 

Using the 'transformation' syntax the value before the ':' is passed as input
to the function after the ':'. This has limitations as you can only 
pass one parameter to the function. 

The value before the ':' does not have to be variable such as 'name'. It can
also be any other hard coded value.

Example:   
>  ^^"this is my string":camelCase^^  =  thisIsMyString

Hint:

>   Strings used within expression must be strictly wrapped by DOUBLE QUOTES   
>   "my string " is a valid string, 'my string' is NOT a valid string         
                                                                             

Examples of other transformations available by default:


> Constant Case:     ^^"this is my string:constantCase"^^  = THIS_IS_MY_STRING
  
> Dot Case:          ^^"this is my string:dotCase"^^       = this.is.my.string
  
>  Param Case:        ^^"this is my string:paramCase"^^     = this-is-my-string
  
>  Pascal Case:       ^^"this is my string:pascalCase"^^    = ThisIsMyString
  
>  Camel Case:        ^^"this is my string:camelCase"^^     = thisIsMyString
  
>  Path Case:         ^^"this is my string:pathCase"^^      = this/is/my/string
  
>  Sentence Case:     ^^"this is my string:sentenceCase"^^  = this is my string
  
>  Snake Case:        ^^"this is my string:snakeCase"^^     = this_is_my_string
  
>  Title Case:        ^^"this is my string:titleCase"^^     = This Is My String

## BLU Language Logic

BLU Language also has syntax for adding logic. For that we utilize a "BLU Block"

Example:  
``` 
    [blu if(5>2)]  This will be visible [/blu]  
    [blu if(5<2)]  This is not visible  [/blu]
 ```

Will result in:

```
This will be visible  
```

Full "If / Else if / Else" statements are supported as long as each if/else/elseif block 
comes right after the previous.

Example:
```  
    Your password is: "^^strongPassword^^"
    [blu if(strongPassword == "#SDFG34vdf$as&faw5n3**s")]This is a strong password.[/blu]
    [blu if(strongPassword == "as&faw5nfe")]This is an ok password[/blu]
    [blu else]"^^strongPassword^^" is not a strong password. Nice try 1999.[/blu]
```

Will result in:
```
Your password is: "password"


"password" is not a strong password. Nice try 1999.
```

## BLU Language Iterators

  You can iterate over an array that is passed as an input to the generator:  

Example:
``` 
  Input: colors = [^^colors^^];
  
  List of Colors:

  [blu forEach(color in colors)]
    Color [^^index^^] = ^^color^^
  [/blu]
```

Will result in:
```
  Input: colors = [yellow,blue,green];
  
  List of Colors:

  Color [0] = yellow
  Color [1] = blue
  Color [2] = green
  
```

# BLU Language Switch

The switch statement is used to perform different actions based on different conditions.

Example:
```
strongPassword = "^^strongPassword^^"
[blu switch(strongPassword)]
    [blu switchCase="#SDFG34vdf$as&faw5n3**s"] This is a strong password. [/blu]
    [blu switchCase="as&faw5nfe"] This is an ok password [/blu]
    [blu switchCase="password"] The 90s called, they want their password back [/blu]
    [blu switchDefault] This will be shown if none of the above cases are triggered [/blu]
[/blu]
 ```

Will result in:

```
strongPassword = "password"

    
    The 90s called, they want their password back
```
