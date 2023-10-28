function Hello(){
    const myfriendName = "kuldeep"
    const multiply =(a,b) =>a*b
    return(
        <section>
            <h1 className="heading">Hello my name is chandana</h1>
            <p>This is some content</p>
            <label htmlFor="name">Name</label>
            <input type="text" />
            <p>Friend name is {myfriendName}</p>
            <p>4*4 = {multiply(4,4)}</p>
        </section>
    )
}
export default Hello