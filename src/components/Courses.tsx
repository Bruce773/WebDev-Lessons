import * as React from 'react';
import { Link } from 'react-router-dom';

export const Courses: React.SFC = () => (
  <>
    <div className="sm-spacer" />
    <div className="course">
      <h2 className="course-header">JavaScript</h2>
      <div className="course-description">
        This course covers everything you'll need to start coding in the
        JavaScript language. We begin by introducing the tools you'll use as a
        21st-century web developer. You'll learn how to work with IDEs, Git and
        GitHub, the Terminal, and of course JavaScript! We then cover the
        fundamentals of the JavaScript language from functions to data
        structures and beyond. You'll learn:
        <ul className="course-benefits">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <li>Functions</li>
                <li>Data Types in JavaScript</li>
                <li>Objects and Arrays</li>
              </div>
              <div className="col-md">
                <li>Iteration</li>
                <li>Debugging skills</li>
                <li>And much more</li>
              </div>
            </div>
          </div>
        </ul>
      </div>
      <span className="course-level" />
      <Link to="/javascript/">
        <button>Start Course</button>
      </Link>
    </div>
    <div className="course">
      <h2 className="course-header">HTML</h2>
      <div className="course-description">
        This course is perfect for brand new web developers who have little to
        no experience. Learn how to fluently program in the language used at the
        heart of every website. This course covers:
        <ul className="course-benefits">
          <div className="container">
            <div className="row">
              <div className="col-md">
                <li>
                  Over 20 different HTML tags including:
                  <ul className="course-benefits-sub">
                    <li>Headers</li>
                    <li>Anchor tags</li>
                    <li>Lists</li>
                    <li>Tables</li>
                    <li>Some HTML styling tags</li>
                  </ul>
                </li>
              </div>
              <div className="col-md">
                <li>Some Git and GitHub</li>
                <li>The HTML Skeleton</li>
                <li>HTML Semantics</li>
                <li>Tag properties</li>
                <li>And much more</li>
              </div>
            </div>
          </div>
        </ul>
        <span className="course-level" />
        <Link to="/html/">
          <button>Start Course</button>
        </Link>
      </div>
    </div>
  </>
);
