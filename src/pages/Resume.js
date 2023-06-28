import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardFooter,
  MDBListGroup,
  MDBListGroupItem,
  
} from "mdb-react-ui-kit";



export default function Resume() {
  return (
    <div>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Competencies</MDBCardTitle>
          {/* download resume */}
          <a
            href="https://doc-0o-9c-docs.googleusercontent.com/docs/securesc/6ti7d11itstn13jhugqpjv09io93so28/7ovq9m6s3if6conmfnmqp8hh6oinb2i0/1687910775000/09026350932814649123/09026350932814649123/1-TLjYzWrz-K2DyPrsxMu6B1jm-4Bqy__?e=download&ax=ADWCPKA0QAO9ej1nGve-bSRVjsHCiVt0K6mzMbvNqyncThCs18IgLkpABD1MfyX1H6cF5urDjz_6u6HB9HVYdQfPXLOutKow809-HZmkfN0vVGfalGSkH3Yu6D9nn4X6gGy6UKU2DQXhEVUkn-MEvr8hj4eApM-fIBbJRx7hych1KHnDetdou4ieFObt7CiTJdy00aKdyaRoDr_Bxbdzxf99DjJ-ut3RN8e4NbTtLCNE6YVlo42kCCl3ryNJfmmTrd73EPv7ifTYyIorzF7V4T4swxsrcGw3vdL_QxRWHFTlljdzu21SK-CO-vi37vy2NckrFc6UjWCoozUP76XVjudB6MUG8RioyLV6buAwRAwYhxr6dFkJSNWCKwgp3_5dUI2BPU5LQz-4yDbPckbYKzkI62gL1EbRZRv484tP4hKxKrVyPXbKlDgEL52O7X2TipjkLM0Lej1ZDADNxxO7k-e81LLY0IV8rFhWLlmVu2sRPxnuw56xeaOF7z6bYFDrl8ULpxdzSsz92j8QnBgm0mlhdk_RGCgj1ye6FvCevxOK3q2gmkk2AzTb3gy8ggCi4QG80OeFs1KfH_7RUtaIy6vLfqOtyj-76KgkaLBm4xpren8HqbooGlhfRDpn3NrAFC23jhnygI9G5gzVtUhTnWL1fTAR5o99gmPw7iKMUHy6pbNlvmum4G6mB74Bz49Fs8cugH1VA-R0ziFW03yAjoGqdAu1sTISMYPiHbVyYd19nt_dp2zp2zuOQmrMSVF_Rmhh2wPR_0a5Vi5Z9Snl_Qr95QH1Z6-vB4ZrZkLtMVRmD0300BP4M_NgjNFLRDNxPmWj-mJDMx_3NFWr8H198Oy4-1s214_c_qnyuUpaE3xIuApNXW4b16iPwypPAsKKstg&uuid=2b721fcf-019b-4279-9c84-4d1c29bb7c80&authuser=0&nonce=vu70fsv1gl87i&user=09026350932814649123&hash=c3fkfnavo3d0n6ft53g7vscvh0pogoco"
            target={"_blank"}
            download
            className="btn btn-primary"
            rel="noreferrer"
          >
            Click for my resume
          </a>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBListGroup flush>
          <MDBListGroupItem>
            {/* competencies */}
            <div>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Front-End
              </span>
              <br />
              HTML <br />
              CSS <br />
              Javascript <br />
              JQuery <br />
              Responsive Design <br />
              React <br />
              Boostrap
            </div>
          </MDBListGroupItem>
          <MDBListGroupItem>
            {" "}
            <div>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Back-End
              </span>{" "}
              <br />
              API <br />
              Node <br />
              Express <br />
              MySQL,Sequelize <br />
              MongoDB, Mongoose <br />
              REST <br />
              GraphSQL
            </div>
          </MDBListGroupItem>
        </MDBListGroup>
        {/* <MDBCardFooter>Card footer</MDBCardFooter> */}
      </MDBCard>
    </div>
  );
}
