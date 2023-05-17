const textElement = document.getElementsById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame(){
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
}

function selectOption(option) {

}

const textNodes = [
    {
        id: 1,
        text: 'You are a tutor. Help this student with his csa homework.',
        options: [
            {
                text: '1',
                setState: { },
                nextText: 2
            },
            {
                text:'2',
            },
            {
                text:'3',
            }
        ]
    },
    {
        id:2
    }
]


startGame()