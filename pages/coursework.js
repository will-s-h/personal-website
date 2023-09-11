import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Coursework</title>
      </Head>

      <div className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl pb-3 tracking-tight 
      text-black dark:text-white">
        Coursework
      </div>

      <div className="group w-full h-full">
        <div className="font-sans font-semibold text-2xl"> Stanford (2022-present)</div>
        <div className="font-sans font-semibold text-xl pb-5">GPA: 4.13 / 4.0</div>
        <ul className="font-sans font-light text-lg pb-5">
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
        <div className="font-sans font-light text-lg">(in progress)</div>
        <ul className="font-sans font-light text-lg">
            <li>CS 111: Operating Systems Principles</li>
            <li>CS 224W: Machine Learning with Graphs</li>
            <li>CS 259Q: Quantum Computing</li>
            <li>MATH 53: Differential Equations with Linear Algebra, Fourier Methods, and Modern Applications</li>
        </ul>
      </div>

      <div className="pb-5"></div>

      <div className="group w-full h-full">
        <div className="font-sans font-semibold text-2xl"> West Valley College (Dual Enrollment, 2021-2022)</div>
        <div className="font-sans font-semibold text-xl pb-5">GPA: 4.0 / 4.0</div>
        <ul className="font-sans font-light text-lg">
            <li>MATH 004A: Intermediate Calculus (Multivariable Calculus)</li>
            <li>MATH 004C: Linear Algebra</li>
        </ul>
      </div>
    </Layout>
  );
}