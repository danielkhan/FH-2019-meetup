/* eslint-disable class-methods-use-this */
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

class SpeakersService {
  constructor(datafile) {
    this.datafile = datafile;
  }

  /**
  * Todo: Implement a function that returns a list of speakers that contains
  * all the information that is needed to render 'views/speakers/index.pug'
  */
  async getList() {
    throw new Error('Not implemented');
  }

  /**
   * Todo: Implement a function that returns a single speaker to render 'views/speakers/detail.pug'
   */
  async getSpeaker(shortname) {
    throw new Error('Not implemented');
  }

  /**
  * Todo: Implement a function that returns only the artwork
  * for a single speaker so that it can be shown in the sidebar of 'views/speakers/detail.pug'.
  */
  async getArtworkForSpeaker(shortname) {
    throw new Error('Not implemented');
  }

  async getNames() {
    const data = await this.getData();

    return data.map(speaker => ({ name: speaker.name, shortname: speaker.shortname }));
  }

  async getListShort() {
    const data = await this.getData();
    return data.map(speaker => ({
      name: speaker.name,
      shortname: speaker.shortname,
      title: speaker.title,
    }));
  }

  async getAllArtwork() {
    const data = await this.getData();
    return data.reduce((acc, elm) => {
      if (elm.artwork) {
        return [...acc, ...elm.artwork];
      }
      return acc;
    }, []);
  }

  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    return JSON.parse(data).speakers;
  }
}

module.exports = SpeakersService;
