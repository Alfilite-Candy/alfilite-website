const textElement = document.getElementById('text');

// 要显示的文本内容
const sentences = [
    "让你的生命在时间边缘轻轻起舞",
    "就像露珠在叶尖上那样自由自在"
];

let currentSentenceIndex = 0; // 当前句子的索引
let currentCharIndex = 0; // 当前字符的索引
let isDeleting = false; // 是否正在删除
let typingSpeed = 120; // 打字速度
let deletingSpeed = 40; // 删除速度

function typewriterEffect() {
    const currentSentence = sentences[currentSentenceIndex];

    if (!isDeleting) {
        // 正在打字
        textElement.textContent = currentSentence.substring(0, currentCharIndex + 1);
        currentCharIndex++;

        // 如果整句话已经打完，等待一段时间再开始删除
        if (currentCharIndex === currentSentence.length) {
            isDeleting = true;
            setTimeout(typewriterEffect, 1000); // 停留 1 秒
            return;
        }
    } else {
        // 正在删除
        textElement.textContent = currentSentence.substring(0, currentCharIndex - 1);
        currentCharIndex--;

        // 如果整个句子都删除完了，准备下一个句子
        if (currentCharIndex === 0) {
            isDeleting = false;
            currentSentenceIndex = (currentSentenceIndex + 1) % sentences.length; // 循环显示句子
        }
    }

    // 根据状态选择打字或删除的速度
    const delay = isDeleting ? deletingSpeed : typingSpeed;
    setTimeout(typewriterEffect, delay);
}

// 启动打字机效果
typewriterEffect();
