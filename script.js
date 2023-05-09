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
    let cont = document.createElement('div')
    let elCont = document.createElement('div')
    let el = document.createElement('input')
    let remButCont = document.createElement('div')
    let remBut = document.createElement('button')

    cont.setAttribute('id', 'text')
    cont.setAttribute('class', 'row text')
    cont.addEventListener('mouseenter', showRemoveButton)
    cont.addEventListener('mouseleave', showRemoveButton)

    elCont.setAttribute('class', 'pe-1 col-11')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'form-control mt-2')
    el.setAttribute('placeholder', label)

    remButCont.setAttribute('class', 'd-flex justify-content-center col-1')

    remBut.setAttribute('id', 'test')
    remBut.setAttribute('type', 'text')
    remBut.setAttribute('class', 'btn btn-primary mt-2 d-none')
    remBut.textContent = "X"
    remBut.addEventListener('click', function() {
        removeFunc('text')
    })

    document.querySelector('#display').append(cont)
    cont.appendChild(elCont)
    cont.appendChild(remButCont)
    elCont.appendChild(el)
    remButCont.appendChild(remBut)
}

const appendButton = (label = "No label") => {
    let cont = document.createElement('div')
    let elCont = document.createElement('div')
    let el = document.createElement('button')
    let remButCont = document.createElement('div')
    let remBut = document.createElement('button')

    cont.setAttribute('id', 'button')
    cont.setAttribute('class', 'row button')
    cont.addEventListener('mouseenter', showRemoveButton)
    cont.addEventListener('mouseleave', showRemoveButton)

    elCont.setAttribute('class', 'pe-1 col-11')

    el.setAttribute('type', 'text')
    el.setAttribute('class', 'btn btn-primary mt-2 w-100')
    el.textContent = label

    remButCont.setAttribute('class', 'd-flex justify-content-center col-1')

    remBut.setAttribute('id', 'test')
    remBut.setAttribute('type', 'text')
    remBut.setAttribute('class', 'btn btn-primary mt-2 d-none')
    remBut.textContent = "X"
    remBut.addEventListener('click', function() {
        removeFunc('button')
    })

    document.querySelector('#display').append(cont)
    cont.appendChild(elCont)
    cont.appendChild(remButCont)
    elCont.appendChild(el)
    remButCont.appendChild(remBut)
}

const appendRadio = (label = "No label") => {
    let cont = document.createElement('div')
    let elCont = document.createElement('div')
    let el = document.createElement('input')
    let elLabel = document.createElement('label')
    let remButCont = document.createElement('div')
    let remBut = document.createElement('button')

    cont.setAttribute('id', 'radio')
    cont.setAttribute('class', 'form-check row radio m-0')
    cont.addEventListener('mouseenter', showRemoveButton)
    cont.addEventListener('mouseleave', showRemoveButton)

    elCont.setAttribute('class', 'pe-1 col-6 h-100')
    
    el.setAttribute('type', 'radio')
    el.setAttribute('class', 'form-check-input')
    el.setAttribute('id', 'radioId')
    el.setAttribute('name', 'radioGroup')

    elLabel.setAttribute('class', 'form-check-label')
    elLabel.setAttribute('for', 'radioId')
    elLabel.textContent = label

    remButCont.setAttribute('class', 'd-flex justify-content-center col-1')

    remBut.setAttribute('id', 'test')
    remBut.setAttribute('type', 'text')
    remBut.setAttribute('class', 'btn btn-primary mt-2 d-none')
    remBut.textContent = "X"
    remBut.addEventListener('click', function() {
        removeFunc('radio')
    })

    document.querySelector('#display').append(cont)
    cont.appendChild(elCont)
    cont.appendChild(remButCont)
    elCont.appendChild(el)
    elCont.appendChild(elLabel)
    remButCont.appendChild(remBut)
}

const appendCheckbox = (label = "No label") => {
    let cont = document.createElement('div')
    let elCont = document.createElement('div')
    let el = document.createElement('input')
    let elLabel = document.createElement('label')
    let remButCont = document.createElement('div')
    let remBut = document.createElement('button')

    cont.setAttribute('id', 'checkbox')
    cont.setAttribute('class', 'form-check row checbox m-0')
    cont.addEventListener('mouseenter', showRemoveButton)
    cont.addEventListener('mouseleave', showRemoveButton)

    elCont.setAttribute('class', 'pe-1 col-6 h-100')

    el.setAttribute('type', 'checkbox')
    el.setAttribute('class', 'form-check-input')
    el.setAttribute('id', 'boxId')
    el.setAttribute('name', 'boxGroup')

    elLabel.setAttribute('class', 'form-check-label')
    elLabel.setAttribute('for', 'boxId')
    elLabel.textContent = label

    remButCont.setAttribute('class', 'd-flex justify-content-center col-1')

    remBut.setAttribute('id', 'test')
    remBut.setAttribute('type', 'text')
    remBut.setAttribute('class', 'btn btn-primary mt-2 d-none')
    remBut.textContent = "X"
    remBut.addEventListener('click', function() {
        removeFunc('checkbox')
    })

    document.querySelector('#display').append(cont)
    cont.appendChild(elCont)
    cont.appendChild(remButCont)
    elCont.appendChild(el)
    elCont.appendChild(elLabel)
    remButCont.appendChild(remBut)
}

const showRemoveButton = () => {
    let buttonEl = document.querySelector('#test')
    buttonEl.classList.toggle("d-none") 
}

function removeFunc(val) {
    let jeff = document.querySelector('#'+val)
    jeff.remove()
}