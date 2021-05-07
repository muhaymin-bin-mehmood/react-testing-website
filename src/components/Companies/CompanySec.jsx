import React from "react";
import './company.css'
import CompanyLogo1 from '../../images/company-logo1.png';
import CompanyLogo2 from '../../images/company-logo2.png';
import CompanyLogo3 from '../../images/company-logo3.png';
import CompanyLogo4 from '../../images/company-logo4.png';
import CompanyLogo5 from '../../images/company-logo5.png';

const CompanySec = () => {
    return (
        <>
            <div className="compines-sec s-pad">
                <p className="text-center">Trusted by companies like</p>
                <ul className="list-inline companies-logo mb-4 text-center">
                    <li className="list-inline-item"><a href="#"><img src={CompanyLogo1} /></a></li>
                    <li className="list-inline-item"><a href="#"><img src={CompanyLogo2} /></a></li>
                    <li className="list-inline-item"><a href="#"><img src={CompanyLogo3} /></a></li>
                    <li className="list-inline-item"><a href="#"><img src={CompanyLogo4} /></a></li>
                    <li className="list-inline-item"><a href="#"><img src={CompanyLogo5} /></a></li>
                </ul>
            </div>
        </>
    );
};

export default CompanySec;
