import Item from "./Item";

export default function PackingList() {
    return (
      <section>
        <h1>Packing List de Sally Ride</h1>
        <ul>
          <Item 
            isPacked={true} 
            name="Traje espacial"
          />
          <Item 
            isPacked={true} 
            name="Capacete com folha dourada"
          />
          <Item 
            isPacked={false} 
            name="Foto de Tam"
          />
        </ul>
      </section>
    );
  }