import GameSaving from './GameSaving';
import read from './reader';
import json from './parser';

class GameSavingLoader {
  static async load() {
    return new GameSaving(await json(await read()));
  }
}

export default GameSavingLoader;
