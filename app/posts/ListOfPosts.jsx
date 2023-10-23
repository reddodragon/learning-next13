import Link from "next/link";
import LikeButton from "./LikeButton";

/*
getStaticProps
    return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>res.json());

getServerSideProps
        return fetch("https://jsonplaceholder.typicode.com/posts", {cache:'no-store'}).then((res) =>res.json());

incremental static regeneration
    return fetch("https://jsonplaceholder.typicode.com/posts", 
    {next:{
        revalidate: 60
    }})
    .then((res) =>
        res.json()
    );
*/


const fetchPosts = () => {
    /* 
    el cache no-store hace que no se genere un sitio estatico y que se haga el fetching desde el server cada vez que entro a la pagina
    otra forma pero que siga siendo estatico es con el incremental static
    {next:{
        revalidate: 60
    }} 
    esto va a regenerar el sitio estatico dependiendo los segundos que indiques
    */
    return fetch("https://jsonplaceholder.typicode.com/posts", 
    {next:{
        revalidate: 60
    }})
    .then((res) =>
        res.json()
    );
};
const ListOfPosts = async () => {

    const posts = await fetchPosts();


    
    return posts.slice(0, 5).map((post) => (
        <article className="my-3" key={post.id}>
            <Link href='/posts/[id]' as={`/posts/${post.id}`}>
                <h2 className="font-black text-xl text-cyan-600">{post.title}</h2>
                <p>{post.body}</p>
                <LikeButton id={post.id}/>
            </Link>
        </article>
    ));
};

export default ListOfPosts;
