import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";


// Initial state

const initalState = {
    buckets: [
        {
            "id": 1,
            "name": "Video story",
            "location": "Skopje",
        },
        {
            "id": 2,
            "name": "I love react",
            "location": "Kranj",
        },
        {
            "id": 3,
            "name": "Media box",
            "location": "Ljubljana",
        },
    ]
}

// Create context
export const GlobalContext = createContext(initalState);

// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initalState);
    // Create Action 
    const removeBucket = (id) => {
        dispatch({
            type: "REMOVE_BUCKET",
            payload: id
        })
    }
    const addBucket = (bucket) => {
        dispatch({
            type: "ADD_BUCKET",
            payload: bucket
        })
    }
    const viewBucket = (bucket) => {
        dispatch({
            type: "VIEW_BUCKET",
            payload: bucket
        })
    }
    return (
        <GlobalContext.Provider value={{
            buckets: state.buckets,
            removeBucket,
            addBucket,
            viewBucket
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
