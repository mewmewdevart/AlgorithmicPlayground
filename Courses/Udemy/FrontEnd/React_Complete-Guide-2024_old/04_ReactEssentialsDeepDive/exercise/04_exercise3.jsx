// Creating Flexible Components
// Your task is to build a highly re-usable, custom Button component that can be used in all the following ways (also see the code in the App.js file):

// "Filled" mode (default):

// <Button>Default</Button>
// or

// <Button mode="filled">Filled</Button>
// should yield buttons that looks like this:





// "Outline" mode:

// <Button mode="outline">Outline</Button>
// should yield a button that looks like this:



// "Text-only" mode:

// <Button mode="text">Text</Button>
// should yield a button that looks like this:



// With Icon:

// <Button Icon={HomeIcon}>Home</Button>
// or

// <Button Icon={PlusIcon} mode="text">
//   Add
// </Button>
// should yield buttons that look like this:



// Hint: To make sure the icon becomes visible (if passed correctly to the component & used in there), wrap the icon component in the button with a <span> that has the class "button-icon" on it.

// Also wrap the children prop with a <span>!

// You find all the styles (CSS classes) that are required to build a button that supports these different "modes" in the provided index.css file!

// All buttons need a button CSS class - and then, depending on their mode, additional classes.

// In addition, the custom Button component must accept all standard props that could be set on the built-in <button>. These props should be forwarded to the default <button> element that will be used in the custom Button component.

// Your task therefore is to work on the Button component provided in the Button.js file. Don't add multiple custom components, instead work on that one provided component and make sure that it supports all these different modes & features. Also make sure, that if no mode is set, the "filled" mode is assumed as a default

App.js


BUtton.js/
import React from 'react';

export default function Button({ children, className, mode = 'filled', Icon, ...props}) {
//   let styleButton = '';

//   if (mode === 'filled') {
//     styleButton = 'filled-button';
//   } else if (mode === 'outline') {
//     styleButton = 'outline-button';
//   } else if (mode === 'text') {
//     styleButton = 'text-button';
//   }
  
//   let cssClasses = styleButton;
  
//   if (Icon) {
//     cssClasses += ' icon-button ';
//   }
 
//   if (className) {
//     cssClasses += ' ' + className;
//   }

let cssClasses = `button ${mode}-button`;

  if (Icon) {
    cssClasses += ' icon-button';
  }
 
  if (className) {
    cssClasses += ' ' + className;
  }
 
  return (
 <button className={cssClasses} {...props}>
      {Icon && (
        <span className="button-icon">
          <Icon />
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
