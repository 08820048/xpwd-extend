// // 移除旧的菜单项（如果存在），确保每次加载插件时菜单结构是最新的
// chrome.contextMenus.removeAll(function() {
//     // 创建主菜单项
//     chrome.contextMenus.create({
//         id: 'xpwdParentMenu',
//         title: 'xpwd',
//         contexts: ['all']
//     });

//     // 创建"生成密码"子菜单项
//     chrome.contextMenus.create({
//         id: 'generatePwd',
//         parentId: 'xpwdParentMenu',
//         title: '生成密码',
//         contexts: ['all']
//     });
// });

// // 添加点击事件监听器
// chrome.contextMenus.onClicked.addListener(function(info, tab) {
//     switch (info.menuItemId) {
//         case 'generatePwd':
//             //generateMediumStrengthPassword();
//             //test();
//             let pwd = generateComplexPassword();
//             console.log("pwd:",pwd);
//             break;
//         case 'checkStrength':
//             console.log('强度检测 菜单项被点击了，信息:', info, ', 当前标签页:', tab);
//             // 实现密码强度检测的逻辑
//             break;
//         default:
//             console.log(`未知菜单项ID：${info.menuItemId}`);
//     }
// });


// function generateComplexPassword() {
//     const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=';
//     let password = '';
//     for (let i = 0; i < 12; i++) {
//         const randomIndex = Math.floor(Math.random() * chars.length);
//         password += chars[randomIndex];
//     }
//     // console.log("pwd:===>",password);
//     // let pwd = ''
//     // pwd = navigator.clipboard.writeText("你好121313");
//     // console.log("nron:",pwd);
// }



