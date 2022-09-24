import { createElement } from 'react';

let components = {};
let typeCheck = ['[object Module]', '[object Object]'];

export const pushComponentModules = (componentList) => {
  const type = Object.prototype.toLocaleString.call(componentList);

  // componentList를 정해진 타입으로 입력하지 않았을 경우
  if (!typeCheck.includes(type)) {
    throw new Error(`You have to put the components like object type as argument.`);
  }

  // 기존 components와 인수 componentList 사이에 중복된 key값이 있을 경우
  // Object.keys(componentList).forEach(componentName => {
  //   if (components[componentName]) {
  //     throw new Error(`${componentName}(componentName) is already exist. You must be change this component name.`);
  //   }
  // })

  components = { ...components, ...componentList };
}

export const getComponent = (type, props = {}, children = []) => {
  if (type) {
    return createElement(components[type], props, children);
  } else {
    return <div>오류 발생</div>
  }
}