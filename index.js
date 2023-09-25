
let counter = 0;
let h1 = document.querySelector('h1');
let increment = document.querySelector('.increment');
let decrement = document.querySelector('.decrement');
let reset = document.querySelector('.reset');
const stepSelect = document.getElementById('step-select');

// Initial state
const initialState = {
    counter: 0,
    step: 1, // Default step is 1
};
 function reducer(state = initialState, action){
    switch(action.type){
        case "increment":
            return {...state, counter: state.counter + state.step}
        case "decrement":
            return {...state, counter: state.counter - state.step}
        case "reset":
            return {...state, counter: 0}
        case 'selectStep':
            return {...state, step:action.payload}    
        default:
            return {...state};            
    }
 }

 let store = Redux.createStore(reducer);


 h1.innerText = store.getState().counter;

 stepSelect.addEventListener("change",() => {
    const selectedStep = parseInt(stepSelect.value, 10);
    store.dispatch({type:'selectStep',payload:selectedStep})
 })

increment.addEventListener('click' , () => {
    if(counter >= 0){
        store.dispatch({type:"increment"})
       
    }
  
})

decrement.addEventListener('click' , () => {
    store.dispatch({type:"decrement"})
 })

 reset.addEventListener('click' , () => {
    store.dispatch({type:"reset"});
 })

 store.subscribe(() => {
    counter =store.getState().counter;
        h1.innerText = counter;
 })