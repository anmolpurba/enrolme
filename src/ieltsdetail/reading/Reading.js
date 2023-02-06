import React from 'react'
import "./Reading.css"

function Reading() {
  return (
  
      <div className='container'>
        <div className="image" style={{display:"flex",justifyContent:"center"}}>
          <img src="https://yourielts.net/images/Reading/how-to-prepare-for-ielts-reading-general.png" style={{height:"200px"}}  alt="" />
        </div>
        <h1><span style={{color:"#1aa5e5"}}>IELTS</span> Reading Test Tips and Advice</h1>
        <p>The General and Academic Training Reading tests are usually graded to the same level. However, the texts mentioned in the Academic Reading Test can be more challenging as compared to those mentioned in the General Training Test.Test duration: 60 minutes (for both Academic and General tests)</p>

        <h1>What is the <span style={{color:"#1aa5e5"}}>IELTS</span> Reading Test Format (Academic)?</h1>
        <p>In your Reading test (Academic), you will find three sections, each having one long text. These texts are excerpts borrowed from either books, magazines or newspapers. These are usually aroundtopics of general interest, and so you need not be specialist to answer them. These excerpts can range from being factual and descriptive to analytical and discursive. They may also have non-verbal elements like graphs, diagrams or illustrations. If in case, there are jargons or technical terms used, a glossary will be provided.</p>

        <h1><span style={{color:"#1aa5e5"}}>IELTS</span> Reading test format - General Training</h1>
        <p>In your Reading test (General Training), you will find three sections.<br />

        <span style={{color:"#1aa5e5"}}>Section 1</span>: Two or three factual texts (short), one of which may be composite (consisting of 6-8 short texts related by topic, e.g. hotel advertisements). Topics are relevant to everyday life in an English-speaking country.<br />

        <span style={{color:"#1aa5e5"}}>Section 2</span>: Two factual texts (short) that focus on work-related issues (e.g. company policies, applying for jobs, salary, workplace facilities, or staff development and training).<br />

        <span style={{color:"#1aa5e5"}}>Section 3</span>: Contains a slightly more complex and longer text on a generic topic. It will be passage taken from real notices, company handbooks, advertisements, books, official documents, magazines or newspapers.</p>
      </div>
    
  )
}

export default Reading