import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from 'relay-runtime'

const HTTP_ENDPOINT = 'http://localhost:4000/graphql'

const fetchFn: FetchFunction = async (operation, variables) => {
  // https://javascript.info/fetch-crossorigin
  const resp = await fetch(HTTP_ENDPOINT, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept:
        'application/graphql-response+json; charset=utf-8, application/json; charset=utf-8',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      // query: operation.text, // <-- The GraphQL document composed by Relay
      variables,
      extensions: {
        persistedQuery: {
          version: 1,
          sha256Hash: operation.id,
        },
      },
    }),
  })

  return await resp.json()
}

function createRelayEnvironment() {
  return new Environment({
    network: Network.create(fetchFn),
    store: new Store(new RecordSource()),
  })
}

export const RelayEnvironment = createRelayEnvironment()
