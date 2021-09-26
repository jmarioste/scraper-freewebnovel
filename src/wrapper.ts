// import axios from 'axios';
import axios from 'axios';
import cheerio from 'cheerio';

export async function load(url: string): Promise<cheerio.Root> {
  const response = await axios(url);
  const $ = cheerio.load(response.data);

  return $;
}
