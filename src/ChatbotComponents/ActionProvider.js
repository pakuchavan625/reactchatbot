class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  greeting = (msg) => {
    if (msg === "what is your name?") {
      var message = this.createChatBotMessage("my name is zitti");
      this.addMessageToState(message);
    } else if (msg === "how is weather today?") {
      var message = this.createChatBotMessage("weateher is good today");
      this.addMessageToState(message);
    } else if (msg === "what is your age?") {
      var message = this.createChatBotMessage("my ageis 25");
      this.addMessageToState(message);
    } else if (msg === "clean my room") {
      var message = this.createChatBotMessage("room is cleaned");
      this.addMessageToState(message);
    } else if (msg === "add shoap to my shopping list") {
      var message = this.createChatBotMessage(
        "shoap is added to your shopping list"
      );
      this.addMessageToState(message);
    } else if (msg === "Fetch the newspaper") {
      var message = this.createChatBotMessage("Here is your newspaper.");
      this.addMessageToState(message);
    } else if (msg === "Read my shopping list") {
      var message = this.createChatBotMessage(
        "Here is your shopping list. Soap, Shampoo, Conditioner."
      );
      this.addMessageToState(message);
    } else if (msg === "") {
      var message = this.createChatBotMessage("Hmm...i dont know?");
      this.addMessageToState(message);
    } else if (msg === "add mango to my shopping list") {
      var message = this.createChatBotMessage(
        "mango is added to shopping list"
      );
      this.addMessageToState(message);
    } else if (msg === "Give me todays newspaper") {
      var message = this.createChatBotMessage(
        "I think you don't get another newspaper the same day "
      );
      this.addMessageToState(message);
    }
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
