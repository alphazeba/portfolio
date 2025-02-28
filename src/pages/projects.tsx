import Boring from "../bits/boring"

export default function Projects() {
    return <>
        <h1>Projects</h1>
        <h2>Music Uploader</h2>
        <Boring>
            <span className="links">
                <a href="https://github.com/alphazeba/music_uploader_gui">Frontend code</a>
                <a href="https://github.com/alphazeba/music_uploader_server">Backend code</a>
            </span>
            <img className="pic floatRight" src="/photo/musicUploader.png" />
            <p>
                Provides drag, drop, click simplicity to maintaining a Plex music server.
            </p>
            <p>
                This project came about because I offered to manage a plex server for my friend group then quickly realized that I was a bottleneck for their contributions to the server.
            </p>
            <p>
                I did not want to provide remote sftp access which would also have been problematic because my friend group has varying levels of technical confidence.
                The Music Uploader allows contribution only access as well as providing a very intuitive interface for populating music.
                Additionally since I was at it I could allow the backend service trigger immediate library scans so new music is visible in plexamp app immediately.
            </p>
            <p>
                Not important to my users, but this was my first time using Tauri to build a GUI application.
                Tuari documentation leaves something to be desired (figuring out how to use tauri native drag and drop events was painful).
                However, getting up and running was a breeze, I enjoy working in rust, and packaging for cross platform distribution was very easy with tauri.
                I will likely use tauri again.
            </p>
        </Boring>
        <h2>Shobu.link</h2>
        <Boring>
            <span className="links">
                <a href="https://github.com/alphazeba/shobuLink">Code</a>
                <a href="http://shobu.link">Website</a>
                <a href="http://shobu.link/game/9eced310-1f6b-42cf-924c-97954918d9bc">Example game</a>
            </span>
            <img className="pic floatLeft" src="/photo/shobulink.png"/>
            <p>
                Online Shobu server with barebones matchmaking and ability to directly challenge friends. Includes realtime as well as correspondance modes.
            </p>
            <p>
                I enjoy abstract strategy games, my wife and I found Shobu while at Zulu's and I was immediately caught by how vast each moves decision tree was.
                Each turn, you choose 1 stone of 8 to move 1 or 2 spaces horizontally, vertically, diagonally, then mirror this move to 1 of 8 other stones.
                Making a worst case of 8*8*8 (512) potential moves. This number is not really feasible to achieve in a given position but ~200 potential moves is realistic.
                The average number of moves from a chess position is ~40 for comparison.
            </p>
            <p>
                Looking online, I found there was no where to play this game with others. I made this website to fill this gap, standardize move notation, and begin collecting a database of games.
                In the future when I have more data I would like to perform more analysis on this game.
            </p>
            <p>
                An exciting development is that Shobu.link was discovered by Abstrakta, an italian abstract games organization which hosts an international online multi-game competition each year.
                They've asked if Shobu.link could host the Shobu segment this year, so Shobu.link is the official Shobu website for <a href="https://www.abstrakta.info/mochalunt-2025.html">Mochalunt 2025</a>!
                If you click "Games & Results" button you can see my website noted in the doc.
            </p>
            <p>
                You may ask yourself, "is this an http website in 2025"?
                Yes, I was experimenting at the time with storing my static content in an S3 bucket (which at my usage scale is free) but AWS charges a fee for enabling https on the s3 bucket using CloudFront.
                So basically, I'm cheap, maybe if i get more donations i will upgrade to https. Or find the time to host the static content elsewhere.
                In the meantime, the "login" is just username and no password.
            </p>
        </Boring>
        <h2>NoteTab</h2>
        <Boring>
            <span className="links">
                <a href="https://github.com/alphazeba/noteTab">Code</a>
            </span>
            <img className="pic floatRight" src="/photo/noteTab.png"/>
            <p>
                Allows simple tab renaming and note taking.
                A web service designed to be locally hosted and used in combination with a browser plugin like <a href="https://addons.mozilla.org/en-US/firefox/addon/tree-style-tab/">Tree Style Tabs</a>.
            </p>
            <p>
                At work I use many tabs; documentation, logged in aws accounts, tickets, music.
                I have developed a system of organizing tabs into folders using tree style tabs.
                But I found even with organization i was freqently losing tabs because the names were not distinct enough, Ie, my gamma stage account and beta stage tabs have the same aws website tab name.
                I would instead rely on bookmarks and reopen to pages if I needed it causing a significant excess/redundant tabs so losing tabs got more common.
            </p>
            <p>
                NoteTab solves this problems because you can rename the tab name and use this as a parent folder for other tabs.
                A frequent configuration would include a Music NoteTab, Todo Ticket NoteTab, Doing Ticket NoteTab, Docs NoteTab.
                And so it was easy to collapse tab folders and easily find existing tabs over opening new tabs.
                Additionally the notespace makes an intuitive and in browser place to take notes on the state of the task so it easy to hop back into if distracted.
            </p>
        </Boring>
        <h2>The WikiHow Game</h2>
        <Boring>
            <span className="links">
                <a href="https://thewikihowgame.com/">Website</a>
            </span>
            <img className="pic floatLeft" src="/photo/theWikiHowGame.png"/>
            <p>
                Takes the classic <a href="https://damn.dog">damn dog</a> experience and extends it into a full length party game.
                You and a group of friends setup a room and are presented with a random photo scraped from the wikhow website.
                You are then tasked with guessing or inventing your funniest guess of the article title the photo comes from.
                Players then vote on which title they believe is the real title.
                WikiHow truly has some wild photos.
            </p>
            <p>
                In a stylistic choice I cannot defend, the website was originally styled as if the photo was on a gameboy screen with the monochromatic green filter you might expect but also a full rendition of a gameboy serving as the frame.
                My friends quickly informed me this was a bad idea and I experienced acting on customer feedback, the wikihow photos are now unadulterated.
            </p>
            <p>
                This project is close to my heart; it is my first projects to strike a chord with my friend group, we have played somewhat routinely since its creation.
                However, I was much younger engineer when it was first written and am embarrassed by the code quality so you will note that there is no github link.
            </p>
        </Boring>
        <h1>Game Jams</h1>
        <h2>Gunk Night</h2>
        <Boring>
            <span className="links">
                <a href="https://cileth.itch.io/gunk-night">Game page</a>
            </span>
            <img className="pic floatRight" src="/photo/gunkNight.png"/>
            <p>
                A game where you trash the place as a raccoon and then wakeup the next day and try to clean the place as best you can.
                You score is the sum of the amount of carnage you cause in the first phase and how clean it is when you finish the second phase.
            </p>
            <p>
                This gameloop I fealt was elegant and compelling, players naturally make the game more difficult for themselves the better they are at the game and are rewarded for doing so.
                Another aspect of this game I am unreasonably proud of is the "gunk meter" in the top left corner of the UI.
                The gunk meter goes up as the level gets more dirty and then goes down as the level is cleaned.
                I could go a long ramble on my opinions concerning base data remaining uninterpretted, however, there is no abstract "dirt level" metric calculated.
                Instead, I created a series of shaders which sum filled pixels on the full level dirt texture down to a single number.
                So this "gunk level" is calculated by counting every pixel on screen every 3 frames without impacting the framerate.
            </p>
        </Boring>
        <h2>00Boyfriend</h2>
        <Boring>
            <span className="links">
                <a href="https://cileth.itch.io/00boyfriend">Game page</a>
                <a href="https://ldjam.com/events/ludum-dare/41/00boyfriend-a-spys-dating-sim">Jam page</a>
            </span>
            <img className="pic floatLeft" src="/photo/00Boyfriend.png"/>
            <p>
                In 00Boyfriend the player character is an action hero spy trying to maintain a text conversation with his date during his mission.
            </p>
            <p>
                This was my first venture into game jams.
                The prompt for the jam was "Combine 2 Incompatible Genres".
                We ended up taking 4th out of 2015 submissions.
            </p>
            <p>
                Our story team had in depth branching pathways and plot.
                Essentially an entirely separate visual novel like experience playing out on the phone while the spy is running around and gunning down enemies.
                But as happens in a jam, we ran out of time and had to make do.
                Hours before submission deadline, I was cramming sufficient dialog into the system that randomly choosing dialog events did not repeat too often (in my sleep deprived state, i did not consider only selecting from unchosen events).
                I have been told since that the phone girlfriend really just sounds like talking with me, so maybe a bit unintentionally personal bit of media.
                Fuji apples are the best apples.
            </p>
        </Boring>
        <h2>Too be continued...</h2>
        <Boring>
            <span className="links">
                <a href="https://alphazeba.itch.io/">Itch page</a>
            </span>
            <p>
                My initial interest in programming came from making games using YoyoGames GameMaker in middleschool. I still use GameMaker in most of my game projects but have experimenting with Unity more frequently.
            </p>
            <p>
                I will write about some notable games below, but you can see my full list of released games on my itch page linked above
            </p>
        </Boring>
    </>
}