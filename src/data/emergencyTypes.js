import { 
  ExclamationTriangleIcon, 
  FireIcon, 
  HeartIcon 
} from '../components/icons';

export const emergencyTypes = [
  {
    title: 'Natural Disasters',
    description: 'Immediate actions for earthquakes, floods, hurricanes',
    icon: ExclamationTriangleIcon,
    actions: [
      'Find safe shelter immediately',
      'Check local emergency broadcasts',
      'Contact emergency services if needed'
    ]
  },
  {
    title: 'Medical Emergency',
    description: 'First aid and medical assistance guidance',
    icon: HeartIcon,
    actions: [
      'Call emergency medical services',
      'Provide basic first aid if trained',
      'Stay with the affected person'
    ]
  },
  {
    title: 'Fire Safety',
    description: 'Critical fire emergency procedures',
    icon: FireIcon,
    actions: [
      'Evacuate immediately',
      'Call fire department',
      'Help others if safe to do so'
    ]
  }
];