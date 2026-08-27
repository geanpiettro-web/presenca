type EventCardProps = {
    titulo?:string
    data?:string
    local?:string

}
function EventCard( {
 titulo = 'Evento sem título',
 data = 'Data não informada',
 local = 'Local não informado',
}: EventCardProps){
    return(
      <article className="event-card">
            <span>Proximo evento</span>

            <h3>{titulo}</h3>

            <p>{data}</p>
            <p>{local}</p>

            <button type="button">Ver evento</button>

      </article>
    )
}


export default EventCard