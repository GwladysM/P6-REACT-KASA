function Host({ hostName, hostPicture }) {
    return (
        <div className="logement__host">
            <p>{hostName}</p>
            <img src={hostPicture} alt="The host" />
        </div>
    )
}

export default Host