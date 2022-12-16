import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../servises/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState:ArticleDetailsSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
};

export const articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleById.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticleById.fulfilled, (state, action:PayloadAction<Article>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchArticleById.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

// Action creators are generated for each case reducer function
export const { actions: articleActions } = articleDetailsSlice;
export const { reducer: articleReducer } = articleDetailsSlice;
