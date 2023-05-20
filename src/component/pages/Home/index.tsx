import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../../redux/hooks'

import { decrement, increment } from './counterSlice';
import styles from './index.module.scss'

export default function Counter() {
  const count = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h1 className={styles.header}>
        Hello World!
      </h1>
      <a className={styles.ngok} href="/about">About</a>
    </div>
  )
}

