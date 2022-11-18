## Filenames

Filenames property is a rule that can be applied to all the template files of the generator.

If the **filenames** property is left blank then all the generated files will have the same
name as the template files.

You can change the template filenames by changing the filenames property however. You can use [expressions](documentation/blu-language/expressions) ,
[functions](documentation/generator-config/functions)  and constants to change the file names of the generated files. 

> Note: This property applies to ALL the template files of the generator. Currently, there is no 
> way to apply different filename rules on individual files.
> 

<img class="sj-image" src="/assets/md/images/generator-config/config-filenames.png" alt="Generator Config Filenames" width="100%"/>

Some default inputs provided by Stackjoy to help with changing the filenames are:

| Template File            | Expression               | Generated Value|
|--------------------------|--------------------------|----|
| ... file name:           | ``` ^^filename^^    ```  |   component.html|
| ... base file name:      | ``` ^^basename^^  ```    |     component| 
| ... file name extension: | ``` ^^extname^^    ```   |   html |


---
### Some examples of creating different filenames:

Let's assume that the given name of our generator is  ```^^name^^  = my-form```

| Filenames Property | Generated Filename |
|--------------------|--------------------|
| (blank) | component.html |
| my-file.md| my-file.md |
|  ```^^name^^.^^filename^^```  | my-form.component.html |
|  ```^^name^^.^^basename^^.^^extname^^``` | my-form.component.html |
|  ```^^name^^.^^extname^^```  | my-form.html |
|  ```^^basename^^.php```  | component.php |
|  ```^^name^^.^^basename^^.php``` | my-form.component.php |
|  ```^^myFunction()^^.^^name^^.^^extname^^``` | 1666045768986.my-form.html |

Where ```myFunction()``` is a custom function that looks like this:

```
    () => {
        return (new Date()).getTime();
    }
```

Generators have a hierarchical lookup order when trying to find the filenames property rule. You can read more about the [hierarchy order here](documentation/structure/hierarchy).
