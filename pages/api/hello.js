// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function sayHello(req, res) {
  console.log("Hello there.")
  res.status(200).json({ name: 'John Doe' })
}
