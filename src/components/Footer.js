import React from 'react';

export const Footer = () =>{
        var d = new Date();
        var styles = {
            fontSize: 'calc(6px + 1vmin)',
            padding: '2vmin',

        }
        return (
            <div className={'container-fluid'}>
                <footer style={styles}>
                    <div className={"row"}>
                        <div className={'col'}>
                            Copyright &copy; {d.getFullYear()} Dominykas Jarutis
                        </div>
                    </div>
                </footer>
            </div>
        );
};

export default Footer;