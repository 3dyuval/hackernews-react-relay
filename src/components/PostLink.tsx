import { useMutation } from 'react-relay'
import { useNavigate } from 'react-router-dom'
import { graphql } from 'relay-runtime'
import {useSnackbar} from 'notistack'

const PostLinkMutation = graphql`
  mutation PostLinkMutation($url: String!, $description: String!) {
    postLink(url: $url, description: $description) {
      id
    }
  }
`


export default function PostLink() {
  const [mutate, isMutating] = useMutation(PostLinkMutation)
  const navigate = useNavigate()
  
  const {enqueueSnackbar} = useSnackbar()
  function onSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.target)

    mutate({
      variables: {
        url: form.get('url'),
        description: form.get('description'),
      },
      onError: (error) => {
        enqueueSnackbar(error.toString(), { variant: "error"})
      },
      onCompleted: ({ postLink }) => {
        navigate(`/link/${postLink.id}`)
        enqueueSnackbar('Link posted!', { variant: "success"})

      },
    })
  }

  return (
    <>
      <form
        className={`flex-column gap-4 p-4 ${isMutating ? 'opacity-60' : 'opacity-100'}`}
        onSubmit={onSubmit}
      >
        <div className="flex-row">
          <label htmlFor="url">url</label>
          <input
            type="url"
            name="url"
            id="url"
            defaultValue="http://yuval.live/"
            required={true}
          />
        </div>
        <div className="flex-row">
          <label htmlFor="description">description</label>
          <input
            type="text"
            name="description"
            id="description"
            defaultValue="Yuval"
            required={true}
            minLength={16}
            maxLength={80}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
