interface EnvVars {
  POSTGRES_USER: string;
  POSTGRES_PASSWORD: string;
  POSTGRES_DB: string;
}

export function getEnvVars(): EnvVars {
  const requiredVars: (keyof EnvVars)[] = [
    'POSTGRES_USER',
    'POSTGRES_PASSWORD',
    'POSTGRES_DB',
  ];
  const missingVars: string[] = [];
  const envVars: Partial<EnvVars> = {};

  requiredVars.forEach((varName) => {
    const value = process.env[varName];
    if (value !== undefined) {
      envVars[varName] = value;
    } else {
      missingVars.push(varName);
    }
  });

  if (missingVars.length) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(', ')}`,
    );
  }

  return envVars as EnvVars;
}
