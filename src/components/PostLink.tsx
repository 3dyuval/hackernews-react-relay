import { useMutation } from 'react-relay'
import { graphql } from 'relay-runtime'

const PostLinkMutation = graphql`
  mutation PostLinkMutation($url: String!, $description: String!) {
    postLink(url: $url, description: $description) {
        id
    }
  }
`

export default function PostLink() {
  const [mutate, isMutating] = useMutation(PostLinkMutation)

  function onSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.target)

    mutate({
      variables: {
        url: form.get('url'),
        description: form.get('description'),
      },
    })
  }

  return (
    <>
      <form
        className={`flex-column ${isMutating ? 'opacity-60' : 'opacity-100'}`}
        onSubmit={onSubmit}
      >
        <div className="flex-row">
          <label htmlFor="url">url</label>
          <input
            type="url"
            name="url"
            id="url"
            defaultValue="http://yuval.live/"
          />
        </div>
        <div className="flex-row">
          <label htmlFor="description">description</label>
          <input
            type="textarea"
            name="description"
            id="description"
            defaultValue="Yuval"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
