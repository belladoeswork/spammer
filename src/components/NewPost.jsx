"use client"

import { useRouter } from "next/navigation.js";
import { useState } from "react";



export default function NewPost() {
  const [postText, setPostText] = useState("");
  const router = useRouter();

  async function handleFormSubmit(event) {

    event.preventDefault();
    const response = await fetch(`/api/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: postText,
      }),
    });
    
    const info = await response.json();
    setPostText("");
    router.refresh();
  }

  function handleInputChanges(event) {
    setPostText(event.target.value);
  }

  return (
    <form id="new-post-form" onSubmit={handleFormSubmit}>
      <input className="typeme" placeholder="Say something ..." type="text" value={postText} onChange={handleInputChanges} />
      <button type="submit" id="create-post-button">
        Submit Post
      </button>
    </form>
  );
}
