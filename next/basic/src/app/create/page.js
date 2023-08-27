'use client'
import { useRouter } from 'next/navigation';

export default function Create() {
  const router = useRouter();

  const createTopic = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const resp = await fetch('http://localhost:9999/topics', {
      method: 'POST',
      body: JSON.stringify({title, body}),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    const topic = await resp.json();
    const lastId = topic.id;
    router.push(`/read/${lastId}`);
    router.refresh();
  };

  return (
    <form onSubmit={e => createTopic(e)}>
      <h2>Create</h2>
      <div style={{marginBottom: 8}}>
        <input type="text" name="title" placeholder="title" />
      </div>
      <div>
        <textarea name="body" placeholder="body" />
      </div>
      <div>
        <input type="submit" value="Create" />
      </div>
    </form>
  );
}
