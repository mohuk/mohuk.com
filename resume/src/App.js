import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Skills from './components/Skills';

class App extends Component {
  render() {

    const person = {
      avatar: '/img/umair.png',
      name: 'Muhammad Umair Khan',
      profession: 'Software Engineer',
      bio: '.',
      address: 'Karachi, Pakistan',
      social: [
        {name: 'twitter', url: 'https://twitter.com/mohukh'},
        {name: 'github', url: 'https://github.com/mohuk'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/mohuk/'}
      ],
      experience: [
        {jobTitle: 'Associate Architect', company: '10Pearls', startDate: 'Jan 2018', endDate: 'Present', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {jobTitle: 'Mentor', company: 'Thinkful Inc.', startDate: 'Apr 2015', endDate: 'Present', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {jobTitle: 'Technical Lead', company: '10Pearls', startDate: 'Jul 2015', endDate: 'Dec 2017', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {jobTitle: 'Senior Software Developer', company: '10Pearls', startDate: 'Jul 2014', endDate: 'Jun 2015', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {jobTitle: 'Software Developer', company: '10Pearls', startDate: 'Jul 2013', endDate: 'Jun 2014', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
        {jobTitle: 'Software Engineer', company: 'Gameview Studios', startDate: 'October 2012', endDate: 'Jun 2013', jobDescription: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      ],
      education: [
        {degree: 'BS (CS)', institution: 'IBA', startDate: 'Aug 2008', endDate: 'Jun 2012', description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'},
      ],
      certificate: [
        {name: 'FrontEnd Developer', institution: 'Platzi', date: 'Jan 2015', description: 'Aenean commodo ligula eget dolor. Aenean massa.' },
        {name: 'Backend Developer', institution: 'Platzi', date: 'Jan 2016', description: 'Aenean commodo ligula eget dolor. Aenean massa.' }
      ],
      skills: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'}
      ]
    };

    return (
      <header>
        <div className='wrapper'>
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social} />
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
