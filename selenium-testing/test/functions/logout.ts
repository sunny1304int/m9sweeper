import config from "../config.js";
import { sleep } from "./sleep.js";

/**
 * Function to log out a user as long as they are already logged in
 *
 * @param baseUrl Optional base url of the website
 */
export async function logout(baseUrl = config.BASE_URL) {
    // find profile
    // @ts-ignore
    await $("//span[contains(@class, 'mat-mdc-menu-trigger')]/img[contains(@class, 'profile')]").customClick("logout-profile");
    await sleep(3000);

    // logout
    // @ts-ignore
    await $("//span[contains(normalize-space(), 'Sign Out')]").customClick("logout-logout");
    await sleep(3000);
}