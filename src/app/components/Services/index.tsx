import { ServiceCard } from "./ServicesCard"

export const Services = () => {
    const data = [
        {
            title: 'Frontend',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat pulvinar risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat pulvinar risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat pulvinar risus'
        },
        {
            title: 'Backend',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat pulvinar risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat pulvinar risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat pulvinar risus'
        },
        {
            title: 'Fullstack',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat pulvinar risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat pulvinar risus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras placerat pulvinar risus'
        },
    ]
    return(
        <div className="relative container mx-auto min-h-screen p-5 space-y-24">
            <h2 className="text-center font-light">WHAT CAN I <span>PROVIDE</span></h2>
            <div className="grid grid-cols-3 gap-5 w-2/3 mx-auto">
                {
                    data.map((item, i) => (
                        <ServiceCard title={item.title} desc={item.desc} key={i}/>
                    ))
                }
            </div>
        </div>
    )
}