'use strict'

const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
    // console.log(this.value);
    const suffix = this.dataset.sizing || ''; //or nothing so that it doesnt compmlain about undefined. 
    console.log(suffix);
    // console.log(this.dataset);

    console.log(this.name);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
;}
inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
