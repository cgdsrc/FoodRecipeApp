import React from 'react';


const Footer = () => {


    return (
        <footer className="page-footer">
            <div className="footer-copyright">
                <div >
                    © {new Date().getFullYear()} Copyright Recipe
                    <a style={{ float: "right" }}
                        href='https://github.com/cgdsrc'>
                        Github Repo
                    </a>
                </div>
            </div>
        </footer>

    )

}

export default Footer;
