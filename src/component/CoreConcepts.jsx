import CoreConcept from "../component/CoreConcept.jsx";
import { CORE_CONCEPTS } from "../data.js";

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concept</h2>
      <ul>
        {CORE_CONCEPTS.map((CoreConceptitem) => (
          <CoreConcept {...CoreConceptitem} />
        ))}
      </ul>
    </section>
  );
}
