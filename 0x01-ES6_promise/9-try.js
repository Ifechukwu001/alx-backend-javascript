export default function gaurdrail(mathFunction) {
  const queue = [];
  let message;

  try {
    message = mathFunction();
  } catch (error) {
    message = `${error}`;
  }

  queue.push(message);
  queue.push('Guardrail was processed');

  return queue;
}
