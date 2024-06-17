Pergunta 1:
How should you typically store your component functions?
- Split across multiple files (one component per file)


Pergunta 2:
What's the purpose of the special "children" prop?
- You can use it to pass and use content between your component's opening & closing tags

Pergunta 3:
How can you handle user events in React projects?
- VIa the buiult-in onXYZ props (e.g., onCLick)

Pergunta 4:
To execute code upon events, which value must be passed to event props like onClick?
- A pointer to the function that should be executed (e.g., onClick={handleClick})

Pergunta 5:
How can you "configure" the execution of an event-dependent function (e.g., define which arguments get passed to it)?
- By wrapping the function with another function (e.g., onClick{() => handleClick(5)})

That's the correct choice! By wrapping the execution of your event handling function with another function, it's that other function that's passed as a value to the event-handling prop. Therefore, your main function (=> handleClick in this example) does NOT get executed too early but instead only when the event occurs.