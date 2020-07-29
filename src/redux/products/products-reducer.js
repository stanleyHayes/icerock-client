const INITIAL_STATE = {
    products: [],
    selectedProduct: null,
    error: null,
    loading: false
}

const productsReducer = (state = INITIAL_STATE, action) => {

    switch (action.type){

        default: return state;
    }

}


export default productsReducer;
