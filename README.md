# EnhanceJSONStringify
Enhance JSON Stringify function to be able to print cyclic dependency object

Features:

* Stingify the object that has cyclic dependency
* Replace cyclic dependency with custom string

## Function call

```
enhanceStringify(ObjectToStringify[, formatOption [, replaceString ]])

```

Default format message is '\t' and replace circular dependency object is 'CIRCULAR_DEPENDECY_OBJECT' string, but you can customize by yourself.
