import React from 'react';
import { GraduationCap, Star, Award, TrendingUp, Search, User, FileText, Landmark, CreditCard, Home } from 'lucide-react';

export const Icons = {
  university: (props) => <GraduationCap {...props} />,
  success: (props) => <Star {...props} />,
  scholarship: (props) => <Award {...props} />,
  pricing: (props) => <TrendingUp {...props} />,
  search: (props) => <Search {...props} />,
  user: (props) => <User {...props} />,
  document: (props) => <FileText {...props} />,
  visa: (props) => <Landmark {...props} />,
  loan: (props) => <CreditCard {...props} />,
  accommodation: (props) => <Home {...props} />
};

export default Icons;
