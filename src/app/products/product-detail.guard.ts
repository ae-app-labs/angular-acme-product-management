import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';

export const productDetailGuard: CanActivateFn = (route, state) => {
  const id = Number( route.paramMap.get('id') )
  if ( isNaN(id) || id < 1) {
    alert('Invalid product Id')
    return false;
  }
  return true;
};
