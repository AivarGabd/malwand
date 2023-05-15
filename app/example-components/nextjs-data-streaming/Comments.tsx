import EditableComments from "./EditableComments"

const commentsFetch = () =>
    new Promise((resolve) =>
        setTimeout(() => resolve(["Comments 1", "Comments 2", "Comments 3"]), 2000)
    )


const Comments = async () => {
    const comments = (await commentsFetch()) as string[]

    return (<EditableComments originalComments={comments} /> )
}

export default Comments