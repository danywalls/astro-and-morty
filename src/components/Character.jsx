const Character = ({ name, image, children }) => {
    return (
        <div className="character">
                <img src={image} alt={name} width="300px" height="300px" />
            {children}
        </div>
    )
}
export default Character

