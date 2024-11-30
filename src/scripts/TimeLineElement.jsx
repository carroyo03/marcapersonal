import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../styles/TimeLineElement.css';

// Timeline element component

export default function TimelineElement({ title, subtitle, date, content }) {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work custom-border-bg"
            contentStyle={{ background: '#1a1a1a', color: 'white'}}
            contentArrowStyle={{ borderRight: '7px solid #1a1a1a' }}
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