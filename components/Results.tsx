import Thumbnail from './Thumbnail'

function Results({ results } : { results : [Result]  }) {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
        {
          results.map((result) => (
            <Thumbnail result={result} />
          ))
        }
    </div>
  )
}

export default Results