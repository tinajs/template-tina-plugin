import path from 'path'
import test from 'ava'
import sao from 'sao'

const template = path.resolve(__dirname, '..')

test('defaults', async t => {
  const stream = await sao.mockPrompt(template, {
    name: 'tina-best-plugin',
    description: 'the best plugin of Tina.js',
    author: 'yelo',
    email: 'zhihuzeye@gmail.com',
    github: 'imyelo/tina-best-plugin',
    githubOwner: 'imyelo',
    npm: '@yelo/tina-best-plugin',
  })
  t.snapshot(stream.fileList, 'generated files')

  stream.fileList.forEach((file) => {
    t.snapshot(stream.fileContents(file), `content of ${file}`)
  })
})
