(
    async function(){
        /** @param {number} milliseconds */
        async function delay (milliseconds) {
            return new Promise( resolve => {
                setTimeout(resolve, milliseconds)
            })
        }

        /** 执行任务 a 获取结果，返回是否符合要求 */
        async function task_a () {
            await delay(2000)
            const valid = Math.random() > 0.5
            console.log('a', valid ? '满足要求' : '不满足要求')
            return valid
        }

        /** 执行任务 b 获取结果，返回是否符合要求 */
        async function task_b () {
            await delay(5000)
            const valid = Math.random() > 0.5
            console.log('b', valid ? '满足要求' : '不满足要求')
            return valid
        }

        /** 并行开始两个任务，task_a 和 task_b 任意一个完成且满足要求后立即 return true, 且不等待另一个任务（短路）
         如果第一个完成的任务不满足要求，需要看第二个任务是否满足要求，只有都不满足才返回 false
         */
        function warp(fn) {
            return new Promise((resolve, reject) => {
                fn().then(value => {
                    if(value) resolve(value)
                    else reject(value)
                })
            })
        }
        async function a_or_b () {
            // todo: 请实现该函数
            return new Promise((resolve, reject)=>{
                let cnt = 2
                warp(task_a).then(()=> {
                    resolve(true)
                }, ()=>{
                    cnt--
                    if(!cnt) reject(false)
                })
                warp(task_b).then(()=>resolve(true), ()=>{
                    cnt--
                    if(!cnt) reject(false)
                })
            }).then(value => value, reason => reason)
        }


        console.time()
        if (await a_or_b())
            console.log('task_a 或 task_b 满足要求')
        else
            console.log('task_a 且 task_b 都不满足要求')
        console.timeEnd()

// 对于上面给的 task_a, 和 task_b 例子：
// 如果 task_a 满足要求，  a_or_b 应该耗时 2s
// 如果 task_a 不满足要求，a_or_b 应该耗时 5s

// 实际情况中 task_a, task_b 耗时不确定
    }
)()