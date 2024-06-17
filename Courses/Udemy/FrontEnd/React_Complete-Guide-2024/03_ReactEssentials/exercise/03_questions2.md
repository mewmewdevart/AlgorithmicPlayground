Pergunta 1:
Which syntax can be used to output dynamic values / JavaScript expressions in JSX?
- {} (CUrly braces)


Pergunta 2:
Which values can be output as dynamic values in JSX (i.e., between curly braces)?
- ANy valid Javascript expression


Pergunta 3:
How should you typically load / use images in React projects?
- Set the <img> src equal to the path generated via an importat statement (that points at the image)

Pergunta 4:
How can you assign a dynamic value to an HTML element attribute?
- VIa the same syntax you use for dynamic values in JSX in general: CUrly braces

Pergunta 5:
Which core React concept can increase the reusability of React components?
- Props

Pergunta 6:
How do "props" work in React?
- You can set props?(custom atrribvutes) on components to then extract & use them in the receiving component

Pergunta 7:
Which of the following four code examples for setting & extracting props would NOT work as intended?

I.e., which example will NOT output the text "Priority: 5" on the screen.
- <My component priority={5}/>
function MyCOmponent(prioryity){
    return (<p> prioriry: {priority} </p>)
}