import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PackageCard from './PackageCard';
import PropTypes from 'prop-types';

export default function AlternateTimeline({ packages }) {
    return (
        <Timeline position="alternate">
            {
                packages.map(pack => <TimelineItem key={pack.id}>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <PackageCard packageData={pack} />
                    </TimelineContent>
                </TimelineItem>)
            }
        </Timeline>
    );
}

AlternateTimeline.propTypes = {
    packages: PropTypes.array,
}