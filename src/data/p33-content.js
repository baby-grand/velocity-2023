// STRUCTURE:
// text: Title
// text: h1
// textarea: intro
// textarea: signed Brad
// textarea: signed Penny
// text: Explore Highlights
// textarea: Main Links
// text: We can't do this without you
// textarea: P33 Board of Directors
// textarea: P33 Staff
// text: Metadata
// textarea: Talent Efforts (2022)
// textarea: Strong Start
// textarea: Chicago H-1B Connect
// textarea: Good Jobs Challenge Grant
// text: Good Jobs Challenge Grant Image
// text: hey
const p33Content = {
    "title": {
        "title": "Title ",
        "content": "The P33 Velocity Reports",
        "type": "text",
        "className": "title"
    },
    "h1": {
        "title": "h1",
        "content": "<h1>New year.<br/> New heights.</h1>",
        "type": "text",
        "className": "h1"
    },
    "intro": {
        "title": "intro",
        "content": "<p>Lorem cursus metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper eget duis at tellus at urna condimentum mattis pellentesque id nibh tortor id aliquet lectus proin nibh nisl condimentum id venenatis a condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus et malesuada fames z turpis egestas sed tempus urna et pharetra pharetra massa massa ultricies mi quis hendrerit dolor magna.</p><p>Onward,</p>",
        "type": "textarea",
        "className": "intro"
    },
    "signed-brad": {
        "title": "signed Brad",
        "content": "<p><strong>Brad Henderson, </strong></p><p>Chief Executive Officer, P33</p>",
        "type": "textarea",
        "className": "signed-brad"
    },
    "signed-penny": {
        "title": "signed Penny",
        "content": "<p><strong>Penny Pritzker</strong></p><p>P33 Board Chair</p><p>Founder and Chairman</p><p>PSP Partners</p>",
        "type": "textarea",
        "className": "signed-penny"
    },
    "explore-highlights": {
        "title": "Explore Highlights",
        "content": "Explore highlights across our three pillars:",
        "type": "text",
        "className": "explore-highlights"
    },
    "main-links": {
        "title": "Main Links",
        "content": "<ul><li><a href=\"#\" target=\"_blank\">Talent</a></li><li><a href=\"#\" target=\"_blank\">Founders</a></li><li><a href=\"#\" target=\"_blank\">Regional Priorities</a></li></ul>",
        "type": "textarea",
        "className": "main-links"
    },
    "we-cant-do-this-without-you": {
        "title": "We can't do this without you",
        "content": "We can’t do this without you",
        "type": "text",
        "className": "we-cant-do-this-without-you"
    },
    "p33-board-of-directors": {
        "title": "P33 Board of Directors",
        "content": "<ul><li>Penny Pritzker, Chair</li><li>Chris Gladwin, Vice-Chair</li><li>Kelly Welsh, Vice-Chair</li><li>Phillip Alphonse</li><li>Peter Barris</li><li>Chris Cartwright</li><li>Margarita Chavez</li><li>Garry Cooper Jr., PhD</li><li>Derek Douglas</li><li>Richard Edelman</li><li>Mike Gamson</li><li>Kate Gebo</li><li>Angel Mendez</li><li>Diane Primo</li><li>Jennifer Scanlon</li><li>Julia Stasch</li><li>Helen Sun</li><li>Kate Timmerman</li><li>Brenda Darden Wilkerson</li><li>Tom Wilson</li><li>Maria Wynne</li></ul>",
        "type": "textarea",
        "className": "p33-board-of-directors"
    },
    "p33-staff": {
        "title": "P33 Staff",
        "content": "<ul><li>Aleena Agrawal</li><li>Leen Bnyat</li><li>Lucy Brennan</li><li>Weronika Cardoso</li><li>Claude Cimeus</li><li>Alexandra DeLuca</li><li>Tifair Hamed</li><li>Brad Henderson</li><li>Matthew Muench</li><li>Shawn Park</li><li>Meera Raja</li><li>Rebecca Randall</li><li>Nuwan Samaraweera</li><li>Louisa Shepherd</li><li>Evan Shy</li><li>Desiree Vargas Wrigley</li><li>Mark Zhang</li><li>Erin Amico, former P33 staff</li></ul>",
        "type": "textarea",
        "className": "p33-staff"
    },
    "p33-pro-bono-partners": {
        "title": "P33 Pro Bono Partners",
        "content": "<ul><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li></ul>",
        "type": "textarea",
        "className": "p33-pro-bono-partners"
    },
    "p33-funders": {
        "title": "P33 Funders",
        "content": "<ul><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li><li>First Last, Title or Organization name</li></ul><p><br></p>",
        "type": "textarea",
        "className": "p33-funders"
    },
    "metadata": {
        "title": "Metadata",
        "content": "This is the title tag",
        "type": "text",
        "className": "metadata"
    },
    "talent-efforts-2022": {
        "title": "Talent Efforts (2022)",
        "content": "<h2>Boosting Chicagoland’s reskilling efforts</h2><p>Out of more than 500 applicants, Chicago received one of 32 American Rescue Plan Good Jobs Challenge Grants in August of 2022. This $18.5M grant from the U.S. Economic Development Administration will support reskilling efforts in four sectors: Healthcare, Manufacturing, IT, and Transportation, Distribution and Logistics.</p><p>As the co-lead organization for the IT sector portion of the application, P33 considers this grant a milestone win for the organization and workforce development in Chicagoland as whole. We know companies want to adopt reskilling strategies, but need substantial support with internal change to be sufficiently ambitious and successful. P33 is working with Discovery Partners Institute to create an employer-led, scalable apprenticeship model for tech roles in Chicago.</p><p><a href=\"http://localhost:7788/#\" target=\"_blank\">Learn more about this grant’s scope of work.</a></p>",
        "type": "textarea",
        "className": "talent-efforts-2022"
    },
    "strong-start": {
        "title": "Strong Start",
        "content": "<h2>Strong Start</h2><p>P33 Strong Start brings innovative Chicago-based companies into college computer science classrooms to work through real-world tech projects and build professional relationships. In the Fall 2022 semester, Illinois Institute of Technology and Chicago State University partnered with seven companies to engage more than 200 students in the Strong Start program, with more on the way for Spring.</p><p>Illinois Tech, a participant in the 2021 pilot program, integrated Strong Start into their curriculum for every beginning computer science student. It’s clear that employers entering the tech talent pathway earlier works — our job is to continue refining the strategy to do this at scale.</p>",
        "type": "textarea",
        "className": "strong-start"
    },
    "chicago-h-1b-connect": {
        "title": "Chicago H-1B Connect",
        "content": "<h2>Chicago H-1B Connect</h2><h3>Fast action in light of tech layoffs</h3><p>As industry-wide layoffs began affecting tens of thousands of tech workers at the end of 2022, there was a clear need to support <strong>H-1B visa holders</strong> who found themselves jobless. So P33, World Business Chicago, 1871, and a host of other partners quickly launched Chicago H-1B Connect. The initiative helps impacted visa holders find new job opportunities with Chicago companies before their 60-day grace period expires. Chicago is the <strong>first city in the U.S.</strong> to collectively band together around this issue to support and attract H-1B professionals.</p><p>At launch, <strong>35+ employers added over 1,200 H-1B eligible jobs</strong> to our site, with more companies and jobs being added every day. <strong>Over 40,000 visitors</strong> came to the site in the first week after its public launch.</p><ul><li><strong>7 ecosystem partners</strong></li><li><strong>35+ employers</strong></li><li><strong>1200+ H-1B eligible jobs</strong></li></ul>",
        "type": "textarea",
        "className": "chicago-h-1b-connect"
    },
    "good-jobs-challenge-grant": {
        "title": "Good Jobs Challenge Grant",
        "content": "<h2>Boosting Chicagoland’s reskilling efforts</h2><p>Out of more than 500 applicants, Chicago received one of 32 American Rescue Plan Good Jobs Challenge Grants in August of 2022. This $18.5M grant from the U.S. Economic Development Administration will support reskilling efforts in four sectors: Healthcare, Manufacturing, IT, and Transportation, Distribution and Logistics.</p><p>As the co-lead organization for the IT sector portion of the application, P33 considers this grant a milestone win for the organization and workforce development in Chicagoland as whole. We know companies want to adopt reskilling strategies, but need substantial support with internal change to be sufficiently ambitious and successful. P33 is working with Discovery Partners Institute to create an employer-led, scalable apprenticeship model for tech roles in Chicago.</p><p><a href=\"http://localhost:7788/#\" target=\"_blank\">Learn more about this grant’s scope of work.</a></p>",
        "type": "textarea",
        "className": "good-jobs-challenge-grant"
    },
    "good-jobs-challenge-grant-image": {
        "title": "Good Jobs Challenge Grant Image",
        "content": "This is the image",
        "type": "text",
        "className": "good-jobs-challenge-grant-image"
    }
}
export default p33Content;