import * as Types from "./operations";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";

export const EntitiesDocument = gql`
  query entities {
    entityFind {
      name
      key
      description
      entityType {
        name
      }
      indicatorCount
      indicators {
        indicatorType {
          name
        }
        indicatorCategory
        futureRelevance
        scaleType {
          name
        }
      }
      measurementCount
    }
  }
`;

/**
 * __useEntitiesQuery__
 *
 * To run a query within a React component, call `useEntitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEntitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEntitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useEntitiesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.EntitiesQuery,
    Types.EntitiesQueryVariables
  >
) {
  return Apollo.useQuery<Types.EntitiesQuery, Types.EntitiesQueryVariables>(
    EntitiesDocument,
    baseOptions
  );
}
export function useEntitiesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.EntitiesQuery,
    Types.EntitiesQueryVariables
  >
) {
  return Apollo.useLazyQuery<Types.EntitiesQuery, Types.EntitiesQueryVariables>(
    EntitiesDocument,
    baseOptions
  );
}
export type EntitiesQueryHookResult = ReturnType<typeof useEntitiesQuery>;
export type EntitiesLazyQueryHookResult = ReturnType<
  typeof useEntitiesLazyQuery
>;
export type EntitiesQueryResult = Apollo.QueryResult<
  Types.EntitiesQuery,
  Types.EntitiesQueryVariables
>;
