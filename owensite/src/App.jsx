import { useState } from "react";
import './App.css'

function App() {

const meanNumber = () => {
  alert('idiot that was the wrong number')
}



/////////////////////////////////////The App/////////////////////////////////////
  return (
    <div className="App">
<nav className="navbar navbar-expand-lg navbar-dark bg-primary topNav">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Owner's Website</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor02">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="#">Home
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Marry Me</a>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div className="cards">
<div className="card border-primary mb-3 cardPrim">
  <div className="card-header">Hehe</div>
  <div className="card-body">
    <h4 className="card-title">She Cyber On My Punk</h4>
    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  </div>


    </div>
<div className="card border-secondary mb-3 cardSec">
  <div className="card-header">Hehe</div>
  <div className="card-body">
    <h4 className="card-title">She Cyber On My Punk Again but Over Here This Time</h4>
    <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
  </div>
</div>
    </div>

  <div className="emphTextBox">
  <h2>My Gifts and Hobbies</h2>
  <p className="text">I love to run red lights</p>
  <p className="text-primary">More and More content always</p>
  <p className="text-secondary">The general layout of this site is okay</p>
  <p className="text-warning">I want to add more text terminal vibes</p>
  <p className="text-danger">To be honest, I like node/more programmatic stuff rather than react and the frond end stuff, don't get me wrong tho, I still like it</p>
  <p className="text-success">The rest will be lorem ipsum stuff</p>
  <p className="text-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
  </div>

<div className="mainQuote">
  <figure>
  <blockquote className="blockquote">
    <p className="mb-0">Owen is so hot and sexy and awesome he is so cool and he knows JavaScript better than the Pope knows the bible</p>
    </blockquote>
      <figcaption className="blockquote-footer">
      Paul Rudd in <cite title="Source Title">Princess Diaries 2</cite>
      </figcaption>
    </figure>
  </div>

  <div className="contactForm">
  <form>
  <fieldset>
    <legend>Give Me All Your Info Now</legend>
    <div className="form-group row">
      <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
      <div className="col-sm-10">
        <input type="text" readonly="" className="form-control-plaintext" id="staticEmail" value="owen@mccomas.me"/>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1" className="form-label mt-4">Email address</label>
      <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
      <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else... or will we heh heh</small>
    </div>
    <div className="form-group">
      <label htmlFor="exampleSelect1" className="form-label mt-4">Pick a Number</label>
      <select className="form-select" id="exampleSelect1">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="exampleSelect2" className="form-label mt-4">Pick another if you want</label>
      <select multiple="" className="form-select" id="exampleSelect2">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="exampleTextarea" className="form-label mt-4">Everything you type here is uploaded to an api and everyone in the office laughs at it</label>
      <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
    </div>
    <div className="form-group">
      <label htmlFor="formFile" className="form-label mt-4">Feet Pics here, please use .svg or .jpeg</label>
      <input className="form-control" type="file" id="formFile"/>
    </div>
    <fieldset className="form-group">
      <legend className="mt-4">Buttons</legend>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1"/>
        <label className="form-check-label" htmlFor="optionsRadios1">
          Don't click this one
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2"/>
        <label className="form-check-label" htmlFor="optionsRadios2">
          Or this one
        </label>
      </div>
      <div className="form-check disabled">
        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled=""/>
        <label className="form-check-label" htmlFor="optionsRadios3">
          Option three is the right one
        </label>
      </div>
    </fieldset>
    <fieldset className="form-group">
      <legend className="mt-4">Checkboxes</legend>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Click them and unclick them too, no commitments
        </label>
      </div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Box
        </label>
      </div>
    </fieldset>
    <fieldset className="form-group">
      <legend className="mt-4">Switches</legend>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Flip if you think these are cool</label>
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Flip this one for good measure</label>
      </div>
    </fieldset>
    <fieldset className="form-group">
      <legend className="mt-4">Ranges</legend>
        <label htmlFor="customRange1" className="form-label">These can actually change intensity, try the bottom one vs this one</label>
        <input type="range" className="form-range" id="customRange1"/>
        <label htmlFor="disabledRange" className="form-label">Middle one</label>
        <input type="range" className="form-range" id="disabledRange" disabled=""/>
        <label htmlFor="customRange3" className="form-label">Small title</label>
        <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3"/>
    </fieldset>
    <button type="submit" className="btn btn-primary">Submit</button>
  </fieldset>
</form>
  </div>

  <div className="footQuote">
  <figure>
  <blockquote className="blockquote">
    <p className="mb-0">I'll actually flesh it out and take it seriously some other time, this is just the outline for now, the form is probably going to be in its own place or maybe not even exist, we will see, I just wanted to get some content down. Most of this will end up in their own componenets</p>
    </blockquote>
      <figcaption className="blockquote-footer">
      Paul Rudd in <cite title="Source Title">Princess Diaries 3</cite>
      </figcaption>
    </figure>
  </div>
    </div>

    
  )
}

export default App;
