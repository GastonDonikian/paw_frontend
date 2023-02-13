



export default function MyMessage (){

    return(
        
        <div className="chat-message-right " style={{display: 'flex', flexShrink: 0, flexDirection: 'row-reverse', marginLeft: 'auto'}}>
        <div>
        <img src="./profilePhoto.jpeg" height={40} />
            <div className="text-muted small text-nowrap mt-2" style={{fontSize: 'xx-small'}}>12:20 02/10</div>
        </div>
        <div className="flex-shrink-1  rounded py-2 px-3 mr-3" style={{minWidth: '150px', color: 'white', backgroundColor: '#0084FF'}}>
                  <div className="font-weight-bold mb-1" style={{color: 'white'}} >
                        You
                    </div>
               
                HOLA
        </div>
    </div>

    );
}