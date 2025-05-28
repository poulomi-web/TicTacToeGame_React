export default function Log({ logDetails }) {
  if (logDetails)
    return (
      <ol id="log">
        {logDetails.map((cellDetail, cellDetailIndex) => (
          <li key={cellDetailIndex}>
            Player {cellDetail.player} hit at {cellDetail.pos.row},
            {cellDetail.pos.col} coords
          </li>
        ))}
      </ol>
    );
}
