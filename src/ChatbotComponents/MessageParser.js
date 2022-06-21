class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    console.log(message);
    let lowercase = message;

    if (lowercase.includes("how is weather today?")) {
      this.actionProvider.greeting("how is weather today?");
    } else if (lowercase.includes("what is your name?")) {
      this.actionProvider.greeting("what is your name?");
    } else if (lowercase.includes("what is your age?")) {
      this.actionProvider.greeting("what is your age?");
    } else if (lowercase.includes("clean my room")) {
      this.actionProvider.greeting("clean my room");
    } else if (lowercase.includes("add shoap to my shopping list")) {
      this.actionProvider.greeting("add shoap to my shopping list");
    } else if (lowercase.includes("Fetch the newspaper")) {
      this.actionProvider.greeting("Fetch the newspaper");
    } else if (lowercase.includes("Give me todays newspaper")) {
      this.actionProvider.greeting("Give me todays newspaper");
    } else if (lowercase.includes("Read my shopping list")) {
      this.actionProvider.greeting("Read my shopping list");
    }  else if (lowercase.includes("add mango to my shopping list")) {
      this.actionProvider.greeting("add mango to my shopping list");
    }else if (lowercase.includes("")) {
      this.actionProvider.greeting("");
    }
  }
}

export default MessageParser;
