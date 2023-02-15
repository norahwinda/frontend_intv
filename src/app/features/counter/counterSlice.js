import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: 0,
  albumId: 0
}

export const counterSlice = createSlice({
  name: 'id',
  initialState,
  reducers: {
    assignUserId: (state, action) => {
      state.id = action.payload
    },
    assignAlbumId: (state, action) => {
      state.albumId = action.payload
    },
    resetUserId: (state) => {
      state.id = 0
    },
    resetAlbumId: (state) => {
      state.albumId = 0
    }
  }
})

export const { assignUserId, assignAlbumId, resetUserId, resetAlbumId } = counterSlice.actions
export default counterSlice.reducer