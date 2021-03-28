import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";


// Initial state

const initalState = {
    buckets: [
        {
            "id": 1,
            "name": "Video story",
            "location": "Skopje",
            files: [
                {
                    id: "7e8e994d-15c5-4efd-aea0-b0f713f3b63c",
                    name: "wosssrkout.pdf",
                    size: "1",
                    dof: 2.2
                },
                {
                    id: "2e8e994d-15c5-4efd-aea0-b0f713f3b63c",
                    name: "react.pdf",
                    size: "1",
                    dof: 2.2
                },
                {
                    id: "3e8e994d-15c5-4efd-aea0-b0f713f3b63c",
                    name: "GIA.pdf",
                    size: "1",
                    dof: 2.2
                }
            ],
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
    ],

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
    const removeBucketItems = (id) => {
        dispatch({
            type: "REMOVE_BUCKET_ITEMS",
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
            viewBucket,
            removeBucketItems
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
