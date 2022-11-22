## Stacks with Starter Code

Stacks that have starter code in them are commonly known as starter stacks and are denoted in the list with an icon next to their name.

You can add a public git repository to your stack to be your starter code.

When a user installs the stack, the git repository will be copied into the [codebase](/documentation/structure/codebase) that is associated with your workspace.

This way you can bundle project code and generators together. This is great for projects that are used as starters for projects. For example, you can have an Angular client codebase that you use to start many projects. Here you can bundle that git repository with Angular generators and next time you
start a new Angular client project you can just install:

```
sj install my-angular-starter
```

Stackjoy will copy the code from your public repository and add the generators to a Stackjoy workspace in one shot allowing you to get going on your new project quickly.

You can add "Post Install Instructions" to your starter stack. Once a user installs a starter stack the post install instructions will be shown to the user. These instructions inform the user what they should do next with the installed code. 





