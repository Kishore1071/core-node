import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);

const dirname = path.dirname(filename)

const basename = path.basename(dirname)

const extension = path.extname(filename)

const parsed = path.parse(filename)

const format = path.format(parsed)

const absolute_path = path.isAbsolute(filename)