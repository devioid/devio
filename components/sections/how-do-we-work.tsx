import { SectionHeader } from '@components/section-header'
import { TimelineCard } from '@components/timeline-card'
import { useIsMobile } from 'hooks'

export const HowDoWeWork = () => {
  const isMobile = useIsMobile()
  const timelines = [
    {
      no: 1,
      position: 'right',
      title: 'Planning and feasibility study',
      body: 'The development begin with planning and study the current problems. Discussion with client is really important in this process.',
      speed: 12,
    },
    {
      no: 2,
      position: 'center',
      title: 'Define system requirements',
      body: 'After study the current problem, we started to define system requirements. It can be a features or any process to solve the problem.',
      speed: -12,
    },
    {
      no: 3,
      position: 'center',
      title: 'Design and prototyping',
      body: 'In this process, we provide client with initial design of the application. We will use high fidelity design and prototyping.',
      speed: 12,
    },
    {
      no: 4,
      position: 'center',
      title: 'Implementation',
      body: 'All the defined problems, system requirements and design then being implemented to the programming language and full system.',
      speed: -12,
    },
    {
      no: 5,
      position: 'center',
      title: 'Testing',
      body: 'To ensure the program is working properly, we perform system testing with client and internal development team.',
      speed: 12,
    },
    {
      no: 6,
      position: 'left',
      title: 'Deployment',
      body: 'If there is no problem found and the system already fully implemented as the design / prototyping process, it will be deployed on the desired environment.',
      speed: -12,
    },
  ]

  return (
    <section
      id="how-do-we-work"
      className="mt-16 w-full bg-slate-100 pt-10 pb-16 md:pt-0"
      data-scroll-section-id="how-do-we-work"
      data-scroll-section
    >
      {isMobile ? (
        <div
          data-scroll
          data-scroll-sticky
          data-scroll-target="#how-do-we-work"
        >
          <SectionHeader
            title="How do we work?"
            description="We work based on Software Development Life Cycle (SDLC). By using this framework, we can minimize the amount of error during the development because we ensure the client know the product they want."
          />
        </div>
      ) : (
        <SectionHeader
          title="How do we work?"
          description="We work based on Software Development Life Cycle (SDLC). By using this framework, we can minimize the amount of error during the development because we ensure the client know the product they want."
        />
      )}

      <div className="grid grid-cols-1 gap-y-16 text-primary md:h-auto md:grid-cols-3 md:gap-y-24">
        {timelines.map((tl, index) => (
          <TimelineCard
            no={tl.no}
            position={tl.position}
            title={tl.title}
            body={tl.body}
            speed={tl.speed}
            key={index}
          />
        ))}
      </div>
    </section>
  )
}
