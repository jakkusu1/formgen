const insert = () => {
    let type = document.querySelector('#type').value
    let label = document.querySelector('#label').value

    switch(type) {
        case 'text': appendText(label)
            break
        case 'button': appendButton(label)
            break
        case 'radio' : appendRadio(label)
            break
        case 'checkbox' : appendCheckbox(label)
            break
    }
}

const appendText = (label = "No label") => {
    let el = document.createElement('input')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'form-control mt-2')
    el.setAttribute('placeholder', label)

    document.querySelector('#display').append(el)
}

const appendButton = (label = "No label") => {
    let el = document.createElement('button')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'btn btn-primary mt-2')
    el.textContent = label

    document.querySelector('#display').append(el)
}

const appendRadio = (label = "No label") => {
    let cont = document.createElement('div')
    let el = document.createElement('input')
    let elLabel = document.createElement('label')

    cont.setAttribute('class', 'form-check')

    el.setAttribute('type', 'radio')
    el.setAttribute('class', 'form-check-input')
    el.setAttribute('id', 'radioId')
    el.setAttribute('name', 'radioGroup')

    elLabel.setAttribute('class', 'form-check-label')
    elLabel.setAttribute('for', 'radioId')
    elLabel.textContent = label

    document.querySelector('#display').append(cont)
    cont.appendChild(el)
    cont.appendChild(elLabel)
}

const appendCheckbox = (label = "No label") => {
    let cont = document.createElement('div')
    let el = document.createElement('input')
    let elLabel = document.createElement('label')

    cont.setAttribute('class', 'form-check')

    el.setAttribute('type', 'checkbox')
    el.setAttribute('class', 'form-check-input')
    el.setAttribute('id', 'boxId')

    elLabel.setAttribute('class', 'form-check-label')
    elLabel.setAttribute('for', 'boxId')
    elLabel.textContent = label

    document.querySelector('#display').append(cont)
    cont.appendChild(el)
    cont.appendChild(elLabel)
}
