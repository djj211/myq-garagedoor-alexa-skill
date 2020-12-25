# myq-garagedoor-alexa-skill
Private Alexa Skill for MyQ Garage Doors

To Deploy

1. Upload ./skill/garageDoor-skill.json to Alexa Developer Console
2. Configure Skil Take Note of the Alexa Skill ID.
3. Install Project Packages
4. Deploy using serverless command using MyQ Credentials and Alexa Skill ID from step1:
  1. COMMAND: serverless deploy --myqUser {MYQ_USERNAME} --myqPass MYQ_PASSWORD --skillId {ALEXA_SKILL_ID}
  2. EXAMPLE: serverless deploy --myqUser blah@test.com --myqPass $uper$ecretPass12 --skillId amzn1.ask.skill.11111111-1111-1111-1111-111111111111
5. See ./skill/garagedoor-skill.json for commands (better to view in alexa developer console.)
6. You can check the lambda in the AWS Console.
