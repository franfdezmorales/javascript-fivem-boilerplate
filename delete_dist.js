import { readdirSync, rmSync } from 'fs'

const DIR_NAME = './dist';

(function () {
    const files = readdirSync(DIR_NAME, {withFileTypes: true})
    for (let i = 0; i < files.length; i++) {
        rmSync(`${DIR_NAME}/${files[i].name}`, {recursive: true, force: true})
    }
})();
