// 웹팩은 큰 4개의 설정 있음 나머지는 부가적인 설정임.
// 스크립트가 너무 많아져서 하나로 합쳐버릴려고 쓴다.
// 여기서 entry에 app은 뭐냐면 나중에 하나로 합쳐질 파일의 이름
// 그걸 output에 파일명으로 설정해줌
// node 환경에서는 require 쓰고 vue에선 import해줌.

// webpack은 node환경이기 때문에 require
// main은 vue환경이니까 import
const path = require('path'); // node가 만들어준 스크립트
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development', // product, none 모드 설정
    devtool: 'eval', // 개발버전엔 eval <속도가 좀 빠름.// 상용 hidden-source-map 많이 씀
    entry: {
        app: path.join(__dirname, `main.js`),
    },

    // 표현식 처리 해줌.
    resolve: {
        extensions: ['.js', '.vue'], //
                    // main.js 에서 import game.vue -> import game으로 해도 알게됨.
    },
    // module 이 webpack의 핵심
    // 안에 roles
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader', //use: 'vue-loader' 같음.
                // package.json vue 버전과 vue-tempalte-compiler와 버전이 동일해야험
            }
        ]
    },
    // 모듈 들이 후처리 하기 전 가공 해줌.
    plugins: [
        new VueLoaderPlugin(),
    ],
    output: {
        //filename: 'app.js' 아래와 같음. [name]으로 해놓으면 entry app이름이 들어가.
        filename: '[name].js',
        // path.join(__dirname) 현재 경로는 이렇게 알수있다.
        path: path.join(__dirname, `dist`)
    }
};