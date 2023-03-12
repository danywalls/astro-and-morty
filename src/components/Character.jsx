const Character = ({ name, image, children }) => {
    return (
        <div className="character">
            <img src={image} alt={name} width="300px" height="300px" />
            <h3>{ name} from react</h3>
            {children}
        </div>
    )
}
export default Character

