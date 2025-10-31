/*
Javascript execution context

Javascript runs any code in two phases:
1. It always create a global execution context --> this is always referred to this variable
Note this variable is different for evry env like node, browser, dino etc.
 - Javascript is single threaded (process) --> always runs in a thread
2. Function execution context
3. Eval execution context 

When the execution of the {} starts:
1. A memory creation phase happens where all memory is allocation (all variables are declared to undefined)
2. Execution phase: all operations like arithmetic etc. happens

If a function is called inside a function -> then call stack will follow LIFO method
Every function creates a new execution thread. Another box is created. Because a new box is created, again
memory and execution phase happens.
When the value is returned, it is send to global context. After this new box's work is done, it is
deleted on its own

You can create snippets in Source (check call stack)
*/