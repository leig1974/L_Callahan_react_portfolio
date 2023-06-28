import React from "react";
import "../pages";
import {
  MDBCard,
  
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

// profile picture and about me
import ProfilePic from "../assets/Leyla.png";
// import resume from "../../public/resum"

export default function AboutMe() {
  return (
    <div>
      <div>
        <div className="aboutMe aboutMeContainer">
          <img
            src={ProfilePic}
            className="profile-picture"
            alt="profile"
            style={{
              paddingTop: "35px",
            }}
          />
          <p
            className="aboutMe text"
            style={{
              paddingTop: "35px",
              fontSize: "20px",
            }}
          >
            Hi there, I'm Leyla, and I am a frontend web developer.
            {/* <br />
        I am excited to solve real-world problems with my applications.
        <br />
        I have recently completed a full-stack web development course at the
        University of Birmingham.
        <br />
        This is where I gained invaluable experience in React JS, Javascript{" "}
        <br />
        TypeScript, APIs as well as HTML and CSS. */}
            <br />
            You are welcome to look around.
            <br />
            Email me at leyla@gmail.com
            <br />
            <span>
              <a href="https://github.com/leig1974">GitHub {"   "} </a>
            </span>
            <span>
              <a href="https://www.linkedin.com">
                LinkedIn {"   "}
              </a>
            </span>
            <span>
              <a href="https://doc-0o-9c-docs.googleusercontent.com/docs/securesc/6ti7d11itstn13jhugqpjv09io93so28/7ovq9m6s3if6conmfnmqp8hh6oinb2i0/1687910775000/09026350932814649123/09026350932814649123/1-TLjYzWrz-K2DyPrsxMu6B1jm-4Bqy__?e=download&ax=ADWCPKA0QAO9ej1nGve-bSRVjsHCiVt0K6mzMbvNqyncThCs18IgLkpABD1MfyX1H6cF5urDjz_6u6HB9HVYdQfPXLOutKow809-HZmkfN0vVGfalGSkH3Yu6D9nn4X6gGy6UKU2DQXhEVUkn-MEvr8hj4eApM-fIBbJRx7hych1KHnDetdou4ieFObt7CiTJdy00aKdyaRoDr_Bxbdzxf99DjJ-ut3RN8e4NbTtLCNE6YVlo42kCCl3ryNJfmmTrd73EPv7ifTYyIorzF7V4T4swxsrcGw3vdL_QxRWHFTlljdzu21SK-CO-vi37vy2NckrFc6UjWCoozUP76XVjudB6MUG8RioyLV6buAwRAwYhxr6dFkJSNWCKwgp3_5dUI2BPU5LQz-4yDbPckbYKzkI62gL1EbRZRv484tP4hKxKrVyPXbKlDgEL52O7X2TipjkLM0Lej1ZDADNxxO7k-e81LLY0IV8rFhWLlmVu2sRPxnuw56xeaOF7z6bYFDrl8ULpxdzSsz92j8QnBgm0mlhdk_RGCgj1ye6FvCevxOK3q2gmkk2AzTb3gy8ggCi4QG80OeFs1KfH_7RUtaIy6vLfqOtyj-76KgkaLBm4xpren8HqbooGlhfRDpn3NrAFC23jhnygI9G5gzVtUhTnWL1fTAR5o99gmPw7iKMUHy6pbNlvmum4G6mB74Bz49Fs8cugH1VA-R0ziFW03yAjoGqdAu1sTISMYPiHbVyYd19nt_dp2zp2zuOQmrMSVF_Rmhh2wPR_0a5Vi5Z9Snl_Qr95QH1Z6-vB4ZrZkLtMVRmD0300BP4M_NgjNFLRDNxPmWj-mJDMx_3NFWr8H198Oy4-1s214_c_qnyuUpaE3xIuApNXW4b16iPwypPAsKKstg&uuid=2b721fcf-019b-4279-9c84-4d1c29bb7c80&authuser=0&nonce=vu70fsv1gl87i&user=09026350932814649123&hash=c3fkfnavo3d0n6ft53g7vscvh0pogoco">
                CV{"   "}
              </a>
            </span>

            <br />
          </p>
        </div>
        <MDBCard
          alignment="center"
          className="myBackgroundcard w-auto p-3 text-start"
        >
          <MDBCardHeader>Let's work together</MDBCardHeader>
          <MDBCardBody style={{ backgroundColor: "#F2FCFA" }}>
            <MDBCardTitle>My Background</MDBCardTitle>
            <MDBCardText className="myBackgroundText">
              Full-stack web developer with a teaching background. Focused on building practical, intuitive and user-friendly web applications which solve real-world problems, with emphasis on mobile-first design and development. Experience in JavaScript, Bootstrap, React.js, MongoDB, NoSQL, SQL, Express.js, React j.s and Node.js, as well as responsive web design. Soft-skills gained from previous employment include project management, leadership, teamwork and communication. I’m excited to use my skills as part of a quality-driven team to build better experiences for web-users.
              <br />
              <br />

              My other interests include language learning, especially new languages and sports. I have also been learning Piano lessons. I have a big dog to take care of. I love taking care of my dog.
            </MDBCardText>

          </MDBCardBody>
          <MDBCardFooter className="text-muted"></MDBCardFooter>
        </MDBCard>
      </div>
    </div>
  );
}
