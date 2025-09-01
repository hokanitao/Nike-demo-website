import ServiceCard from "../components/ServiceCard.jsx"
import { services } from "../constants"

const Services = () => {
  return (
    <section className="nax-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </section>
  )
}

export default Services