const message={
    subjects: ["Elephant", "Banana", "Robot", "Penguin", "Wizard"],
    actions: ["dancing with", "singing to", "flying around", "cooking for", "playing cards with"],
    objects: ["a rainbow", "a cupcake", "a spaceship", "a giraffe", "a time machine"]
};

const generateJoke = () =>{

    const randomSubject = message.subjects[Math.floor(Math.random()* message.subjects.length)];
    const randomAction = message.actions[Math.floor(Math.random()* message.actions.length)];
    const randomObject = message.objects[Math.floor(Math.random()* message.objects.length)];

    const joke = `${randomSubject} is ${randomAction} ${randomObject}.`;

    return joke;
};

console.log(generateJoke());