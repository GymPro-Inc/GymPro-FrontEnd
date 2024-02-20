import React, { useState } from 'react';
import './Acoordion.css';
import { Minus, Plus } from '@phosphor-icons/react';

interface AccordionProps {
    sections: {
        title: string;
        content: string;
    }[];
}

//forma de usar o componente

// const accordionSections = [
//     { title: 'Seção 1', content: 'Conteúdo da Seção 1' },
//     { title: 'Seção 2', content: 'Conteúdo da Seção 2' },
//     { title: 'Seção 3', content: 'Conteúdo da Seção 3' },
// ];

// <div className='accordion'>
//     <h1>FAQ</h1>
//     <Accordion sections={accordionSections} />
// </div>

// css

// .accordion {
//     margin-left: 25%;
//     justify-content: center;
//     align-items: center;
//     width: 50%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }

const Accordion = ({ sections }: AccordionProps) => {

    const [activeIndex, setActiveIndex] = useState<number>();

    function toggleSection(index: number) {
        setActiveIndex(prev => prev === index ? undefined : index);
    }

    return (
        <div className='accordion-container'>
            {sections.map((section, index) => (
                <div key={index} style={{ width: '100%' }}>
                    <div className='accordion-section-title' onClick={() => toggleSection(index)}>
                        {section.title}
                        {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                    </div>
                    <div className={`accordion-section-content ${activeIndex === index ? 'active' : ''}`}>
                        {section.content}
                    </div>
                </div>
            ))}
        </div>
    );

};

export default Accordion;

