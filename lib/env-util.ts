export const assertEnvVariables = (...args: string[]) => {
    args.forEach(arg => {
        if (!process.env[arg]) {
            throw new Error(`Environment variable ${arg} is not set`);
        }
    });
}