import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import BugIcon from '@mui/icons-material/BugReport';
import CodeIcon from '@mui/icons-material/Code';
import LegacyIcon from '@mui/icons-material/SettingsApplications';
import LearningIcon from '@mui/icons-material/School';
import OptimizationIcon from '@mui/icons-material/Tune';
import TeamIcon from '@mui/icons-material/People';
import FreelancerIcon from '@mui/icons-material/Work';
import QualityIcon from '@mui/icons-material/Assessment';
import CollaborationIcon from '@mui/icons-material/Group';
import { useCases } from '../../data/usecasesData';


const icons = [<BugIcon />,<LegacyIcon/>,<CodeIcon/>,<LearningIcon/>,<OptimizationIcon/>,<TeamIcon/>,<FreelancerIcon/>,<CollaborationIcon/>,<QualityIcon/>]
const Usecases = ()=> {
  return (
    <Timeline position="alternate" sx={{py:8}}>
      {
        useCases.map((usecase,index)=>(
          <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0',fontWeight:'bold',letterSpacing:'1px' }}
            align="right"
            variant="subtitle1"
            color="primary.dark"
          >
            Usecase {index+1}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: 'primary.main' }}/>
            <TimelineDot color='primary'>
              {icons[index]}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2 }}>
            <Typography component="span" sx={{letterSpacing:'1px',typography:{xs:'caption',md:'body1'}}}>
              {usecase.title}
            </Typography>
          </TimelineContent>
        </TimelineItem>
        ))
      }
      
       

      {/* <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          10:00 am
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Code
          </Typography>
          <Typography>Because it&apos;s awesome!</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Sleep
          </Typography>
          <Typography>Because you need rest</Typography>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Repeat
          </Typography>
          <Typography>Because this is the life you love!</Typography>
        </TimelineContent>
      </TimelineItem> */}
    </Timeline>
  );
}

export default Usecases