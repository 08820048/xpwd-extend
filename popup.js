function showAlert(message, duration) {
  // 创建弹窗容器元素
  const alertContainer = document.createElement('div');
  alertContainer.className = 'alert-container';
  
  // 创建弹窗内容元素
  const alertContent = document.createElement('div');
  alertContent.className = 'alert-content';
  alertContent.textContent = message;

  // 将内容元素添加到弹窗容器中
  alertContainer.appendChild(alertContent);

  // 将弹窗容器添加到页面中
  document.body.appendChild(alertContainer);

  // 添加显示类以触发过渡动画
  setTimeout(() => {
    alertContainer.classList.add('show');
  }, 10); // 延迟一小段时间以确保动画生效

  // 自动关闭弹窗
  setTimeout(() => {
    document.body.removeChild(alertContainer);
  }, duration); // 通过参数设置关闭时间
}


showAlert("欢迎使用xpwd😊",2000)


function generatePassword() {
  const length = document.getElementById('length').value || 12;
  const strength = document.getElementById('strength').value || 'medium';

  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = lowercase.toUpperCase();
  const numbers = '0123456789';
  const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let chars = '';
  switch (strength) {
    case 'low':
      chars = lowercase + numbers;
      break;
    case 'medium':
      chars = lowercase + uppercase + numbers;
      break;
    case 'high':
      chars = lowercase + uppercase + numbers + specialChars;
      break;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  // 将密码显示在页面上
  const generatedPasswordElement = document.getElementById('generatedPassword');
  generatedPasswordElement.innerText = password;

  // 将密码复制到剪贴板
  navigator.clipboard.writeText(password);
  
  // 弹出提示
  showAlert("Password Copied!",6000);

  // 设置定时器，在一定时间后清除生成的密码
  setTimeout(() => {
    generatedPasswordElement.innerText = '';
  }, 10000); // 10秒后自动清除生成的密码
}


function checkStrength() {
  const password = document.getElementById('checkPassword').value;
  const strengthRegex = {
    weak: /^(?=.*[a-z])/,
    medium: /^(?=.*[a-z])(?=.*[A-Z])/,
    strong: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/,
  };
  
  let strengthLevel = 'weak';
  for (const level in strengthRegex) {
    if (strengthRegex[level].test(password)) {
      strengthLevel = level;
    }
  }
  
  const strengthWrapper = document.getElementById('strengthWrapper');
  const strengthProgressBar = document.getElementById('strengthProgressBar');
  
  // 重置过渡动画
  strengthProgressBar.style.transition = 'none';
  strengthProgressBar.className = ''; // 重置类名

  // 触发重绘以便重置过渡动画
  void strengthProgressBar.offsetWidth;

  // 设置过渡动画
  strengthProgressBar.style.transition = 'background 0.5s ease';
  
  // 添加密码强度级别的类名
  strengthProgressBar.classList.add(strengthLevel);

  // 动态添加图标
  if (!document.getElementById('strengthIcon')) {
    const strengthIcon = document.createElement('span');
    strengthIcon.id = 'strengthIcon';
    strengthIcon.textContent = '🛡️';
    strengthWrapper.insertBefore(strengthIcon, strengthProgressBar);
  }

  // 显示图标
  strengthWrapper.classList.add('show-icon');
}


document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('generateBtn').addEventListener('click', generatePassword);
  document.getElementById('checkStrengthBtn').addEventListener('click', checkStrength);
});


