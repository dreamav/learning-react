/*
const frederick = {
    name: "Frederrick Douglas",
    canRead: false,
    canWrite: false
}

const selfEducate = (person) => {
    person.canRead = true
    person.canWrite = true
    return person
}

console.log(selfEducate(frederick))
console.log(frederick)
*/

/*
const frederick = {
    name: "Frederrick Douglas",
    canRead: false,
    canWrite: false
}

const selfEducate = person => ({
    ...person,
    canWrite: true,
    canRead: true
})

console.log(selfEducate(frederick))
console.log(frederick)
*/

function Header(text) {
    let h1 = document.createElement('h1');
    h1.innerText = text;
    document.body.appendChild(h1);
}

Header("Header() caused side effects")

const reactHeader = (props) => <h1>{props.title}</h1>

