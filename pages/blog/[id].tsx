import Link from "next/link";

export default function PostPage ({post}){
  console.log(post)
  return (
    <>
       <Link href='/'>
        <a className='btn btn-back'>Go Back</a>
      </Link>
      <h1>{post.title}</h1>
      <p>{post.body}.</p>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }))

  return { paths, fallback: false }
}


export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`http://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();

  return {
      props: { post: data },
  };
};