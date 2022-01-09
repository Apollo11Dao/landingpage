import ApoloImg from "../assets/tokens/APOLO.svg";
import MoonImg from "../assets/tokens/MOON.svg";

function toUrl(tokenPath: string): string {
    const host = window.location.origin;
    return `${host}/${tokenPath}`;
}

export function getTokenUrl(name: string) {
    if (name === "apolo") {
        return toUrl(ApoloImg);
    }

    if (name === "moon") {
        return toUrl(MoonImg);
    }

    throw Error(`Token url doesn't support: ${name}`);
}
