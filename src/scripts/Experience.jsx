import '../styles/Experience.css';
import { VerticalTimeline}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineElement from './TimeLineElement';

// This is the Experience section

export default function Experience() {
    return(
        <div id="Experience" className="rounded-3 border border-5 custom-border-bg p-4">
            <section>
                <h3 className="title">Working Experience</h3>
                <VerticalTimeline role="list">
                    <TimelineElement
                        title="Software and AI Engineering Intern"
                        subtitle="KPMG"
                        date="Jun 2024 - Present"
                        content="Developing a pension simulation tool for KPMG's clients using Reflex (Python framework). Also, I'm working with Alteryx, Azure PWA and Blue Prism."
                    />
                    <TimelineElement
                        title="Programming Private Tuition"
                        subtitle="Self-employed"
                        date="2022 - 2024"
                        content="Teaching C/C++ and Java OOP to BSc Computer Science students."
                    />
                </VerticalTimeline>
            </section>
        </div>
    );
}