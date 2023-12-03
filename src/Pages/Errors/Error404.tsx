import {intl} from "../../i18n/i18n";
import './error.css';

export default function Error404(){


    return(

<div className="error-content">
    <div className="container">
        <div className="row">
            <div className="col-md-12 ">
                <div className="error-text">
                    <h1 className="error">{intl.formatMessage({ id: 'error_404'})}</h1>
                    <div className="im-sheep">
                        <div className="top">
                            <div className="body"></div>
                            <div className="head">
                                <div className="im-eye one"></div>
                                <div className="im-eye two"></div>
                                <div className="im-ear one"></div>
                                <div className="im-ear two"></div>
                            </div>
                        </div>
                        <div className="im-legs">
                            <div className="im-leg"></div>
                            <div className="im-leg"></div>
                            <div className="im-leg"></div>
                            <div className="im-leg"></div>
                        </div>
                    </div>
                    <h4>{intl.formatMessage({ id: 'error_problem'})}</h4>
                    <p style={{ color: 'black' }}>{intl.formatMessage({ id: 'error_removed'})}</p>
                    <a href="/" className="btn btn-primary btn-round">{intl.formatMessage({ id: 'error_back'})}</a>
                </div>
            </div>
        </div>
    </div>
</div>
        
    );
};
