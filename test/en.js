require('dotenv').config();

const assert = require("chai").assert;
const vax = require("virtual-alexa");
const console =     require('tracer').colorConsole();

describe("Launch EN", () => {
    it("Game Launches for en-GB", async function () {
        this.timeout(7000);
        const locale = "en-GB";
        var alexa = vax.VirtualAlexa.Builder()
            .handler("./../alexa-popcorn/skill/src/index.handler") // Lambda function file and name
            .interactionModelFile("./../alexa-popcorn/skill/speechAssets/intent_en.json") // Path to interaction model file
            .locale(locale)
            // .setID("HELLO")
            .create();

        // console.log(alexa._interactor.skillContext._user._id);
        // Totally aware that will be a correct way to do this....
        alexa._interactor.skillContext._user._id = process.env.TEST_USER

        var alexaResponse = await alexa.launch();

        // assert game is set up correctly
        assert.equal(locale, alexaResponse.sessionAttributes.locale);
        // assert has event details
        // assert 5 questions
        // assert questionnum is 1
        // assert maxQuestions matches env
        // assert currect score is 0
        // assert question type is truefalse
        // assert has keywords

        assert.include(alexaResponse.response.outputSpeech.ssml, "First question");

        alexaResponse = await alexa.utter(trueOrFalse());
        console.debug(alexaResponse.sessionAttributes.progress);
        assert.include(alexaResponse.response.outputSpeech.ssml, "Next question");
        
        alexaResponse = await alexa.utter(trueOrFalse());
        console.debug(alexaResponse.sessionAttributes.progress);
        assert.include(alexaResponse.response.outputSpeech.ssml, "True or False");

        alexaResponse = await alexa.utter(trueOrFalse());
        console.debug(alexaResponse.sessionAttributes.progress);
        assert.include(alexaResponse.response.outputSpeech.ssml, "Next question");

        alexaResponse = await alexa.utter(trueOrFalse());
        console.debug(alexaResponse.sessionAttributes.progress);
        assert.include(alexaResponse.response.outputSpeech.ssml, "Final question");

        alexaResponse = await alexa.utter(trueOrFalse());
        console.debug(alexaResponse.sessionAttributes.progress);
        assert.include(alexaResponse.response.outputSpeech.ssml, "you scored");

        
        // check end game
        // assert question type is yesno

        alexaResponse = await alexa.utter("No");
        console.debug(alexaResponse.response.outputSpeech.ssml);
        assert.include(alexaResponse.response.outputSpeech.ssml, "");

    });
});


function trueOrFalse() {
    var tf = Math.random() >= 0.5;
    if (tf) return "True";
    return "False";
}