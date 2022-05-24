const Post = ({subtitle, title, children}) => { // ao inves de props --> desestruturação, para não ficar chamando props.algumacoisa
    return(
        <div className="post">
            <div className="img-post"></div>
            <h5>{subtitle}</h5>
            <h3>{title}</h3>
            <p className="mt-1">
                {children}
            </p>
            <div className="flex pt-2">
                <div className="img-profile"></div>
                <div className="dsc-profile ml-2">
                    <h6 className="color-blue">Fulano de tal</h6>
                    <p>May 21, 2022 - 8 min read</p>
                </div>
            </div>
        </div>
    )
}

export default Post;