const Missions = ({ heading }: { heading: string }) => {
  if (heading) {
    return <h1>{heading}</h1>
  }
  return <div>Missions Page</div>
}
export default Missions
