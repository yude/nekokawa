import { Hono } from 'hono'
import { html } from 'hono/html'
import { cors } from 'hono/cors'

const app = new Hono()

app.use(cors())

app.get('/', async (c) => {
  return c.html(
    html`
    <!doctype html>
    <html lang="ja">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>ねこかわうおうお API</title>
        </head>
        <body>
            <h1>ねこかわうおうお API</h1>
            <ul>
                <li>
                    <code>/:count</code>
                    <br>
                    <code>count</code> should be number.
                    <br>
                    Expected result:
                    <code>
                {
                    "result": "うおわかおわかお"
                }
            </code>
                </li>
            </ul>
        </body>
    </html>
    `
  )
})

app.get("/:count", async (c) => {
    const count = parseInt(c.req.param("count"));

    const nekokawatab = [
      'ねこ', 'かわ', 'うお', 'うお',
      'ね', 'こ', 'か', 'わ', 'う', 'お',
    ];

    let result = "";

    for (let i = 0; i < count; i++) {
      let index = Math.floor(Math.random() * nekokawatab.length);
      result += nekokawatab[index];
    }
    
    return c.json({
      "result": result,
    })
  }
)

export default app
