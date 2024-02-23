/**
 * Used for type-safe handling of localStorage that also
 * avoids the need to externally keep track of the storage key.
 * The key is automatically prefixed with the application's namespace,
 * to avoid any potential naming conflicts.
 */
export class StorageManager<T> {
  private readonly key: string;
  private static readonly NAMESPACE = "leonardoAiChallenge";

  constructor(key: string, private readonly defaultValue: T) {
    this.key = `${StorageManager.NAMESPACE}:${key}`;
  }

  get(): T {
    const data = window.localStorage.getItem(this.key);
    if (data) {
      return JSON.parse(data) as T;
    }
    return this.defaultValue;
  }

  set(value: T) {
    window.localStorage.setItem(this.key, JSON.stringify(value));
  }
}
