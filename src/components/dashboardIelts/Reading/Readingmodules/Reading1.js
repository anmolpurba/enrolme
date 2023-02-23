import {React,useState,useEffect} from 'react'
import Axios from "axios"
import { Document, Page } from 'react-pdf';
import "./Reading1.css"
import ReactMarkdown from "react-markdown"

function Reading1() {

    const [read,Setread] = useState("");

    function onSubmit(event){
        let arr = [];
        for(var i=0;i<40;i++){
            arr.push(document.getElementsByTagName("input")[i].value)
        }
        console.log(arr);
        const ans = [["conditions", "craftsmen and artists", "secure livelihood", "grand gallery", "481 feet", "queens chamber", "air channels", "false", "not given", "true", "true", "false", "d", "d", "b", "a", "a", "c", "c", "f", "d", "a", "c", "e", "g", "b", "vii", "v", "ix", "i", "iv", "111", "re offending", "sentencing", "victim", "restorative justice", "a", "c", "d", "b"]]
        if(arr === ans){
            alert("all are correct!")
        }
    }

    useEffect(()=>{
        Axios.get('http://localhost:1337/api/readings')
        .then(response => {
            Setread(response.data.data[0].attributes.text);
            console.log(response.data.data[0].attributes.text);
        })
        .catch(error => {
            console.log('An error occurred:', error.response);
        });
    },[])

  return (  
    <div> 
        <div className="reading fontread" style={{display:"flex",justifyContent:"center"}}>
            <h1>Reading1</h1>
        </div>
        {/* ----------------------------------- PASSAGE 1 ------------------------------- */}
        <div className="row">
                {/* first column */}
                <div className="col-lg-6" style={{textAlign:"justify",backgroundColor:"#d7e6dc"}} >
                    
                    <h1 style={{color:"#284664"}}>Ancient Egypt</h1>
                
                
                    <p>The people of ancient Egyptemergedas one of the first Westerncivilisations. Sustained by the River Nile and protected by vast deserts, the Egyptians lived in comparative security,prosperityand peace for thousands of years. When such conditions exist,the civilizationand its arts usually flourish. To this day, many of the Egyptian artistic creations display the wealth,splendourand talent of this greatcivilisation.</p>
                
                
                    <p>Ancient Egypt has been called a land of temples and tombs. For centuries people have been filled with wonder at the ingenuity of the Egyptians, whose impressive works have withstood the ravages of time so well. Had it not been for the long-lasting nature of their monuments and carved inscriptions in the form ofhieroglyphics&apos;,much evidence of their activities would have vanished from all historical records. In about 3000 BC, Upper and Lower Egypt were united under the first pharaoh, andgenerally fromthat time until the invasion by Alexander the Great in 332 BC, Egypt prospered as a nation ofskilfulcraftsmen and artists.</p>
                
                
                    <p>The Egyptians were an industrious, highlycivilisedand deeply religious people, who obediently accepted the supreme authority of their pharaohs. The people were content to serve and work for the state in return for a secure livelihood. They considered this earthly life to be a segment in a great cycle, at the end of which everything would be returned to its original form. The richer and more important the person, the more careful and elaborate would be his or her burial, and the stronger and safer the tomb in which they would be buried.</p>
                
                
                    <p>The burial of the dead in the ground was not considered sufficiently safe for kings,queensand court officials, so sunken, sealed tombs were ingeniously constructed to protect personal treasures,foodand instructions for the safe conduct of the soul after death. The design of these tombs developed into the stepped pyramid, and finally into the square pyramid that we know today.</p>
                
                
                    <p>There are about 80 ancient pyramids in Egypt. The Great Pyramid at Giza, which King Cheops built as his tomb 5000 years ago, holds most interest. It stands with two other pyramids on a slight rise overlooking theRiverNile. At thecentreof the pyramid is the King&apos;s Chamber and leading down from there is a long narrow area known as the Grand Gallery. The pyramid covers13 acresandcontains2,300,000 blocks of limestone, each weighing an average of 1.5 tons. Its pyramidal form has a perfectly square base with sides of 756 feet and a height of 481 feet. Situated directly below the King&apos;s Chamber is the Queen&apos;s Chamber and there are two air channels leading upwards from thecentreof the pyramid to the outside.</p>
                
                
                    <p>Originally the exterior was covered in highly polished limestone slabs, all of which have been stolen over the years. It is estimated that a total of100,000 menlabouredfor 20 years to build this gigantic structure, and although architecturally unimportant in design, it has aroused the curiosity of millions of people because of the uncanny accuracy of its measurements and proportions. It reveals the remarkable ingenuity and the greatorganisingability of the ancient Egyptians.</p>
                
                
                    <p>Near these pyramids stands the Great Sphinx, the origin and purpose of whichconstitutesone of the world&apos;s most famous puzzles. Shaped from an outcrop of stone in the form of ahumanheadedlion, the face ispossibly aportrait of King Khafra, the son of Cheops, who was buried in the second largest pyramid. The Sphinx is one of the biggest statues ever made.</p>
                
                    
                    <p>The Egyptian people showed reverence towards natural objects such as the lotus flower, the scarab beetle, the falcon, the lion, the sun and the River Nile. All these subjects and many more were used symbolically and conventionally as motifs in low-relief carving and painting. It was the custom of the Egyptians to depict the various parts of the human figure, usually in the most characteristic positions. The head was shown in profile except for the eye, which was represented from the front, the shoulders and a portion of the arms were portrayed from the front, while the hips and legs were side views. Wall decoration showed little or no attempt to indicate depth or perspective, except by placing distant objects above near things. It was essentially two-dimensional, and relative size indicated the status of the person, so the pharaoh was the largest figure in the composition. Egyptian art is characterised by a passion for permanence, a desire to impress by size, and a determination to make each item serve its function without much regard for the whole. It is obvious that art among these people reached a very high level and the strong influence of Egyptian art can be seen in the work of nearby civilisations.</p>

                </div> 


                {/* second column */}
                <div className="col-lg-6" >
                    <h1 style={{color:"#284664"}}>Answers</h1>

                    <h5>Q. Complete the sentences below. Choose NO MORE THAN THREE WORDS from the passage for each answer.</h5>
                    <p><span>1</span> Security and peace are two <input type="text" style={{textTransform:"uppercase"}}  /> that are necessary for a civilisation to be successful for their hard work. </p>
                    <p><span>2</span> Ancient Egyptians worked as both <input type="text" /> </p>
                    <p><span>3</span> Ordinary Egyptians expected to receive <input type="text" /> </p>

                    <h5>Q. Label the diagram below. Choose NO MORE THAN THREE WORDS AND/OR NUMBERS from the passage for each answer.</h5>
                    <img src="https://www.ielts-writing.info/images/reading/R33.png" alt="" />
                    <p><span>4</span><input type="text" /></p>
                    <p><span>5</span><input type="text" /></p>
                    <p><span>6</span><input type="text" /></p>
                    <p><span>7</span><input type="text" /></p>
                    
                    <h5>Q. Write TRUE or FALSE or NOT GIVEN.</h5>
                    <p><span>8</span>The surface of the Great Pyramid is covered in polished limestone slabs. <input type="text" /></p>
                    <p><span>9</span>King Khafra died before King Cheops.  <input type="text" /></p>
                    <p><span>10</span>Egyptian carvings were often based on things found in nature. <input type="text" /></p>
                    <p><span>11</span>Important characters in Egyptian carvings were bigger than less important characters.<input type="text" /></p>
                    <p><span>12</span>Egyptian art was greatly influenced by the art of neighbouring cultures.<input type="text" /></p>

                    <h5>Q. Choose the correct letter A,B,C or D. Write the correct letter in the input box.</h5>
                    <p>The writer's aim in the passage is to </p>
                    <p>A. describe the construction methods of the pyramids.</p>
                    <p>B. explain the beliefs of the ancient Egyptians.</p>
                    <p>C. offer an interpretation of Egyptian art and sculpture.</p>
                    <p>D. provide an overview of early Egyptian soceity.</p>
                    <p><span>13</span><input type="text" /></p>
                </div> 
        </div>

        <hr></hr>
        {/*--------------------------- PASSAGE 2 ------------------------------------ */}
        <div className="row">
                {/* first column */}
                <div className="col-lg-6" style={{textAlign:"justify",backgroundColor:"#d7e6dc"}} >
                    
                    <h1 style={{color:"#284664"}}>Sticking Power</h1>
                    <div>
                        <p>A If Kellar Autumn, an expert in Biomechanics at Clark College in Portland, Oregon, has his way, the first footprints on Mars won&apos;t be human. They&apos;ll belong to a gecko. Gecko toes have legendary sticking power-and the Clark College scientist would like to see the next generation of Martian robots walking about on gecko-style feet. A gecko can whiz up the smoothest wall and hang from the ceiling by one foot, with no fear of falling.</p>
                        <p>B Autumn is one of a long line of researchers who have puzzled over the gecko&apos;s gravity-defying footwork. Earlier this year, he and his colleagues discovered that the gecko&apos;s toes don&apos;t just stick, they bond to the surface beneath them. Engineers are already trying to copy the gecko&apos;s technique - but reptilian feet are not the only ones they are interested in.</p>
                        <p>C Some of the most persistent hanging&apos; creatures are insects. They can defy not just gravity, but gusts of wind, raindrops and a predator&apos;s attempt to prize them loose. Recent discoveries about how they achieve this could lead to the development of quick-release adhesives and miniature grippers, ideal for manipulating microscopic components or holding tiny bits of tissue together during surgery. There are lots of ways to make two surfaces stick together, but there are very few which provide precise and reversible attachment,&apos; says Stas Gorb, a biologist in T&uuml;bingen, Germany, working on the problem.</p>
                        <p>D Geckos and insects have both perfected ways of doing this, and engineers and scientists would dearly love to know how. Friction certainly plays a part in assisting horizontal movement, but when the animal is running up a slope, climbing vertically or travelling upside down, it needs a more powerful adhesive. Just what that adhesive is has been hotly debated for years. Some people suggested that insects had micro-suckers. Some reckoned they relied on electrostatic forces. Others thought that intermolecular forces between pad and leaf might provide a firm foothold.</p>
                        <p>E Most of the evidence suggests that insects rely on &apos;wet adhesion&apos;, hanging on with the help of a thin film of fluid on the bottom of the pad. Insects often leave tiny trails of oily footprints. Some clearly secrete a fluid onto the &apos;soles&apos; of their feet. And they tend to lose their footing when they have their feet cleaned or dried.</p>
                        <p>F This year, Walter Federle, an entomologist at the University of W&uuml;rzburg, showed experimentally that an insect&apos;s sticking power depends on a thin film of liquid under its feet. He placed an ant on a polished turntable inside the rotor of a centrifuge, and switched it on. At slow speeds, the ant carried on walking unperturbed. But as the scientist slowly increased the speed, the pulling forces grew stronger and the ant stopped dead, legs spread out and all six feet planted firmly on the ground. At higher speeds still, the ant&apos;s feet began to slide. This can only be explained by the presence of a liquid,&apos; says Federle. &apos;If the ant relied on some form of dry adhesion, its feet would pop abruptly off the surface once the pull got too strong.&quot;</p>
                        <p>G But the liquid isn&apos;t the whole story. What engineers really find exciting about insect feet is the way they make almost perfect contact with the surface beneath. &apos;Sticking to a perfectly smooth surface is no big deal,&apos; says Gorb. But in nature, even the smoothest-looking surfaces have microscopic lumps and bumps. For a footpad to make good contact, it must follow the contours of the landscape beneath it. Flies, beetles and earwigs have solved the problem with hairy footpads, with hairs that bend like the bristles of a toothbrush to accommodate the troughs below.</p>
                        <p>H Gorb has tested dozens of species with this sort of pad to see which had the best stick. Flies resist a pull of three or four times their body weight-perfectly adequate for crossing the ceiling. But beetles can do better and the champion is a small, blue beetle with oversized yellow feet, found in the south-eastern parts of the US.</p>
                        <p>I Tom Eisner, a chemical ecologist at Cornell University in New York, has been fascinated by this beetle for years. Almost 30 years ago, he suggested that the beetle clung on tight to avoid being picked off by predators-ants in particular. When Eisner measured the beetle&apos;s sticking power earlier this year, he found that it can withstand pulling forces of around 80 times its own weight for about two minutes and an astonishing 200 times its own</p>
                        <p>weight for shorter periods. The ants give up because the beetle holds on longer than they can be bothered to attack it,&quot; he says.</p>
                        <p>J Whatever liquid insects rely on, the gecko seems able to manage without it. No one knows quite why the gecko needs so much sticking power. &apos;It seems overbuilt for the job,&apos; says Autumn. But whatever the gecko&apos;s needs are, its skills are in demand by humans. Autumn and his colleagues in Oregon have already helped to create a robot that walks like a gecko. Mecho-Gecko, a robot built by iRobot of Massachusetts, walks like a lizard-rolling its toes down and peeling them up again. At the moment, though, it has to make do with balls of glue to give it stick. The next step is to try to reproduce the hairs on a gecko&apos;s toes and create a robot with the full set of gecko skills. Then we could build robots with feet that stick without glue, clean themselves and work just as well underwater as in the vacuum of space, or crawling over the dusty landscape of Mars.</p>
                    </div>
                
                    
                </div> 

                {/* second column */}
                <div className="col-lg-6" >
                    <h1 style={{color:"#284664"}}>Answers</h1>

                    <h5>Q. Match each statement with the correct scientist A,B,C or D. Write only A,B,C or D in 14-18.</h5>
                    <p>A. Kellar Autumn</p>
                    <p>B. Stas Gorb</p>
                    <p>C. Walter Federte</p>
                    <p>D. Tom Eisher</p>
                    <p><span>14</span>Some insects use their ability to stick to surfaces as a way of defending themselves.<input type="text" /></p>
                    <p><span>15</span>What makes sticky insect feet special is the fact that they can also detach themselves easily from a surface.<input type="text" /></p>
                    <p><span>16</span>Gecko feet seem to be stickier than they need to be.<input type="text" /></p>
                    <p><span>17</span>A Robot with gecko-style feet would be ideal for exploring other planets.<input type="text" /></p>
                    <p><span>18</span>Evidence shows that in order to stick,insect feet have to be wet.<input type="text" /></p>

                    <h5>Q. Which paragraph contains the following information? Write the correct letter A-J in boxes 19-22.</h5>
                    <p><span>19</span>some of the practical things a gecko-style adhesive could be used for <input type="text" /></p>
                    <p><span>20</span>a description of a test involving an insect in motion <input type="text" /></p>
                    <p><span>21</span>three different theories scientists have had about how insect feet stick <input type="text" /></p>
                    <p><span>22</span>examples of remarkable gecko movements <input type="text" /></p>

                    <h5>Q. Complete each sentence with the correct ending A-G below.</h5>
                    <p>A. Stick to surfaces in and out of water.</p>
                    <p>B. Curl up and down.</p>
                    <p>C. are washed and dried.</p>
                    <p>D. resist a pull of three times their body weight.</p>
                    <p>E. start to slip across the surface.</p>
                    <p>F. leave yellow footprints.</p>
                    <p>G. have hairy footpads.</p>


                    <p><span>23</span>Insect feet loose their sticking power when they <input type="text" /></p>
                    <p><span>24</span>If you put ants on a rapidly rotating object,their feet <input type="text" /></p>
                    <p><span>25</span>Beetles can stick to uneven surfaces because they <input type="text" /></p>
                    <p><span>26</span>The toes on robots like Mecho-Gecko <input type="text" /></p>

                </div> 
        </div>

        <hr></hr>
        {/*--------------------------- PASSAGE 3 ------------------------------------ */}
        <div className="row">
                {/* first column */}
                <div className="col-lg-6" style={{textAlign:"justify",backgroundColor:"#d7e6dc"}} >
                    
                    <h1 style={{color:"#284664"}}>Try it and see</h1>
                    <div>
                        <p>A In the scientific pecking order, social scientists are usually looked down on by their peers in the natural sciences. Natural scientists do experiments to test their theories or, if they cannot, they try to look for natural phenomena</p>
                        <p>that can act in lieu of experiments. Social scientists, it is widely thought, do not subject their own hypotheses to any such rigorous treatment. Worse, they peddle their untested hypotheses to governments and try to get them turned into policies.</p>
                        <p>B Governments require sellers of new medicines to demonstrate their safety and effectiveness. The accepted gold standard of evidence is a randomised control trial, in which a new drug is compared with the best existing therapy (or with a placebo, if no treatment is available). Patients are assigned to one arm or the other of such a study at random, ensuring that the only difference between the two groups is the new treatment. The best studies also ensure that neither patient nor physician knows which patient is allocated to which therapy. Drug trials must also include enough patients to make it unlikely that chance alone may determine the result.</p>
                        <p>C But few education programmes or social initiatives are evaluated in carefully conducted studies prior to their introduction. A case in point is the &apos;whole-language&apos; approach to reading, which swept much of the English- speaking world in the 1970s and 1980s. The whole-language theory holds that children learn to read best by absorbing contextual clues from texts, not by breaking individual words into their component parts and reassembling them (a method known as phonics). Unfortunately, the educational theorists who pushed the whole- language notion so successfully did not wait for evidence from controlled randomised trials before advancing their claims. Had they done so, they might have concluded, as did an analysis of 52</p>
                        <p>randomised studies carried out by the US National Reading Panel in 2000, that effective reading instruction requires phonics.</p>
                        <p>D To avoid the widespread adoption of misguided ideas, the sensible thing is to experiment first and make policy later. This is the idea behind a trial of restorative justice which is taking place in the English courts. The experiment will include criminals who plead guilty to robbery. Those who agree to participate will be assigned randomly either to sentencing as normal or to participation in a conference in which the offender comes face-to-face with his victim and discusses how he may make emotional and material restitution. The purpose of the trial is to assess whether such restorative justice limits re-offending. If it does, it might be adopted more widely.</p>
                        <p>E The idea of experimental evidence is not quite as new to the social sciences as sneering natural scientists might believe. In fact, randomised trials and systematic reviews of evidence were introduced into the social sciences long before they became common in medicine. An apparent example of random allocation is a study carried out in 1927 of how to persuade people to vote in elections. And randomised trials in social work were begun in the 1930s and 1940s. But enthusiasm later waned. This loss of interest can be attributed, at least in part, to the fact that early experiments produced little evidence of positive outcomes. Others suggest that much of the opposition to experimental evaluation stems from a common philosophical malaise among social scientists, who doubt the validity of the natural sciences, and therefore reject the potential of knowledge derived from controlled experiments. A more pragmatic factor limiting the growth of evidence-based education and social services may be limitations on the funds available for research.</p>
                        <p>F Nevertheless, some 11,000 experimental studies are known in the social sciences (compared with over 250,000 in the medical literature). Randomised trials have been used to evaluate the effectiveness of driver-education programmes, job training schemes, classroom size, psychological counselling for post-traumatic stress disorder and increased investment in public housing. And where they are carried out, they seem to have a healthy dampening effect on otherwise rosy interpretations of the observations.</p>
                        <p>G The problem for policymakers is often not too few data, but what to make of multiple and conflicting studies. This is where a body called the Campbell Collaboration comes into its own. This independent non-profit organisation is designed to evaluate existing studies, in a process known as a systematic review. This means attempting to identify every relevant trial of a given question (including studies that have never been published), choosing the best ones using clearly defined criteria for quality, and combining the results in a statistically valid way. An equivalent body, the Cochrane Collaboration, has produced more than 1,004 such reviews in medical fields. The hope is that rigorous review standards will allow Campbell, like Cochrane, to become a trusted and authoritative source of information.</p>
                    </div>
                
                    
                </div> 

                {/* second column */}
                <div className="col-lg-6" >
                    <h1 style={{color:"#284664"}}>Answers</h1>

                    <h5>Q. Reading Passage 3 has seven paragraphs A-G. Choose the correct heading for paragraphs B-G from the list of headings below. Write the correct number i-x in boxes 27-32.</h5>
                    <p>i. Why some early social science methods lost popularity.</p> 
                    <p>ii. The cost implications of research.</p>                    
                    <p>iii. Looking ahead to an unbiased assessment of research.</p>                    
                    <p>iv. A range of social issues that have been usefully studied.</p>                    
                    <p>v. An example of a poor decision that was made too quickly.</p>                    
                    <p>vi. What happens when the figures are wrong.</p>                    
                    <p>vii. One area of research that is rigorously carried out.</p>
                    <p>viii. The changing nature of medical trials.</p>                    
                    <p>ix. An investigate study that may lead to a new system.</p> 
                    <p>x. Why some scientists theories are considered second-rate</p>                    
                    <p><span>27</span>Paragraph B <input type="text" /></p>
                    <p><span>28</span>Paragraph C <input type="text" /></p>
                    <p><span>29</span>Paragraph D <input type="text" /></p>
                    <p><span>30</span>Paragraph E<input type="text" /></p>
                    <p><span>31</span>Paragraph F <input type="text" /></p>
                    <p><span>32</span>Paragraph G <input type="text" /></p>

                    <h5>Q. Complete the summary below.Choose NO MORE THAN TWO WORDS from the passage for each answer.</h5>
                    <p>Some criminals in England are agreeing to take part in a trial designed to help reduce their chances of <span>33</span> <input type="text" />.The idea is that while one group of randomly selected criminals undergoes the usual <span>34</span> <input type="text" />, the other group will discuss the possibility of making some repayment for the crime by meeting the <span>35</span> <input type="text" />. It is yet to be seen whether this system, known as <span>36</span> <input type="text" />,will work. </p>
                    
                    <h5>Q. Classify the following characteristics as relating to and fill in boxes 37-40.</h5>
                    <p>A. Social Science</p>
                    <p>B. Medical Science</p>
                    <p>C. Both Social Science and Medical Science</p>
                    <p>D. Neither Social Science nor Medical Science</p>

                    <p><span>37</span>a tendency for negative results in early trials. <input type="text" /></p>
                    <p><span>38</span>the desire to submit results for independent assessment. <input type="text" /></p>
                    <p><span>39</span>the prioritisation of research areas to meet government needs. <input type="text" /></p>
                    <p><span>40</span>the widespread use of studies that investigate the quality of new products.<input type="text" /></p>

                    <button type="button" onClick={onSubmit} class="btn" style={{backgroundColor:"green",color:"white"}}>Submit</button>



                </div> 
        </div>




    </div> 
            
    
  )
}

export default Reading1