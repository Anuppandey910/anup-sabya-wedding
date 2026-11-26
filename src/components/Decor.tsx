import { motion } from 'framer-motion';
export const GaneshMark=()=> <div className="ganesh" aria-label="Auspicious Ganesh emblem"><span>ॐ</span><i>श्री गणेशाय नमः</i></div>;
export const Ornament=()=> <div className="ornament" aria-hidden="true"><span>❦</span></div>;
export function Petals({count=18}:{count?:number}){return <div className="petals" aria-hidden="true">{Array.from({length:count},(_,i)=><i key={i} style={{'--i':i,'--x':`${(i*47)%100}%`,'--d':`${10+(i%7)*2}s`,'--delay':`${-(i%10)}s`} as React.CSSProperties}/>)}</div>}
export function Lanterns(){return <div className="lantern-row" aria-hidden="true"><motion.div animate={{rotate:[-2,2,-2]}} transition={{duration:5,repeat:Infinity}}>✦</motion.div><motion.div animate={{rotate:[2,-2,2]}} transition={{duration:6,repeat:Infinity}}>✦</motion.div></div>}
export const FloralCorners=()=> <><div className="floral corner tl">❀</div><div className="floral corner tr">❀</div><div className="floral corner bl">❀</div><div className="floral corner br">❀</div></>;
