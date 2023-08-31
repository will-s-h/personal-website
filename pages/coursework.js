import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Coursework</title>
      </Head>

      <div class="font-sans font-extrabold text-6xl sm:text-6xl md:text-7xl pb-10 tracking-tight 
      text-black">
        Coursework
      </div>

      <div class="group w-full h-full p-5 border-8 border-red">
        <div class="font-sans font-bold text-3xl text-red-500"> Stanford (2022-present)</div>
        <div class="font-sans font-bold text-xl text-red-600 pb-5">GPA: 4.13 / 4.0</div>
        <ul class="font-sans font-bold text-lg text-red-300 pb-5">
            <li>CS 103: Mathematical Foundations of Computing</li>
            <li>CS 106B: Programming Abstractions (Data Structures and Algorithms)</li>
            <li>CS 107: Computer Organization and Systems</li>
            <li>CS 161: Design and Analysis of Algorithms</li>
            <li>MATH 51: Linear Algebra, Multivariable Calculus, and Modern Applications</li>
            <li>MATH 193: Polya Problem Solving Seminar</li>
            <li>CS 168: The Modern Algorithmic Toolbox</li>
            <li>CS 198: Teaching Computer Science</li>
            <li>CS 229: Machine Learning</li>
        </ul>
        <div class="font-sans font-bold text-lg text-gray-400">(in progress)</div>
        <ul class="font-sans font-bold text-lg text-gray-400">
            <li>CS 111: Operating Systems Principles</li>
            <li>CS 224W: Machine Learning with Graphs</li>
            <li>MATH 53: Differential Equations with Linear Algebra, Fourier Methods, and Modern Applications</li>
        </ul>
      </div>

      <div class="pb-5"></div>

      <div class="group w-full h-full p-5 border-8 border-blue">
        <div class="font-sans font-bold text-3xl text-blue-500"> West Valley College (Dual Enrollment, 2021-2022)</div>
        <div class="font-sans font-bold text-xl text-blue-700 pb-5">GPA: 4.0 / 4.0</div>
        <ul class="font-sans font-bold text-lg text-blue-300">
            <li>MATH 004A: Intermediate Calculus (Multivariable Calculus)</li>
            <li>MATH 004C: Linear Algebra</li>
        </ul>
      </div>
    </Layout>
  );
}