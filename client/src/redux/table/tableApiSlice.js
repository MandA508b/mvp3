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
            query: () => '/coinLimit/findAll',
            providesTags:['CoinLimit']
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
            invalidatesTags: ['CoinDirection', 'Result']
        }),
        changeLimit: build.mutation({
            query: body => {
                return {
                    url: '/coinLimit/update',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['CoinLimit', 'Result']
        }),
        getResultCoin: build.query({
            query: () => `/calculating/getTop`,
            providesTags:[ 'Result']
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
            invalidatesTags: ['filterCalculating', 'Result']
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
        excelValue: build.query({
            query: () => '/excelValueRouter/findAll',
            providesTags: ['excelValue']
        }),
        changeExcelValue: build.mutation({
            query: body => {
                return {
                    url: '/excelValueRouter/update',
                    method: 'PUT',
                    body
                }
            },
            invalidatesTags: ['excelValue', 'Result']
        }),

    }),

})

export const {
    useExcelValueQuery,
    useChangeExcelValueMutation,
    useChangeLimitMutation,
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