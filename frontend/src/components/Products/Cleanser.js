
export default function Cleanser(props) {
    const displayCleansers = props.cleansers.map((eachCleanser) => <li>{eachCleanser}</li>)

    return (
        <div className="cleanserspage">
            <div className='cleanserHeader'/>
            <h1>Cleansers</h1>
                <p></p>
          
            <ul>
                {displayCleansers}
            </ul>
           
       </div>
    )
}