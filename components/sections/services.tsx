import consultation from '@assets/img/consultation.webp'
import softwareDevelopment from '@assets/img/software-development.webp'
import { SectionHeader } from '@components/section-header'
import { SectionContentHalf } from '@components/section-content-half'

export const Services = () => {
  return (
    <section
      id="services"
      className="o-section h-auto w-full"
      data-scroll-section-id="services"
      data-scroll-section
    >
      <SectionHeader
        title="We provide various service for our client"
        description="Application is made base on client specification. Client can have their application running on the web, mobile (Android and iOS), or desktop."
      />

      <SectionContentHalf
        imageSrc={consultation}
        header="IT Consultation"
        description="We will become your IT consultant to solve your business problem using technology. This service is suitable for a client who want to implement technology in their business, but don't know where to start."
      />
      <SectionContentHalf
        imageSrc={softwareDevelopment}
        header="Software Development"
        description="Do you want to digitalize your product? Or want to develop internal application to monitor your income, employee, etc? This service is suitable for a client that has a unique business process in their company that cannot be solved using the commercial application. We will develop an app depend on your need."
        reverse={true}
      />
    </section>
  )
}
