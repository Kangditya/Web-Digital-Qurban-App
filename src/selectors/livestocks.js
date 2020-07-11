
export const getAllLivestock = state => state.livestockReducer.livestocks;

export const getCartState = state => state.livestockReducer.cart;

export const getCartTotal = state => state.livestockReducer.total;

export const getAllLivestockCategory = state => state.livestockReducer.livestocks
    .map((livestock) => livestock.category)
    .reduce((unique, category) => unique.includes(category) ? unique : [...unique, category], [])
    .sort((a, b) => {
        const textA = a.toUpperCase();
        const textB = b.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });

export const getFilteredLiveStocks = state => {
    const { livestockReducer: { livestocks }, filters } = state;
    return livestocks.filter((livestock) => {
        const searchText = (livestock.category.toLowerCase() + ' ' + livestock.name.toLowerCase()).includes(filters.name.toLowerCase().trim())

        if (filters.category.length > 0 && filters.name.length === 0) {
            return filters.category.includes(livestock.category)
        } else if (filters.name.length !== 0 && filters.category.length === 0) {
            return searchText
        } else if (filters.name.length > 0 && filters.name.length > 0) {
            return filters.category.includes(livestock.category) && searchText;
        } else {
            return livestock
        }
    }).sort((a, b) => {
        const textA = a.category.toUpperCase();
        const textB = b.category.toUpperCase();
        return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
    });
};

//selector untuk hewan qurban