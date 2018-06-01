module.exports ={
  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost:5432/movie_crud'
  },
  production:{
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
