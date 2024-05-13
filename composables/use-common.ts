export const useCommon = () => {
  const delay = (timeInMilliseconds: number) =>
    new Promise((resolve) => setTimeout(resolve, timeInMilliseconds));

  const displayConsoleLog = (message: string) => {
    const runtimeConfig = useRuntimeConfig();
    const nodeEnvironment = runtimeConfig.public.nodeEnvironment;
    if (nodeEnvironment !== "production") {
      console.log(message);
    }
  };

  return {
    delay,
    displayConsoleLog,
  };
};
