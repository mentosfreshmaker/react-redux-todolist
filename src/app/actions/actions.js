let nextId = 0

export const addItem = name => {
    return {
        type: 'ADD',
        id: nextId++,
        name
    };
}

export const toggleItem = id => {
    return {
        type: 'TOGGLE_TODO',
        id
    };
}

export const setVisibilityFilter = filter => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}