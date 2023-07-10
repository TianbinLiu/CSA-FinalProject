const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  state.currentNode = textNodeIndex; // Store the current node id in the state object
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
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
  
  state = Object.assign(state, option.setState);
  showTextNode(nextTextNodeId);
}

function previous() {
  const previousTextNodeId = findPreviousTextNodeId(state.currentNode); // Pass the current node id
  showTextNode(previousTextNodeId);
}

// Modify the `findPreviousTextNodeId` function
function findPreviousTextNodeId(textNodeIndex) {
  const previousTextNode = textNodes.find(node =>
    node.options && node.options.some(option => option.nextText === textNodeIndex)
  );

  return previousTextNode ? previousTextNode.id : -1; // Update the default value to -1
}


const textNodes = [
  {
    id: 1,
    text: 'What\'s this, you want to challenge me on my Java knowledge of Unit 1: Primitive Types? \n\n(Marlene will ask you two conceptual questions and explain several concepts. Pay close attention as they will be useful to you later on. Estimated time: 10 minutes.)',
    options: [
      {
        text: 'Yes, It\'ll be an equal exchange.',
        nextText: 2
      },
      {
        text: 'I heard you were the best in the class on this unit.',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'I don\'t get how this is going to benefit me, but sure, I get that you\'re on a grand quest or something. I only have 10 minutes before I need to leave, so make it quick.',
    options: [
      {
        text: 'Ask me anything, I can give as much as I take.',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'Tell me some key characteristic of Primitives Data Types.',
    options: [
      {
        text: 'Primitives are predefined, can be null, can call methods, and have all the same sizes.',
        nextText: 10
      },
      {
        text: 'Primitives are predefined, always have a value, can\'t call methods, and have type dependent sizes.',
        nextText: 4
      },
      {
        text: 'Primitives are defined by you, can be null, can call methods, and have type dependent sizes.',
        nextText: 10
      }
    ]
  },
  {
    id: 4,
    text: 'Impressive. In turn, do you have any questions I can answer?',
    options: [
      {
        text: 'I\'m unsure about casting.',
        nextText: 5
      },
      {
        text: 'Can we go over compound operators?',
        nextText: 6
      },
      {
        text: 'How do you join different things into one string?',
        nextText: 7
      }
    ]
  },
  {
    id: 5,
    text: 'There are two types of casting: \nWidening is when you\'re going from a smaller data type to a bigger one; in division, when you want decimal values, you should cast from an int to a float. \nNarrowing is going from a bigger data type to a smaller one; when truncating or rounding, you could convert your number to the lesser whole number by casting from float to int.',
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
    text: 'Compound Operators do a math operation and then assign the new value back to the variable: \n(+=) adds \n(-=) subtracts \n(*=) multiplies \n(/=) divides \n(%=) finds the remainder',
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
    text: 'Concatenation is the process of combining two or more strings to form a new string by appending the next string to the end of the previous strings: \nfirstString.concat(nextString) \n\nYou can concatenate mixed primitive types by using the + operator: \nint waffNum = 3; \nSystem.out.println("I ate " + waffNum + " waffles this morning.");',
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
    text: 'Before we go ahead, let\'s make sure you actually know your basics. There are many primitive data types, but only some that are the most useful and relevant in this class. Jog my memory?',
    options: [
      {
        text: 'They are boolean, int, float, long, char, and double.',
        nextText: 9
      },
      {
        text: 'They are boolean, int, short, long, char, double, and float.',
        nextText: 10
      },
      {
        text: 'They are boolean, int, double, char, byte, and float.',
        nextText: 10
      }
    ]
  },
  {
    id: 9,
    text: 'Oh nice, that sounds about right. Anything else you wanna go over before you go?',
    options: [
      {
        text: 'What are some standard methods that are used with primitives?',
        nextText: 11
      }
    ]
  },
  {
    id: 10,
    text: 'That\'s not quite right. Try Again.',
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
    text: '.toString() is a method used to get a String object representing a data type or element converted to a String. \n\n.equals() is used to compare 2 strings and returns if the content of the strings are equal. \n\n.hashCode() method computes the hash values of given input objects.',
    options: [
      {
        text: 'Thanks, I think I\'ve got it now.',
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    text: 'I\'ve taught you all I know. I\'ve got to go now, or I\'ll be late to my art class. Farewell!',
    options: [
      {
        text: 'Oh Bye . . I mean, Farewell.',
        nextText: 13
      }
    ]
  }
]

startGame();