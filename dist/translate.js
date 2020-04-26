"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Imports the Google Cloud client library
const translate_1 = require("@google-cloud/translate/");
// Instantiates a client
const googleTranslate = new translate_1.v2.Translate({
    projectId: "translator-test-275402",
});
function translate(text, target = "zh") {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                // Translates some text into Russian
                const [translate] = yield googleTranslate.translate(text, target);
                resolve(translate);
            }
            catch (e) {
                resolve("Error translate " + text + " to " + target);
            }
        }));
    });
}
exports.translate = translate;
//# sourceMappingURL=translate.js.map