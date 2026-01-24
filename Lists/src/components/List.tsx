const people = [
    'Creola Katherine Johnson: mathemetician',
    'Mario Jose Molina-Pasquel Henriquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasethar: atrophysicist'
];

export default function List() {
    const listItems = people.map(person =>
        <li key={person}>{person}</li>
    );

    return (
        <ul>{listItems}</ul>
    )

}