
import {LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const subjectMarksData=[
  { "student_id": 1, "name": "Alice", "math": 85, "physics": 78, "chemistry": 92 },
  { "student_id": 2, "name": "Bob", "math": 78, "physics": 80, "chemistry": 85 },
  { "student_id": 3, "name": "Charlie", "math": 92, "physics": 88, "chemistry": 90 },
  { "student_id": 4, "name": "David", "math": 65, "physics": 70, "chemistry": 75 },
  { "student_id": 5, "name": "Emma", "math": 70, "physics": 75, "chemistry": 72 },
  { "student_id": 6, "name": "Frank", "math": 88, "physics": 82, "chemistry": 85 },
  { "student_id": 7, "name": "Grace", "math": 75, "physics": 78, "chemistry": 80 },
  { "student_id": 8, "name": "Henry", "math": 82, "physics": 85, "chemistry": 88 },
  { "student_id": 9, "name": "Ivy", "math": 90, "physics": 92, "chemistry": 94 },
  { "student_id": 10, "name": "Jack", "math": 79, "physics": 75, "chemistry": 78 }
]

    return (
        <LChart className='mt-10' width={500} height={500} data={subjectMarksData}>
            <XAxis dataKey="name"></XAxis>
            <YAxis></YAxis>
            <Line className='text-red-500' dataKey="math"></Line>
            <Line className='text-yellow-300' dataKey="physics"></Line>
            <Line className='text-purple-400' dataKey="chemistry"></Line>
        </LChart>
    );
};

export default LineChart;
