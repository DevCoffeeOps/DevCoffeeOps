export function assertEnvVar(name: string): void {
  if(typeof process.env[name] === 'undefined') throw `process.env[${name}] does not exist.`
}
