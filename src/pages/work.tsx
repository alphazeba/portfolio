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
            <p>I was able to do a lot of cool things at Kuiper, tragically we aren't allowed to talk about much. However, this is a declassified satellite selfie. It was downlinked via my team's file transfer service.</p>

            <img className="pic floatLeft" src="/photo/kuiperTunnel.png" alt="logo i made for the deprecated service (with dall-e's help)"/>
            <p>A project I got to build from scratch was a contact aware packet tunneling solution. It warped satellite destined packets to the appropriate ground station for further beaming. I was very proud of it.</p>
            <p>Then I deprecated it.</p>
            <p>We found a team working on a comparable solution to a different problem and worked them to see if they would be open to consolidating services.
                After negotiations I agreed to pull the plug on our tunnel.</p>
            <p>Engineering is a field with passionate and territorial individuals, but it is also a team effort.
                The lowest operational burden service is one you don't own.
                Relinquishing some amount of control is necessary on the path to scale and I like to work towards a world where my teammates go home at night.</p>
        </Boring>
        <h2>AWS WorkSpaces Core</h2>
        <Boring>
            <p>Amazon workspaces offers virtual desktops.
                I worked on the creation of the "Core" branded offerings.
                The primary problem I worked to solve was "how can a customer with their own streaming protocol and/or control plane benefit from workspaces".</p>
            <p>In pursuit of this goal I worked <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_ImportWorkspaceImage.html">Bring Your Own Protocol (BYOP)</a> ingestion, which allows customer to bring their own machine images with a streaming protocol on it into our workpaces ecosystem;
                and <a href="https://docs.aws.amazon.com/workspaces/latest/api/API_WorkspaceProperties.html">Manual Running Mode</a> which allows customers with their own control plane control the lifecycle of workspaces within our ecosystem.</p>
        </Boring>
        <h1>Teaching</h1>
        <h2>Microsoft TEALS program</h2>
        <Boring>
            <img className="pic floatLeft" src="/photo/tealsSwag.jpg"/>
            <p>I got to teach AP computer science to a class of highschoolers at Aldine Highschool in Texas.
                It was an interesting experience, teaching a highschool class remotely where I was unable to see the students. Ramble into space.
                At the beginning of the school year, I was an assistant teacher and the teaching team was 4 strong; by end of year, I had been promoted to lead teacher and king of the hill as my fellow volunteers had abandoned their posts lol.</p>
            <p>Pictured is microsoft's thank you swag. Not pictured is socks, what is microsoft's deal with socks?
                I've never been employed by microsoft yet own at least 3 pairs of microsoft and subsidiary socks lol.</p>
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
                Teaching kids you will find how much you forgot you learned.
                Java's implied pointers, heavy boilerplate, and running within a VM proved to be frequent stumbling blocks for our students.</p>
            <p>The second year, we taught our students to make graphical games in a drag and drop javascript game engine.
                This was a huge success.  We made flappy bird clones and had time enough to make more student led games. One student made a simple 2d minecraft clone. Very impressive.</p>
            <p>Pictured is one of many shirts DigiPEN provided to us teachers.  Evidentally college age gamers are not known for laundry.</p>
        </Boring>
        <Prompter destination={ROUTE_PROJECT}>
            see my personal projects
        </Prompter>
    </>
}