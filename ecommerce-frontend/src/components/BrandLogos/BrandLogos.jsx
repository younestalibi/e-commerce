import React from 'react';
import './BrandLogos.css';
import logo from '../../assets/logo.png'
import logo1 from '../../assets/logo1.png'
import CenteredTitle from '../CenteredTitle/CenteredTitle';

const BrandLogos = () => {
    const brands = [
        { name: 'Brand1', logo :logo1},
        { name: 'Brand2', logo},
        { name: 'Brand3', logo :logo1},
        { name: 'Brand2', logo},
        { name: 'Brand3', logo :logo1},
        { name: 'Brand2', logo},
        { name: 'Brand3', logo :logo1},
        // Add as many brands as you like
    ];

    return (
        <div>
            <CenteredTitle title='BRANDS FOR YOU'/>
            <div className="brand-logos">
                {brands.map((brand, index) => (
                    <img key={index} src={brand.logo} alt={brand.name} className="brand-logo" />
                ))}
            </div>
        </div>
       
    );
};

export default BrandLogos;
