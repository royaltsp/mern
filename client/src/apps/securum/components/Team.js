import React from 'react'
import { Link } from 'react-router-dom'
import TeamMember from './TeamMember'

const members = [
  {number: 1, name: "Tandale Shubham", position: "Full Stack Developer"},
  {number: 2, name: "Tandale Shubham", position: "Full Stack Developer"},
  {number: 3, name: "Tandale Shubham", position: "Full Stack Developer"},
  {number: 4, name: "Tandale Shubham", position: "Full Stack Developer"},
  {number: 5, name: "Tandale Shubham", position: "Full Stack Developer"}
]

export default function Team() {
  return (
    <div>
      <section className="team-section spad">
        <div className="container">
          <div className="section-title text-center">
            <h2>Meet Our Team</h2>
            <p>
              Our experts in the field of crypto currency can always help you with
              any of your questions!
        </p>
          </div>
        </div>
        <div className="team-members clearfix row">
          <div className="col-lg-4">
            <TeamMember member={members[0]} />
          </div>
          <div className="col-lg-4">
            <TeamMember member={members[1]} />
          </div>
          <div className="col-lg-4">
            <TeamMember member={members[2]} />
          </div>
        </div>
        <div className="team-members clearfix row">
          <div className="col-lg-2">
          </div>
          <div className="col-lg-4">
            <TeamMember member={members[3]} />
          </div>
          <div className="col-lg-4">
            <TeamMember member={members[4]} />
          </div>
        </div>
      </section>
    </div>
  )
}
