import './footer.css';
// add hyperlinks to detailedd pages in the footer.
function Footer(){
    return (
        <div className='footer'>
            <p className="designedBy">
                Site Designed By: Nicolas Korsunski
            </p>
            <a href="sf">
                <p className='contact'>
                    Contact
                </p>
            </a>
            <a href="gd">
                <p>
                    About me
                </p>
            </a>
        </div>
    );
}

export default Footer;