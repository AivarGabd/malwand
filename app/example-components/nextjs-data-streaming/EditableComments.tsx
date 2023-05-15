'use client'

import { useState } from "react"


const EditableComments = ({ originalComments }: { originalComments: string[] }) => {

    const [newComment, setNewComment] = useState('')
    const [comments, setComments] = useState(originalComments)

    return (
        <>
            <div>
                {comments.map((comment) => (
                    <li key={comment}>{comment}</li>
                ))}{" "}
            </div>
            <div className="border-2 w-fit">
                <input
                    type="text"
                    name=""
                    id=""
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                />
            </div>
            <div>
                <button onClick={() => {
                    setComments([...comments, newComment])
                    setNewComment("")
                }}>
                    Add comment
                </button>
            </div>
        </>
    )
}

export default EditableComments