State & Computed Values

Time to check your knowledge - do you know how to work with state and computed values?

Pergunta 1:
What's the purpose of "State" in React apps?
- Its data, that, when ChannelMergerNode, causes React to re-evaluate a component

Pergunta 2:
There are two "Rules of Hooks".

Which of the following statements is NOT TRUE according to those rules?
- You must not call React Hooks next to other Hooks

Pergunta 3:
Will the following code work?

import { useState } from 'react';
 
function SomeComponent() {
  const [selected, setSelected] = useState(false);
 
  function handleClick() {
    const [selected, setSelected] = useState(true);
  }
 
  return <button onClick={handleClick}>Select</button>
}
- No

Pergunta 4:
What's the idea behind "derived state" / "computed values"?
- Computed values are values that shouldnt be managed as separet state since they can be derived from other state