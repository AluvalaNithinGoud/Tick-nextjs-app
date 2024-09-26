// pages/index.js
import DatePicker from '../components/DatePicker/DatePicker';
import { DateProvider } from '../components/DatePicker/DateContext';

export default function Home() {
  return (
    <DateProvider>
      <div className="container mx-auto p-4">
        <DatePicker />
      </div>
    </DateProvider>
  );
}
