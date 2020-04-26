// Imports the Google Cloud client library
import { v2 } from "@google-cloud/translate/";

// Instantiates a client
const googleTranslate = new v2.Translate({
  projectId: "translator-test-275402",
});

export async function translate(
  text: string,
  target: string = "zh"
): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      // Translates some text into Russian
      const [translate] = await googleTranslate.translate(text, target);
      resolve(translate);
    } catch (e) {
      resolve("Error translate " + text + " to " + target);
    }
  });
}
