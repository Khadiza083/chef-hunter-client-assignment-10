import React from 'react';
import Navigationbar from '../shared/Header/NavigationBar/Navigationbar';
import Footer from '../shared/Footer/Footer';
import { Card, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Container>
                <Card className='bg-light m-4 p-4'>
                    <h4 className='custom-color'>Question: <small>Difference between uncontrolled and controlled components.</small> </h4>
                    <p><small className='fw-semibold fs-5 custom-color'>Answer:</small> <small className='text-secondary'><br />

                        Uncontrolled Components:

                        <ul>
                            <li>In uncontrolled components, the form inputs maintain their own internal state.</li>

                            <li> The component doesn't keep track of the input's value or state.</li>

                            <li>Typically, you use a ref to access the input value when needed.</li>

                            <li>Uncontrolled components are simpler to implement and require less code.</li>

                            <li>They are useful for simple forms or when you need to access the input's value imperatively without updating the component's state.</li>
                        </ul>

                        Controlled Components:
                        <ul>
                            <li>In controlled components, the component state controls the value of the form inputs.</li>
                            <li>The component has a state variable that holds the input value, and an onChange event handler updates the state when the input value changes.</li>
                            <li>The input value is always derived from the component's state, and any changes to the input value are controlled by updating the state.</li>
                            <li>Controlled components provide more control and enable additional features like validation or dynamically disabling/enabling form elements.</li>
                        </ul>
                    </small></p>
                </Card>
                <Card className='bg-light m-4 p-4'>
                    <h4 className='custom-color'>Question: <small>How to validate React props using prototypes? </small> </h4>
                    <p><small className='fw-semibold fs-5 custom-color'>Answer:</small> <small className='text-secondary'><br />

                        To validate React props using prototypes, need to use the propTypes property available in the prop-types package.

                        First, need to make sure that the prop-types package installed in the project.
                        <p className='fw-semibold'>`npm install prop-types`</p>

                        <p>Then, in component file, import the PropTypes object from prop-types and define the propTypes property.</p>



                        <p>It's important to note that prop type validation is performed only in development mode. In production mode, the prop types are not checked to optimize performance. Therefore, it's a good practice to validate props during development to catch potential errors and ensure the correct usage of the components.</p>
                    </small></p>
                </Card>
                <Card className='bg-light m-4 p-4'>
                    <h4 className='custom-color'>Question: <small>Difference between nodeJS and expressJS?  </small> </h4>
                    <p><small className='fw-semibold fs-5 custom-color'>Answer:</small> <small className='text-secondary'><br />
                        NodeJS:
                        <ul>
                            <li>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.</li>

                            <li> It allows you to execute JavaScript code on the server-side, outside of the browser environment.</li>

                            <li>Node.js provides an event-driven, non-blocking I/O model that makes it efficient and scalable.</li>

                            <li>It has a vast ecosystem of packages (npm) that allows you to easily incorporate third-party libraries and modules into your applications.</li>

                            <li>Node.js can be used for building various types of applications, including web servers, command-line tools, real-time applications, APIs, and more.</li>
                        </ul>

                        ExpressJS:
                        <ul>
                            <li>Express.js is a web application framework built on top of Node.js.</li>
                            <li>It provides a set of tools and utilities for building web applications and APIs.</li>
                            <li>Express.js simplifies the process of building web servers and handling HTTP requests and responses.</li>
                            <li>It offers features like routing, middleware support, request handling, and template engines for server-side rendering.</li>
                        </ul>
                    </small></p>
                </Card>
                <Card className='bg-light m-4 p-4'>
                    <h4 className='custom-color'>Question: <small>What is custom hook? why will create a custom hook? </small> </h4>
                    <p><small className='fw-semibold fs-5 custom-color'>Answer:</small> <small className='text-secondary'><br />

                        <p>A custom hook in React is a JavaScript function that starts with the prefix "use" and allow to reuse stateful logic across multiple components. Custom hooks enable to extract component logic into a reusable function, making the code more modular and easier to maintain.</p>


                        There are several reasons why you might want to create a custom hook in React:
                        <ul>

                            <li>Reusability: Custom hooks allow you to extract and reuse common stateful logic across different components. This helps in reducing code duplication and promotes code reusability.</li>

                            <li>Modularity: By encapsulating specific functionality within a custom hook, you can make your code more modular and easier to understand. It separates concerns and allows you to focus on the specific logic of the component.</li>

                           <li> Code organization: Custom hooks provide a way to organize related logic and stateful behavior into a single function. This improves the maintainability and readability of your codebase.</li>

                            <li>Abstraction: Custom hooks can abstract away complex or repetitive code, making it easier to consume in different components. It simplifies the implementation and usage of common patterns or tasks.</li>

                            <li>Testability: Custom hooks can be easily tested in isolation, as they encapsulate specific functionality. This makes it easier to write unit tests and ensure the correctness of your code.</li>


                            By creating custom hooks, you can encapsulate and reuse specific functionality in a modular way, leading to cleaner and more maintainable code. It improves code reusability, organization, and testability, while also promoting best practices and reducing the likelihood of bugs.
                        </ul>
                    </small></p>
                </Card>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Blog;