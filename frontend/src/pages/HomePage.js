import React from "react";
import { TbTargetArrow } from "react-icons/tb";
import { PiDiamondsFourFill } from "react-icons/pi";

function HomePage() {
  return (
    <section class="homeSection">
      <h2>Welcome to my Web Development Portfolio!</h2>

      <article>
        <h3>About this app<PiDiamondsFourFill className="icn" /></h3>
        <p>
          This application has been the product of many technologies, this stack
          is called MERN which utilizes a combination of client side (front end)
          and server side (back end) web development. “MERN” stands for MongoDB,
          Express.js, React, and Node.js, which are some core technologies used
          for this application. Other technologies include HTML, CSS, Mongoose, and NPM.
          Below is a list of technologies and a short summary of their descriptions:
        </p>
        <dl>
            <dt>MongoDB:</dt>
            <dd>A NoSQL database used for storing and retrieving data.</dd>
            <dt>Express.js:</dt>
            <dd>A web application framework that runs on Node.js simplifies web and API development. </dd>
            <dt>React:</dt>
            <dd>A JavaScript library used for building the UI of an applications front-end with components.  </dd>
            <dt>Node.js:</dt>
            <dd>A JavaScript runtime environment for server-side programming and development.</dd>
            <dt>HTML:</dt>
            <dd>A markup language for defining the structure of web content.</dd>
            <dt>CSS:</dt>
            <dd>A style sheet language used for the look and presentation of documents written in HTML or XML.</dd>
            <dt>Mongoose:</dt>
            <dd>An Object Data Modeling or ODM for short, library for MongoDB and Node. It mediates objects in code and how they are handled in MongoDB</dd>
            <dt>NPM:</dt>
            <dd>A package manager for JavaScript that is used for publishing, downloading packages, and for hosting packages. </dd>
        </dl>
        <h3>Goals<TbTargetArrow className="icn"/></h3>
        <p>
          My goals in computer science and software engineering include gaining
          important knowledge and efficiently grasping core concepts related to
          computing and algorithms. I aim to master several programming
          languages such as C++, C, Python, and JavaScript as I am already quite
          familiar. I am also keen on working with new emerging technologies and
          frameworks. Furthermore, I intend to be a well and full rounded
          programmer who can tackle any challenge or project.
        </p>
      </article>
    </section>
  );
}

export default HomePage;
