## Stackjoy Stacks

Stacks are similar to [Workspaces](documentation/structure/workspaces) but have some differences:

- Stacks are designed to be **public**. This means that they are stored in the [Stackjoy Community](/workspace/generators/community) for the general public to use.
- Stacks are meant to be installed **into** Workspaces.
- Stacks can be stacked. This means that one stack can have other stacks within it.
- Stacks can contain [generators](documentation/generator/introduction), data models and other stacks
- Stacks can also contain a link to a git repository that contains started code for a project
- Stacks are installed into a Workspace to bring in new [generators](documentation/generator/introduction) and data models

Where Workspaces are meant to be used directly on your codebase and shared with your teammates,
Stacks are meant to be used as starters or additions that can be installed into a Workspace.

In summary, Stacks are publicly accessible collections of generators designed to get your project going quickly

### Special Starter Stacks

> A stack with a link to a public git repository containing starter code is called a starter stack. When installed in an empty folder it will:
> 1) Clone the starter code repository into the folder
> 2) Create a new Workspace that can be used by all team members of the project
> 3) Add all generators and data models from the stack into the new Workspace
