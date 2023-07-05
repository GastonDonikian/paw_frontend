import {intl} from "../i18n/i18n";


export default function NothingHere(){

    return(

        <div className="container" style={{textAlign: 'center'}}>
        <img draggable="false" className="man-icon" src="./nothing-here.png" height={120} />
        
        <h3 className="title">{intl.formatMessage({ id: 'nothing_here'})}</h3>
        <p className="info">{intl.formatMessage({ id: 'come_back_later'})}</p>
    
</div>

        
    );
}