import axios from 'axios';

export const ADD_ITEM = 'ADD_ITEM';
export const EDIT_ITEM = 'EDIT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const SET_ITEMS = 'SET_ITEMS';

// const API_URL = 'http://192.168.18.28:5000/api/items'; 
const API_URL = 'https://react-native-lesson-6-shoppinglist-redux.onrender.com/api/items'; 



// Fetch all items from the server
export const fetchItems = () => async (dispatch) => {
    try 
    {
      const response = await axios.get(API_URL);
      // console.log(response.data);
      
      dispatch({ type: SET_ITEMS, payload: response.data });
    } 
    catch (error) { console.error('Error fetching items:', error); }
};

// Add item to database
export const addItem = (item) => async (dispatch) => {
  try {
      const response = await axios.post(API_URL, {
          name: item.name,
          quantity: item.quantity,
          createdAt: new Date().toISOString(), // Ensure timestamps are included
          updatedAt: new Date().toISOString(),
      });

      dispatch({ type: ADD_ITEM, payload: response.data });
  } catch (error) {
      console.error('Error adding item:', error);
  }
};

// Edit item in database
export const editItem = (id, updatedItem) => async (dispatch) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, updatedItem);
        dispatch({ type: EDIT_ITEM, payload: response.data });
    } catch (error) {
        console.error('Error editing item:', error);
    }
};

// Delete item from database
export const deleteItem = (id) => async (dispatch) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
        dispatch({ type: DELETE_ITEM, payload: id });
    } catch (error) {
        console.error('Error deleting item:', error);
    }
};
