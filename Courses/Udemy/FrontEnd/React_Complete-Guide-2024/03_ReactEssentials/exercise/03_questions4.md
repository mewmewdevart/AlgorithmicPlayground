Conditional Content & Dynamic Lists
Teste 5|3 perguntas
Time to check your knowledge - do you know how to output content conditionally? And are you able to output list content?

Pergunta 1:
Which of the following code snippets WILL NOT output the content conditionally?

```
function SOmeComponent(){
    const [contentIsVisible, setContentIsVisible] = useState(false);

    function handleClick (){
        setContentIsVisible(true);
    }

    return (
        <div>
            <p show={contentIsVisible}>Visible</p>
            <button onCLick={handleClick}></button>
        </div>
    )
}
```

Pergunta 2:
Which code snippet WILL WORK and output a list dynamically?
<ul>
    {[1, 2, 3].map(number => <li key={number}>{number}</li>)}
</ul>


Pergunta 3:
What's the problem with this code?

<div>
  {someArray.map(item => <p>{item}</p>)}
</div>
- You should add a key prop to the list item