import { isEmpty } from '~/utils'
import { getFile } from './helpers'

/**
 * Get pure movable tiles (without any filter)
 * @param  {Array} movable
 * @return {Array}
 */
function getPureMovable (movable) {
  return movable.reduce((acc, mvs) => {
    const [fileNum, rankNum] = mvs
    const nextFile = getFile(fileNum)
    const nextTile = `${nextFile}${rankNum}`
    const isOutside = isEmpty(nextFile) || rankNum <= 0

    return isOutside ? acc : [...acc, nextTile]
  }, [])
}

export default getPureMovable
