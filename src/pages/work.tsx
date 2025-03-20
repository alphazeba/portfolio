import Boring from "../bits/boring";
import { ROUTE_PROJECT } from "../bits/header";
import Prompter from "../bits/prompter";

export default function Work() {
    return <>
        <h1>Work</h1>
        <h2>Amazon Project Kuiper</h2>
        <Boring>
            <a className="floatRight" href="https://www.linkedin.com/posts/rajeev-badyal-807b3233_thrilled-to-share-a-first-look-at-one-of-activity-7142676340180144130-IjQf">
                <img className="pic" src="/photo/kuiperSelfy.jpg" alt="satellite selfie"/>
            </a>
            <p>My team owned command interface/distribution, file transfers, ground to satellite communication protocol/security, packet to ground station routing, and satellite agent certificates.</p>
            <p>I was able to do a lot of cool things at Kuiper, tragically we aren't allowed to talk about much.
                However, this is a declassified satellite selfie.
                To get this photo used most of my team's services.</p>

            <img className="pic floatLeft" src="/photo/kuiperTunnel.png" alt="logo i made for the deprecated service (with dall-e's help)"/>
            <p>I learned a lot about scaling.
                If the list of responsibilties sounds like a lot, it was.
                Engineers can be passionate and territorial, tending to desire full veritical ownership to remove blockers, especially when speed is necessary.
                I got to build a contact aware packet tunneling service from scratch.
                It made delivery method and ground station choices so clients could communicate with satellites as if there were a static network route.
                In the fast paced chaos we found that another team had made a similar service for a related usecase.
                We set egos aside, worked with the other team to support our usecase, onboarded to their service, and deprecated our own.</p>
            <p>Engineering is a team effort and you must relinquish control to scale.</p>
        </Boring>
        <h2>AWS WorkSpaces Core</h2>
        <Boring>
            <p>Amazon workspaces offers virtual desktops.
                I worked on the creation of the "Core" branded offerings.
                The primary problem I worked to solve was "how can a customer with their own streaming protocol and/or control plane benefit from workspaces".</p>
            <p>In pursuit of this goal I worked on <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_ImportWorkspaceImage.html">Bring Your Own Protocol (BYOP)</a> ingestion, which allows customer to bring their own machine images with a streaming protocol into our workpaces ecosystem;
                and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_WorkspaceProperties.html">Manual Running Mode</a> which allows customers with their own control plane control the lifecycle of workspaces within our ecosystem.</p>
        </Boring>
        <h1>Teaching</h1>
        <h2>Microsoft TEALS program</h2>
        <Boring>
            <img className="pic floatLeft" src="/photo/tealsSwag.jpg"/>
            <p>I taught AP computer science to a class of highschoolers at Aldine Highschool in Texas.
                Teaching a highschool class remotely where I was unable to see the students was an interesting experience.
                At the beginning of the school year, I was an assistant teacher and the teaching team was 4 strong; by end of year, I had been promoted to lead teacher and king of the hill as all my fellow volunteers had fallen off the wagon.</p>
            <p>Since teaching the class one of the students reached out to me looking for internships while working on a Computer Science degree.
                Good work student.
            </p>
        </Boring>
        <h2>DigiPen ProjectFUN</h2>
        <Boring>
            <img className="pic floatRight" src="/photo/digiShirt.jpg"/>
            <p>During college I taught summer programming classes here 2 years. They targetted kids elementary to middleschool age.
                We strived to help the kids build their own video game and learn some programming along the way.</p>
            <p>My colleagues and I were a bit thrown in the pot, given no curriculum, we were inventing and improvising along the way.</p>
            <p>The first year, we taught our students Java with the goal of making a command line game.
                Teaching kids, you will find how much you forgot you learned.
                Java's implied pointers, heavy boilerplate, and running within a VM proved to be frequent stumbling blocks for our students.</p>
            <p>The second year, we taught our students to make graphical games in an html5 based drag and drop javascript game engine.
                This was a huge success.
                We made flappy bird clones and had time enough to make student led games.
                One student made an impressive 2d minecraft clone.</p>
            <p>Pictured is one of many shirts DigiPEN provided to us teachers.
                Enough to wear a new shirt every day of the week.
                Evidentally college age gamers are not known for laundry.</p>
        </Boring>
        <Prompter destination={ROUTE_PROJECT}>
            see my personal projects
        </Prompter>
    </>
}