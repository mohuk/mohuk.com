import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Award';
import Skills from './components/Skills';
import Award from './components/Award';

class App extends Component {
  render() {

    const person = {
      avatar: '/img/umair.png',
      name: 'Muhammad Umair Khan',
      profession: 'Software Engineer',
      bio: 'I am a Software Engineer focused on developing & shipping full stack Javascript apps for the web platform backed by AWS/Azure. I am very fond of the Docker platform and often talk about it actively in local community meetups.',
      address: 'Karachi, Pakistan',
      social: [
        {name: 'twitter', url: 'https://twitter.com/mohukh'},
        {name: 'github', url: 'https://github.com/mohuk'},
        {name: 'linkedin', url: 'https://www.linkedin.com/in/mohuk/'}
      ],
      experience: [
        {jobTitle: 'Associate Architect', company: '10Pearls', startDate: 'Jan 2018', endDate: 'Present', jobDescription: 'Responsible for creating and maintaining the overall structure and layout of a software system\'s components and their interfaces within and outside of the system.'},
        {jobTitle: 'Mentor', company: 'Thinkful Inc.', startDate: 'Apr 2015', endDate: 'Present', jobDescription: 'Conduct 1-on-1 mentorship sessions with enrolled students from around the globe. Resolve issues and update course curricullum as required.'},
        {jobTitle: 'Community Leader', company: 'Docker Karachi', startDate: 'Jan 2018', endDate: 'Present', jobDescription: 'Organizing and conduction quarterly community meetups. Correspond with the community leaders from around the globe.'},
        {jobTitle: 'Software Engineer', company: 'Gameview Studios', startDate: 'October 2012', endDate: 'Jun 2013', jobDescription: 'Involved in programming of games on Mobile/Tablet Platforms (Android/iOS) through cross platform engines based out of Javascript.'},
      ],
      education: [
        {degree: 'BS (CS)', institution: 'IBA', startDate: 'Aug 2008', endDate: 'Jun 2012', description: 'Completed Bachelors of Science in Computer Sciene with majors in Software Engineering.'},
        {degree: 'O & A\' Levels', institution: 'Beaconhouse School System', startDate: 'Jan 2004', endDate: 'Aug 2007', description: 'Completed GCE O & A Levels with majors in Physics, Chemistry and Mathematics.'},
      ],
      awards: [
        {name: 'Gold Medal', institution: 'IBA', date: 'Aug 2012', description: 'Was awarded a best CS/MIS project Gold Medal on completion of BS(CS).' },
        {name: 'Most Valuable Contributor', institution: '10Pearls', date: 'Jan 2016', description: 'Received MVC for the year 2016 in appreciation of being an outstanding team player and consistently exceeding expectations.' }
      ],
      skills: [
        {name: 'Javascript', percentage: '95%'},
				{name: 'Docker', percentage: '80%'},
        {name: 'MongoDB', percentage: '80%'},
        {name: 'Git', percentage: '95%'},
        {name: 'NodeJS', percentage: '95%'},
        {name: 'Amazon Web Services', percentage: '50%'},
        {name: 'Angular', percentage: '80%'}
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
                <Award awards={person.awards} />
                <Skills skills={person.skills} />
              </div>
          </div>

        </div>
      </header>
    );
  }
}

export default App;
