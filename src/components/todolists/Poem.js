import { poem } from "../datas/data";

export default function Poem() {
    return (
      <article>
        {poem.lines.map((line, index) => (
          <div key={index}>
            <p>{line}</p>
            {index < poem.lines.length - 1 && <hr />}
          </div>
        ))}
      </article>
    );
  }