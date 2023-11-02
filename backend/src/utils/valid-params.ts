export function VerifyBodyParams(matter: string, weight: number) {
  if (matter.length <= 0 || weight < 0 || weight > 10) {
    return {
      message: "Content is not valid",
      valid: false,
    };
  }
  return {
    content: matter,
    valid: true,
  };
}
