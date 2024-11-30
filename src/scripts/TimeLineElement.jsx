import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function TimelineElement({ title, subtitle, date, content }) {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#383737', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid #383737' }}
            date={date}
            dateClassName="dateStyle"
            iconStyle={{ background: '#75bcff', color: '#000' }}
        >
            <h3 className="vertical-timeline-element-title" style={{ color: '#75bcff' }}>{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
            <p>{content}</p>
        </VerticalTimelineElement>
    );
}