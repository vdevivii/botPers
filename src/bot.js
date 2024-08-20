export function respuesta(name) {
    return `Hola, ${name}! Bienvenido.`;
}

export function handleNameInput(name) {
    return `Hola, ${name}. Ahora, ¿cuál es tu género? (M para Mujer, H para Hombre)`;
}

export function handleGenderInput(name, gender) {
    if (gender === 'M') {
        return `Hola, señora ${name}.`;
    } else if (gender === 'H') {
        return `Hola, señor ${name}.`;
    }
}
