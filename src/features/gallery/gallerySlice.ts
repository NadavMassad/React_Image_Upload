import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import {Img, Iimages}  from '../../models/Image';
import { getImages } from './galleryAPI';


const initialState: Iimages = {
  images: []
};

export const getImagesAsync = createAsyncThunk(
  'gallery/getImages',
  async () => {
    const response = await getImages();
    return response;
  }
);

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(getImagesAsync.fulfilled, (state, action) => {
        state.images = action.payload
      })

  },
});


export const image_list = (state: RootState) => state.gallery.images;
export default gallerySlice.reducer;
