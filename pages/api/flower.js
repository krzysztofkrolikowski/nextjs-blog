export default function flower(req, res) {
  res.status(200).json({flowers: [{id: 1, name: 'fikus'}, {id: 2, name: 'słonecznik'}]})
}
