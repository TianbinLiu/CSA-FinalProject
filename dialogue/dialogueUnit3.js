const textElement3 = document.getElementById('text3')
const optionButtonsElement3 = document.getElementById('option-buttons3')

let state3 = {}

function startGame() {
  state3 = {}
  showTextNode(1)
}

function showTextNode(textNodeIndex) {
  state3.currentNode = textNodeIndex; // Store the current node id in the state object
  const textNode3 = textNodes3.find(textNode3 => textNode3.id === textNodeIndex)
  textElement3.innerText = textNode3.text
  while (optionButtonsElement3.firstChild) {
    optionButtonsElement3.removeChild(optionButtonsElement3.firstChild)
  }

  textNode3.options.forEach(option => {
    if (showOption(option)) {
      const button = document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement3.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state3)
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

  state3 = Object.assign(state3, option.setState);
  showTextNode(nextTextNodeId);
}

function previous() {
  const previousTextNodeId = findPreviousTextNodeId(state3.currentNode); // Pass the current node id
  showTextNode(previousTextNodeId);
}

// Modify the `findPreviousTextNodeId` function
function findPreviousTextNodeId(textNodeIndex) {
  const previousTextNode = textNodes3.find(node =>
    node.options && node.options.some(option => option.nextText === textNodeIndex)
  );

  return previousTextNode ? previousTextNode.id : -1; // Update the default value to -1
}


const textNodes3 = [
  {
    id: 1,
    text: 'Yes, I do know quite a bit about Java Unit 3: Boolean Expressions and If Statements, it\'s my favorite unit after all! \n\n(Kareena will ask you two conceptual questions and explain several concepts. Pay close attention as they will be useful to you later on. Estimated time: 10 minutes.)',
    options: [
      {
        text: 'Then would you like to discuss it further? It can be an equal exchange.',
        nextText: 2
      },
      {
        text: 'Wouldn\'t it be nice then, to talk to me about it for a while?.',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'Oh that does sound nice. I\'ve got to head home in a bit, but I\'d be glad to help you out in any way.',
    options: [
      {
        text: 'What is it with everyone rushing to get away from me these days . . .',
        nextText: 3
      }
    ]
  },
  {
    id: 3,
    text: 'I\'m sure it\'s not anything to do with you, you seem quite pleasant to talk to. So, to start off, I\'ll ask you: What are Boolean Expressions, and what are some examples of operators?',
    options: [
      {
        text: 'Expressions that represent whether something is true or false. Operator examples: if, else, etc.',
        nextText: 10
      },
      {
        text: 'Expressions that represent logic and tell whether something is true or false. Operator examples: ==, !=, <=, etc.',
        nextText: 4
      },
      {
        text: 'Expressions that move the program forward if its specific conditions are met. Operator examples: ==, !=, <=, etc.',
        nextText: 10
      }
    ]
  },
  {
    id: 4,
    text: 'Right on! In turn, do you have any questions I can answer? I can clarify the conditional statements for you?',
    options: [
      {
        text: 'So, If Statements . .',
        nextText: 5
      },
      {
        text: 'So, If-Else Statements . .',
        nextText: 6
      },
      {
        text: 'So, Else-If Statements . .',
        nextText: 7
      }
    ]
  },
  {
    id: 5,
    text: 'They occur if a block of code is run only if the stated condition is true. They are very popular and versatile in coding.',
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
    text: 'They occur if you need to run a block of code with more than one alternative or outcome to the input. They are more complex than If Statements.',
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
    text: 'Usually coming after an If Statement, they occur when you need to run a condition if the original condition was false.',
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
    text: 'Here\'s an important concept to remember: Apply De Morgan\'s Law on these boolean expression: !(a&&b) and !(a || b)',
    options: [
      {
        text: '(!a && !b) and (!a || !b)',
        nextText: 10
      },
      {
        text: '(a || b) and (a && b)',
        nextText: 10
      },
      {
        text: '(!a || !b) and (!a && !b)',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'Lovely. Looks like you\'re good, anything else you wanna go over before you go?',
    options: [
      {
        text: 'What is the difference in the usage of == and .equals()?',
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
    text: 'Use == to see if two object references are aliases for the same object or to see if an object is null. \nUse .equals() to see if the attributes of two objects are the same. For example, use it for comparing numbers, strings, and objects.',
    options: [
      {
        text: 'Thanks, I\'ve got it now.',
        nextText: 12
      }
    ]
  },
  {
    id: 12,
    text: 'Oh well look at the time! I\'ve gotta run, see you, have a nice day!',
    options: [
      {
        text: 'Goodbye! You as well! (I\'ll certainly try to, but at this rate I can\'t promise anything.)',
        nextText: 13
      }
    ]
  }
]

startGame();