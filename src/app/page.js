import NewPost from "@/components/NewPost.jsx";
import Posts from "@/components/Posts.jsx";


export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <main>
      <h1 className="title">Spammer</h1>
      <NewPost />
      <Posts />
    </main>
  );
}


// "use client"

// import { useEffect } from 'react';

// import NewPost from "@/components/NewPost.jsx";
// import Posts from "@/components/Posts.jsx";
// import { updateUI } from '@/components/Posts.jsx';


// export default function Home() {
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       fetch('/api/posts', {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }).then((response) => {
//         if (response.ok) {
//           response.json().then((data) => {
//             // Update the UI based on the received data
//             updateUI(data);
//           });
//         }
//       });
//     }, 5000); // Check for updates every 5 seconds

//     return (() => {
//       clearInterval(intervalId);
//     });
//   }, []);

//   return (
//     <main>
//       <h1 className="title">Spammer</h1>
//       <NewPost />
//       <Posts />
//     </main>
//   );
// }