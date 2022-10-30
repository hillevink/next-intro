const list = [
  {
    type: 'Filmer',
    movies: [
      {
        movie: 'The Night of the Hunter'
      }, 
      {
        movie: 'The Third Man'
      },
      {
        movie: 'Aparajito'
      },
      {
        movie: 'Woodstock'
      },
      {
        movie: 'Stand by Me'
      },
      {
        movie: 'Bob le Flambeur'
      },
      {
        movie: 'Reservoir Dogs'
      },
      {
        movie: 'Delicatessen'
      },
      {
        movie: 'Persona'
      },
      {
        movie: 'The Great Dictator'
      },
      {
        movie: 'Dr. Mabus der Spieler'
      },
      {
        movie: 'The Deer Hunter'
      },
      {
        movie: 'Its a Wonderful Life'
      }
    ]
  }
]

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body
    console.log(req.body)
    if (!data?.type) {
      res
        .status(400)
        .json({success: false, error: 'Fyll ut all nødvendig data'})
    } else {
      list.push(data)
      res.status(201).json({success: true, data: list})
    }
  } else if (req.method === 'PUT') {
    res.status(405).end()
  } else {
    res.status(200).json({success: true, data: list})
  }
}