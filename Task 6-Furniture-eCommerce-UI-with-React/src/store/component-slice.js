import { createSlice } from '@reduxjs/toolkit';

import Home from '../components/Home';
import Shop from '../components/Shop';

const componentSlice = createSlice({
    name: 'componentSlice',
    initialState: { currentComponent: 'home' },
    reducers: {
        changePage(state, action) {
            state.currentComponent = action.payload;
        }
    }
})

export const componentSliceActions = componentSlice.actions;
export default componentSlice;

// import { useSelector } from 'react-redux';
// import { COMPONENTS } from './yourSliceFile';

// function AppDisplay() {
//     const pageKey = useSelector((state) => state.componentSlice.currentPage);
    
//     const SelectedComponent = COMPONENTS[pageKey];

//     return (
//         <div>
//             <SelectedComponent />
//         </div>
//     );
// }