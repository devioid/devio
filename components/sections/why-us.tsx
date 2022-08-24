
import { SectionContentHalfGraphic } from "@components/section-content-half-graphic"
import { SectionHeader } from "@components/section-header"
import experienceScene from "@assets/img/experience-scene.png"
import clientScene from "@assets/img/client-scene.png"
import { Badge } from "@components/badge"


export const WhyUs = () => {

  return (
    <section className="w-full h-auto" data-scroll-section>
      <SectionHeader
        title="Why choosing us?"
        description=""
        />


      <SectionContentHalfGraphic
        imageSrc={experienceScene}
        header="Various experiences building application for over 2 years."
        description="We have worked on various projects entrusted by our clients.  Started from accounting application and academic administration system."
      />
      <SectionContentHalfGraphic
        reverse={true}
        imageSrc={clientScene}
        header="We include our clients to participate on the development process"
        description="Application that we create is 100% based on client requirements. On the analysis and design process, we gather feedback from clients before it implements into the code. With this method, we minimize error and revision after the development process because client has given their feedback on the first development stage!"
      >
      </SectionContentHalfGraphic>
    </section>
  )
}

