// Blog JS 


import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container">
                <h1 className="text-center mt-5"> Ans to the Q. No.-1 </h1>

                <p className="mt-5">
                    <b> ifference between javascript and nodejs: <br /> </b>
                    JavaScript is a high-level programming language that has all the functionalities normally a programming language has. JavaScript is an Object-oriented programming language that can be used on the client-side as well as on the server-side and developers not only use it for creating web pages but also it is used for game development and mobile app development.It is basically used on the client-side.Javascript is capable enough to add HTML and play with the DOM.
                    <p>
                        <b>  The Node or Node.js  </b> usually represents a collection of methods and objects available to the JavaScript code when run in V8 or through the node interpreter. This is a JS library cum runtime. Furthermore, if you know about Java then Java is to JRE is to JVM in the same way JavaScript is to Node is to V8.Nodejs does not have capability to add HTML tags.We can run Javascript outside the browser with the help of NodeJS.Nodejs is used in server-side development.
                    </p>
                </p>
                <h1 className="text-center mt-5"> Ans to the Q. No.-2 </h1>
                <p className="mt-5">
                    <b>  Using Node.js </b> allows your front-end (i.e. React, Vue.js, even jQuery) developers to use the same programming language, JavaScript, as your backend developers. This allows for more cross-functional and agile development. Node.js usage is widespread and ongoing, and I highly recommend it for new development.The Node js framework can work with databases with both relational (such as Oracle and MS SQL Server) and non-relational databases (such as MongoDB). In this tutorial, we will see how we can use databases from within Node js applications.

                    <p>
                        <b> MongoDB is one</b> of the most popular databases used along with Node.js.MongoDB is built on a scale-out architecture that has become popular with developers of all kinds for developing scalable applications with evolving data schemas.

                        As a document database, MongoDB makes it easy for developers to store structured or unstructured data. It uses a JSON-like format to store documents. This format directly maps to native objects in most modern programming languages, making it a natural choice for developers, as they don’t need to think about normalizing data. MongoDB can also handle high volume and can scale both vertically or horizontally to accommodate large data loads.
                    </p>

                </p>
                <h1 className="text-center mt-5"> Ans to the Q. No.-3 </h1>
                <p className="mt-5">
                    <b>  SQL: <br />  </b>
                    <li>SQL databases are relational</li>
                    <li> hese databases have fixed or static or predefined schema</li>
                    <li> Tables with fixed rows and columns</li>
                    <li> Traditional RDBMS uses SQL syntax and queries to analyze and get the data for further insights. They are used for OLAP systems.</li>
                    <li>  	It should be configured for strong consistency.</li>
                    <b> NoSQL: <b /> </b>
                    <li> NoSQL databases are non-relational.</li>
                    <li> Document: JSON documents, Key-value: key-value pairs, Wide-column: tables with rows and dynamic columns, Graph: nodes and edges</li>
                    <li> 	They have dynamic schema</li>
                    <li> NoSQL database system consists of various kind of database technologies. These databases were developed in response to the demands presented for the development of the modern application.</li>
                    <li>It depends on DBMS as some offers strong consistency like MongoDB, whereas others offer only offers eventual consistency, like Cassandra.</li>
                </p>
                <h1 className="text-center mt-5"> Ans to the Q. No.-4 </h1>
                <p className="mt-5">
                    JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server.
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.

                    A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: <br />  xxxxx.yyyyy.zzzzz. <br />

                    Once decoded, you will get two JSON strings:

                    The header and the payload.
                    The signature.
                </p>
            </div>
        </div>
    );
};

export default Blog;