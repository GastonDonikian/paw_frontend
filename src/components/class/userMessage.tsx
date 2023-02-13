export default function UserMessage() {

    return (
        <div className="chat-message-left " style={{display: 'flex', flexShrink: 0, }}>
            <div>

            <img src="./profilePhoto.jpeg" height={40} />
                    <div className="text-muted small text-nowrap mt-2" style={{fontSize: 'xx-small'}}>20:35 02/09</div>
            </div>
            <div className="flex-shrink-1  rounded py-2 px-3 ml-3" style={{ backgroundColor: '#DDDDDD'}}>
                <div className="font-weight-bold mb-1">Nombre usuario</div>
                Mensaje
            </div>
        </div>

    );
}