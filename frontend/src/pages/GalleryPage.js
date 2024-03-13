import React from 'react';
import ImageGallery from 'react-image-gallery';
import { BsCollectionPlay } from "react-icons/bs";

function GalleryPage(){
    const images = [
        {
            original:   'images/Auckland-war-memorial-museum.jpg',
            thumbnail:  'images/Auckland-war-memorial-museum.jpg',
            description: 'Me standing in front of the Auckland War Memorial Museum in Auckland, New Zealand.',
            originalHeight: '450px'
        },
        {
            original:   'images/pc_building_hobby.png',
            thumbnail:  'images/pc_building_hobby.png',
            description: 'The first PC I built around 2019',
            originalHeight: '450px'
        },
        {
            original:   'images/pc_building_hobby_2.jpg',
            thumbnail:  'images/pc_building_hobby_2.jpg',
            description: 'The most recent PC I built in April 2023.',
            originalHeight: '450px'
        },
        {
            original:   'images/hovercraft-project-engineering.jpg',
            thumbnail:  'images/hovercraft-project-engineering.jpg',
            description: 'Fully functional hovercraft for an engineering project in 2021.',
            originalHeight: '450px'
        },
        {
            original:   'images/flowchart-psuedo-code-for-hovercraft.png',
            thumbnail:  'images/flowchart-psuedo-code-for-hovercraft.png',
            description: 'Flowchart of pseudocode for the hovercraft.',
            originalHeight: '450px'
        },
        {
            original:   'images/calculator_terminal_app.png',
            thumbnail:  'images/calculator_terminal_app.png',
            description: 'Calculator terminal app with menu.',
            originalHeight: '450px'
        },
        {
            original:   'images/customer-portfolio-interactive-project.png',
            thumbnail:  'images/customer-portfolio-interactive-project.png',
            description: 'An interactive customer portfolio terminal application.',
            originalHeight: '450px'
        },
        {
            original:   'images/customer-portfolio-interactive-project-option3.png',
            thumbnail:  'images/customer-portfolio-interactive-project-option3.png',
            description: "Output of a customer's information for the portfolio app.",
            originalHeight: '450px'
        },
        {
            original:   'images/matrix_class_template_project.png',
            thumbnail:  'images/matrix_class_template_project.png',
            description: 'Matrix class code in C++ for a matrix calculator project.',
            originalHeight: '450px'
        },
        {
            original:   'images/matrix_project_transpose_ex.png',
            thumbnail:  'images/matrix_project_transpose_ex.png',
            description: 'Matrix transpose function in action.',
            originalHeight: '450px'
        }
    ];
    return(
        <>
        <section>
          <h2>Travels, Hobbies, and Past Projects<BsCollectionPlay className='icn'/></h2>
        </section>
    
        <article>
            <ImageGallery items={images} />
        </article>
      </>
    );
}

export default GalleryPage;