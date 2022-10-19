import { SectionContentHalf } from '@components/section-content-half'
import { SectionHeader } from '@components/section-header'
import { Badge } from '@components/badge'
import academic from '@assets/img/academic.webp'
import accounting from '@assets/img/accounting.webp'

export const Showcase = () => {
  return (
    <section
      id="works"
      className="h-auto w-full bg-transparent"
      data-scroll-section-id="works"
      data-scroll-section
    >
      <SectionHeader
        title="Showcase"
        description="Here are some projects that we have working on"
      />

      <SectionContentHalf
        header="Accounting Information System"
        imageSrc={accounting}
        description="Successfully migrate from the old method of financial recording (using a spreadsheet) to the new system. The new application has many features, such as a collaboration feature to get a record from another stakeholder, a live report, and a dashboard for financial monitoring."
        fullscreen={true}
        reverse={true}
      >
        <Badge>Laravel</Badge>
        <Badge>VueJS</Badge>
      </SectionContentHalf>

      <SectionContentHalf
        header="Academic Information System"
        imageSrc={academic}
        description="Migrate from the older and offline system to the new online environment. We develop a whole new application with additional features, such as tuition tracking system. We offer scalability to ensure the application can be modified and extend in the future, for example making a student's portal application."
        fullscreen={true}
        reverse={false}
      >
        <Badge>Laravel</Badge>
        <Badge>VueJS</Badge>
      </SectionContentHalf>
    </section>
  )
}
