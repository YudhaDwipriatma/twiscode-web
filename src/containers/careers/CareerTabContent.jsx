import React, { Component } from 'react';
import TabList from './CareerList';

export default class CareerTabContent extends Component {
    render() {
        return (
            <div className="container up">
                <TabList>
                    <div label="FULL STACK WEB DEVELOPER (FULL TIME)" className="tab-content">
                        <div className="content">
                            <div className="text-careers">
                                <p>We have a growing demand of both Web Application and Mobile
                                Application from Startups to Multinational Companies.
                                The Full Stack Developer will get exposures in creating
                                responsive websites, setting up web services as well as
                 trying out new technologies in web development.</p>
                            </div>
                            <br /><br /><br />
                            <div className="requirement">
                                <h1>Requirements :</h1>
                            </div>
                            <div className="requirement-1">
                                <li>Having at least 2 year experience in PHP & JS</li>
                                <li>Having at least 1 year experience in either Laravel or React + Redux</li>
                                <li>Having worked in a Team</li>
                                <li>Familiar with Scrum</li>
                                <li>Responsible & able to work under pressure</li>
                            </div>
                            <br /><br /><br /><br />
                            <div className="apply">
                                <h1>APPLY NOW!</h1>
                            </div>
                            <br />
                            <div>
                                <form>
                                    <label className="label-career" for="fname">Your Name (required)</label>
                                    <input className="input-career" type="text" id="fname" name="fname" />
                                    <br /><br />
                                    <label className="label-career" for="fname">Your Email (required)</label>
                                    <input className="input-career" type="text" id />
                                    <br /><br />
                                    <label className="label-career" for="fname">Subject</label>
                                    <input className="input-career" type="text" id="fname" name="fname" />
                                </form>
                                <br /><br />
                                <form>
                                    <label className="label-career" for="fname">Your Massage</label>
                                    <input className="input-career-1" type="text" id="fname" name="fname" />
                                </form>
                                <br />
                                <h1 className="attach">Attach Your CV</h1>
                                <div className="row">
                                    <button type="button" className="btn button-career">Choose File</button>
                                    <div className="enter-career" style={{ marginTop: "10px" }}>No File Chosen</div>
                                </div>
                                <br /><br />
                                <button type="button" className="btn button-career-1">SEND</button>
                            </div>

                        </div>
                    </div>
                    <div label="ANDROID DEVELOPER (FULL TIME & PART TIME)" className="tab-content">
                        Ad pariatur nostrud pariatur exercitation ipsum ipsum culpa mollit commodo mollit ex. Aute sunt incididunt amet commodo est sint nisi deserunt pariatur do. Aliquip ex eiusmod voluptate exercitation cillum id incididunt elit sunt. Qui minim sit magna Lorem id et dolore velit Lorem amet exercitation duis deserunt. Anim id labore elit adipisicing ut in id occaecat pariatur ut ullamco ea tempor duis.
                    </div>
                    <div label="IOS DEVELOPER" className="tab-content">
                        Est quis nulla laborum officia ad nisi ex nostrud culpa Lorem excepteur aliquip dolor aliqua irure ex. Nulla ut duis ipsum nisi elit fugiat commodo sunt reprehenderit laborum veniam eu veniam. Eiusmod minim exercitation fugiat irure ex labore incididunt do fugiat commodo aliquip sit id deserunt reprehenderit aliquip nostrud. Amet ex cupidatat excepteur aute veniam incididunt mollit cupidatat esse irure officia elit do ipsum ullamco Lorem. Ullamco ut ad minim do mollit labore ipsum laboris ipsum commodo sunt tempor enim incididunt. Commodo quis sunt dolore aliquip aute tempor irure magna enim minim reprehenderit. Ullamco consectetur culpa veniam sint cillum aliqua incididunt velit ullamco sunt ullamco quis quis commodo voluptate. Mollit nulla nostrud adipisicing aliqua cupidatat aliqua pariatur mollit voluptate voluptate consequat non.
                    </div>
                </TabList>
            </div>
        );
    }
}
