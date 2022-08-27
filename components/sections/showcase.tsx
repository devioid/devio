

import { SectionContentHalf } from "@components/section-content-half"
import { SectionHeader } from "@components/section-header"
import { Badge } from "@components/badge"
import academic from "@assets/img/academic.webp"
import accounting from "@assets/img/accounting.webp"

export const Showcase = () => {
  return (
    <section className="bg-transparent w-full h-auto" data-scroll-section>
      <SectionHeader
        title="Showcase"
        description="Here are some projects that we have working on"/>

      <SectionContentHalf
        header="Accounting Information System"
        imageSrc={accounting}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur ultricies fermentum. Praesent nec vulputate urna. Maecenas dolor libero, commodo et quam quis, ullamcorper auctor risus. "
        fullscreen={true}
        reverse={true}
        >
          <Badge>Laravel</Badge>
          <Badge>VueJS</Badge>
        </SectionContentHalf>


      <SectionContentHalf
        header="Academic Information System"
        imageSrc={academic}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam efficitur ultricies fermentum. Praesent nec vulputate urna. Maecenas dolor libero, commodo et quam quis, ullamcorper auctor risus. "
        fullscreen={true}
        reverse={false}
        >
          <Badge>Laravel</Badge>
          <Badge>VueJS</Badge>
        </SectionContentHalf>
    </section>
  )
}
