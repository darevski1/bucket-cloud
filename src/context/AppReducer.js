export default (state, action) => {
    switch (action.type) {

        case "REMOVE_BUCKET":
            return {
                buckets: state.buckets.filter(bucket => {
                    return bucket.id !== action.payload
                })
            }
        case "ADD_BUCKET":
            return {
                buckets: [action.payload, ...state.buckets]
            }
        case "VIEW_BUCKET":
            const viewBucket = action.payload;
            const viewBuckets = state.buckets.map(bucket => {
                if (bucket.id === viewBucket.id) {
                    return viewBucket;
                }
                return bucket;
            })
            return {
                ...state,
                buckets: viewBuckets
            }
        default:
            return state
    }
}