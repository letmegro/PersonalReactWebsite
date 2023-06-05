import './footer.css';
// add hyperlinks to detailedd pages in the footer.
function Footer(){
    return (
        <div className='footer'>
            <p className="designedBy">
                Site Designed By: Nicolas Korsunski
            </p>
            <div className='link-container'>
                <a className='contact' href="sf">
                    <p>
                        Contact
                    </p>
                </a>
                <a className='contact' href="gd">
                    <p>
                        About me
                    </p>
                </a>
            </div>
        </div>
    );
}

export default Footer;