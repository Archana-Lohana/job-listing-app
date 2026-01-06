import React from 'react'
import Deck from './components/Deck'


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.D6P-BO32wCApcPIIjt6p5wHaHa?pid=Api&h=220&P=0",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.N6q1UQrBEZ2PVWg-HcjjyQHaHa?pid=Api&h=220&P=0",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.dLl9UyA6y1GTydI-npnoygHaHv?pid=Api&h=220&P=0",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$50/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.nFmxRohKXckqXMrh7uy3CgHaHa?pid=Api&h=220&P=0",
    companyName: "Netflix",
    datePosted: "3 weeks ago",
    post: "UI Engineer",
    tag1: "Contract",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://tse4.mm.bing.net/th/id/OIP.D2RNn1GFKt44SfQaLqFlaQHaHa?pid=Api&h=220&P=0",
    companyName: "Apple",
    datePosted: "1 week ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://tse1.mm.bing.net/th/id/OIP.PohI0BYe-btWL3zFccgohgHaHa?pid=Api&h=220&P=0",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Noida, India"
  },
  {
    brandLogo:"https://tse1.mm.bing.net/th/id/OIP.Gh8k1gS5C-mc1W9h1Z3LSQHaEK?pid=Api&h=220&P=0",
    companyName: "Tesla",
    datePosted: "6 weeks ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://tse2.mm.bing.net/th/id/OIP.uFzCoRSrVjMG8a6rTLc2bgHaHa?pid=Api&h=220&P=0",
    companyName: "NVIDIA",
    datePosted: "2 months ago",
    post: "AI Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$90/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo:"https://tse2.mm.bing.net/th/id/OIP.wD_fKi6K-okPUivWxldiggHaEK?pid=Api&h=220&P=0",
    companyName: "IBM",
    datePosted: "3 days ago",
    post: "Cloud Engineer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://tse3.mm.bing.net/th/id/OIP.k9DC5ldeiTv8SQc3HQvvcgHaGk?pid=Api&h=220&P=0",
    companyName: "Oracle",
    datePosted: "8 weeks ago",
    post: "Java Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$58/hr",
    location: "Mumbai, India"
  }
];

return(
  <div className="parent">
{jobOpenings.map((elem,idx) => {
  
  return <div key={idx}>
  <Deck company={elem.companyName}  datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} brandLogo={elem.brandLogo}  pay={elem.pay} tag2={elem.tag2} location={elem.location} />
  </div>
})}
     </div>
    )
  }

export default App
