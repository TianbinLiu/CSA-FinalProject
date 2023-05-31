const textElement2 = document.getElementById('text2')
const optionButtonsElement2 = document.getElementById('option-buttons2')

let state2 = {}

function startGame() {
  state2 = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  state2.currentNode = textNodeIndex; // Store the current node id in the state object
  const textNode2 = textNodes2.find(textNode2 => textNode2.id === textNodeIndex)
  textElement2.innerText = textNode2.text
  while (optionButtonsElement2.firstChild) {
    optionButtonsElement2.removeChild(optionButtonsElement2.firstChild)
  }

  textNode2.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement2.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state2)
}

// Modify the `selectOption` function
function selectOption(option) {
  const nextTextNodeId = option.nextText;
  
  if (nextTextNodeId <= 0) {
    return startGame();
  }
  
  if (option.previousText === true) {
    previous(); // Call the `prev` function directly
    return;
  }
  
  state2 = Object.assign(state2, option.setState);
  showTextNode(nextTextNodeId);
}

function previous() {
  const previousTextNodeId = findPreviousTextNodeId(state2.currentNode); // Pass the current node id
  showTextNode(previousTextNodeId);
}

// Modify the `findPreviousTextNodeId` function
function findPreviousTextNodeId(textNodeIndex) {
  const previousTextNode = textNodes2.find(node =>
    node.options && node.options.some(option => option.nextText === textNodeIndex)
  );

  return previousTextNode ? previousTextNode.id : -1; // Update the default value to -1
}


const textNodes2 = [
  {
    id: 1,
    text: 'Huh-- What? Why would you wake me up! I was clearly sleeping!! . . Wait, Java Unit 2 you said? Using Objects? \n\n(Timmy will ask you two conceptual questions and explain several concepts. Pay close attention as they will be useful to you later on. Estimated time: 10 minutes.)',
    options: [
      {
        text: 'Sorry about the nap, I assure you it\'ll be an equal excha--',
        nextText: 2
      },
      {
        text: 'Oh I can explain, since you were asleep. So you see--',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Read the room will you? Whatever it is you want, be quick so I can go back to sleep. How much do you know?',
    options: [
      {
        text: 'Ask me anything, I think I know most of it.',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'What are classes, and what are objects?',
    options: [
      {
        text: 'A class is a specific entity, made from an object, that you can manipulate in your programs, while an object is a blueprint for creating classes with the same behavior and defined attributes.',
        nextText: 10
      },
      {
        text: 'A class is a blueprint for creating objects with the same behavior and defined attributes, while an object is a specific entity, made from a class, that you can manipulate in your programs.',
        nextText: 4
      }
    ]
  },
  {
    id: 4,
    text: 'Cool, you know that much. Anything you want me to explain to you?',
    options: [
      {
        text: 'What are Wrapper Classes and why are they used?',
        nextText: 5
      },
      {
        text: 'I\'ve been hearing about ArrayLists, how are they related?',
        nextText: 6
      },
      {
        text: 'How do you overload a method?',
        nextText: 7
      }
    ]
  },
  {
    id: 5,
    text: 'Wrapper classes provide a way to use primitive data types (int, boolean, etc..) as objects. The objects are necessary if you want to modify the arguments passed into the method (because primitive types are passed by value). \n Some examples include: Integer, Long, Float, Double, Boolean, and Character.',
    options: [
      {
        text: 'Gotcha, but I\'ve got more questions.',
        previousText: true
      },
      {
        text: 'Thanks! Let\'s move on.',
        nextText: 8
      }
    ]
  },
  {
    id: 6,
    text: 'ArrayLists are an example of the use of Wrapper Classes in Java. They store groups of objects, and therefore need a Wrapper Class to mark the primitive type of all the objects within. \nYou can instantiate an ArrayList that stores numerical values like this: \nArrayList<Integer> myNumbers = new ArrayList<Integer>();',
    options: [
      {
        text: 'Gotcha, but I\'ve got more questions.',
        previousText: true
      },
      {
        text: 'Thanks! Let\'s move on.',
        nextText: 8
      }
    ]
  },
  {
    id: 7,
    text: 'There can be more than one constructor for an object, which is called overloading the constructor. For example, there can be a no-argument constructor has no parameters and sets the instance variables for the object to default values, along with various other constructors with varying amounts of parameters. This enables input to the method to be more flexible.',
    options: [
      {
        text: 'Gotcha, but I\'ve got more questions.',
        previousText: true
      },
      {
        text: 'Thanks! Let\'s move on.',
        nextText: 8
      }
    ]
  },
  {
    id: 8,
    text: 'Let\'s pause, I just remembered something you should know. Tell me about procedural abstraction.',
    options: [
      {
        text: 'This is the process of breaking down a complex problem into smaller, more manageable steps. It shortens and groups code so that it\'s more simplified and these methods can be used by other people without them having to understand it.',
        nextText: 9
      },
      {
        text: 'This is the process of focusing attention on the main problems by ignoring lower-level details. It makes code less complex overall.',
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    text: 'Sounds about right. Methods define the behaviors for all objects of a class and consist of a set of instructions for executing the behavior. They are an important part of procedural abstraction in Java. Anything else you wanna go over?',
    options: [
      {
        text: 'No, I can\'t think of anything right now.',
        nextText: 11
      }
    ]
  },
  {
    id: 10,
    text: 'That\'s not right, I thought you said you knew your stuff? Try Again.',
    options: [
      {
        text: 'Go Back',
        previousText: true
      },
      {
        text: 'Restart',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'You were pretty good. I think you\'re prepared, so I\'m gonna go sleep now. Bye.',
    options: [
      {
        text: 'Goodbye.',
        nextText: 12
      }
    ]
  }
]

startGame();