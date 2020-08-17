export const getHappyMessage = () => {
  const messages = [
    'You rock!',
    'Slow clap.',
    'Simply amazing.'
  ]

  return messages[Math.floor(Math.random() * messages.length)];
};
