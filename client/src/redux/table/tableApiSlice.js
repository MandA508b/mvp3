import {apiSlice} from "../apiSlice";

export const tableApiSlice = apiSlice.injectEndpoints({
    endpoints: build => ({
        fetchAllCoins: build.query({
            query: () => 'coin/coins'
        }),
        deleteCoin: build.mutation({
            query: name => ({
                url: '/coin/delete',
                method: 'DELETE',
                body: {name}
            })
        }),
        saveCoin: build.mutation({

            query: data => {
                return {
                    url: '/coin/redact',
                    method: "PUT",
                    body: {...data}
                }
            }
        }),
        searchCoin: build.mutation({
            query: body => {
                return {
                    url: '/coin/search',
                    method: 'POST',
                    body
                }
            }
        }),
        coinLimit: build.query({
            query: () => '/coinLimit/findAll'
        }),
        coinDirection: build.query({
            query: () => '/coinDirection/find',
            providesTags: ['CoinDirection']
        }),
        changeDirection: build.mutation({
            query: body => {
                return {
                    url: '/coinDirection/redact',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['CoinDirection']
        }),
        getResultCoin: build.query({
            query: () => '/calculating/getTop',
        }),
        filterCalculating: build.query({
            query: () => '/filterCalculating/find',
            providesTags: ['filterCalculating']
        }),
        changeFilter: build.mutation({
            query: body => {
                return {
                    url: '/filterCalculating/redact',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['filterCalculating']
        }),
        projectVisibleFilter: build.query({
            query: () => '/projectVisibleFilter/find',
            providesTags: ['projectVisibleFilter']
        }),
        changeVisibleFilter: build.mutation({
            query: body => {
                return {
                    url: '/projectVisibleFilter/redact',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['projectVisibleFilter']
        }),
        projectBlureFilter: build.query({
            query: () => '/projectBlureFilter/find',
            providesTags: ['projectBlureFilter']
        }),
        changeBlureFilter: build.mutation({
            query: body => {
                return {
                    url: '/projectBlureFilter/redact',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['projectBlureFilter']
        }),
        coinTooltip: build.query({
            query: () => '/coinTooltip/find',
            providesTags: ['coinTooltip']
        }),
        changeCoinTooltip: build.mutation({
            query: body => {
                return {
                    url: '/coinTooltip/redact',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['coinTooltip']
        }),

    }),

})

export const {
    useCoinTooltipQuery,
    useChangeCoinTooltipMutation,
    useProjectBlureFilterQuery,
    useChangeBlureFilterMutation,
    useChangeVisibleFilterMutation,
    useProjectVisibleFilterQuery,
    useFilterCalculatingQuery,
    useChangeFilterMutation,
    useGetResultCoinQuery,
    useCoinLimitQuery,
    useCoinDirectionQuery,
    useChangeDirectionMutation,
    useSaveCoinMutation,
    useLazyFetchAllCoinsQuery,
    useDeleteCoinMutation,
    useSearchCoinMutation,
    useFetchAllCoinsQuery
} = tableApiSlice