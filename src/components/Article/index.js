import Post from '../Post';

const Article = () => {
    return(
        <section className="container">
            <h3>Articles</h3>
            <div className="container-posts mt-5">
                <Post subtitle="tecnologia" title="O guia definitivo sobre o blog">
                    Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec sed metus in ligula vestibulum ornare. Suspendisse eu libero 
                    facilisis arcu consectetur consectetur at quis orci. Duis et libero nulla.
                </Post>

                <Post subtitle="fotografia" title="Quais as melhores cameras em 2022">
                    Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec sed metus in ligula vestibulum ornare. Suspendisse eu libero 
                    facilisis arcu consectetur consectetur at quis orci. Duis et libero nulla.
                </Post>

                <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria">
                    Lorem3 ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec sed metus in ligula vestibulum ornare. Suspendisse eu libero 
                    facilisis arcu consectetur consectetur at quis orci. Duis et libero nulla.
                </Post>
            </div>
        </section>
    )
}

export default Article;