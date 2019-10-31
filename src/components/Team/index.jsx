import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar'
import './src/css/index.css'
import '../../index.css'
import Member from './Member'
import Footer from '../Landingpage/Footer';
import Heading from '../Landingpage/Heading';
import Image1 from "../Team/src/images/Agastya.jpg";
import Image2 from "../Team/src/images/AkashRaj.jpg";
import Image3 from "../Team/src/images/Amritha.jpg";
import Image4 from "../Team/src/images/AnuragGupta.jpg";
import Image5 from "../Team/src/images/Dhruv.jpg";
import Image6 from "../Team/src/images/Keshvam.jpg";
import Image7 from "../Team/src/images/Kirthi.jpg";
import Image8 from "../Team/src/images/Kshitij.jpg";
import Image9 from "../Team/src/images/Mohit.jpg";
import Image10 from "../Team/src/images/Nalin.jpg";
import Image11 from "../Team/src/images/Parth.jpg";
import Image12 from "../Team/src/images/Raghuvansh.jpg";
import Image13 from "../Team/src/images/Rochisha.jpg";
import Image14 from "../Team/src/images/Sejal.jpg";
import Image15 from "../Team/src/images/Sudhir.jpg";
import Image16 from "../Team/src/images/Utkarsh.jpg";
import Image17 from "../Team/src/images/prasang.jpeg";
import Image18 from "../Team/src/images/korkoo.jpeg";
import Image19 from "../Team/src/images/arnav.jpeg";
import Image20 from "../Team/src/images/prakhar.jpg";

import Image21 from "../Team/src/images/rahul.jpeg";

import Image22 from "../Team/src/images/prateek.jpeg";







// import Image1 from "../Team/src/images/download.jpg";



export default class TeamIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
            <div style={{backgroundImage: "linear-gradient(to right, #1e1e26, #291e24 57%, #341f21)"}}>
                <section id="landing-page-navbar"> <Navbar /></section>
                <div className="landing-page">
                    <div className="landing-page-parent">
                        <h1 className="landing-page-heading">TEAM</h1>
                        <div className="landing-page-image"></div>
                    </div>
                    {/* <div className="landing-Theme-slider-parent-pic">
                            <Heading text="TEAM"/>
                        </div> */}
                    <ul className="member-list">
                        <Member className="member-list-child" name="AMRITHA" image={Image3} position="Curator" quote="Even if you're on the right track, you'll get run over if you just sit there."/>
                        <Member className="member-list-child" name="KESHVAM" image={Image6} position="Co-Curator" quote="You can't use up creativity. The more you use, the more you have."/>
                        <Member className="member-list-child" name="DHRUV KALSOTRA" image={Image5} position="Head of Sponsorship" quote="Failing doesn’t give you a reason to give up, as long as you believe."/>
                        <Member className="member-list-child" name="RAGHUVANSH RAWAT" image={Image12} position="Head of Operations" quote="You didn't come this far to only come this far."/>
                        <Member className="member-list-child" name="AKASH RAJ" image={Image2} position="Head of PR and Marketing" quote="Somebody toucha my Spaghet"/>
                        <Member className="member-list-child" name="KUMAR PRASANG" image={Image17} position="Head of Design" quote="Great Design is a Multilayered relationship between Human Life and its environment!"/>
                        <Member className="member-list-child" name="PRAKHAR AGARWAL" image={Image20} position="Head of Development" quote="Be who you are & say what you feel, because those who mind don't matter, and those who matter don't mind."/>
                        <Member className="member-list-child" name="ATUL KORKOO" image={Image18} position="Senior Manager Design" quote="Design is the thin layer that connects complexity to meaning"/>
                        <Member className="member-list-child" name="ARNAV CHAND" image={Image19} position="Manager Design" quote="Why? and What? is important, not How?"/>
                        <Member className="member-list-child" name="PRATEEK TRIPATHI" image={Image22} position="Manager Development" quote="In three words I can sum up everything I've learned about life: it goes on."/>
                        <Member className="member-list-child" name="RAHUL JAIN" image={Image21} position="Manager Development" quote="You only live once, but if you do it right, once is enough."/>
                        <Member className="member-list-child" name="SUDHIR BALAKRISHNAN" image={Image15} position="Senior Manager" quote="I was once thrown to the wolves. Now I lead the pack."/>
                        {/* <Member className="member-list-child" name="SAI VARUN MULA"  image={Image1} position="Executive Admin-Relations" quote=""/> */}
                        <Member className="member-list-child" name="UTKARSH MATHUR" image={Image16} position="Manager" quote="Whatever is the problem, see it off with a great smile."/>
                        <Member className="member-list-child" name="PARTH SINGH PARIHAR" image={Image11}  position="Manager" quote="If you don't have bad days you'd eventually get bored of the good ones."/>
                        <Member className="member-list-child" name="ROCHISHA AGARWAL" image={Image13} position="Manager" quote="Everything you go through grows you."/>
                        <Member className="member-list-child" name="NALIN PRABHATH" image={Image10} position="Manager" quote="Obstacles are what you see when you take your eyes off your goals."/>
                        <Member className="member-list-child" name="KSHITIJ SRIKANT" image={Image8}  position="Manager" quote="A ship is safe in the harbor, but thats not what ships are for."/>
                        <Member className="member-list-child" name="AGASTYA VARAHALA" image={Image1}  position="Manager" quote="It is the mark of an educated mind, to entertain a thought without accepting it."/>
                        <Member className="member-list-child" name="SEJAL GUPTA" image={Image14} position="Manager" quote="You only have two options when faced with the unfairness of life. Get bitter. Or get better."/>
                        <Member className="member-list-child" name="MOHIT SHARMA" image={Image9}  position="Manager" quote="I like to move it, move it!"/>
                        <Member className="member-list-child" name="ANURAG GUPTA" image={Image4} position="Manager" quote="You must expect great things of yourself before you can do them."/>
                        <Member className="member-list-child" name="RATHOD KIRTHI" image={Image7} position="Manager" quote="I'm a barbie girl! In this barbie world!"/>
                    </ul>
                </div>
            </div>
            <Footer/>
            </div>

        )
    }
}
