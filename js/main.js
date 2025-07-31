
function game(player_hand_1) {
    let jibun;
    let aite;
    let janken = ["グー", "チョキ", "パー",];
    let player_hand_2 = Math.floor(Math.random() * 3);
    let img = document.getElementById("image")
    let resultArray = ["あいこです", "あなたの負けです", "あなたの勝ちです"];



    if (player_hand_1 === 0) {
        jibun = "あなた：グー";
    } else if (player_hand_1 === 1) {
        jibun = "あなた：チョキ";
    } else if (player_hand_1 === 2) {
        jibun = "あなた：パー";
    } else {
        jibun = "指定されていない引数です";
    }
    console.log(jibun);


    const imageElement = document.getElementById("te");

    const p_hello = document.querySelector("#hello");
    p_hello.textContent = jibun;

    if (player_hand_2 === 0) {
        aite = "あいて：グー";
        imageElement.src = "img/janken_gu.png";
    } else if (player_hand_2 === 1) {
        aite = "あいて：チョキ";
        imageElement = "img/janken_choki.png";
    } else if (player_hand_2 === 2) {
        aite = "あいて：パー";
        imageElement = "img/janken_pa.png";
    } else {
        aite = "指定されていない引数です";
    }



    const p_aa = document.querySelector("#aa");
    p_aa.textContent = aite;


    if (player_hand_1 === 0) {
        if (player_hand_2 === 0) {
            a = "あいこ";
        } else if (player_hand_2 === 1) {
            a = "あなたの勝ち";
        } else if (player_hand_2 === 2) {
            a = "あなたの負け";
        }

    } else if (player_hand_1 === 1) {
        if (player_hand_2 === 0) {
            a = "あなたの負け";
        } else if (player_hand_2 === 1) {
            a = "あいこ";
        } else if (player_hand_2 === 2) {
            a = "あなたの勝ち";
        }
    } else if (player_hand_1 === 2) {
        if (player_hand_2 === 0) {
            a = "あなたの勝ち";
        } else if (player_hand_2 === 1) {
            a = "あなたの負け";
        } else if (player_hand_2 === 2) {
            a = "あいこ";
        }
    } else {
        console.log("想定していないデータが渡されました.");
    }
    console.log(a);
    const p_k = document.querySelector("#k");
    p_k.textContent = a;

    return;

}





