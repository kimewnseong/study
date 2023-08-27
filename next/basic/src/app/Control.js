'use client'
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export function Control() {
  const params = useParams();
  const router = useRouter();
  const {id} = params;
  let contextUI = null;

  const deleteTopic = async () => {
    await fetch(`http://localhost:9999/topics/${id}`, {
      method: 'DELETE'
    });
    router.push('/');
    router.refresh();
  }
  if (id) {
    contextUI = (
      <>
        <li><Link href={`/update/${id}`}>update</Link></li>
        <li><button onClick={deleteTopic}>delete</button></li>
      </>
    )
  }

  return (
    <ul>
      <li><Link href="/create">create</Link></li>
      {contextUI}
    </ul>
  );
}
