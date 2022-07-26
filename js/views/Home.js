import {showNotification} from "../messaging.js";
import {getUser} from "../auth.js";

const BASE_URI = `${BACKEND_HOST}/api/s3/download`;

export default function HomeHTMLFunction(props) {
    return `
        <div id="HomePage">
            <header>
                <h1 id="HomePageHeader" class="text-center">Venus Movies</h1>
            </header>
            <main>
                <div>
                    <p>
                    </p>    
                </div>
            </main>
        </div>
    `;
}

export function HomeJSFunction() {
    // TODO: use an enum for message type
    // const authority = getUserRole();
    const user = getUser();
    if(!user) {
        showNotification("Welcome visitor", "secondary");
    } else {
        showNotification("Welcome " + user.userName, "info");
    }
}