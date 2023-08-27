'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Update({params}) {
  const router = useRouter();
  const id = params.id;

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const refresh = async () => {
    const response = await fetch(`http://localhost:9999/topics/${id}`, {
      cache: 'no-store'
     });
    const topic = await response.json();
    setTitle(topic.title);
    setBody(topic.body);
  };

  useEffect(() => {
    refresh();
  }, [id]);

  const updateTopic = async (e) => {
    e.preventDefault();
    const resp = await fetch(`http://localhost:9999/topics/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({title, body}),
      headers: {
        "Content-Type": 'application/json'
      }
    });
    router.push(`/read/${id}`);
    router.refresh();
  };

  return (
    <form onSubmit={e => updateTopic(e)}>
      <h2>Update</h2>
      <div style={{marginBottom: 8}}>
        <input type="text" 
               name="title" 
               value={title}
               onChange={e => setTitle(e.target.value)} 
               placeholder="title" />
      </div>
      <div>
        <textarea name="body" 
                  value={body} 
                  onChange={e => setBody(e.target.value)} 
                  placeholder="body" />
      </div>
      <div>
        <input type="submit" value="Update" />
      </div>
    </form>
  );
}
