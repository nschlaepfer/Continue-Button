const button = document.createElement('button');
button.textContent = 'Continue';
button.id = 'request-code-btn';
button.style.padding = '2px';
button.style.border = 'none';
button.style.borderRadius = '20px';
button.style.color = '#fff';
button.style.backgroundColor = '#6e6e80';
button.style.fontSize = '10px';
button.style.fontWeight = '150';
button.style.marginBottom = '10px';
button.style.width = '80px';

button.addEventListener('click', () => {
  const textarea = document.querySelector('textarea[tabindex="0"]');
  const text = textarea.value.trim();

  if (text === '') {
    textarea.value = 'Continue';
  }

  const clickElement = document.querySelector('.absolute.p-1.rounded-md.text-gray-500.bottom-1.5.md\\:bottom-2.5.hover\\:bg-gray-100.enabled\\:dark\\:hover\\:text-gray-400.dark\\:hover\\:bg-gray-900.disabled\\:hover\\:bg-transparent.dark\\:disabled\\:hover\\:bg-transparent.right-1.md\\:right-2.disabled\\:opacity-40');
  clickElement.click();

  const targetElement = document.querySelector('.flex.flex-col.items-end.px-2.pb-2');
  const targetTextarea = targetElement.querySelector('textarea');
  targetTextarea.value = textarea.value;

  const select = document.querySelector('.form-control.py-1');
  const option = document.createElement('option');
  option.value = textarea.value;
  select.appendChild(option);

  textarea.value = '';
});

const insertBeforeElement = document.querySelector('.flex.flex-col.w-full.py-2.flex-grow.md\\:py-3.md\\:pl-4.relative.border.border-black\\/10.bg-white.dark\\:border-gray-900\\/50');
insertBeforeElement.parentElement.insertBefore(button, insertBeforeElement);
